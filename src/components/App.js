//This component handles the app template used on every page.

import React, {PropTypes} from 'react';

class App extends React.Component{
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
children: PropTypes.object.isRequired
};

export default App;
