/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  S = S.split(' '); let word;
  const goatArray = [];
  const vowelsRegex = /^[aeiou]/i;
  for (const i in S) {
    word = S[i];
    if (vowelsRegex.test(word)) {
      word += 'ma';
    } else {
      word = word.substring(1) + word[0] + 'ma';
    }
    for (let j = -1; j < i; j++) {
      word += 'a';
    }
    goatArray.push(word);
  }
  return goatArray.join(' ');
};

export default toGoatLatin;
