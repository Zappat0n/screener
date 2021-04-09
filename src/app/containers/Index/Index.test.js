import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Index from './Index';
import { renderComponent } from '../../test-utils';

renderComponent(
  <Index ticker="GSPC" />,
);

test('Renders Index correctly', () => {
  expect(screen.getByText('S&P 500')).toBeInTheDocument();
});
