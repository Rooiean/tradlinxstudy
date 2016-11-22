import _ from 'lodash';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Map from './map';

export default class SearchResultRoute extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showMap: false,
      showMapText: '지도보기',
    }

    this.findPortInfo = this.findPortInfo.bind(this);
    this.viewResultMap = this.viewResultMap.bind(this);
  }


  findPortInfo(queryText) {
    const { allPorts } = this.props.search;
    const portInfo = _.find(allPorts, { 'id': queryText });
    return <span>{ portInfo.name }({portInfo.locationCode}) / { portInfo.type }</span>;
  }

  viewResultMap() {
    const { showMap } = this.state;

    if(showMap) {
        this.setState({
          showMap : false,
          showMapText: '지도보기',
       });
    } else {
        this.setState({
          showMap : true,
          showMapText: '지도닫기',
       });
    }
  }


  render() {
    const { route } = this.props;
    const { showMap, showMapText } = this.state;
    const { allPorts } = this.props.search;
    const { transports } = this.props.search;

    return(
      <li>
        <div className="result-contents">
          <span className="td sport">{ this.findPortInfo(_.nth(route, 2)) }</span>
          <span className="td dport">{ this.findPortInfo(_.last(route)) }</span>
          <span className="td depth">{ (route.length - 5) / 2 } 번</span>
          <span className="td cost">$ { _.head(route) }</span>
          <span className="td term">{ _.nth(route, 1) } 일</span>
          <span className="td map-btn">
            <Button bsStyle="info" onClick={this.viewResultMap}>{ showMapText }</Button>
          </span>
        </div>
        { (showMap) ? <Map route={route} allPorts={allPorts} transports={transports}  /> : null }
      </li>
    );
  }
}