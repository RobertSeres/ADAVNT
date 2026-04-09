import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readingTime: string;
  colors: string[];
  seoTitle?: string;
  seoDescription?: string;
}

const POSTS_DIR = path.join(process.cwd(), 'public');

// Colors for the hover gradients (matched to the services aesthetic)
const colorSets = [
  ["#22c55e", "#000000", "#ffffff"], // Green-ish
  ["#ffffff", "#3b82f6", "#1d4ed8"], // Blue-ish
  ["#fef08a", "#eab308", "#a855f7"], // Yellow/Purple
  ["#000000", "#f97316", "#6b7280"], // Orange/Gray
  ["#00f2ff", "#bc13fe", "#000000"], // Cyan/Purple
  ["#ef4444", "#000000", "#ffffff"]  // Red-ish
];

export async function getBlogPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(POSTS_DIR);
  const mdFiles = files.filter(f => f.endsWith('.md') && f.match(/^[0-9]{2}-/));
  
  // Sort and take the posts
  const targetedFiles = mdFiles.sort();

  const posts = targetedFiles.map((filename, index) => {
    const fullPath = path.join(POSTS_DIR, filename);
    const rawContent = fs.readFileSync(fullPath, 'utf8');
    
    // Simple manual metadata extraction
    const lines = rawContent.split('\n');
    const title = lines[0].replace(/^#\s*/, '').replace(/\s*—.*$/, '').trim();
    
    const titleLine = lines.find(l => l.includes('**Meta title:**'));
    const seoTitle = titleLine ? titleLine.replace('**Meta title:**', '').trim() : title;

    const descLine = lines.find(l => l.includes('**Meta description:**'));
    const seoDescription = descLine ? descLine.replace('**Meta description:**', '').trim() : '';
    
    const timeLine = lines.find(l => l.includes('**Olvasási idő:**'));
    const readingTime = timeLine ? timeLine.replace('**Olvasási idő:**', '').trim() : '8 perc';
    
    // Assign categories based on filename or content
    let category = 'stratégia';
    if (filename.includes('weboldal')) category = 'webfejlesztés';
    if (filename.includes('marketing')) category = 'marketing';
    if (filename.includes('partner')) category = 'üzlet';

    // Generate id from filename (strip numbers and .md)
    const id = filename.replace(/^[0-9]{2}-/, '').replace('.md', '');

    // The index of --- for content start
    const dividerIndex = lines.findIndex(l => l.trim() === '---');
    const mainContent = dividerIndex !== -1 ? lines.slice(dividerIndex + 1).join('\n') : rawContent;

    return {
      id,
      title: title.toLowerCase(),
      excerpt: seoDescription.toLowerCase(),
      content: marked(mainContent) as string,
      date: '2024.04.10', // Standard date for these new posts
      category,
      readingTime,
      colors: colorSets[index % colorSets.length],
      seoTitle,
      seoDescription
    };
  });

  return posts;
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find(p => p.id === id) || null;
}
