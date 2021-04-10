import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Stock from './Stock';
import { renderComponent, rendererForComponent } from '../../test-utils';

test('Renders Stock correctly', () => {
  renderComponent(
    <table>
      <tbody>
        <Stock ticker="AAPL" />
      </tbody>
    </table>,
  );
  expect(screen.getByText('Apple Inc')).toBeInTheDocument();
  expect(screen.getAllByText('100')[0]).toBeInTheDocument();
  expect(screen.getByText('1%')).toBeInTheDocument();
  expect(screen.getByText('Technology')).toBeInTheDocument();
});

test('Stock Match SnapShot', () => {
  const tree = rendererForComponent(
    <table>
      <tbody>
        <Stock ticker="AAPL" />
      </tbody>
    </table>,
  );
  expect(tree).toMatchSnapshot();
});
