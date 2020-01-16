import toGoatLatin from './goatLatin';

describe('goat-latin', () => {
  test('should give correct output', () => {
    expect(toGoatLatin('The quick brown fox jumped over the lazy dog'))
      .toBe('heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa');
  });
});
