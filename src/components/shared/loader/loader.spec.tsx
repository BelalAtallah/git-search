import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Loader } from '.';

describe('Loader Component', () => {
  it('renders a spinner and loading text', () => {
    render(<Loader />);

    const spinnerElement = screen.getByTestId('spinner');
    const loadingText = screen.getByText(/loading\.\.\./i);

    expect(spinnerElement).toBeInTheDocument();
    expect(loadingText).toBeInTheDocument();
  });
});
