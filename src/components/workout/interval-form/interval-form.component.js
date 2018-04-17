import React from 'react';
import PropTypes from 'prop-types';
import FormNumber from '../form-number/form-number.component';
import FormPreset from '../form-preset/form-preset.component';
import FormTime from '../form-time/form-time.component';

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
    const preset = Array.from(Array(101).keys()).filter(x => x % 5 === 0);
    const disabled = repeat === 0 || work === 0 ? true : false;

    return (
      <div className="row justify-content-center mt-5">
        <div className="col-auto">
          <form onSubmit={handleSubmit}>

            <div className="form-row">
              <div className="col">
                <label htmlFor="repeat" className="mb-0 font-weight-bold">Repeat number:</label>
                <small id={`${name}-help`} className="form-text text-muted mb-2">
                  How many times do you want to repeat the process.
                </small>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <FormNumber
                  placeholder="Repeat number"
                  name="repeat"
                  value={repeat}
                  onChange={handleRepeatChange} />
              </div>
              <div className="col">
                <FormPreset
                  name="repeat"
                  label="Repeat presets"
                  values={preset}
                  current={repeat}
                  handleClick={handleRepeatChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="col">
                <label htmlFor="repeat" className="mb-0 font-weight-bold">Work phase time:</label>
                <small id="repeat-help" className="form-text text-muted mb-2">
                  How long do you want to work within one repeat.
                </small>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <FormTime
                  name="work"
                  value={work}
                  onChange={handleWorkChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="col">
                <label htmlFor="rest" className="mb-0 font-weight-bold">Rest phase time:</label>
                <small id="rest-help" className="form-text text-muted mb-2">
                  How long do you want to work within one repeat.
                </small>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <FormTime
                  name="rest"
                  value={rest}
                  onChange={handleRestChange} />
              </div>
            </div>

            <div className="form-row mt-4">
              <div className="form-group col-6">
                <button
                  type="submit"
                  className={`btn btn-outline-success w-100${disabled ? ' disabled' : ''}`}
                  disabled={disabled}>
                  Set
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
