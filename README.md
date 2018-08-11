[![GitHub license](https://img.shields.io/badge/License-MIT-blue.svg?longCache=true&style=popout-square)](/)
[![node version](https://img.shields.io/badge/node-v10.5.0-green.svg?longCache=true&style=popout-square)](/)
[![npm version](https://img.shields.io/badge/npm-v6.1.0-green.svg?longCache=true&style=popout-square)](/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg?longCache=true&style=popout-square)](/)

# MERN Boilerplate

A boilerplate for the MERN stack inclusive of front-end and back-end dev hot loading and various other technologies.

## Built With

MERN Stack:
* [MongoDB](https://www.mongodb.com/)
* [ExpressJs](https://expressjs.com/)
* [ReactJs](https://reactjs.org/)
* [NodeJs](https://nodejs.org/en/)

Included Technologies:
* [Redux](https://redux.js.org/)
* [Webpack](https://redux.js.org/)
* [Nodemon](https://nodemon.io/)
* [Babel](https://babeljs.io/)
* [Sass](https://sass-lang.com/)
* [reactstrap](https://reactstrap.github.io/)

Included Packages:
* [concurrently](https://github.com/kimmobrunfeldt/concurrently)
* [NVM](https://github.com/creationix/nvm)
* [AVN](https://github.com/wbyoung/avn)
* [RVM](https://rvm.io/)

## Getting Started

This boilerplate is distinctly broken up into front-end and back-end folders for clear distinction between functionalities. Each folder have there respective package.json files containing their respective dependencies and scripts. The root package.json provides the functionality to run scripts in each respective folder, checkout these package.json files for more insight.

### Prerequisites

* Install MongoDB
* Install Node (Highly recommend using [NVM](https://github.com/creationix/nvm) in conjunction with [AVN](https://github.com/wbyoung/avn))

### Installing

If using NVM and avn you should already be using the correct version of node and npm. If you're only using NVM run:
```
nvm use
```
Install the suggested version if not already installed. If you're not using NVM and AVN check the .nvmrc file to see what version of node to be running.

These commands are all executed in the root directory.

All the scripts are pretty self explanatory with scripts starting with dev start dev environments otherwise starting production environments.

Start by running install all the dependencies. run:
```
# Install front-end and back-end dependencies
npm install

# Install front-end dependencies
npm run front-end-install

# Install back-end-Install
npm run back-end-install
```

To start the front-end and back-end run:
```
# Start without hot loading
npm run front-end

npm run back-end

# Start with hot loading
npm run dev-front-end

npm run dev-back-end
```

To start the front-end and back-end concurrently run:
```
# Without hot loading
npm start

# With hot loading
npm run dev
```

Hopefully you're all up and running, happy coding.

This boilerplate implements a basic configuration so read through them and make and changes as necessary to suit your requirements.

The front end runs on port 3000 & the back end runs on port 5000.

### Config

Front-End:

Webpack Externals is used to make constant variables available throughout the app. These can be manipulated and added to in the Config.JSON file located in the webpack folder. Please note to apply changes you'll need to restart the server as these are loaded in by Webpack at server initialisation.

To use Config file
```
# Require the config file where ever needed
const Config = require('Config')

#Usage in components
Config.[VARIABLE]
```

Back-End:

Config file is located in the config folder in the root directory. To use the Config simply require it where needed using it's relative path to relative working file. Usage is exactly the same as Front-End.

## Authors

* **Taylor McCarthy**

PRs are always welcome to better optimize this boilerplate as this has been a professional development project.

## Acknowledgments

For great videos, content and tutorials check these guys out:
* [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)
* [Ihatetomatoes](https://www.youtube.com/user/ihatetomatoesblog)
* [Fun Fun Function](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q)
