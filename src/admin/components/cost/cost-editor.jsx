import _ from 'lodash';
import React, {Component} from 'react';
import store from 'store';

import { costs as costAction } from 'actions';
import { Col, Well, Input, Button, Modal } from 'react-bootstrap';

export default class CostEditor extends Component {
  constructor(props) {
    super(props);

    this.state={
      show: false,
    }

    this.handlePutCost = this.handlePutCost.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  handlePutCost() {
    const air = this.refs.air.getValue();
    const sea = this.refs.sea.getValue();
    const road = this.refs.road.getValue();
    const rail = this.refs.rail.getValue();

    store.dispatch(costAction.putCosts(air, sea, road, rail)).then(
      () => {
      store.dispatch(costAction.getCosts());
    });

    this.setState({show: true});
  }

  hideModal() {
    this.setState({show: false});
  }

  render() {
    const { data, costsPutStatus } = store.getState().costs;
    let firstCost = _.nth(data, 0);
    return (
      <Well>
        <Col md={6}>
          <h4>Air</h4>
          <Input type="text" ref="air" defaultValue={firstCost.air} />
        </Col>
        <Col md={6}>
          <h4>Sea</h4>
          <Input type="text" ref="sea" defaultValue={firstCost.sea} />
        </Col>
        <Col md={6}>
          <h4>Road</h4>
          <Input type="text" ref="road" defaultValue={firstCost.road} />
        </Col>
        <Col md={6}>
          <h4>Rail</h4>
          <Input type="text" ref="rail" defaultValue={firstCost.rail} />
        </Col>
        <Button bsSize="large" bsStyle="primary" onClick={this.handlePutCost}>
          { (_.isEqual(costsPutStatus, 'request')) ? 'SAVING...' : 'SAVE' }
        </Button>

        { (_.isEqual(costsPutStatus, 'success') && this.state.show ) &&
          <Modal
            className="saved-modal"
            show={this.state.show}
            onHide={this.hideModal}
            >
            <Modal.Body>
              저장되었습니다!
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.hideModal} bsStyle="primary">확인</Button>
            </Modal.Footer>
          </Modal>
         }

        <div className="cb" />
      </Well>
    );
  }
}
