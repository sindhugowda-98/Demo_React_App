import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the welcome message', () => {
  render(<App />);
  expect(screen.getByText(/welcome to demo react app/i)).toBeInTheDocument();
});
