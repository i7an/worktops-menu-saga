require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MaterialSelect from './MaterialSelect'
import SurfaceColourSelect from './SurfaceColourSelect'
import EdgeColourSelect from './EdgeColourSelect'

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <MaterialSelect />
        <SurfaceColourSelect />
        <EdgeColourSelect />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
