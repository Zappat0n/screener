import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import IndustryFilter from './IndustryFilter';
import Stocks from '../Stocks/Stocks';
import { renderComponent, rendererForComponent } from '../../test-utils';

test('Renders Filter correctly', () => {
  renderComponent(
    <>
      <Stocks />
      <IndustryFilter handleChange={() => {}} />
    </>,
  );
  expect(screen.getAllByText('Technology')[0]).toBeInTheDocument();
  expect(screen.getAllByText('All')[0]).toBeInTheDocument();
});

test('Index Match SnapShot', () => {
  const tree = rendererForComponent(
    <>
      <Stocks />
      <IndustryFilter handleChange={() => {}} />
    </>,
  );
  expect(tree).toMatchSnapshot();
});
