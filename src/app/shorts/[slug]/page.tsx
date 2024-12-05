import { Container } from '@/components/Container';
import { HeadingSection } from '@/components/HeadingSection';
import { CustomMDX } from '@/components/MDX';

import { getShortBySlug } from '@/utils/shorts';

const getPageContent = async (slug: string) => {
  const { meta, content } = await getShortBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { meta } = await getPageContent(params.slug);
  return { title: meta.title };
}

export default async function ShortDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { content, meta } = await getPageContent(params.slug);

  return (
    <Container className='max-w-5xl mx-auto'>
      <HeadingSection
        headingText={meta?.title}
        title={meta?.subTitle}
        description={meta?.description}
        className='gap-0'
        headingClasses='max-w-3xl'
      >
        <div className='flex gap-4'>
          <article className='mdx prose dark:prose-dark'>
            <CustomMDX source={content} />
          </article>
          {/* <aside className='mt-4'>
            <div className='sticky top-36'>
              <TableOfContents slug={params?.slug} />
            </div>
          </aside> */}
        </div>
      </HeadingSection>
    </Container>
  );
}
