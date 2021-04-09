import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Profile from './Profile';
import { renderComponent } from '../../test-utils';

renderComponent(
  <Profile ticker="MSFT" />,
);

test('Renders Stock correctly', () => {
  expect(screen.getByText('Microsoft')).toBeInTheDocument();
  expect(screen.getAllByText('100')[0]).toBeInTheDocument();
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('1000000')).toBeInTheDocument();
  expect(screen.getByText('0-100')).toBeInTheDocument();
  expect(screen.getByText('US')).toBeInTheDocument();
});
