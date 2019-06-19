import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Confirmation = props => {
  const { key, title, description, onAgree, children } = props;
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <Fragment>
      {React.cloneElement(children, { show })}
      <Dialog
        open={isShown}
        onClose={() => hide()}
        aria-labelledby={`${key}-confirmation-dialog-title`}
        aria-describedby={`${key}-confirmation-dialog-description`}
      >
        <DialogTitle id={`${key}-confirmation-dialog-title`}>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id={`${key}-confirmation-dialog-description`}>
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => hide()} color="secondary">
            Disagree
          </Button>
          <Button onClick={onAgree} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

Confirmation.propTypes = {
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onAgree: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Confirmation;
