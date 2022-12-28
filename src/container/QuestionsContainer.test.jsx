import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import MockTheme from 'utils/MockTheme';

import QuestionsContainer from './QuestionsContainer';

jest.mock('react-redux');

describe('QuestionsContainer', () => {
  const dispatch = jest.fn();

  function renderQuestionsContainer() {
    return render(
      <MockTheme>
        <QuestionsContainer />
      </MockTheme>,
    );
  }

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('render questions and the options per question', () => {
    const { container, getByLabelText } = renderQuestionsContainer();

    expect(container).toHaveTextContent('지역을 선택해 주세요.');

    expect(getByLabelText('서울')).not.toBeNull();
  });

  describe('option click', () => {
    it('calls selectOption action', () => {
      const { getByLabelText } = renderQuestionsContainer();

      fireEvent.click(getByLabelText('서울'));

      expect(dispatch).toBeCalledWith({
        type: 'application/selectOption',
        payload: {
          name: 'region',
          value: '서울',
        },
      });
    });
  });
});
