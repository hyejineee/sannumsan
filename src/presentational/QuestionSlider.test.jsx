import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import MockTheme from 'utils/MockTheme';

import QuestionSlider from './QuestionSlider';

describe('QuestionSlider', () => {
  function renderQuestionSlider() {
    return render(
      <MockTheme>
        <QuestionSlider />
      </MockTheme>,
    );
  }

  it('render slider for question box', () => {
    const { getByAltText } = renderQuestionSlider();

    expect(getByAltText('right')).not.toBeNull();
    expect(getByAltText('left')).not.toBeNull();
  });

  describe('click right arrow button', () => {
    it('show next question', () => {
      const { container, getByAltText } = renderQuestionSlider();

      fireEvent(getByAltText('right')).click();

      expect(container).toHaveTextContent('초보자');
    });
  });
});
