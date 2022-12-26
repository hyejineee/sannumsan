import { fetchCourseGPXFile } from './courseGPX';

describe('courseGPX', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async text() { return data; },
    });
  };

  describe('getCourseGPXfile', () => {
    beforeEach(() => {
      mockFetch('<xmlData>');
    });

    context('when exist course\'s gpx file', () => {
      it('return gpx file', async () => {
        const gxpfile = await fetchCourseGPXFile(1);

        expect(gxpfile).not.toBeNull();
      });
    });
  });
});
