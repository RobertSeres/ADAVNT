"use client";

import React from "react";
import Link from "next/link";
import Grainient from "./Grainient";
import { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="group relative flex flex-col border border-white/10 p-10 overflow-hidden bg-black transition-all duration-500"
    >
      {/* Grainient Background on Hover */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out">
        <Grainient
          color1={post.colors[0]}
          color2={post.colors[1]}
          color3={post.colors[2]}
          timeSpeed={0.2}
          zoom={0.9}
          noiseScale={2.5}
          grainAmount={0.12}
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />
      </div>

      {/* Decorative Scanner line */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <div className="w-full h-px bg-white/10 group-hover:bg-white/40 transform -translate-y-full group-hover:translate-y-[500px] transition-transform duration-[2s] ease-in-out" />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-center mb-10 translate-y-0 group-hover:-translate-y-1 transition-transform duration-500">
          <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 group-hover:text-white uppercase transition-colors">
            {post.category}
          </span>
          <span className="text-[10px] font-mono text-zinc-700 group-hover:text-zinc-400 transition-colors">
            {post.readingTime}
          </span>
        </div>
        
        <h2 className="text-3xl font-black lowercase mb-6 group-hover:text-white transition-colors leading-tight">
          {post.title}
        </h2>
        
        <p className="text-zinc-500 font-light lowercase leading-relaxed mb-10 line-clamp-3 group-hover:text-zinc-300 transition-colors">
          {post.excerpt}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
            elolvasom <span className="opacity-0 group-hover:opacity-100">→</span>
          </span>
          
          <div className="w-8 h-px bg-white/10 group-hover:w-16 group-hover:bg-white transition-all duration-700" />
        </div>
      </div>
    </Link>
  );
}
