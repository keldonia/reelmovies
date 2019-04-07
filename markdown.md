# ReelMovies

## Goals
The goal of this application is to render out movies based on search criteria/popularity.

## Pages
- Popular: lists popular movies, features infinite scroll
- Search: lists movies matching search term, features infinite scroll
- Movie: displays further information about a given movie

## How to Run

I have included a few scripts in package.json that will take care of running the application for you.  There are however a few dependencies.
- The program will look for an apiKey - in the same directory as package.json
  - This can be supplied by adding a key to the exampleApiKey file and renaming it to apiKey.js
- The program assumes that you have npm installed
- The program assumes that you don't have anything running on port 8080
- The program assumes that you are attempting to access the app from the same machine or can bridge to the app's host localhost

This provides you with a few options for running the application from the command line.  All of these scripts assume that you are within the projects directory or a subdirectory:
1. `npm run runItAll`: This command will build and run the development build of the application, it will also open a browser page
  - pulls required npm packages
  - builds webpack bundle
  - opens a chrome tab, note that this will appear blank but should load after second, once the server starts
  - starts the node server
2. `npm run runItAll:prod`: This command will build and run the production build of the application, it will also open a browser page
  - pulls required npm packages
  - builds webpack bundle
  - opens a chrome tab, note that this will appear blank but should load after second, once the server starts
  - starts the node server
3. `setupServer`: This command will build and run the development build, *you will need to open up a browser tab to `http://localhost:8080` to view the site*
  - pulls required npm packages
  - builds webpack bundle
  - starts the node server