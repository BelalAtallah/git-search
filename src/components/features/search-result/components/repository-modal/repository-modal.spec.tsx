/* eslint-disable react/display-name */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RepositoryModal } from ".";

jest.mock("../repository-languages", () => ({
  RepositoryLanguages: () => (
    <div data-testid="mock-repository-languages">Languages</div>
  ),
}));

jest.mock("../repository-forks", () => ({
  RepositoryForks: () => (
    <div data-testid="mock-repository-languages">Languages</div>
  ),
}));

jest.mock("../repository-stats", () => ({
  RepositoryStats: () => <div data-testid="mock-repository-stats">Stats</div>,
}));

describe("RepositoryModal Component", () => {
  const mockRepo = {
    owner: {
      id: 1,
      node_id: "",
      avatar_url: "avatar_url.jpg",
      login: "user1",
      html_url: "https://github.com/user1",
    },
    full_name: "user1/repo",
    created_at: "2020-01-01",
    description: "This is a test repository",
    watchers_count: 10,
    open_issues_count: 5,
    stargazers_count: 20,
    forks: [],
    languages: ["JavaScript"],
    id: 12,
    node_id: "id",
    name: "test",
    html_url: "link",
    forks_url: "",
    language: "",
    languages_url: "",
    topics: [],
    forks_count: 0,
  };

  it("renders repository information correctly", () => {
    render(<RepositoryModal {...mockRepo} />);

    expect(screen.getByText(mockRepo.full_name)).toBeInTheDocument();
    expect(screen.getByText(`@${mockRepo.owner.login}`)).toHaveAttribute(
      "href",
      mockRepo.owner.html_url
    );
    expect(
      screen.getByText(
        `Created ${new Date(mockRepo.created_at).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}`
      )
    ).toBeInTheDocument();
    expect(screen.getByText(mockRepo.description)).toBeInTheDocument();
    expect(
      screen.getByAltText(`Repository ${mockRepo.full_name} logo`)
    ).toHaveAttribute("src", mockRepo.owner.avatar_url);
  });

  it("renders RepositoryStats, RepositoryLanguages, and RepositoryForks", () => {
    render(<RepositoryModal {...mockRepo} />);

    expect(screen.getByTestId("mock-repository-stats")).toBeInTheDocument();
    expect(screen.getByTestId("mock-repository-languages")).toBeInTheDocument();
    expect(
      screen.queryByTestId("mock-repository-forks")
    ).not.toBeInTheDocument(); // No forks in mock data
  });

  it("renders fallback text if no description", () => {
    render(<RepositoryModal {...mockRepo} description="" />);

    expect(
      screen.getByText("This Repo has no description")
    ).toBeInTheDocument();
  });
});
