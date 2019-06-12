import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import styles from './section.styles';

import { FOOTER_ALIGN_OPTIONS, ACTION_DEFAULTS } from './section.constants';

class Section extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    footer: PropTypes.shape({
      align: PropTypes.oneOf(Object.values(FOOTER_ALIGN_OPTIONS)),
      actions: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        function: PropTypes.func.isRequired,
        label: PropTypes.string.isRequired,
        icon: PropTypes.node,
        variant: PropTypes.oneOf(Object.values(ACTION_DEFAULTS.VARIANT)),
        color: PropTypes.oneOf(Object.values(ACTION_DEFAULTS.COLOR)),
        size: PropTypes.oneOf(Object.values(ACTION_DEFAULTS.SIZE)),
        disabled: PropTypes.bool
      }))
    }),
    gutterBottom: PropTypes.bool,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    title: '',
    footer: null,
    gutterBottom: false
  };

  render() {
    const { title, footer, gutterBottom, children, classes } = this.props;
    const paperClassNames = clsx(
      {
        [classes.marginTop]: !title,
        [classes.marginBottom]: gutterBottom
      },
      classes.paper
    );
    const footerClassNames = clsx(
      {
        [classes[(footer && footer.align) || FOOTER_ALIGN_OPTIONS.LEFT]]: footer && footer.align
      },
      classes.footer
    );

    return (
      <Fragment>
        {title && (
          <Typography variant="subtitle1" className={classes.marginTop}>
            {title}
          </Typography>
        )}
        <Paper className={paperClassNames}>
          {children}
          {footer && (
            <Box className={footerClassNames}>
              {footer.actions.map(action => (
                <Button
                  key={action.key}
                  onClick={() => action.function()}
                  variant={action.variant || ACTION_DEFAULTS.VARIANT.CONTAINED}
                  color={action.color || ACTION_DEFAULTS.COLOR.PRIMARY}
                  size={action.size || ACTION_DEFAULTS.SIZE.MEDIUM}
                  disabled={action.disabled || false}
                  className={classes.action}
                >
                  {action.label}
                  {action.icon && <action.icon className={classes.actionIcon} />}
                </Button>
              ))}
            </Box>
          )}
        </Paper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Section);
