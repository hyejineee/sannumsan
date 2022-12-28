import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';

import { MemoryRouter } from 'react-router-dom';

import MockTheme from 'utils/MockTheme';

import ResultPage from './ResultPage';

jest.mock('react-naver-maps');

describe('ResultPage', () => {
  RenderAfterNavermapsLoaded.mockImplementation(() => (<div />));
  NaverMap.mockImplementation(() => (<div id="react-naver-map" />));

  useDispatch.mockImplementation(() => jest.fn());

  useSelector.mockImplementation((selector) => selector({
    selectedOptions: {
      region: '서울',
      level: '초보자',
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderResultPage() {
    return render(
      <MockTheme>
        <MemoryRouter>
          <ResultPage />
        </MemoryRouter>
      </MockTheme>,
    );
  }

  it('render  selected options by user', () => {
    const { container } = renderResultPage();

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('초보자');
    expect(container).toHaveTextContent('가을');
    expect(container).toHaveTextContent('경치 구경하기');
  });

  it('render courses', () => {
    const { container } = renderResultPage();

    expect(container).toHaveTextContent('공주봉 코스');
  });
});
