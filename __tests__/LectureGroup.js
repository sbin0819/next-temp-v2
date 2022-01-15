/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import LectureGroup from '../components/Lecture/LectureGroup';

describe('App', () => {
  it('제목을 가지고 있어야 한다.', () => {
    const { getByRole } = render(<LectureGroup />);
    const lectureTitle = getByRole('heading', { name: /이번주/ });

    expect(lectureTitle).toBeInTheDocument();
  });

  it('뱃지를 가지고 있어야 한다.', () => {
    const { getByText } = render(<LectureGroup />);
    const badge = getByText(/best/i);

    expect(badge).toBeInTheDocument();
  });
});
