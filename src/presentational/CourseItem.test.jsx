import React from 'react';

import { render } from '@testing-library/react';

import { NaverMap } from 'react-naver-maps';

import MockTheme from 'utils/MockTheme';

import CourseItem from './CourseItem';

jest.mock('react-naver-maps');

describe('CourseItem', () => {
  NaverMap.mockImplementation(() => (
    <div id="react-naver-map" />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCourseItem() {
    const course = {
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
    };

    return render(
      <MockTheme>
        <CourseItem
          course={course}
        />
      </MockTheme>,
    );
  }

  it('render course', () => {
    const { container } = renderCourseItem();

    expect(container).toHaveTextContent('소요산');
    expect(container).toHaveTextContent('공주봉 코스');
  });
});
