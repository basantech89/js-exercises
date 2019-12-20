
const getMaxLength = (words) => {
  return words.reduce((maxLength, word) => {
    if (word.length > maxLength) {
      return word.length;
    }
    return maxLength;
  }, 0);
};

function alienAlphabet(words) {
  let i = 0;
  const limit = getMaxLength(words);
  const alphabets = new Set();
  while (i < limit) {
    words.forEach(word => {
      if (i < word.length) {
        alphabets.add(word[i]);
      }
    });
    i += 1;
  }
  return Array.from(alphabets);
}

export {
  alienAlphabet,
};
