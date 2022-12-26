import React from 'react';

import { render } from '@testing-library/react';

import MockTheme from 'utils/MockTheme';

import Options from './Options';

describe('QuestionItem', () => {
  const options = [
    { id: 1, option: '봄' },
    { id: 2, option: '여름' },
    { id: 3, option: '가을' },
    { id: 4, option: '겨울' },
  ];

  const { getByLabelText } = render(
    <MockTheme>
      <Options
        category="season"
        options={options}
        onChange={jest.fn()}
      />
    </MockTheme>,
  );

  it('render options', () => {
    options.forEach(({ option }) => {
      expect(getByLabelText(option)).not.toBeNull();
    });
  });
});
