import React, { useState } from 'react';

import styled from '@emotion/styled';

import QuestionItem from 'presentational/QuestionItem';
import QuestionSlider from 'presentational/QuestionSlider';

const Container = styled.div({
  width: '85%',
  height: '90%',
  display: 'flex',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  margin: '0 auto',
});

const Layout = styled.div({
  'height': '100%',
  'width': '100%',
});

export default function Questions({ questions, onChange }) {
  const [state, setState] = useState({
    currentQuestionIndex: 0,
  });

  function handleChange(currentQuestionIndex) {
    setState({
      ...state,
      currentQuestionIndex,
    });
  }

  return (
    <Layout>
      <Container id="contain">
        {
          questions.map((question) => (
            <QuestionItem
              key={question.id}
              question={question}
              onChange={onChange}
              translate={state.currentQuestionIndex}
            />
          ))
        }
      </Container>

      <QuestionSlider
        onChange={handleChange}
        questionIndex={Number(state.currentQuestionIndex) + 1}
      />

    </Layout>
  );
}
