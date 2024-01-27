import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RepositoryStats } from '.'; 

describe('RepositoryStats Component', () => {
  const mockStatistics = [
    { label: 'Stars', value: 150 },
    { label: 'Forks', value: 75 },
    { label: 'Watchers', value: 100 }
  ];

  it('renders the statistics correctly', () => {
    render(<RepositoryStats statistics={mockStatistics} />);

    mockStatistics.forEach(stat => {
      expect(screen.getByText(stat.label)).toBeInTheDocument();
      expect(screen.getByText(stat.value.toString())).toBeInTheDocument();
    });
  });
});
