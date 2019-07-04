import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import MuiAvatar from '@material-ui/core/Avatar';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import styles from './avatar.styles';

const useStyles = makeStyles(styles);

const Avatar = props => {
  const classes = useStyles();
  const { url, alt, size, withGutter, withDisabledColor } = props;

  return url ? (
    <MuiAvatar
      alt={alt}
      src={url}
      imgProps={{ draggable: false }}
      className={clsx(
        { [classes[size]]: size },
        classes.border
      )}
    />
  ) : (
    <AccountCircleIcon
      className={clsx({
        [classes[size]]: size,
        [classes.margin]: withGutter
      })}
      color={withDisabledColor ? 'disabled' : 'inherit'}
    />
  );
};

Avatar.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['extraSmall', 'small', 'medium', 'large', 'extraLarge', 'huge']),
  withGutter: PropTypes.bool,
  withDisabledColor: PropTypes.bool
};

Avatar.defaultProps = {
  url: '',
  alt: 'Profile avatar',
  size: 'medium',
  withGutter: false,
  withDisabledColor: false
};

export default Avatar;
