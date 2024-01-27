import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '.';

describe('Modal Component', () => {
  it('renders children correctly', () => {
    const handleClose = jest.fn();
    render(
      <Modal handleClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('closes when the backdrop is clicked', () => {
    const handleClose = jest.fn();
    render(
      <Modal handleClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.click(screen.getByTestId('backdrop'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not close when the modal content is clicked', () => {
    const handleClose = jest.fn();
    render(
      <Modal handleClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.click(screen.getByText('Modal Content'));
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('closes when the close button is clicked', () => {
    const handleClose = jest.fn();
    render(
      <Modal handleClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.click(screen.getByText('X'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
