import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCourses,
  selectedCourse,
} from '_redux/slice';
import { findClimbingCourses } from 'service/courses';
import Courses from '../presentational/Courses';

export default function CoursesContainer() {
  const dispatch = useDispatch();

  const { selectedOptions, courses } = useSelector((state) => ({
    selectedOptions: state.selectedOptions,
    courses: state.courses,
  }));

  useEffect(() => {
    dispatch(setCourses(findClimbingCourses(selectedOptions)));
  }, [selectedOptions]);

  const handleClick = (selectedCourseId) => {
    dispatch(selectedCourse(selectedCourseId));
  };

  return (
    <Courses courses={courses} onClick={handleClick} />
  );
}
