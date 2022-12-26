import React from 'react';

import CoursesContainer from 'container/CoursesContainer';
import CourseMapContainer from 'container/CourseMapContainer';
import SelectedOptionContainer from 'container/SelectedOptionContainer';

import Layout from 'presentational/Layout';

import styled from '@emotion/styled';

const OptionBox = styled.div({
  height: '30%',
  boxSizing: 'border-box',
});

const CourseBox = styled.div({
  'display': 'flex',
  'width': '100%',
  'height': '70%',
  'boxSizing': 'border-box',
  '& div:first-child': {
    flex: '2 1 0',
  },

  '& div:last-child': {
    flex: '1.5 1 0',
  },

});

export default function ResultPage() {
  return (
    <Layout>
      <OptionBox>
        <SelectedOptionContainer />
      </OptionBox>

      <CourseBox>
        <CoursesContainer />
        <CourseMapContainer />
      </CourseBox>
    </Layout>
  );
}
