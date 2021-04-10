import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Profile from './Profile';
import { renderComponent, rendererForComponent } from '../../test-utils';

test('Renders Profile correctly', () => {
  renderComponent(
    <Profile ticker="MSFT" />,
  );
  expect(screen.getByText('Microsoft')).toBeInTheDocument();
  expect(screen.getAllByText('100')[0]).toBeInTheDocument();
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('1000000')).toBeInTheDocument();
  expect(screen.getByText('0-100')).toBeInTheDocument();
  expect(screen.getByText('US')).toBeInTheDocument();
});

test('Profile Match SnapShot', () => {
  const tree = rendererForComponent(
    <Profile ticker="MSFT" />,
  );
  expect(tree).toMatchSnapshot();
});
