import React, { Component } from 'react';
import '../../cssresponsive/w3.css';

class PresskitInfoRow extends Component {
      render() {
        const imgStyle = {
          width: '100%',
          height: '300px'
        };
        return (
            <div className="w3-container">
                <h2>{this.props.title}</h2>
                <hr/>
                <p>{this.props.info}</p>
            </div>
        );
    }
}

export default PresskitInfoRow;