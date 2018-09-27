# MovieTracker

### Description

Movie-Tracker is an app that allows users to:

* See which movies are currently in theaters
* Create an account
* Add/remove movies to their favorites

### Installing

To run MovieTracker on your machine, you will need to clone down this repository as well as the backend repository, which can be found here: https://github.com/turingschool-examples/movie-tracker

Follow the instructions in the backend repository's ReadMe on how to start up the backend, including setting up PostGres.

Once the backend is running, come back to this repository and clone it down with the following command:

`git clone
`cd` back into this repository and run `npm install` and `npm start`.

For this project, we made a fetch call to receive the data of currently playing movies from an API hosted by www.themoviedb.org. 

Although the app is on too low a scale to require it, we used this project to familiarize ourselves with React-Redux, also implementing React-Router for the first time.

MovieTracker works with a locally hosted backend, to allow for users to create an account and store/remove their favorites. This data is then retrievable on sign in.

Authors:
* Arram Mandel - https://github.com/airum82
* Quinlan Hill - https://github.com/quinhill

Enjoy!
