import React, { Component, Button } from 'react'

import Jumbotron from './ReactStrap/Jumbotron'


class Header extends Component {

  render() {
    return (
      <Jumbotron
        fluid={true}
        class={"text-center"}
        title={"MERN Boilerplate"}
        subTitle={"Mongodb - ExpressJs - ReactJs - NodeJs"}
        break={true}
      />
    );
  }
}

export default Header
