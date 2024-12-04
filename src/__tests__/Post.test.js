import { render, screen } from '@testing-library/react';
import Post from './Post'; // Adjust the import based on where your Post component is

test('renders post content and username', () => {
  const post = {
    username: "john_doe",
    content: "This is a post",
    timestamp: "2 hours ago",
    avatar: "https://www.flaticon.com/free-icon/avatar_6858504",
  };

  render(<Post {...post} />);

  // Check if post content and username are rendered
  expect(screen.getByText("This is a post")).toBeInTheDocument();
  expect(screen.getByText("john_doe")).toBeInTheDocument();
});
