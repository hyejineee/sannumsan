import reducer, {
  selectOption,
  setCourseGPX,
  setCourses,
  selectedCourse,
} from './slice';

describe('reducer', () => {
  const initialState = {
    selectedOptions: {
      region: '',
      level: '',
      season: '',
      activity: '',
    },
    courses: [],
    courseGPX: '',
    selectedCourse: null,
  };

  context('when previous state is undefined', () => {
    it('return initial state', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('selectOption', () => {
    describe('select option about region', () => {
      it('change region of selectedOption', () => {
        const { selectedOptions: { region } } = reducer(
          initialState,
          selectOption({ name: 'region', value: '서울' }),
        );

        expect(region).toEqual('서울');
      });
    });
  });

  describe('setCourses', () => {
    const courses = [
      { courseName: '1코스' },
      { courseName: '2코스' },
    ];

    context('when exist courses', () => {
      it('change courses', () => {
        const state = reducer(initialState, setCourses(courses));

        expect(state.courses.length).toBe(2);
      });
    });

    context('with empty', () => {
      it('returns previous state', () => {
        const state = reducer(initialState, setCourses([]));

        expect(state).toEqual(initialState);
      });
    });
  });

  describe('serCourseGPX', () => {
    it('changes courseGPX', () => {
      const state = reducer(initialState, setCourseGPX('gpx'));
      expect(state.courseGPX).toBe('gpx');
    });
  });

  describe('selectedCourse', () => {
    it('changes selectedCourse', () => {
      const state = reducer(initialState, selectedCourse(1));
      expect(state.selectedCourse).toBe(1);
    });
  });
});
