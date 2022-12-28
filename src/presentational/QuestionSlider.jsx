import React from 'react';
import styled from '@emotion/styled';
import rightIcon from 'asset/image/right.svg';
import leftIcon from 'asset/image/left.svg';
import { Link } from 'react-router-dom';

const Container = styled.div({
  'display': 'flex',
  'height': '10%',
  '& label': {
    display: 'hidden',
  },
  '> div': {
    margin: 'auto',
  },
});

const ResultButton = styled.button(({ theme }) => ({
  backgroundColor: theme.colors.main,
  borderRadius: '10px',
  padding: '10px',
  border: 'none',
  a: {
    font: theme.typos.s,
    color: 'white',
  },
}));

export default function QuestionSlider({ onChange, questionIndex }) {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  const nextButton = () => {
    if (questionIndex === 4) {
      return (
        <ResultButton>
          <Link to="/result">등산코스 보기!</Link>
        </ResultButton>
      );
    }

    return (
      <label
        htmlFor={`category${questionIndex + 1}`}
        aria-labelledby={`category${questionIndex + 1}`}
      >
        <img src={rightIcon} alt="right" />
        <p hidden>right</p>
      </label>
    );
  };

  return (
    <Container>
      <div>
        <label
          htmlFor={`category${questionIndex - 1}`}
          aria-labelledby={`category${questionIndex - 1}`}
        >
          <img src={leftIcon} alt="left" />
          <p hidden>left</p>
        </label>
      </div>

      <div>
        <input
          type="radio"
          name="category"
          id="category1"
          value={0}
          onChange={handleChange}
          checked={questionIndex === 1}
        />
        <input
          type="radio"
          name="category"
          id="category2"
          value={1}
          onChange={handleChange}
          checked={questionIndex === 2}
        />
        <input
          type="radio"
          name="category"
          id="category3"
          value={2}
          onChange={handleChange}
          checked={questionIndex === 3}
        />
        <input
          type="radio"
          name="category"
          id="category4"
          value={3}
          onChange={handleChange}
          checked={questionIndex === 4}
        />
      </div>

      <div>{nextButton()}</div>
    </Container>
  );
}
