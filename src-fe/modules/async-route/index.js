import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AsyncRoute extends Component {
  static propTypes = {
    loadingPromise: PropTypes.object,
    placeholder: PropTypes.node,
    props: PropTypes.object
  };

  state = {
    isLoaded: false
  };

  componentDidMount() {
    this.props.loadingPromise.then(module => {
      this.component = module.default;
      this.setState({isLoaded: true});
    });
  }

  render() {
    const {isLoaded} = this.state;
    const {props, placeholder} = this.props;
    return (isLoaded && <this.component {...props} />) || (placeholder || <div />);
  }
}

export default AsyncRoute;
