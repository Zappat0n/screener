import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Indexes from './Indexes';
import { renderComponent } from '../../test-utils';

renderComponent(
  <Indexes />,
);

test('Renders Index correctly', () => {
  expect(screen.getByText('S&P 500')).toBeInTheDocument();
  expect(screen.getByText('NASDAQ 100')).toBeInTheDocument();
  expect(screen.getByText('ESTX 50 PR.EUR')).toBeInTheDocument();
});
