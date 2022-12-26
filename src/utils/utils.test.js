import {
  exist,
  converter,
} from './utils';

describe('utils', () => {
  describe('exist', () => {
    it('return existed value in array', () => {
      const arrays = [
        ['a', 'b', 'c'],
        [1, 2, 'a'],
      ];

      arrays.forEach((array) => {
        expect(exist('a')(array)).toEqual(true);
      });
    });
  });

  describe('converter', () => {
    it('return converted data', () => {
      const parser = (_, __) => ({ _, __ });
      const convertToXml = converter(parser)('text/xml');
      const result = convertToXml('<customer>John Smith</customer>');

      expect(result).toEqual({ _: '<customer>John Smith</customer>', __: 'text/xml' });
    });
  });
});
