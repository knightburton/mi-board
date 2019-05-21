import React from 'react';

import TopTabs from '../common/top-tabs/top-tabs.container';

import { TOOLS } from './time.constants';

export default class Time extends React.Component {
  render() {
    return (
      <TopTabs items={TOOLS} />
    );
  }
}
