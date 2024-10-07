import React, { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => (
  <div className='py-0 px-4 mx-0 my-16 sm:px-12 sm:my-12 w-full'>
    {children}
  </div>
);
