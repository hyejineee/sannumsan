import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  'height': '100%',
  'padding ': '1rem 1.5rem',
  'position': 'relative',
  ' & p': {
    position: 'relative',
    textAlign: 'start',
  },

});

const CourseTitle = styled.p(({ theme }) => ({
  color: theme.colors.main,
  font: theme.typos.xs,
  maxWidth: '200px',
}));

const MountainName = styled.p(({ theme }) => ({
  color: theme.colors.main,
  font: theme.typos.s,
  opacity: '0.58',
  maxWidth: '200px',
}));

const TagBox = styled.div({
  position: 'absolute',
  bottom: '3rem',
  textAlign: 'start',
});

const Tag = styled.p(({ theme }) => ({
  width: 'auto',
  height: 'auto',
  display: 'inline-block',
  backgroundColor: theme.colors.sub2,
  color: theme.colors.main,
  font: theme.typos.ss,
  borderRadius: '14.5px',
  margin: '.15rem',
  padding: '.2rem 1rem',
  textAlign: 'start',
}));

const Time = styled.div(({ theme }) => ({
  color: theme.colors.main,
  font: theme.typos.xs,
  position: 'absolute',
  right: '1rem',
  top: '1rem',
}));

const Distance = styled.div(({ theme }) => ({
  color: theme.colors.main,
  font: theme.typos.ss,
  position: 'absolute',
  right: '1rem',
  opacity: '0.58',
  top: '3rem',
}));

export default function CourseItem({
  course: {
    courseName, mountainName, time, distance, tags,
  },
}) {
  return (
    <Container>
      <CourseTitle>
        {courseName}
      </CourseTitle>

      <MountainName>
        {mountainName}
      </MountainName>

      <Time>
        {time}
      </Time>

      <Distance>
        (
        {distance}
        )
      </Distance>

      <TagBox>
        {
          tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))
        }
      </TagBox>

    </Container>
  );
}
