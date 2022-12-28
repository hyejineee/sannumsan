import React from 'react';

import styled from '@emotion/styled';

import Context from 'style/Context';

import QuestionTitle from 'style/QuestionTitle';

import Regions from 'presentational/Regions';
import Options from 'presentational/Options';

const Box = styled.div(({ translate }) => ({
  'boxSizing': 'border-box',
  'flex': '0 0 100%',
  'width': '100%',
  'height': '100%',
  ' > div': {
    'transform': `translateX(-${translate * 100}%)`,
    'transition': 'all .5s',
  },
}));

export default function QuestionItem({
  question: {
    category, question, options, sub,
  },
  onChange,
  translate,
}) {
  const Option = () => {
    if (category === 'region') {
      return (<Regions regions={options} onChange={onChange} />);
    }

    return (
      <Options
        options={options}
        category={category}
        onChange={onChange}
      />
    );
  };

  return (
    <Box translate={translate}>
      <div id={category}>
        <QuestionTitle>{question}</QuestionTitle>
        <Context>{sub}</Context>

        {
          Option()
        }

      </div>
    </Box>
  );
}
