import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '.';

describe('Card Component', () => {
  it('renders the title and children correctly', () => {
    const title = 'Test Title';
    render(
      <Card title={title}>
        <div>Card Content</div>
      </Card>
    );

    const titleElement = screen.getByText(title);
    const contentElement = screen.getByText('Card Content');

    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});
