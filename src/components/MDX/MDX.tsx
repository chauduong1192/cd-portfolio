'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useEffect, useState } from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { CustomLink } from '@/components/MDX/CustomLink';
import { Pre } from '@/components/MDX/Pre';

import oneDarkPro from '../../../public/theme/One-Dark-Pro.json';

const components = {
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
    <CustomLink href='' {...props}>
      {props.children}
    </CustomLink>
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <Pre {...props}>{props.children}</Pre>
  ),
};

type CustomMDXProps = {
  source: string;
};

export function CustomMDX({ source }: CustomMDXProps) {
  const [mdxContent, setMdxContent] = useState<MDXRemoteSerializeResult | null>(
    null,
  );

  useEffect(() => {
    const fetchMdxContent = async () => {
      const mdxSource = await serialize(source, {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [rehypePrettyCode, { theme: oneDarkPro }],
            [
              rehypeAutolinkHeadings,
              {
                type: 'element',
                tagName: 'a',
                properties: {
                  className: ['has-anchor'],
                },
              },
            ],
          ],
        },
      });
      setMdxContent(mdxSource);
    };

    fetchMdxContent();
  }, [source]);

  if (!mdxContent) {
    return <div>Loading...</div>;
  }

  return <MDXRemote {...mdxContent} components={components} />;
}
