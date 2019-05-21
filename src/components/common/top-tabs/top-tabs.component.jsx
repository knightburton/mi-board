import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  tab: {
    minWidth: '80px',
    padding: theme.spacing(1, 2),
    textTransform: 'none'
  }
});

class TopTabs extends React.Component {
  state = {
    selected: 0
  };

  handleChange = selected => this.setState({ selected });

  render() {
    const { items, classes } = this.props;
    const { selected } = this.state;

    return (
      <Tabs value={selected} onChange={(e, value) => this.handleChange(value)} className={classes.root}>
        {items.map(item => (
          <Tab key={item.key} label={item.label} className={classes.tab} />
        ))}
      </Tabs>
    );
  }
}

export default withStyles(styles)(TopTabs);
