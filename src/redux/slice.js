import { createSlice } from '@reduxjs/toolkit';
import { fetchCourseGPXFile } from 'service/courseGPX';

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

const reducers = {
  selectOption(state, { payload: { name, value } }) {
    const { selectedOptions } = state;

    return {
      ...state,
      selectedOptions: {
        ...selectedOptions,
        [name]: value,
      },
    };
  },

  setCourses(state, { payload: courses }) {
    return {
      ...state,
      courses,
    };
  },

  setCourseGPX(state, { payload: courseGPX }) {
    return {
      ...state,
      courseGPX,
    };
  },

  selectedCourse(state, { payload: selectedCourse }) {
    return {
      ...state,
      selectedCourse,
    };
  },
};

const { reducer, actions } = createSlice({
  name: 'application',
  initialState,
  reducers,
});

export const {
  selectOption,
  setCourses,
  setCourseGPX,
  selectedCourse,
} = actions;

export function loadCourseGPX(courseId) {
  return async (dispatch) => {
    const courseGPX = await fetchCourseGPXFile(courseId);
    dispatch(setCourseGPX(courseGPX));
  };
}

export default reducer;
