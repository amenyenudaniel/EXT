# HelpMeOut - Frontend

This is a `Nextjs, Typescript and Tailwindcss` project.

## Getting Started

#### First clone the repo

```bash
git clone https://github.com/hngx-org/helpmeout.git
```

#### Install all dependencies

```bash
npm install
```

#### Run the development server:

```bash
npm run dev
```

## Types

As you know by now that this is a typescript based project. Please all types must be created separately in the `type` or `@types` directly outside of the componentss folder. If your components require a custom type, create them inside a folder called `types` or `@types` and export it to be used somewhere else.

# Commit Standards

## Branches

- **dev** -> pr this branch for everything `frontend` related
- **master** -> **dont touch** this branch, this is what is running in production.

## Contributions

HelpMeOut is open to contributions, but I recommend creating an issue or replying in a comment to let us know what you are working on first that way we don't overwrite each other.

## Contribution Guidelines

1. Clone the repo `git clone https://github.com/hngx-org/helpmeout.git`.
2. Open your terminal & set the origin branch: `git remote add origin git clone https://github.com/hngx-org/helpmeout.git.web.git`
3. Pull origin `git pull origin dev`
4. Create a new branch for the task you were assigned to, eg `TicketNumber/(Feat/Bug/Fix/Chore)/Ticket-title` : `git checkout -b ZA-001/Feat/Sign-Up-from`
5. After making changes, do `git add .`
6. Commit your changes with a descriptive commit message : `git commit -m "your commit message"`.
7. To make sure there are no conflicts, run `git pull origin dev`.
8. Push changes to your new branch, run `git push -u origin ZA-001/Feat/Sign-Up-from`.
9. Create a pull request to the `dev` branch not `master`.
10. Ensure to describe your pull request.
11. > If you've added code that should be tested, add some test examples.

# Merging

Under any circumstances should you merge a pull requests on a specific branch to the `dev` or `main` branch

### _Commit CheatSheet_

| Type     |                          | Description                                                                                                 |
| -------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| feat     | Features                 | A new feature                                                                                               |
| fix      | Bug Fixes                | A bug fix                                                                                                   |
| docs     | Documentation            | Documentation only changes                                                                                  |
| style    | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| refactor | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
| perf     | Performance Improvements | A code change that improves performance                                                                     |
| test     | Tests                    | Adding missing tests or correcting existing tests                                                           |
| build    | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ci       | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | Chores                   | Other changes that don't modify , frontend or test files                                                    |
| revert   | Reverts                  | Reverts a previous commit                                                                                   |

> _Sample Commit Messages_

- `chore: Updated README file` := `chore` is used because the commit didn't make any changes to the , frontend or test folders in any way.
- `feat: Added plugin info endpoints` := `feat` is used here because the feature was non-existent before the commit.

## Code Explanation

### API Calls

A separate folder called `http` which contains `axios.ts` and `index.ts` files where created to handle any outgoing or incoming http request/response. the `index.ts` file should contain all outgoing `API` calls to the backend server.

> ❗❗Do not create any custom http calls inside a page or components. Whatever calls that need to be processed by the server should be called within the `index.ts` file.


### MainLayout.tsx

Within this file contains a `MainLayout` component, rather than calling `Footer`, `Sidebar`, `TopBar` component on every file manually, all you have to do is first invoke the `<MainLayout>` component inside any page before adding the children of that page.

for eg

```js
import Link from 'next/link';
import MainLayout from '../components/shared/MainLayout';

function Home() {
  return (
    <MainLayout className="xl:w-[1440px] mx-auto w-full md:px-[80px] px-3 xs:px-5">
      <p className="text-dark-100">Home Page</p>
    </MainLayout>
  );
}

export default Home;
```
However, it is not mandatory, just to help maintain consistency.


## Assets

- All images should go to the assets in the public folder, some are already available. Add yours if you need to.

