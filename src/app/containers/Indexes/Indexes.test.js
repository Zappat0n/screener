import React from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import Indexes from './Indexes';
import { renderComponent, rendererForComponent } from '../../test-utils';

test('Renders Indexes correctly', () => {
  renderComponent(
    <Indexes />,
  );
  expect(screen.getByText('S&P 500')).toBeInTheDocument();
  expect(screen.getByText('NASDAQ 100')).toBeInTheDocument();
  expect(screen.getByText('ESTX 50 PR.EUR')).toBeInTheDocument();
});

test('Indexes Match SnapShot', () => {
  const tree = rendererForComponent(
    <Indexes />,
  );
  expect(tree).toMatchSnapshot();
});

/*
test('Display Stocks', () => {
  renderComponent(
    <Indexes />,
  );

  fireEvent.click(screen.getByText('S&P 500'), { button: 1 });
  expect(screen.findByText('Apple')).toBeInTheDocument();
});
*/
