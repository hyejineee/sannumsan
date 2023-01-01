import React, { useEffect } from 'react';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import { useDispatch, useSelector } from 'react-redux';
import CourseMap from 'presentational/CourseMap';
import { loadCourseGPX } from '_redux/slice';
import { converter } from 'utils/utils';

const parser = (str, mimeType) => new DOMParser().parseFromString(str, mimeType);
const convertToXml = converter(parser)('text/xml');

export default function CourseMapCotainer() {
  const dispatch = useDispatch();

  const { courseGPX, selectedCourseId } = useSelector((state) => ({
    courseGPX: state.courseGPX,
    selectedCourseId: state.selectedCourse,
  }));

  useEffect(async () => {
    if (selectedCourseId !== null) {
      dispatch(loadCourseGPX(selectedCourseId));
    }
  }, [selectedCourseId]);

  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={process.env.MAP_CLIENT_ID}
    >
      <CourseMap courseGPX={convertToXml(courseGPX)} />
    </RenderAfterNavermapsLoaded>
  );
}
