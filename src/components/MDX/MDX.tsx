import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props} className='text-5xl text-gray-700'>
      {props.children}
    </h1>
  ),
};

type CustomMDXProps = MDXRemoteProps;

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [
            remarkGfm,
            ...(props.options?.mdxOptions?.remarkPlugins || []),
          ],
          rehypePlugins: [...(props.options?.mdxOptions?.rehypePlugins || [])],
        },
      }}
      {...props}
    />
  );
}
