import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { BlogSearch } from "@/components/BlogSearch";
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
              04 / TUDÁSBÁZIS
            </span>
            <h1 className="text-5xl md:text-8xl font-black lowercase tracking-tighter mb-20 leading-none">
              tudásbázis. <br/> növekedési fegyverek.
            </h1>
            
            <BlogSearch posts={blogPosts} />
          </div>
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
}
