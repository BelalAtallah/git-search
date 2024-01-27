import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Select } from "./";

describe("Select Component", () => {
  it("renders the options correctly", () => {
    const options = [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
    ];
    render(<Select value="" onChange={() => {}} options={options} />);

    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it("calls onChange handler with the right value when an option is selected", () => {
    const options = [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
    ];
    const mockOnChange = jest.fn();
    render(
      <Select
        value={options[0].value}
        onChange={mockOnChange}
        options={options}
      />
    );

    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: options[1].value } });

    expect(mockOnChange).toHaveBeenCalledWith(options[1].value);
  });
});
