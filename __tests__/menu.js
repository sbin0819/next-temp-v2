/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import Menu from '../components/Menu';

describe('App', () => {
  it('메뉴가 렌더링 되어야 한다.', () => {
    const { getByText } = render(<Menu />);

    const menu = getByText('패스트캠퍼스');

    expect(menu).toBeInTheDocument();
  });
});
