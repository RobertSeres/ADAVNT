"use client";

import React, { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { BlogPost } from "@/lib/blog";
import { BlogCard } from "./BlogCard";

export function BlogSearch({ posts }: { posts: BlogPost[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    
    const query = searchQuery.toLowerCase().trim();
    return posts.filter(post => 
      post.title.toLowerCase().includes(query) || 
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    ).sort((a, b) => {
      // Very simple relevance sort: title matches first
      const aTitleMatch = a.title.toLowerCase().includes(query);
      const bTitleMatch = b.title.toLowerCase().includes(query);
      if (aTitleMatch && !bTitleMatch) return -1;
      if (!aTitleMatch && bTitleMatch) return 1;
      return 0;
    });
  }, [posts, searchQuery]);

  return (
    <div className="w-full">
      {/* Label and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
        <div>
          <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4">
            Archive / 2026 Q1
          </span>
          <p className="text-zinc-500 text-sm font-light lowercase">
            {filteredPosts.length} találat a tudástárban
          </p>
        </div>

        <div className="relative group max-w-md w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-hover:text-white transition-colors w-4 h-4" />
          <input
            type="text"
            placeholder="keress a témák között..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black border border-white/10 py-4 pl-12 pr-12 text-sm text-white focus:outline-none focus:border-white transition-all lowercase placeholder:text-zinc-700"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white p-1"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Blog Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border border-dashed border-white/10">
          <p className="text-zinc-500 lowercase font-light">nincs találat a következőre: "{searchQuery}"</p>
          <button 
            onClick={() => setSearchQuery("")}
            className="mt-4 text-white text-[10px] uppercase tracking-widest font-bold hover:underline"
          >
            Összes blog mutatása
          </button>
        </div>
      )}
    </div>
  );
}
