import { HTMLMotionProps, motion } from 'framer-motion';

type AnimateProps = HTMLMotionProps<'div'>;

export const Animate = ({ className, children, ...props }: AnimateProps) => (
  <motion.div
    className={className}
    initial='initial'
    // transition={{ staggerChildren: 0.2 }}
    viewport={{ once: true }}
    whileInView='animate'
    {...props}
  >
    {children}
  </motion.div>
);
