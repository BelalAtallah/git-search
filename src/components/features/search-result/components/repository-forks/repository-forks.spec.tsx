import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RepositoryForks } from '.';


describe('RepositoryForks Component', () => {
  const mockForks = [
    { id: 1, repo_link: 'https://github.com/user1/repo', avatar_url: 'avatar1.jpg', login: 'user1', html_url:'link', node_id:'123' },
    { id: 2, repo_link: 'https://github.com/user2/repo', avatar_url: 'avatar2.jpg', login: 'user2', html_url:'link', node_id:'123' },
  ];

  it('renders the forks correctly', () => {
    render(<RepositoryForks forks={mockForks} />);

    mockForks.forEach(fork => {
      expect(screen.getByAltText(`Repository ${fork.login} logo`)).toHaveAttribute('src', fork.avatar_url);
      expect(screen.getByText(fork.login)).toBeInTheDocument();
      expect(screen.getByTestId(`fork-link-${fork.id}`)).toHaveAttribute('href', fork.repo_link);
    });
  });
});
