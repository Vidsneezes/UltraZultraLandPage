import React, { Component } from 'react';
import classnames from 'classnames';
import {Link} from 'react-router-dom';

import '../../cssresponsive/w3.css';
import './style.css';


class AppPanel extends Component {

  render() {
        return (
            <div className="w3-container w3-center" >
                <div className="image" >
                {this.props.children}
                </div>
            </div>
        );

    }
}

export default AppPanel;
