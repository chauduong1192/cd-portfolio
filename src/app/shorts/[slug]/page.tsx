import { Container } from '@/components/Container';
import { CustomMDX } from '@/components/MDX';

// import Welcome from '@/markdown/shorts/short-1.mdx';
import { getShortBySlug } from '@/utils/shorts';

const getPageContent = async (slug) => {
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
  const { content } = await getPageContent(params.slug);
  console.log('content', content);

  return (
    <Container title='Shorts' subTitle='Showcase of my shorts'>
      {/* <div>{content}</div> */}
      <CustomMDX source={content} />
      {/* {content} */}
    </Container>
  );
}
