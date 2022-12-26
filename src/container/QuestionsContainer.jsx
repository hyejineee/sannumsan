import React from 'react';

import questions from 'data/questions';

import { useDispatch } from 'react-redux';

import { selectOption } from '_redux/slice';

import Questions from 'presentational/Questions';

export default function QuestionsContainer() {
  const dispatch = useDispatch();

  function handleChange({ name, value }) {
    dispatch(selectOption({ name, value }));
  }

  return (
    <Questions
      questions={questions}
      onChange={handleChange}
    />
  );
}
