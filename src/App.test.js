import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the post and comments', () => {
  render(<App />);
  expect(screen.getByText(/I love my dog/i)).toBeInTheDocument();
  expect(screen.getByText(/Yeah my dog is wonderful/i)).toBeInTheDocument();
});
