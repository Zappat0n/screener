import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Stock from './Stock';

test('calculates percentage correctly', () => {
  render(<Stock key="AAPL" ticker="AAPL" handleClick={null} />);
});
