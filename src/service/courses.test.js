import { findClimbingCourses } from './courses';

jest.mock('data/courses');

describe('courses service', () => {
  describe('findClimbingCourses', () => {
    context('with all option values', () => {
      it('return climbing course', () => {
        const courses = findClimbingCourses({
          region: '서울', level: '초보자', season: '가을', activity: '경치 구경하기',
        });

        expect(courses.length).toEqual(2);
      });
    });

    context('without option values', () => {
      it('return empty courses', () => {
        const courses = findClimbingCourses({});

        expect(courses.length).toEqual(0);
      });
    });
  });
});
