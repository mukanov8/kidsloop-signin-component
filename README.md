# kidsloop signin component

[![Netlify Status](https://api.netlify.com/api/v1/badges/1e8d2799-3bdf-4154-9bec-b1757280225e/deploy-status)](https://app.netlify.com/sites/kidsloop-signin/deploys)

This is a custom sign-in component that I built as a practice using [Kidsloop](https://auth.kidsloop.live/?continue=https%3A%2F%2Fhub.kidsloop.live%2F%23%2F#/signin) as a reference

You can check the demo at https://kidsloop-signin.netlify.app/

## Features

- Project uses [Kidsloop's](https://www.kidsloop.net/) design system as closely as possible
- UI implemented using TailwindCSS
- Light & dark mode (implemented using custom ThemeContext)
- Localization for English and Korean languages (implemented using custom LocaleContext and hook)
- A simple form (email & password) validation on the client side
- Simulation of signin API call and progress indication

## Tech stack

- Create React App
- Typescript
- TailwindCSS
- Netlify

## Structure overview

A quick look at the top-level files and directories of this project.

    .
    ├── node_modules
    ├── src
    |   ├── components
    |       ├── Signin
    |       ├── ModeToggle
    |       ├── LocaleSelect
    |   ├── context
    |       ├── localeContext
    |       ├── themeContext
    |   ├── hooks
    |       ├── useTranslation
    |   ├── locales
    |       ├── en
    |       ├── ko
    |   ├── assets
    |   ├── styles
    ├── .gitignore
    ├── .prettierrc
    ├── .eslintrc
    ├── craco.config.js
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── yarn.lock
    ├── package.json
    └── README.md

## How to run

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, run:

### `yarn or yarn install`

Installs all dependencies defined in package.json file

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
