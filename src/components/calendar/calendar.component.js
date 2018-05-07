import React from 'react';
import Helmet from 'react-helmet';
import ReactCalendar from 'react-calendar';

export default class Calendar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <Helmet>
          <title>MI - Calendar</title>
        </Helmet>

        <div className="content">
          <h2 className="text-center my-2">Calendar</h2>

          <div className="container-fluid">
            <div className="row mt-5">
              <div className="col-auto">
                <div className="row no-gutters">
                  <div className="col">
                    <ReactCalendar
                      className="rounded"
                      onChange={date => console.log(date)}
                      value={new Date()} />
                  </div>
                </div>

                <div className="row no-gutters mt-3">
                  <div className="col">
                    <h5>Settings</h5>

                    <div className="input-group input-group-sm mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">User</span>
                      </div>
                      <div className="input-group-append">
                        <button type="button" className="btn btn-outline-secondary">Role 1</button>
                        <button type="button" className="btn btn-outline-secondary">Role 2</button>
                      </div>
                    </div>

                    <div className="input-group input-group-sm mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Color</span>
                      </div>
                      <div className="input-group-append">
                        <button type="button" className="btn btn-outline-primary">B</button>
                        <button type="button" className="btn btn-outline-success">G</button>
                        <button type="button" className="btn btn-outline-danger">R</button>
                        <button type="button" className="btn btn-outline-warning">Y</button>
                        <button type="button" className="btn btn-outline-info">A</button>
                        <button type="button" className="btn btn-outline-dark">D</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="row no-gutters mb-4">
                  <div className="col">
                    <h5>Add a new reminder to the selected date</h5>

                    <form className="form">

                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="calendar-new-text">Reminder</span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Reminder"
                          aria-describedby="calendar-new-text" />
                      </div>

                      <div className="row">
                        <div className="col">
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="">From</span>
                            </div>
                            <select className="custom-select" id="calendar-new-from-h">
                              <option defaultValue>Choose...</option>
                              <option value="0">00</option>
                              <option value="1">01</option>
                              <option value="2">02</option>
                            </select>
                            <select className="custom-select" id="calendar-new-from-m">
                              <option defaultValue>Choose...</option>
                              <option value="0">00</option>
                              <option value="15">15</option>
                              <option value="30">30</option>
                              <option value="45">45</option>
                            </select>
                          </div>
                        </div>
                        <div className="col">
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="">To</span>
                            </div>
                            <select className="custom-select" id="calendar-new-to-h">
                              <option defaultValue>Choose...</option>
                              <option value="0">00</option>
                              <option value="1">01</option>
                              <option value="2">02</option>
                            </select>
                            <select className="custom-select" id="calendar-new-to-m">
                              <option defaultValue>Choose...</option>
                              <option value="0">00</option>
                              <option value="15">15</option>
                              <option value="30">30</option>
                              <option value="45">45</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <button type="button" className="btn btn-outline-danger btn-sm w-100">Reset</button>
                        </div>
                        <div className="col">
                          <button type="button" className="btn btn-outline-info btn-sm w-100">Add</button>
                        </div>
                      </div>

                    </form>
                  </div>
                </div>

                <div className="row no-gutters">
                  <table className="table table-sm table-striped table-hover table-bordered">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Selected day</th>
                        <th scope="col">Next day</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">00:00</th>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">01:00</th>
                        <td>Something important</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">02:00</th>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">03:00</th>
                        <td>Something important</td>
                        <td>The same</td>
                      </tr>
                      <tr>
                        <th scope="row">04:00</th>
                        <td>Something important</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">05:00</th>
                        <td>Something important</td>
                        <td>Meeting...</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
