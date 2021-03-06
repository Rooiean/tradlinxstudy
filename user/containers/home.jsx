import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { Search, SearchResult } from 'components';
import { search } from 'actions';

import { Grid } from 'react-bootstrap';

export class Home extends Component {

  componentDidMount() {
      this.props.dispatch(search.allPorts());
      this.props.dispatch(search.allTransports());
  }

  render() {
    const { search } = this.props;
    return (
      <div>
        <div className="header">
          <Grid>
            <Search search={search} />
          </Grid>
        </div>
        <Grid>
          { !_.isEmpty(search.routes) && <SearchResult search={search} /> }
        </Grid>
      </div>
    );
  }
}

export default connect(state => state)(Home);
