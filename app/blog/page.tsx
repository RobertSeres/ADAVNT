import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black text-white px-6">
        <Navbar />
        <div className="pt-32 pb-40 container mx-auto">
          <div className="max-w-7xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 block mb-6 uppercase">
              04 / KNOWLEDGE
            </span>
            <h1 className="text-5xl md:text-8xl font-black lowercase tracking-tighter mb-20 leading-none">
              tudásbázis. <br/> növekedési fegyverek.
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {blogPosts.map((post) => (
                <Link 
                  key={post.id} 
                  href={`/blog/${post.id}`}
                  className="group flex flex-col border border-white/10 p-10 hover:bg-white/2 transition-all"
                >
                  <div className="flex justify-between items-center mb-10">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase">{post.category}</span>
                    <span className="text-[10px] font-mono text-zinc-700">{post.readingTime}</span>
                  </div>
                  <h2 className="text-3xl font-black lowercase mb-6 group-hover:text-white transition-colors">{post.title}</h2>
                  <p className="text-zinc-500 font-light lowercase leading-relaxed mb-10 line-clamp-3">{post.excerpt}</p>
                  <span className="text-[10px] font-bold tracking-widest uppercase mt-auto">elolvasom →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
}
