import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Stocks from './Stocks';
import { renderComponent, rendererForComponent } from '../../test-utils';

test('Renders Stocks correctly', () => {
  renderComponent(
    <Stocks ticker="GSPC" />,
  );
  expect(screen.getByText('Apple Inc')).toBeInTheDocument();
  expect(screen.getByText('Microsoft')).toBeInTheDocument();
  expect(screen.getByText('Google')).toBeInTheDocument();
});

test('Stocks Match SnapShot', () => {
  const tree = rendererForComponent(
    <Stocks ticker="GSPC" />,
  );
  expect(tree).toMatchSnapshot();
});
