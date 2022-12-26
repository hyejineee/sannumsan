import React from 'react';

import styled from '@emotion/styled';

import OptionTitle from 'style/OptionTitle';

import * as optionImage from 'asset/image';

const Container = styled.div({
  'textAlign': 'center',
  '& input': {
    opacity: '0',
    width: '0',
    height: '0',
  },

  '& input:checked + label': {
    borderRadius: '20px',
    boxShadow: '0 3px 37px -10px rgba(207, 207, 207, 0.51)',
    transform: 'scale(1.15)',
  },
});

export default function RadioInput({
  id, name, value, onChange,
}) {
  const imageUrl = optionImage[`${name}`][`${name}${id}`].default;

  function handleChange(event) {
    const { target } = event;
    onChange({ name: target.name, value: target.value });
  }

  return (
    <Container>

      <input
        type="radio"
        name={name}
        id={`${name}-${id}`}
        value={value}
        onChange={handleChange}
      />
      <OptionTitle htmlFor={`${name}-${id}`} image={`${imageUrl}`}>
        {value}
      </OptionTitle>
    </Container>
  );
}
