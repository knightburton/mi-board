import React from 'react';
import PropTypes from 'prop-types';
import IntervalFormInput from '../interval-form-input/interval-form-input.component';
import IntervalFormPreset from '../interval-form-preset/interval-form-preset.component';

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
    const preset = [5, 10, 15, 20, 25, 30];

    return (
      <div className="row justify-content-center mt-5">
        <div className="col-auto">
          <form onSubmit={handleSubmit}>

            <div className="form-row">
              <div className="col">
                <IntervalFormInput
                  label="Repeat number"
                  help="How many times do you want to repeat the process."
                  placeholder="Repeat number"
                  name="repeat"
                  value={repeat}
                  onChange={handleRepeatChange} />
              </div>
              <div className="col">
                <IntervalFormPreset
                  name="repeat"
                  label="Repeat presets"
                  values={[...preset, 50, 60]}
                  current={repeat}
                  handleClick={handleRepeatChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="col">
                <IntervalFormInput
                  label="Work phase (in seconds)"
                  help="How long do you want to work within one repeat."
                  placeholder="Time in seconds"
                  name="work"
                  value={work}
                  onChange={handleWorkChange} />
              </div>
              <div className="col">
                <IntervalFormPreset
                  name="work"
                  label="Work time presets"
                  values={[...preset, 45, 60]}
                  current={work}
                  handleClick={handleWorkChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="col">
                <IntervalFormInput
                  label="Rest phase (in seconds)"
                  help="How long do you want to rest within one repeat."
                  placeholder="Time in seconds"
                  name="rest"
                  value={rest}
                  onChange={handleRestChange} />
              </div>
              <div className="col">
                <IntervalFormPreset
                  name="rest"
                  label="Rest time presets"
                  values={[...preset, 45, 60]}
                  current={rest}
                  handleClick={handleRestChange} />
              </div>
            </div>

            <div className="form-row mt-4">
              <div className="form-group col-6">
                <button type="submit" className="btn btn-outline-secondary w-100">
                  Start
                </button>
              </div>
              <div className="form-group col-6">
                <div className="btn btn-outline-danger w-100" onClick={handleResetClick}>
                  Reset
                </div>
              </div>
            </div>

            </form>
        </div>
      </div>
    );
  }
}

IntervalForm.propTypes = {
  repeat: PropTypes.number,
  work: PropTypes.number,
  rest: PropTypes.number,
  handleSubmit: PropTypes.func.isRequired,
  handleResetClick: PropTypes.func.isRequired,
  handleRepeatChange: PropTypes.func.isRequired,
  handleWorkChange: PropTypes.func.isRequired,
  handleRestChange: PropTypes.func.isRequired
};
