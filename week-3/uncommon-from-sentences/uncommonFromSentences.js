/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const countWordFreq = (words, word) => {
  let count = 0;
  for (const thisWord of words) {
    if (thisWord === word) {
      count += 1;
    }
  }
  return count;
};
const uncommonFromSentences = function (A, B) {
  const wordsA = A.split(' ');
  const wordsB = B.split(' ');
  const result = [];
  for (const word of wordsA) {
    if (!wordsB.includes(word) && countWordFreq(wordsA, word) === 1) {
      result.push(word);
    }
  }
  for (const word of wordsB) {
    if (!wordsA.includes(word)) {
      if (!result.includes(word) && countWordFreq(wordsB, word) === 1) {
        result.push(word);
      }
    }
  }
  return result;
};

export default uncommonFromSentences;
