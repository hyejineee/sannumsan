import React, { useState } from 'react';

import styled from '@emotion/styled';

import leftIcon from 'asset/image/left.svg';
import rightIcon from 'asset/image/right.svg';
import noResultImage from 'asset/image/noresult.svg';

import CourseItem from 'presentational/CourseItem';

const Container = styled.div({
  'display': 'flex',
  'alignItems': 'flex-start',
});

const List = styled.ul({
  'flex': '1 0 0',
  'height': '100%',
  'display': 'grid',
  'gridAutoColumns': 'minmax(50%, 50%)',
  'gridTemplateRows': 'repeat(2, 50%)',
  'gridAutoFlow': 'column',
  'overflow': 'hidden',
});

const Item = styled.li(({ page }) => ({
  'boxSizing': 'border-box',
  'padding': '0.5rem',
  'transition': 'all .5s',
  'transform': `translateX(-${page * 200}%)`,
  '& button': {
    'height': '100%',
    'width': '100%',
    'background': 'none',
    'boxSizing': 'border-box',
    'borderRadius': '5px',
    'border': 'solid 1px rgba(151, 151, 151, 0.32)',
    ':hover': {
      boxShadow: '0 3px 37px -10px #cfcfcf',
    },
    ': focus': {
      boxShadow: '0 3px 37px -10px #cfcfcf',
    },
  },
}));

const ArrowButton = styled.button({
  'flex': '0.1 0 0',
  'height': 'auto',
  'padding': '0',
  'margin': '0',
  'background': 'none',
  'border': '0',
  'alignSelf': 'center',
});

const NoResultImage = styled.img({
  width: '60%',
  height: 'auto',
  margin: '0 auto',
  display: 'block',
});

const NoResultText = styled.p(({ theme }) => ({
  color: theme.colors.main,
  font: theme.typos.l,
  textAlign: 'center',
  marginTop: '1rem',
}));

export default function Courses({ courses, onClick }) {
  if (courses.length <= 0) {
    return (
      <div>
        <NoResultImage alt="등산 코스 없음" src={noResultImage} />
        <NoResultText>찾으시는 등산 코스가 없어요ㅠㅠ</NoResultText>
      </div>
    );
  }

  const [state, setState] = useState({
    currentPage: 0,
    totalPage: Math.floor(courses.length / 4),
  });

  const previousPage = () => {
    setState({
      ...state,
      currentPage: state.currentPage !== 0 ? state.currentPage - 1 : 0,
    });
  };

  const nextPage = () => {
    if (state.currentPage < state.totalPage) {
      setState({
        ...state,
        currentPage: state.currentPage + 1,
      });
    }
  };

  return (
    <Container>

      <ArrowButton type="button" onClick={previousPage} name="left">
        <img src={leftIcon} alt="left" />
      </ArrowButton>

      <List>
        {
          courses.map((course) => (
            <Item page={state.currentPage}>
              <button type="button" onClick={() => onClick(course.id)}>
                <CourseItem
                  key={course.id}
                  course={course}
                />
              </button>
            </Item>
          ))
        }
      </List>

      <ArrowButton type="button" onClick={nextPage} name="right">
        <img src={rightIcon} alt="right" />
      </ArrowButton>

    </Container>
  );
}
