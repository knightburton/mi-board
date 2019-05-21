import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(0, 1),
    margin: theme.spacing(-3, -3, 3)
  },
  tab: {
    minWidth: '80px',
    padding: theme.spacing(1, 2),
    textTransform: 'none'
  }
});

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

export default withStyles(styles)(TopTabs);
