import { connect } from 'react-redux';
import React, { Component } from 'react';

export class TerminalSchedule extends Component {
  render() {
    return (
      <div className="iframe-container">
        <iframe src="http://localhost/noheader/#/terminal/schedule"></iframe>
      </div>
    );
  }
}

export default connect(state=>state)(TerminalSchedule);
