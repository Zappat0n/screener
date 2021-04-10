import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Index from './Index';
import { renderComponent, rendererForComponent } from '../../test-utils';

test('Renders Index correctly', () => {
  renderComponent(
    <Index ticker="GSPC" />,
  );
  expect(screen.getByText('S&P 500')).toBeInTheDocument();
});

test('Index Match SnapShot', () => {
  const tree = rendererForComponent(
    <Index ticker="GSPC" />,
  );
  expect(tree).toMatchSnapshot();
});
