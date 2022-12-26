import React from 'react';

import { render } from '@testing-library/react';

import MockTheme from 'utils/MockTheme';

import QuestionItem from './QuestionItem';

describe('QuestionItem', () => {
  const question = {
    id: 2,
    category: 'level',
    question: '나의 등산 실력은 어느 정도인가요?',
    sub: '등산을 즐기고 싶은 난이도를 선택해주세요.',
    options: [
      { id: 1, option: '초보자' },
      { id: 2, option: '중급자' },
      { id: 3, option: '상급자' },
    ],
  };

  const { container, getByLabelText } = render(
    <MockTheme>
      <QuestionItem
        question={question}
        onChange={jest.fn()}
        translate={0}
      />
    </MockTheme>,
  );

  it('render question and options', () => {
    expect(container).toHaveTextContent(question.sub);

    question.options.forEach(({ option }) => {
      expect(getByLabelText(option)).not.toBeNull();
    });
  });
});
