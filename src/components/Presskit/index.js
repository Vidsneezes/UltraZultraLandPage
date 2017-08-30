import React, { Component } from 'react';
import headerImage from '../App/images/FinalSceneWithTitle copy.png';
import PresskitInfoRow from './PresskitInfoRow.js';
import PresskitHeader from './PresskitHeader.js';

import '../../cssresponsive/w3.css';

class Presskit extends Component {

      render() {
        const imgStyle = {
          width: '100%',
          height: '300px'
        };

        return (
          <div className="w3-container">
              <PresskitHeader />
              <PresskitInfoRow title="Description" info="fdsf" />
              <PresskitInfoRow title="History" info="fdsf" />
              <PresskitInfoRow title="Videos" info="fdsf" />
              <PresskitInfoRow title="Images" info="fdsf" />
              <PresskitInfoRow title="Icon & Logo" info="fdsf" />
              <PresskitInfoRow title="About Me" info="fdsf" />
              
          </div>
        );
    }
}

export default Presskit;