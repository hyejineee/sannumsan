import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import MockTheme from 'utils/MockTheme';

import SelectedOptionContainer from './SelectedOptionContainer';

jest.mock('react-redux');

describe('SelectedOptionContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    selectedOptions: {
      region: '서울',
      level: '초보자',
      season: '가을',
      activity: '경치 구경하기',
    },
  }));

  function renderSelectedOptionContainer() {
    return render(
      <MockTheme>
        <SelectedOptionContainer />
      </MockTheme>,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render selected option by user', () => {
    const { container } = renderSelectedOptionContainer();

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('초보자');
    expect(container).toHaveTextContent('가을');
    expect(container).toHaveTextContent('경치 구경하기');
  });
});
