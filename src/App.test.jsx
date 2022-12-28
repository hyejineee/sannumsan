import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';

import theme from 'style/theme';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useDispatch.mockImplementation(() => jest.fn());
  useSelector.mockImplementation((selector) => selector({
    selectedOptions: {
      region: '',
      climbingLevel: '',
      season: '',
      activity: '',
    },
    courses: [],
    coureGPX: '',
  }));

  function renderApp({ path }) {
    return render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>
      </ThemeProvider>,
    );
  }

  context('with path /', () => {
    it('renders the home page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('당신만의 등산로를 찾아드립니다!');
    });
  });

  context('with path /questions', () => {
    it('renders the qustions page', () => {
      const { container } = renderApp({ path: '/questions' });

      expect(container).toHaveTextContent('지역을 선택해 주세요.');
    });
  });
});
