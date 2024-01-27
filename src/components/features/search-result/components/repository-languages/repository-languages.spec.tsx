import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RepositoryLanguages } from '.';

describe('RepositoryLanguages Component', () => {
  const mockLanguages = ['JavaScript', 'Python', 'HTML'];

  it('renders the language list correctly', () => {
    render(<RepositoryLanguages languages={mockLanguages} />);

    mockLanguages.forEach(language => {
      expect(screen.getByText(language)).toBeInTheDocument();
    });
  });
});
