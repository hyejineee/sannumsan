import React from 'react';

import { render } from '@testing-library/react';

import { NaverMap } from 'react-naver-maps';

import { courseGpx } from '../../features/courseGpxFeature';

import CourseMap from './CourseMap';

jest.mock('react-naver-maps');

describe('CourseMap', () => {
  NaverMap.mockImplementation(() => (
    <div id="react-naver-map" />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCourseMap() {
    return render(
      <CourseMap courseGPX={courseGpx} />,
    );
  }

  it('render map', () => {
    const { container } = renderCourseMap();
    expect(container.querySelector('#react-naver-map')).not.toBeNull();
  });
});
