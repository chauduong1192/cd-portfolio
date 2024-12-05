'use client';

import { useEffect, useRef, useState } from 'react';

import useScrollSpy from '@/hooks/useScrollspy';

import { TOCLink } from '@/components/TocLink';

export type HeadingScrollSpy = Array<{
  id: string;
  level: number;
  text: string;
}>;

type TableOfContentsProps = {
  slug: string;
};

export const TableOfContents = ({
  // toc,
  // activeSection,
  // minLevel,
  slug,
}: TableOfContentsProps) => {
  const lastPosition = useRef<number>(0);
  const [toc, setToc] = useState<HeadingScrollSpy>();
  const activeSection = useScrollSpy();
  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  useEffect(() => {
    const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');

    console.log('headings', headings);
    const headingArr: HeadingScrollSpy = [];

    headings.forEach((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace('H', '');
      const text = heading.textContent + '';

      console.log('id', id);
      console.log('level', level);
      console.log('text', text);

      headingArr.push({ id, level, text });
    });
    console.log('headings', headings);

    setToc(headingArr);
  }, [slug]);

  useEffect(() => {
    const container = document.getElementById('toc-container');
    const activeLink = document.getElementById(`link-${activeSection}`);

    if (container && activeLink) {
      // Get container properties
      const cTop = container.scrollTop;
      const cBottom = cTop + container.clientHeight;

      // Get activeLink properties
      const lTop = activeLink.offsetTop - container.offsetTop;
      const lBottom = lTop + activeLink.clientHeight;

      // Check if in view
      const isTotal = lTop >= cTop && lBottom <= cBottom;

      const isScrollingUp = lastPosition.current > window.scrollY;
      lastPosition.current = window.scrollY;

      if (!isTotal) {
        // Scroll by the whole clientHeight
        const offset = 25;
        const top = isScrollingUp
          ? lTop - container.clientHeight + offset
          : lTop - offset;

        container.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, [activeSection]);

  // console.log('toc', toc);

  return (
    <div
      id='toc-container'
      className='hidden max-h-[calc(100vh-9rem-113px)] overflow-auto pb-4 lg:block'
    >
      <h3>Table of contents</h3>
      <div className='mt-4 flex flex-col space-y-2 text-sm'>
        {toc
          ? toc.map(({ id, level, text }) => (
              <TOCLink
                id={id}
                key={id}
                activeSection={activeSection}
                level={level}
                minLevel={minLevel}
                text={text}
              />
            ))
          : null}
      </div>
    </div>
  );
};
