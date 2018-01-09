import React, {Component} from 'react';

class NoMatch extends Component {
  render() {
    return (
      <div id="box" className="d-flex flex-column justify-content-center align-items-center">
        <h2 style={{textAlign: 'center', lineHeight: '1.5em', width: '300px', fontFamily: 'Courier, monspace'}}>
          💀<br />404 Not Found
        </h2>
      </div>
    );
  }
}
export default NoMatch;
