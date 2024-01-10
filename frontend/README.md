# Frontend - Restro Reviewer

This project is the frontend for the `restro_reviewer` application, developed using React with the TypeScript template and integrated with AWS Amplify. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the TypeScript template.

## Prerequisites

Before running this project, make sure you have the following installed:

-   Node.js
-   `pnpm` package manager
-   AWS Amplify CLI
-   Docker (for the Dockerized environment)

## Project Setup

The frontend is part of a full-stack application that includes a NestJS backend and DynamoDB, all of which are Dockerized for consistent development and deployment environments.

First, clone the repository and navigate to the frontend directory:

```bash
git clone https://github.com/ashishkarki/restro-reviewer
cd restro_reviewer/frontend
```

Install the dependencies using pnpm:

```bash
pnpm install
```

Configure AWS Amplify:

```bash
amplify configure
```

## Available Scripts

In the project directory, you can run:

### `pnpm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `pnpm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `pnpm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

### `pnpm run eject`

**Note: This is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Deploying the App

For instructions on deploying the app with AWS Amplify, refer to the [AWS Amplify Documentation](https://docs.amplify.aws/).

## Learn More

To learn more about React and TypeScript, check out the [React documentation](https://reactjs.org/) and [TypeScript documentation](https://www.typescriptlang.org/).

To learn more about AWS Amplify, visit the [AWS Amplify documentation](https://docs.amplify.aws/).
