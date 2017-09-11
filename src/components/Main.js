require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Nav from 'components/nav';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
