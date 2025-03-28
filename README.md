# node-typescript-boilerplate

This server is used with the [YouTube Comments Display Frontend](https://github.com/bliod/yt-comment-dsiplay-front.git).

It contains the API for the YouTube comments dashboard.

# Install dependencies

npm install # or yarn install

## Environment Variables

The application requires the following environment variables to be set in a `.env` file:

PORT: The port number on which the server will run. Default is 3000.
MONGODB_URI: The URI for connecting to the MongoDB database. Example: mongodb://localhost:27017/tempExample.
YOUTUBE_API: Your YouTube Data API v3 key.

# Running the Project

npm run build # Build the project
npm start # Start production server

Check console for web url. Exp: http://localhost:3001

## Available Scripts

- `clean` - remove coverage data, cache and transpiled files,
- `prebuild` - lint source files and tests before building,
- `build` - transpile TypeScript to ES6,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `lint` - lint source files and tests,
- `prettier` - reformat files,
- `test` - run tests,
- `test:watch` - interactive watch mode to automatically re-run tests
- `test:coverage` - run test and print out test coverage
