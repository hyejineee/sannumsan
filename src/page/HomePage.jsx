import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import Context from 'style/Context';

import backgroud from 'asset/image/background.png';

const Container = styled.div(() => ({
  'height': '100vh',
  'boxSizing': 'border-box',
  'backgroundImage': `url(${backgroud})`,
  'backgroundRepeat': 'no-repeat',
  'backgroundSize': 'auto 85%',
  'backgroundPosition': 'right bottom',

}));

const ContentsBox = styled.div(({ theme }) => ({
  'position': 'absolute',
  'marginTop': '12rem',
  'marginLeft': '10rem',

  '& p': {
    marginTop: '2.3rem',
    marginBottom: '23rem',
  },

  '& a': {
    font: theme.typos.xl,
    color: theme.colors.main,
  },
}));

const Title = styled.h1(({ theme }) => ({
  font: theme.typos.l,
  color: theme.colors.main,
}));

export default function HomePage() {
  return (
    <Container>

      <ContentsBox>
        <Title>당신만의 등산로를 찾아드립니다!</Title>
        <Context>
          나에게 맞는 등산로는 어디에 있을까요?
          {' '}
          <br />
          나의 등산 실력, 등산의 목적, 그리고 등산을 원하는 계절까지
          {' '}
          <br />
          간편하게 선택하고 여기저기 숨겨진 나만의 등산로를 찾아보세요!
          {' '}
          <br />
        </Context>

        <Link to="/questions">
          Start
        </Link>
      </ContentsBox>

    </Container>
  );
}
