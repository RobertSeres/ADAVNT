import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getBlogPost } from "@/lib/blog";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = await getBlogPost(id);

  if (!post) {
    notFound();
  }

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black text-white px-6">
        <Navbar />
        <div className="pt-32 pb-40 container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog" 
              className="text-[10px] font-bold tracking-widest text-zinc-500 hover:text-white mb-16 flex items-center gap-2 transition-all uppercase no-underline"
            >
              <ArrowLeft size={16} /> vissza a bloghoz
            </Link>
            
            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 block mb-6 uppercase">
              {post.category} / {post.readingTime}
            </span>
            <h1 className="text-5xl md:text-7xl font-black lowercase tracking-tighter mb-12 leading-none">
              {post.title}
            </h1>
            
            {/* Markdown Content */}
            <div 
              className="blog-content prose prose-invert prose-zinc max-w-none font-light text-lg text-zinc-400 leading-relaxed lowercase 
              prose-h2:text-white prose-h2:text-3xl prose-h2:font-black prose-h2:mt-16 prose-h2:mb-6 prose-h2:lowercase
              prose-h3:text-white prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-10 prose-h3:mb-4 prose-h3:lowercase
              prose-p:mb-8 prose-strong:text-white prose-strong:font-bold prose-a:text-white prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-20 border-t border-white/10 pt-16 text-zinc-500">
              <p className="mb-4">tetszett a cikk? kérj egy ingyenes auditot az üzletedre.</p>
              <Link href="/apply" className="text-white hover:underline transition-all text-xl font-black lowercase">
                jelentkezz auditra →
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
}
