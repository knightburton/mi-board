import React from 'react';
import FormTime from '../form-time/form-time.component';

export default class CountdownForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, handleTimeChange, handleResetClick, time } = this.props;
    const disabled = time === 0;

    return (
      <div className="row justify-content-center mt-5">
        <div className="container">
          <div className="col">
            <form onSubmit={handleSubmit}>

              <div className="form-row">
                <div className="col">
                  <label htmlFor="repeat" className="mb-0 font-weight-bold">Countdown start time:</label>
                  <small id="repeat-help" className="form-text text-muted mb-2">
                    How long do you want to workout?
                  </small>
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <FormTime
                    name="time"
                    value={time}
                    collapsed={false}
                    onChange={handleTimeChange} />
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
      </div>
    );
  }
}
