import { Container } from '@/components/Container';

export const metadata = {
  title: 'Notes',
};
export default function Notes() {
  return (
    <Container>
      <div
        className='text-[42px] font-roboto-mono text-neutral-700 dark:text-gray-200
          tracking-tighter leading-[58px] font-medium'
      >
        Coming soon...
      </div>
    </Container>
  );
}
