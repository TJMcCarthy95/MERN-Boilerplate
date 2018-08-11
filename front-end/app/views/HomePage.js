import React, { Component } from 'react'
import { CardColumns, Button } from 'reactstrap';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getTechnologies } from '../actions/technologyActions'
import { getPackages } from '../actions/packageActions'

import Card from '../components/ReactStrap/Card'
import Jumbotron from '../components/ReactStrap/Jumbotron'

class HomePage extends Component {

  componentDidMount() {
    this.props.getTechnologies()
    this.props.getPackages()
  }

  render() {
    const { technologies } = this.props.technology;
    const { packages } = this.props.package;

    return (
      <div>
        <h4 className="text-center highlight-text">Some of the technologies used in this Boilerplate</h4>
        <CardColumns className="CardColumns">
          {technologies.map(({ id, name, description, img_src, home_page }) => (
            <Card key={id} name={name} description={description} img={img_src}  btn={{block: true, link: home_page, target: '_blank', color: 'info', text: 'Read More'}}/>
          ))}
        </CardColumns>

        <h4 className="text-center highlight-text">Other great packages</h4>
        <CardColumns className="CardColumns">
          {packages.map(({ id, name, description, img_src, home_page }) => (
            <Card key={id} name={name} description={description} img={img_src} btn={{block: true, link:home_page, target: '_blank', color: 'info', text: 'Read More'}}/>
          ))}
        </CardColumns>
      </div>
    );
  }
}

HomePage.propTypes = {
  getTechnologies: PropTypes.func.isRequired,
  technology: PropTypes.object.isRequired,
  package: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  technology: state.technology,
  package: state.package
})

export default connect(mapStateToProps, { getTechnologies, getPackages })(HomePage)
