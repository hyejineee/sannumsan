import React from 'react';

import { render } from '@testing-library/react';

import { RenderAfterNavermapsLoaded } from 'react-naver-maps';

import { useDispatch, useSelector } from 'react-redux';

import CourseMapContainer from './CourseMapContainer';

jest.mock('react-redux');
jest.mock('service/courseGPX');
jest.mock('react-naver-maps');

describe('CourseMapContainer', () => {
  const disptch = jest.fn();

  RenderAfterNavermapsLoaded.mockImplementation(() => (<div />));

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => disptch);
    useSelector.mockImplementation((selector) => selector({
      courseGPX: '',
      selectedCourse: given.selectedCourse,
    }));
  });

  function renderCourseMapContainer() {
    return render(
      <CourseMapContainer />,
    );
  }

  it('calls getGPXfile ', () => {
    given('selectedCourse', () => 1);
    renderCourseMapContainer();

    expect(disptch).toBeCalled();
  });

  context('without selectedCourse', () => {
    given('selectedCourse', () => null);

    it('doesn t call dispatch', () => {
      renderCourseMapContainer();

      expect(disptch).not.toBeCalled();
    });
  });
});
