import React from 'react';

import { Link } from 'react-router-dom';

import homeIcon from 'asset/image/home.svg';

import styled from '@emotion/styled';

const Container = styled.div({
  width: '100%',
  height: '100vh',
  boxSizing: 'border-box',
});

const Header = styled.header({
  'height': '7%',
  'position': 'relative',
  '& img': {
    position: 'absolute',
    top: '2rem',
    left: '5rem',
    height: '100%',
  },
});

const ContentBox = styled.div({
  height: '93%',
  width: '90%',
  margin: '0 auto',
  boxSizing: 'border-box',
  padding: '3rem',

});

export default function Layout({ children }) {
  return (
    <Container>
      <Header>
        <Link to="/">
          <img src={homeIcon} alt="goToHome" />
        </Link>
      </Header>
      <ContentBox>
        {children}
      </ContentBox>
    </Container>
  );
}
