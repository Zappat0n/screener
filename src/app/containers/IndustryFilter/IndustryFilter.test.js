import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import IndustryFilter from './IndustryFilter';
import Stocks from '../Stocks/Stocks';
import { renderComponent } from '../../test-utils';

renderComponent(
  <>
    <Stocks />
    <IndustryFilter handleChange={() => {}} />
  </>,
);

test('Renders Filter correctly', () => {
  expect(screen.getAllByText('Technology')[0]).toBeInTheDocument();
  expect(screen.getAllByText('All')[0]).toBeInTheDocument();
});
