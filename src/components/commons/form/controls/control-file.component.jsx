import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';

import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternateOutlined';

import ControlWrapper from './control-wrapper.component';

import { controlPropTypes } from './controls.proptypes';

const ControlFile = ({ control, state, onChange }) => {
  const fileInput = useRef(null);
  const fileName = (state.value && state.value.length && state.value[0].name) || 'No photo selected';

  const handleAddPhotoClick = () => fileInput.current.children[0].click();

  return (
    <>
      <IconButton color="primary" onClick={handleAddPhotoClick}>
        <AddPhotoIcon />
      </IconButton>
      <ControlWrapper
        control={control}
        state={{
          ...state,
          value: fileName,
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
        ref={fileInput}
        id={control.key}
        type="file"
        onChange={e => onChange(control.key, e.target.files)}
        autoFocus={false}
        aria-describedby={`${control.key}-helper-text`}
        style={{ display: 'none' }}
      />
    </>
  );
};

ControlFile.propTypes = {
  control: controlPropTypes.isRequired,
  state: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    error: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ControlFile;
