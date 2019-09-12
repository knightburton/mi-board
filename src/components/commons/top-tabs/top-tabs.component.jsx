import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import useStyles from './top-tabs.styles';

const TopTabs = ({ items, selectedByDefault }) => {
  const classes = useStyles();
  const [selected, updateSelected] = useState(
    items.map(({ to }) => to).includes(selectedByDefault)
      ? selectedByDefault
      : items[0].to
  );

  return (
    <Container maxWidth={false}>
      <Tabs
        value={selected}
        onChange={(e, value) => updateSelected(value)}
        className={classes.root}
        TabIndicatorProps={{ className: classes.indicator }}
      >
        {items.map(item => (
          <Tab
            key={item.key}
            value={item.to}
            label={item.label}
            className={classes.tab}
            classes={{
              selected: classes.selected,
            }}
            component={Link}
            to={item.to}
            disableRipple
          />
        ))}
      </Tabs>
    </Container>
  );
};

TopTabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
    to: PropTypes.string
  })).isRequired,
  selectedByDefault: PropTypes.string.isRequired
};

export default TopTabs;
