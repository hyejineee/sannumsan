import React, { useEffect, useRef } from 'react';

import styled from '@emotion/styled';

import { NaverMap } from 'react-naver-maps';

const Container = styled.div({
  width: '50%',
  flex: '1 0 50%',
});

export default function CourseMap({ courseGPX }) {
  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current !== null && courseGPX !== undefined) {
      const ref = mapRef.current;
      try {
        const map = ref.instance;
        map.data.addGpx(courseGPX, true);
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <Container>
      <NaverMap
        naverRef={(ref) => { mapRef.current = ref; }}
        style={{ height: '100%' }}
      />
    </Container>
  );
}
