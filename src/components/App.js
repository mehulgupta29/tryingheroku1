import React from 'react';
import './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        Hello World!
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
