import React, { Component, Button } from 'react'

import Jumbotron from './ReactStrap/Jumbotron'

const Config = require('Config')

class Footer extends Component {

  render() {
    return (
      <footer>
        <Jumbotron
          fluid={true}
          class={"text-center footer"}
          subTitle={"Application: " + Config.APP_NAME + " -- Author: " + Config.DEVELOPER + " -- Licence: " + Config.LICENCE}
        />
      </footer>
    );
  }
}

export default Footer
