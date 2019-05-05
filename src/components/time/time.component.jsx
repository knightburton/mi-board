import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Route, Switch } from 'react-router';

// import ToolList from './tool-list/tool-list.component';
// import Interval from './interval/interval.container';
// import Countdown from './countdown/countdown.container';
// import Stopwatch from './stopwatch/stopwatch.container';

import Title from '../common/title/title.container';

import ToolList from './tool-list/tool-list.container';

export default class Time extends React.Component {
  render() {
    const { match } = this.props;

    return (
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Title text="Time" icon={['far', 'clock']} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Switch>
              <Route exact path={`${match.path}`} component={ToolList}/>
              {/* <Route path={`${match.path}/interval`} component={Interval}/>
              <Route path={`${match.path}/countdown`} component={Countdown}/>
              <Route path={`${match.path}/stopwatch`} component={Stopwatch}/> */}
            </Switch>
          </Col>
        </Row>
      </Container>
    );
  }
}
