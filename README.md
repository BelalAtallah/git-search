
# GitSearch ![git-search-action-status](https://github.com/BelalAtallah/git-search/actions/workflows/actions.yml/badge.svg)  ![Jest coverage](./badges/coverage-jest%20coverage.svg) ![Jest coverage](./badges/coverage-statements.svg)  ![Jest coverage](./badges/coverage-functions.svg) ![Jest coverage](./badges/coverage-lines.svg)

<p align="center">
  <img src="./public/github-avatar.png" width="300px" height="300px" alt="Git-Search">
</p>
A GitHub Searcher app for searching repositories and users, built with:


![nextjs](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
)![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
)![tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
)![jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white
)![github-actions](https://img.shields.io/badge/Github%20Actions-282a2e?style=for-the-badge&logo=githubactions&logoColor=367cfe
)

## Demo 🔻
- Direct link [(link)](https://jzsssq-3000.csb.app/search)
- Sandbox link [(link)](https://codesandbox.io/p/github/BelalAtallah/git-search/main?file=%2F.codesandbox%2Ftasks.json&workspaceId=fa509c70-06f2-42db-8869-0e0bf5b8b76b)

## Features 🔻
- [x] Select: you should be able to select search type between 'repositories' and 'users' and do a search based on this type.
- [x]  Search: When a user enters a query and 'user' type is selected, it should be able to get a list of users matching this query.
    - [x]  Show the user avatar, name and the link to his profile.
- [x]  Search: When a user enters a query and 'repository' type is selected, it should be able to get a full list of public repositories matching this query.
    - [x]  Filetype: Convert the filetypes of the files in the repository into a tag/badge, (e.g, if the returned repository has a list of files containing python and javascript files, the repository should have the respective tags/badges).
    - [x]  Fork: Username/Avatar of the last 3 users who forked it with avatar linking to the fork.
    - [x]  Any other additional information, you'd like to show.
-  [x] Handle the empty/error/loading states.
-  [x] Pagination: add the infinite scroll pagination.

## Routes 🔻
- `'/'` - Home page [(Localhost Link)](http://localhost:3000/)
- `'/search'` - Search page for searching repositories and users [(Localhost Link)](http://localhost:3000/search)

## Running The Project 🔻
1. Install [NodeJS](https://nodejs.org/en)
2. Open the project with your IDE of choice
3. Rename the `.env.example` to `.env.local`
4. Replace the `API_TOKEN=your_github_api_token` with your [GitHub API token]('https://github.com/settings/tokens')
5. Install the dependencies `yarn install` or `npm install`
6. Run the development server `npm run dev` or `yarn run dev`
7. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Running Tests 🔻
Run the `npm run test` command, it will give you a full **coverage** report.


