import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";
import { getPackages, initializePackages } from "../actions/packageActions";
import Render from "./HomePageRender";

class HomePage extends Component {

  constructor(props) {
    super(props);
    props.getPackages()
  }

  get packages() {
    return this.props.packages;
  }

  get corePackages() {
    return this.packages.filter(pkg => pkg.type === "core");
  }

  get toolPackages() {
    return this.packages.filter(pkg => pkg.type === "tool");
  }

  initialize = () => this.props.initializePackages();

  render() {
    return Render.call(this, this.props, this.state);
  }
}

HomePage.propTypes = {
  getPackages: PropTypes.func.isRequired,
  packages: PropTypes.array.isRequired
}

HomePage.defaultProps = {
  packages: []
}

const mapStateToProps = state => ({
  packages: state.package.packages
})

const mapDispatchToProps = dispatch => ({
  initializePackages: () => dispatch(initializePackages()),
  getPackages: () => dispatch(getPackages())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
