import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { SearchAir, SearchAirResult } from 'components/air'
import { air, search } from 'actions';

import { Grid } from 'react-bootstrap';

export class AirSchedule extends Component {
  componentDidMount() {
    this.props.dispatch(air.allAirPorts());
    this.props.dispatch(search.allPorts());
  }

  render() {
    const { air, dispatch } = this.props;
    console.log(air);
    return (
      <div>
        <div className="header user">
          <Grid>
            <SearchAir air={air} dispatch={dispatch} />
          </Grid>
        </div>
        <Grid>
          { _.isEqual(air.scheduleStatus, 'success') && <SearchAirResult air={air} /> }
        </Grid>
      </div>
    );
  }
}

export default connect(state => state)(AirSchedule);
