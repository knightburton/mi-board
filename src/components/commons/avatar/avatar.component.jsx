import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import MuiAvatar from '@material-ui/core/Avatar';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { ProfileConsumer } from '../../contexts/profile';

import styles from './avatar.styles';

const useStyles = makeStyles(styles);

const Avatar = ({ alt, size, withGutter, withDisabledColor }) => {
  const classes = useStyles();

  return (
    <ProfileConsumer>
      {({ photoURL }) => (photoURL ? (
        <MuiAvatar
          alt={alt}
          src={photoURL}
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
      ))}
    </ProfileConsumer>
  );
};

Avatar.propTypes = {
  alt: PropTypes.string,
  size: PropTypes.oneOf(['extraSmall', 'small', 'medium', 'large', 'extraLarge', 'huge']),
  withGutter: PropTypes.bool,
  withDisabledColor: PropTypes.bool
};

Avatar.defaultProps = {
  alt: 'Profile avatar',
  size: 'medium',
  withGutter: false,
  withDisabledColor: false
};

export default Avatar;
