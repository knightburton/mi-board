import React from 'react';
import PropTypes from 'prop-types';
import IntervalFormInput from '../interval-form-input/interval-form-input.component';

export default class IntervalForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      repeat,
      work,
      rest,
      handleSubmit,
      handleResetClick,
      handleRepeatChange,
      handleWorkChange,
      handleRestChange
    } = this.props;

    return (
      <div className="row justify-content-center mt-5">
        <div className="col-auto">
          <form onSubmit={handleSubmit}>

            <IntervalFormInput
              label="Repeat number"
              help="How many times do you want to repeat the process."
              placeholder="Repeat number"
              name="repeat"
              value={repeat}
              onChange={handleRepeatChange} />

            <IntervalFormInput
              label="Work phase (in seconds)"
              help="How long do you want to work within one repeat."
              placeholder="Time in seconds"
              name="work"
              value={work}
              onChange={handleWorkChange} />

            <IntervalFormInput
              label="Rest phase (in seconds)"
              help="How long do you want to rest within one repeat."
              placeholder="Time in seconds"
              name="rest"
              value={rest}
              onChange={handleRestChange} />

            <div className="form-row mt-4">
              <div className="form-group col-6">
                <button type="submit" className="btn btn-outline-secondary w-100">
                  Start
                </button>
              </div>
              <div className="form-group col-6">
                <button type="button" className="btn btn-outline-danger w-100" onClick={handleResetClick}>
                  Reset
                </button>
              </div>
            </div>

            </form>
        </div>
      </div>
    );
  }
}

IntervalForm.propTypes = {
  repeat: PropTypes.number.isRequired,
  work: PropTypes.number.isRequired,
  rest: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleResetClick: PropTypes.func.isRequired,
  handleRepeatChange: PropTypes.func.isRequired,
  handleWorkChange: PropTypes.func.isRequired,
  handleRestChange: PropTypes.func.isRequired
};
