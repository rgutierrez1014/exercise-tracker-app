# Exercise Tracker App

An example MERN stack (MongoDB, Express, React, Node) application deployed on Google App Engine standard environment.

This repository contains both a frontend service with files within `src` as well as a backend service with files in `backend`. You must run them both simultaneously for things to function correctly.

The frontend service is also configured for hot reloading.

## Initial setup

For the database, I recommend making an account with MongoDB Atlas and spinning up a free tier cluster. Once you have a database ready, grab the instance url.

For the backend (in the `backend` folder), you will need a `env_vars.yaml` file and a `.env` file.

```
# in .env file:
NODE_ENV=development
ATLAS_URI=<MongoDB instance url>

# in env_vars.yaml:
env_variables:
    ATLAS_URI: <MongoDB instance url>
```

For the frontend (in the `src` folder), modify the objects within **config.js** to set up variables for each type of environment.

## Running locally

### Frontend app

For the frontend app, open a Terminal tab or window and navigate to the project directory. Run `yarn` or `yarn install` to install dependencies. Then, you can run:

**`yarn dev`**

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

**`yarn start`**

Runs the app in production mode. This is also the entrypoint for Google App Engine.

**`yarn test`**

Launches the test runner in the interactive watch mode.

**`yarn build`**

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

**`yarn eject`**

*Note: this is a one-way operation. Once you `eject`, you can’t go back!*

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn’t customize it when you are ready for it.

### Backend app

For the backend, open another Terminal tab or window. Navigate to the `backend` folder. Run `yarn` or `yarn install` to install backend dependencies. Then, you can run:

```
nodemon server
```

You may have to install `nodemon` globally if you haven't done so yet.

## Deployment

### Frontend app

From the project root directory, build the app and deploy using the Google Cloud SDK `deploy` command:

```
yarn build
gcloud app deploy --project=<GCP project name>
```

### Backend app

Navigate to the `backend` folder (the backend). You can skip the build stage here since we're not deploying any static files and it's not public-facing. Just deploy using the Google Cloud SDK `deploy` command:

```
gcloud app deploy --project=<GCP project name>
```
