const Package = require('../models/Package');

const defaultPackages = [
  { type: "core", name: "MongoDB", description: "MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.", homePage: "https://www.mongodb.com/" },
  { type: "core", name: "Express.js", description: "Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.", homePage: "https://expressjs.com/" },
  { type: "core", name: "React", description: "In computing, React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.", homePage: "https://reactjs.org/" },
  { type: "core", name: "Node.js", description: "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside the browser.", homePage: "https://nodejs.org/" },
  { type: "core", name: "Redux", description: "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.", homePage: "https://redux.js.org/" },
  { type: "core", name: "Webpack", description: "Webpack is an open-source JavaScript module bundler. Webpack takes modules with dependencies and generates static assets representing those modules.", homePage: "https://webpack.js.org/" },
  { type: "core", name: "nodemon", description: "nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.", homePage: "https://nodemon.io/" },
  { type: "core", name: "babel", description: "Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in old browsers or environments.", homePage: "https://babeljs.io/" },
  { type: "core", name: "Sass", description: "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.", homePage: "https://sass-lang.com/" },
  { type: "tool", name: "NVM", description: "Node Version Manager", homePage: "https://github.com/creationix/nvm" },
  { type: "tool", name: "AVN", description: "Automatic Version Switching for Node.js", homePage: "https://github.com/wbyoung/avn" },
  { type: "tool", name: "RVM", description: "Ruby Version Manager", homePage: "https://rvm.io/" }
];

/**
 * @returns Response message contains server data, status, message, success, desired data if successful
 */
module.exports = {

  /**
   * @param {FUNCTION} done Callback function
   * @description Function for adding default packages to DB
   */
  add_default_packages: done => {
    module.exports.get_packages((err, packages) => {
      if (err || !packages || packages.length <= 0) {
        return Package.insertMany(defaultPackages, (err, packages) => {
          if (err) return done(err, null);
          if (!packages) return done(406, null);
          done(undefined, packages);
        })
      } else {
        done(undefined, packages);
      }
    })
  },

  /**
   * @param {FUNCTION} done Callback function
   */
  get_packages: done => {
    return Package.find((err, packages) => {
      if (err) return done(err, null);
      if (!packages) return done(404, null);
      done(undefined, packages);
    }).sort({ date: -1 })
  },

  /**
   * @param {QUERY} query Query mongo string or null
   * @param {STRING} fields String of desired fields separated by space
   * @param {FUNCTION} done Callback function
   */
  get_packages_lean: (query, fields = "*", done) => {
    return Package.find(query, fields, null, (err, packages) => {
      if (err) return done(err, null);
      if (!packages) return done(404, null);
      done(undefined, packages);
    });
  },

  /**
   * @param {STRING} id String id of package
   * @param {FUNCTION} done Callback function
   */
  get_package_by_id: (id, done) => {
    return Package.findById(id, (err, package) => {
      if (err) return done(err, null);
      if (!package) return done(404 , null);
      done(undefined, package);
    })
  },

  /**
   * @param {STRING} data Stringified Package
   * @param {FUNCTION} done Callback function
   */
  add_package: (data, done) => {
    let new_package = new Package(data);
    return new_package.save((err, package) => {
      if (err) return done(err, null);
      if (!package) return done(406, null);
      done(undefined, package);
    })
  },

  /**
   * @param {STRING} id Mongodb Package id string
   * @param {STRING} data Stringified package data for update
   * @param {FUNCTION} done Callback function
   */
  update_package: (id, data, done) => {
    Package.findByIdAndUpdate(id, data, { new: true }, (err, package) => {
      if (err) return done(err, null);
      if (!package) return done(404, null);
      return done(undefined, package);
    })
  },

  /**
   * @param {STRING} id Mongodb Package id String
   * @param {FUNCTION} done Callback function
   */
  delete_package: (id, done) => {
    Package.findByIdAndDelete(id, (err, package) => {
      if (err) return done(err, null);
      if (!package) return done(404, null);
      return done(undefined, package);
    })
  },
}
