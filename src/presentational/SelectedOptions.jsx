import React from 'react';

import styled from '@emotion/styled';

import SelectedOption from 'presentational/SelectedOption';

const Container = styled.div(({ theme }) => ({
  font: theme.typos.l,
  textAlign: 'center',
  color: theme.colors.main,
}));

export default function SelectedOptions({ selectedOptions }) {
  const {
    region, level, season, activity,
  } = selectedOptions;

  return (
    <Container>
      <SelectedOption option={region} />
      {' '}
      에서
      <SelectedOption option={level} />
      {' '}
      를 위한
      <br />
      <SelectedOption option={season} />
      에 제격인
      {' '}
      <SelectedOption option={activity} />
      {' '}
      목적의 등산로입니다!
    </Container>
  );
}
