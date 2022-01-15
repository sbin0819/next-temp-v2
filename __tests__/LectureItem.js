/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import LectureItem from '../components/Lecture/LectureItem';

describe('강의 아이템은', () => {
  it('썸네일을 가지고 있어야 한다....', () => {
    const { getByAltText } = render(<LectureItem />);

    const Thumb = getByAltText('초격차 패키지');
    expect(Thumb).toBeInTheDocument();
  });

  it('뱃지를 가지고 있어야 한다....', () => {
    const { getByText } = render(<LectureItem />);

    const Badge = getByText('평생소장');
    expect(Badge).toBeInTheDocument();
  });

  it('강의 제목을 렌더링 할 수 있어야 한다....', () => {
    const { getByRole } = render(<LectureItem />);

    const Title = getByRole('heading', { name: '초격차 패키지' });
    expect(Title).toBeInTheDocument();
  });

  it('강의 설명을 렌더링 할 수 있어야 한다....', () => {
    const { getByText } = render(<LectureItem />);

    const Title = getByText(/최고의 강의/i);
    expect(Title).toBeInTheDocument();
  });
});
