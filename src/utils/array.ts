export const generateWords = (words: string) => {
  const slitWords = words.split(' ');
  return slitWords.map((word, i) => {
    return {
      text: word,
      ...(slitWords.length - 1 === i && {
        className: 'bg-white dark:bg-gray-dark',
      }),
    };
  });
};
