'use client';

import { Animate } from '@/components/Animate';
import { fadeIn } from '@/utils/framer-variants';
import { motion, useAnimate } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Loading() {
  const [scope, animate] = useAnimate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerWidth = containerRef?.current?.offsetWidth;
    const animateLoader = async () => {
      if (scope.current) {
        await animate(
          [
            [scope.current, { x: 0, width: '100%' }],
            [scope.current, { x: containerWidth, width: '0%' }, { delay: 0.6 }],
          ],
          {
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0.8,
          },
        );
      }
    };
    animateLoader();
  }, [animate, scope]);

  return (
    <Animate>
      <motion.div
        animate={fadeIn}
        className='w-full h-full flex justify-center items-center m-0 p-0 min-h-screen'
      >
        <div ref={containerRef} className='relative'>
          <motion.div ref={scope} className='absolute h-full bg-white' />
          <div
            className='text-xl font-medium italic m-4 whitespace-nowrap text-gray-slate dark:text-white
              mix-blend-difference'
          >
            Loading... good things come to those who wait!
          </div>
        </div>
      </motion.div>
    </Animate>
  );
}
