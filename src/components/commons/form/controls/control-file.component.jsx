import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';

import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternateOutlined';

import ControlWrapper from './control-wrapper.component';

import { controlPropTypes } from './control.proptypes';

export default class ControlText extends React.PureComponent {
  static propTypes = {
    control: controlPropTypes.isRequired,
    state: PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      error: PropTypes.string
    }).isRequired,
    onChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  handleAddPhotoClick = () => this.fileInput.current.children[0].click();

  render() {
    const { control, state, onChange } = this.props;
    const fileName = (state.value && state.value.length && state.value[0].name) || 'No photo selected';

    return (
      <Fragment>
        <IconButton color="primary" onClick={() => this.handleAddPhotoClick()}>
          <AddPhotoIcon />
        </IconButton>
        <ControlWrapper
          control={control}
          state={{
            ...state,
            value: fileName
          }}
        >
          <Input
            id={`${control.key}-text`}
            type="text"
            value={fileName}
            onChange={() => {}}
            aria-describedby={`${control.key}-helper-text`}
            disabled
          />
        </ControlWrapper>
        <Input
          ref={this.fileInput}
          id={control.key}
          type="file"
          onChange={e => onChange(control.key, e.target.files)}
          autoFocus={false}
          aria-describedby={`${control.key}-helper-text`}
          style={{ display: 'none' }}
        />
      </Fragment>
    );
  }
}
