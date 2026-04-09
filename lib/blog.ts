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
}

const POSTS_DIR = path.join(process.cwd(), 'public');

export async function getBlogPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(POSTS_DIR);
  const mdFiles = files.filter(f => f.endsWith('.md') && f.match(/^[0-9]{2}-/));
  
  // Only take the first 5 as requested
  const targetedFiles = mdFiles.sort().slice(0, 5);

  const posts = targetedFiles.map(filename => {
    const fullPath = path.join(POSTS_DIR, filename);
    const rawContent = fs.readFileSync(fullPath, 'utf8');
    
    // Simple manual metadata extraction
    const lines = rawContent.split('\n');
    const title = lines[0].replace(/^#\s*/, '').replace(/\s*—.*$/, '').trim();
    
    const descLine = lines.find(l => l.includes('**Meta description:**'));
    const excerpt = descLine ? descLine.replace('**Meta description:**', '').trim() : '';
    
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
      excerpt: excerpt.toLowerCase(),
      content: marked(mainContent) as string,
      date: '2024.04.10', // Standard date for these new posts
      category,
      readingTime
    };
  });

  return posts;
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find(p => p.id === id) || null;
}
