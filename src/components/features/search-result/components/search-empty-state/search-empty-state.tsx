import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchEmptyState } from ".";

describe("SearchEmptyState Component", () => {
  it("renders the empty state correctly", () => {
    render(<SearchEmptyState />);
    expect(screen.getByTestId("hand")).toBeInTheDocument();
    expect(screen.getByText("what you waiting for?")).toBeInTheDocument();
  });
});
