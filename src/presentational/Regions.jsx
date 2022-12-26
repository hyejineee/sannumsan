import React, { useState } from 'react';

import styled from '@emotion/styled';

import * as regionImages from 'asset/image/region';

const Container = styled.div({
  'position': 'relative',
  '& input': {
    opacity: '0',
    width: '0',
    height: '0',
  },
  '& input:checked + label': {
    borderRadius: '22px',
    boxShadow: '0 3px 37px -10px #cfcfcf',
  },
});

const Map = styled.span(({ image, hovered, checked }) => ({
  width: '26rem',
  height: '49rem',
  display: 'inline-block',
  position: 'absolute',
  top: '-7.5rem',
  right: '0',
  backgroundImage: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  filter: (hovered || checked)
    ? 'invert(40%) sepia(86%) saturate(1156%) hue-rotate(196deg) brightness(108%) contrast(100%)' : '',
}));

const Label = styled.label(({ theme }) => ({
  'display': 'inline-block',
  'font': theme.typos.m,
  'color': theme.colors.main,
  'width': '7rem',
  'height': '2.4rem',
  'padding': '0.3rem 0.5rem',
  ': hover': {
    borderRadius: '22px',
    boxShadow: '0 3px 37px -10px #cfcfcf',
  },

}));

const Grid = styled.div({
  position: 'absolute',
  width: '30%',
  display: 'grid',
  top: '7.5rem',
  gap: '25px 0',
  gridTemplateRows: 'repeat(6, 1fr)',
  gridTemplateColumns: 'repeat(3, 1fr)',
  textAlign: 'center',
  gridAutoFlow: 'column',
});

export default function Regions({ regions, onChange }) {
  const [state, setState] = useState({
    hover: null,
    checked: null,
  });

  function handleChange(event, id) {
    const { target } = event;

    setState({
      ...state,
      checked: id,
    });

    onChange({ name: target.name, value: target.value });
  }

  function handleMouseEnter(id) {
    setState({
      ...state,
      hover: id,
    });
  }

  function handleMouseLeave() {
    setState({
      ...state,
      hover: null,
    });
  }

  return (
    <Container>

      <Grid>
        {
          regions.map(({ id, option }) => (

            <div
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={() => handleMouseLeave(id)}
            >
              <input
                type="radio"
                name="region"
                id={`${'region'}-${id}`}
                value={option}
                onChange={(e) => handleChange(e, id)}
              />
              <Label htmlFor={`region-${id}`}>
                {option}
              </Label>
            </div>

          ))
        }
      </Grid>

      {
        regions.map(({ id }) => (
          <div>
            <Map
              id={`region${id}`}
              image={regionImages[`region${id}`].default}
              hovered={id === state.hover}
              checked={id === state.checked}
            />
          </div>
        ))
      }
    </Container>
  );
}
