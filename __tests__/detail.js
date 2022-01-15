/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import Detail from '../pages/detail';

describe('App', () => {
  it('강의 목록이 렌더링 되어야 한다.', () => {
    const { getByTitle } = render(<Detail />);
    const lectureList = getByTitle('lectureList', {
      name: '강의목록',
    });

    expect(lectureList).toBeInTheDocument();
  });

  it('강의 목록이 렌더링 되어야 한다.', () => {
    const { getByTitle } = render(<Detail />);
    const lectureList = getByTitle('lectureList', {
      name: '강의목록',
    });

    expect(lectureList).toBeInTheDocument();
  });
});
