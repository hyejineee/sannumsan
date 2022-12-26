import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import MockTheme from 'utils/MockTheme';

import questions from '../../features/questions';

import Questions from './Questions';

describe('Questions', () => {
  const handleChange = jest.fn();

  function renderQuestions() {
    return render(
      <MockTheme>
        <MemoryRouter>
          <Questions questions={questions} onChange={handleChange} />
        </MemoryRouter>
      </MockTheme>,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render questions', () => {
    const { container } = renderQuestions();

    questions.forEach((question) => {
      expect(container).toHaveTextContent(question.question);
    });
  });
});
