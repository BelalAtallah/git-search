import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RepositoryCard } from ".";

describe("RepositoryCard Component", () => {
  const mockRepo = {
    id: 1,
    node_id: "",
    html_url: "",
    full_name: "test/repo",
    owner: {
      id: 1,
      login: "s",
      node_id: "2",
      html_url: "https://github.com/test/repo",
      avatar_url: "avatar_url.jpg",
    },
    name: "repo",
    description: "This is a test repository",
    language: "JavaScript",
    handleViewMore: jest.fn(),
    forks_url: "",
    languages_url: "",
    topics: [],
    created_at: "",
    stargazers_count: 0,
    open_issues_count: 0,
    watchers_count: 0,
    forks_count: 0,
  };

  it("renders the repository data correctly", () => {
    render(<RepositoryCard {...mockRepo} />);

    expect(screen.getByText(mockRepo.full_name)).toBeInTheDocument();
    expect(screen.getByText(mockRepo.description)).toBeInTheDocument();
    expect(screen.getByText(mockRepo.language)).toBeInTheDocument();
    expect(screen.getByText(mockRepo.name)).toBeInTheDocument();
    expect(
      screen.getByAltText(`Repository ${mockRepo.full_name} logo`)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /view more/i })
    ).toBeInTheDocument();
  });

  it("calls handleViewMore when the button is clicked", () => {
    render(<RepositoryCard {...mockRepo} />);

    const button = screen.getByRole("button", { name: /view more/i });
    fireEvent.click(button);

    expect(mockRepo.handleViewMore).toHaveBeenCalledWith(mockRepo);
  });
});
