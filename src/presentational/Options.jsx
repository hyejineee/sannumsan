import React from 'react';

import styled from '@emotion/styled';

import RadioInput from 'presentational/RadioInput';

const Container = styled.div({
  display: 'flex',
  height: '100%',
  alignItems: 'stretch',
  justifyContent: 'space-around',
  marginTop: '8rem',
});

export default function Options({ options, category, onChange }) {
  return (
    <Container>
      {options.map(({ id, option }) => (
        <RadioInput
          key={id}
          id={id}
          name={category}
          value={option}
          onChange={onChange}
        />
      ))}
    </Container>
  );
}
