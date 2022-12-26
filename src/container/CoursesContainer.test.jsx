import React from 'react';

import { fireEvent, getByAltText, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import MockTheme from 'utils/MockTheme';

import CoursesContainer from './CoursesContainer';

jest.mock('react-redux');

describe('CoursesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      selectedOptions: given.selectedOptions || {
        region: '서울',
        climbingLevel: '초보자',
        season: '가을',
        activity: '경치 구경하기',
      },
      courses: [
        {
          id: 1,
          region: '서울',
          mountainName: '소요산',
          courseName: '공주봉 코스',
          course: '소요산역 - 일주문 - 구절터 - 공주봉',
          elevation: '526m',
          difficulty: '하',
          homepageUrl: 'https://www.ddc.go.kr/tour/contents.do?key=567',
          activities: [
            '경치 구경하기',
          ],
          seasons: [
            '봄', '가을',
          ],
          tags: [
            '원효폭포', '단풍축제', '봄나들이 축제',
          ],
        },
      ],
      courseGPX: '',
    }));
  });

  function renderCoursesContainer() {
    return render(
      <MockTheme>
        <CoursesContainer />
      </MockTheme>,
    );
  }

  it('calls setCourses action', () => {
    renderCoursesContainer();

    expect(dispatch).toBeCalled();
  });

  describe('click course item', () => {
    it('calls selectedCourse action', () => {
      const { getByText } = renderCoursesContainer();

      fireEvent.click(getByText('공주봉 코스'));

      expect(dispatch).toBeCalled();
    });
  });
});
