/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import Index from '../pages/index';

describe('App', () => {
  it('렌더링 되어야 한다.', () => {
    render(<Index />);
  });
});
