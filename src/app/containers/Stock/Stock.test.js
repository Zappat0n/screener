import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Stock from './Stock';
import { renderComponent } from '../../test-utils';

renderComponent(
  <table>
    <tbody>
      <Stock ticker="AAPL" />
    </tbody>
  </table>,
);

test('Renders Stock correctly', () => {
  expect(screen.getByText('Apple Inc')).toBeInTheDocument();
  expect(screen.getAllByText('100')[0]).toBeInTheDocument();
  expect(screen.getByText('1%')).toBeInTheDocument();
  expect(screen.getByText('Technology')).toBeInTheDocument();
});
