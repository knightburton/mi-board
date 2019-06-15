import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

import CheckedIcon from '@material-ui/icons/RadioButtonChecked';
import UncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import styles from './section-select.styles';

class SectionSelect extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    gutterBottom: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })).isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedByDefault: PropTypes.string,
    breakpoints: PropTypes.shape({
      xs: PropTypes.number,
      sm: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number
    })
  };

  static defaultProps = {
    title: '',
    gutterBottom: false,
    selectedByDefault: null,
    breakpoints: { xs: 12 }
  };

  state = {
    selected: null
  };

  componentDidMount() {
    const { selectedByDefault } = this.props;

    if (selectedByDefault) this.setState({ selected: selectedByDefault });
  }

  handleCardClick = key => {
    const { onSelect } = this.props;

    this.setState({ selected: key }, () => {
      onSelect(key);
    });
  };

  render() {
    const { selected } = this.state;
    const { title, gutterBottom, options, breakpoints, classes } = this.props;
    const gridClassNames = clsx({
      [classes.marginTop]: !title,
      [classes.marginBottom]: gutterBottom
    });

    return (
      <Fragment>
        {title && (
          <Typography variant="subtitle1" className={classes.marginTop}>
            {title}
          </Typography>
        )}
        <Grid className={gridClassNames} spacing={3} container>
          {options.map(option => (
            <Grid key={option.key} {...breakpoints} item>
              <Card className={classes.card}>
                <CardActionArea onClick={() => this.handleCardClick(option.key)} disableRipple>
                  <CardContent>
                    <Box className={classes.header}>
                      {selected === option.key
                        ? <CheckedIcon color="primary" className={classes.icon} />
                        : <UncheckedIcon className={classes.icon} />
                      }
                      <Typography className={classes.title} variant="h5" component="p" gutterBottom>
                        {option.title}
                      </Typography>
                    </Box>
                    {option.description && (
                      <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                        {option.description}
                      </Typography>
                    )}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(SectionSelect);
