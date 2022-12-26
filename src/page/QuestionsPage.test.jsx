import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import MockTheme from 'utils/MockTheme';

import QuestionsPage from './QuestionsPage';

describe('QuestionsPage', () => {
  function renderQuestionsPage() {
    return render(
      <MockTheme>
        <MemoryRouter>
          <QuestionsPage />
        </MemoryRouter>
      </MockTheme>,
    );
  }

  it('render questions and options', () => {
    const { container } = renderQuestionsPage();

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('초보자');
    expect(container).toHaveTextContent('봄');
    expect(container).toHaveTextContent('금강산도 식후경');
  });
});
