import { GET_TECHNOLOGIES, ADD_TECHNOLOGY, DELETE_TECHNOLOGY } from '../actions/types'

const initialState = {
  technologies: [
    {id: 1, name: "MongoDB", description: "MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.", img_src: "https://webassets.mongodb.com/_com_assets/cms/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png", home_page: "https://www.mongodb.com/"},
    {id: 2, name: "Express.js", description: "Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.", img_src: "http://mean.io/wp-content/themes/twentysixteen-child/images/express.png", home_page: "https://expressjs.com/"},
    {id: 3, name: "React", description: "In computing, React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.", img_src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K", home_page: "https://reactjs.org/"},
    {id: 4, name: "Node.js", description: "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside the browser.", img_src: "https://cdn-images-1.medium.com/max/1200/1*9bVaonlM0iP8mSu45GzIeg.png", home_page: "https://nodejs.org/"},
    {id: 5, name: "Redux", description: "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.", img_src: "https://cdn.worldvectorlogo.com/logos/redux.svg", home_page: "https://redux.js.org/"},
    {id: 6, name: "Webpack", description: "Webpack is an open-source JavaScript module bundler. Webpack takes modules with dependencies and generates static assets representing those modules.", img_src: "https://cdn-images-1.medium.com/max/400/1*l0JiZHyCBXtgeMQyhBpT6g.png", home_page: "https://webpack.js.org/"},
    {id: 7, name: "nodemon", description: "nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.", img_src: "https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png", home_page: "https://nodemon.io/"},
    {id: 8, name: "babel", description: "Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in old browsers or environments.", img_src: "https://cdn.worldvectorlogo.com/logos/babel-10.svg", home_page: "https://babeljs.io/"},
    {id: 9, name: "Sass", description: "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.", img_src: "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg", home_page: "https://sass-lang.com/"},
    {id: 10, name: "reactstrap", description: "This library contains React Bootstrap 4 components that favor composition and control.", img_src: "https://reactstrap.github.io/assets/logo.png", home_page: "https://reactstrap.github.io/"}
  ]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TECHNOLOGIES:
        return state
    default:
      return state
  }
}
