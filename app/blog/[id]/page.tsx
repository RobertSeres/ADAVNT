import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getBlogPost } from "@/lib/blog";
import { notFound } from "next/navigation";
import Grainient from "@/components/Grainient";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getBlogPost(id);
  if (!post) return { title: "Blog Post Not Found" };
  
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = await getBlogPost(id);

  if (!post) {
    notFound();
  }

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black text-white px-6 relative">
        <Navbar />
        
        {/* Decorative Background Grainient (Static/Subtle on individual pages) */}
        <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
          <Grainient
            color1={post.colors[0]}
            color2={post.colors[1]}
            color3={post.colors[2]}
            timeSpeed={0.1}
            zoom={1.5}
            noiseScale={4}
            grainAmount={0.2}
            className="h-full w-full"
          />
        </div>

        <div className="pt-32 pb-40 container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog" 
              className="text-[10px] font-bold tracking-widest text-zinc-500 hover:text-white mb-16 flex items-center gap-2 transition-all uppercase no-underline"
            >
              <ArrowLeft size={16} /> vissza a bloghoz
            </Link>
            
            <div className="mb-12">
              <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 block mb-6 uppercase">
                {post.category} / {post.readingTime}
              </span>
              <h1 className="text-5xl md:text-8xl font-black lowercase tracking-tighter mb-8 leading-[0.85]">
                {post.title}
              </h1>
              <p className="text-xl text-zinc-400 font-light lowercase max-w-2xl leading-relaxed">
                {post.seoDescription}
              </p>
            </div>

            <div className="w-full h-px bg-white/10 mb-20" />
            
            {/* Markdown Content */}
            <article 
              className="blog-content prose prose-invert prose-zinc max-w-none font-light text-lg text-zinc-400 leading-relaxed lowercase 
              prose-h2:text-white prose-h2:text-4xl prose-h2:font-black prose-h2:mt-24 prose-h2:mb-8 prose-h2:lowercase prose-h2:tracking-tighter
              prose-h3:text-white prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-16 prose-h3:mb-6 prose-h3:lowercase
              prose-p:mb-10 prose-strong:text-white prose-strong:font-bold prose-a:text-white prose-a:underline prose-li:mb-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-32 p-12 border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-3xl font-black lowercase mb-6 tracking-tighter">tetszett a cikk?</h3>
                <p className="text-zinc-400 mb-10 max-w-md lowercase">
                  ha a te vállalkozásodat is szeretnéd növekedési pályára állítani, jelentkezz egy ingyenes growth auditra.
                </p>
                <Link href="/apply" className="px-10 py-4 bg-white text-black text-[10px] font-black tracking-[0.2em] uppercase transition-all hover:bg-zinc-200 inline-block no-underline">
                  jelentkezz auditra →
                </Link>
              </div>

              {/* Decorative background element for CTA */}
              <div className="absolute top-0 right-0 p-12 text-9xl font-black text-white/5 select-none transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-12">
                Adv
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
}
