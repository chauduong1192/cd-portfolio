import dayjs from 'dayjs';

import { Container } from '@/components/Container';
import NextImage from '@/components/NextImage';

export const metadata = {
  title: 'Blogs',
};

export default async function Blogs() {
  const blogs: any = [];

  return (
    <Container title='Blogs' subTitle='Showcase of my blogs'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4'>
        {blogs?.map((blog: any) => (
          <div
            key={blog.sys.id}
            className='w-full mx-auto bg-neutral-200 rounded-xl shadow-lg overflow-hidden flex flex-col
              transition-transform transform hover:scale-105 cursor-pointer'
          >
            <div className='overflow-hidden h-48 w-full relative'>
              <NextImage
                layout='fill'
                className='object-cover'
                src={`https:${blog.fields.heroImage.fields.file.url}`}
                alt={blog?.fields.title}
              />
            </div>
            <div className='p-4'>
              <h2 className='text-xl font-bold text-neutral-900 mb-1'>
                {blog?.fields.title}
              </h2>
              <p className='text-neutral-500 text-base'>
                {blog?.fields.description}
              </p>
              <div className='mt-3 flex justify-between items-center'>
                <span className='text-gray-medium text-sm'>
                  {dayjs(blog?.fields.publishDate).format('DD MMMM, YYYY')}
                </span>
                <a
                  href='#'
                  className='bg-black-medium text-white px-4 py-2 rounded text-base'
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>
    </Container>
  );
}
