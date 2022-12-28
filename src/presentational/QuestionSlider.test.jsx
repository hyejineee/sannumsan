import React from 'react';

import { fireEvent, render, waitFor } from '@testing-library/react';

import MockTheme from 'utils/MockTheme';

import { MemoryRouter } from 'react-router-dom';
import QuestionSlider from './QuestionSlider';

describe('QuestionSlider', () => {
  const handleChange = jest.fn();
  function renderQuestionSlider(questionIndex = 1) {
    return render(
      <MemoryRouter initialEntries={['/questions']}>
        <MockTheme>
          <QuestionSlider
            onChange={handleChange}
            questionIndex={questionIndex}
          />
        </MockTheme>
      </MemoryRouter>,
    );
  }

  it('render slider for question box', () => {
    const { getByAltText } = renderQuestionSlider();

    expect(getByAltText('right')).not.toBeNull();
    expect(getByAltText('left')).not.toBeNull();
  });

  describe('click right arrow button', () => {
    it('radio value is changed', async () => {
      const { getByAltText, getByLabelText } = renderQuestionSlider();

      await waitFor(() => {
        fireEvent.click(getByAltText('right'));
      });
      expect(handleChange).toBeCalled();
      expect(getByLabelText('right').value).toBe('1');
    });
  });

  describe('when last question page is displayed', () => {
    it('show 등산코스 보기! button', async () => {
      const { getByText } = renderQuestionSlider(4);

      expect(getByText('등산코스 보기!')).not.toBeNull();
    });
  });
});
