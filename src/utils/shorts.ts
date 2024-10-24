import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const shortsDirectory = path.join(process.cwd(), 'src/markdown/shorts');

export function getAllShortsData() {
  const fileNames = fs.readdirSync(shortsDirectory);

  const allShortsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(shortsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    };
  });

  return allShortsData;
}

export const getShortBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(shortsDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { data } = matter(fileContent);

  return { meta: { ...data, slug: realSlug }, content: fileContent };
};
