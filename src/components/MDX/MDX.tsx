import { MDXRemote } from 'next-mdx-remote/rsc';

const components = {
  h1: (props) => (
    <h1 {...props} className='text-5xl text-gray-700'>
      {props.children}
    </h1>
  ),
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
