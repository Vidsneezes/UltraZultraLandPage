import React, { Component } from 'react';
import headerImage from '../App/images/FinalSceneWithTitle copy.png';
import PresskitInfoRow from './PresskitInfoRow.js';

import '../../cssresponsive/w3.css';

class PresskitHeader extends Component {
      

      render() {
        const imgStyle = {
          width: '100%',
          height: '300px'
        };

        return (
          <div className="w3-container">
              <div className="w3-display-container">
                <div className="w3-row">
                  <div className="w3-col m4 13">
                    <div className="w3-display-container " style= {{
                      width: '100%',
                      height: '300px'
                    } }>
                      <h1 className="w3-display-middle">Ultra Zultra</h1>
                    </div>
                  </div>
                  <div className="w3-col m8 19">
                    <img src= {headerImage} style={imgStyle}  />
                  </div>
                </div>
              </div>
          </div>
        );
    }
}

export default PresskitHeader;