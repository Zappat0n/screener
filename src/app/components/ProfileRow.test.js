import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import ProfileRow from './ProfileRow';
import { renderComponent } from '../test-utils';

renderComponent(
  <ProfileRow title1="Name" data1="Me" title2="Sector" data2="Mine" />,
);

test('Renders Index correctly', () => {
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Me')).toBeInTheDocument();
  expect(screen.getByText('Sector')).toBeInTheDocument();
  expect(screen.getByText('Mine')).toBeInTheDocument();
});
