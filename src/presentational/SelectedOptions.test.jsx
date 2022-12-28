import React from 'react';

import { render } from '@testing-library/react';

import MockTheme from 'utils/MockTheme';

import SelectedOptions from './SelectedOptions';

describe('SelectedOptions', () => {
  const selectedOptions = {
    region: '서울',
    level: '초보자',
    season: '가을',
    activity: '경치 구경하기',
  };

  function renderSelectedOptions() {
    return render(
      <MockTheme>
        <SelectedOptions
          selectedOptions={selectedOptions}
        />
      </MockTheme>,
    );
  }

  it('render options that selected by user', () => {
    const { container } = renderSelectedOptions();

    Object.values(selectedOptions).forEach((option) => {
      expect(container).toHaveTextContent(option);
    });
  });
});
