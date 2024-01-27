import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Backdrop from "."; 

describe("Backdrop Component", () => {
  it("renders children correctly", () => {
    render(
      <Backdrop onClick={() => {}}>
        <div>Backdrop Content</div>
      </Backdrop>
    );

    expect(screen.getByText("Backdrop Content")).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const mockOnClick = jest.fn();
    render(
      <Backdrop onClick={mockOnClick}>
        <div>Backdrop Content</div>
      </Backdrop>
    );

    fireEvent.click(screen.getByTestId("backdrop"));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
