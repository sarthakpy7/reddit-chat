import { render, screen, fireEvent } from '@testing-library/react';
import Comment from './Comment'; // Adjust the import based on where your Comment component is

const comment = {
  id: 1,
  username: "jane_smith",
  content: "This is a comment",
  timestamp: "1 hour ago",
  avatar: "https://www.flaticon.com/free-icon/avatar_6858504",
  replies: [],
};

test('renders comment content and username', () => {
  render(<Comment {...comment} />);
  
  // Check if comment content and username are rendered
  expect(screen.getByText("This is a comment")).toBeInTheDocument();
  expect(screen.getByText("jane_smith")).toBeInTheDocument();
});

test('toggles replies visibility', () => {
  const commentWithReplies = {
    ...comment,
    replies: [
      {
        id: 2,
        username: "john_doe",
        content: "This is a reply",
        timestamp: "30 minutes ago",
        avatar: "https://www.flaticon.com/free-icon/avatar_6858504",
        replies: [],
      },
    ],
  };

  render(<Comment {...commentWithReplies} />);

  // Initially, replies should be hidden
  expect(screen.queryByText("This is a reply")).not.toBeInTheDocument();

  // Toggle replies visibility
  fireEvent.click(screen.getByText("Show Replies (1)"));
  
  // Check if the reply is now visible
  expect(screen.getByText("This is a reply")).toBeInTheDocument();

  // Hide the replies again
  fireEvent.click(screen.getByText("Hide Replies"));
  expect(screen.queryByText("This is a reply")).not.toBeInTheDocument();
});
