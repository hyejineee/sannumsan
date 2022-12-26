import React from 'react';

import styled from '@emotion/styled';

const P = styled.p({
  display: 'inline-block',
  padding: '0.3rem 1rem',
  margin: '0.5rem',
  borderRadius: '19px',
  boxShadow: '-1px 3px 15px -2px rgba(165, 165, 165, 0.49)',
  backgroundColor: '#ffffff',
});

export default function SelectedOption({ option }) {
  return (
    <P>
      {option}
    </P>
  );
}
