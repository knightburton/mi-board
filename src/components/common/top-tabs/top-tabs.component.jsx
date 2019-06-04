import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import styles from './top-tabs.styles';

class TopTabs extends React.Component {
  constructor(props) {
    super(props);

    const { items, selectedByDefault } = props;

    this.state = {
      selected: items.map(({ to }) => to).includes(selectedByDefault)
        ? selectedByDefault
        : items[0].to
    };
  }

  handleChange = selected => this.setState({ selected });

  render() {
    const { items, classes } = this.props;
    const { selected } = this.state;

    return (
      <Tabs
        value={selected}
        onChange={(e, value) => this.handleChange(value)}
        className={classes.root}
        TabIndicatorProps={{ className: classes.indicator }}
      >
        {items.map(item => (
          <Tab
            key={item.key}
            value={item.to}
            label={item.label}
            className={classes.tab}
            component={Link}
            to={item.to}
            disableRipple
          />
        ))}
      </Tabs>
    );
  }
}

TopTabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
    to: PropTypes.string
  })).isRequired,
  selectedByDefault: PropTypes.string.isRequired
};

export default withStyles(styles)(TopTabs);
