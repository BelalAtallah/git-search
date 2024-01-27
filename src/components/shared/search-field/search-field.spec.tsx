import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchField } from '.';

describe('SearchField Component', () => {
  it('renders input with the correct value', () => {
    const mockOnChange = jest.fn();
    render(<SearchField value="test" onChange={mockOnChange} />);

    const inputElement = screen.getByPlaceholderText("Search By...");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('test');
  });

  it('calls onChange handler with the new value when input changes', () => {
    const mockOnChange = jest.fn();
    render(<SearchField value="" onChange={mockOnChange} />);

    const inputElement = screen.getByPlaceholderText("Search By...");
    fireEvent.change(inputElement, { target: { value: 'new value' } });

    expect(mockOnChange).toHaveBeenCalledWith('new value');
  });

  it('calls onChange handler with an empty string when reset button is clicked', () => {
    const mockOnChange = jest.fn();
    render(<SearchField value="test" onChange={mockOnChange} />);

    const resetButton = screen.getByRole('button', { name: /reset/i });
    fireEvent.click(resetButton);

    expect(mockOnChange).toHaveBeenCalledWith('');
  });
});
