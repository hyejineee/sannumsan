import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import MockTheme from 'utils/MockTheme';

import Courses from './Courses';

import courses from '../../features/courses';

describe('Courses', () => {
  const handleClick = jest.fn();

  function renderCourses(data) {
    return render(
      <MockTheme>
        <Courses courses={data} onClick={handleClick} />
      </MockTheme>,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render courses', () => {
    const { container } = renderCourses(courses);
    expect(container).toHaveTextContent('소요산');
  });

  // describe('click course item', () => {
  //   it('calls onClick', () => {
  //     const { getByRole } = render(courses);

  //     fireEvent.click(getByRole('button'));

  //     expect(handleClick).toBeCalled();
  //   });
  // });

  describe('click arrow button', () => {
    it('click right button', () => {
      const { getByRole } = renderCourses(courses);

      fireEvent.click(getByRole('button', { name: 'right' }));

      fireEvent.click(getByRole('button', { name: 'left' }));
    });
  });

  context('without courses', () => {
    const { getByAltText } = renderCourses([]);
    expect(getByAltText('등산 코스 없음')).toBeInTheDocument();
  });
});
