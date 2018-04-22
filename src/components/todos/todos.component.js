import React from 'react';
import Helmet from 'react-helmet';

export default class Todos extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <Helmet>
          <title>MI - Todo</title>
        </Helmet>

        <div className="content">
          <h2 className="text-center my-2">Todos</h2>

          <div className="container">
            <div className="card text-center mt-5 bg-light rounded">

              <div className="card-header">
                <div className="form-group m-0">
                  <input
                    type="text"
                    className="form-control"
                    id="todo-text"
                    placeholder="What do you need to do?" />
                </div>
              </div>

              <div className="card-body">
                <div className="row pl-4 align-items-center">
                  <div className="col align-self-start text-left">
                    <input className="form-check-input cursor-pointer" type="checkbox" value="" id="todo-1" />
                    <label className="form-check-label cursor-pointer font-weight-bold" htmlFor="todo-1">
                      This is a todo item
                    </label>
                  </div>
                  <div className="col align-self-end text-right">
                    <button type="button" className="btn btn-sm btn-outline-danger">X</button>
                  </div>
                </div>
                <div className="row pl-4 my-2 align-items-center">
                  <div className="col align-self-start text-left">
                    <input className="form-check-input cursor-pointer" type="checkbox" value="" id="todo-2" />
                    <label className="form-check-label cursor-pointer font-weight-bold" htmlFor="todo-2">
                      This is an other todo item
                    </label>
                  </div>
                  <div className="col align-self-end text-right">
                    <button type="button" className="btn btn-sm btn-outline-danger">X</button>
                  </div>
                </div>
              </div>

              <div className="card-footer text-muted">
                <div className="row align-items-center">
                  <div className="col align-self-start text-left">
                    <p className="mt-2 mb-0">2 items left</p>
                  </div>

                  <div className="col align-self-center text-center">
                    <div className="form-check form-check-inline mr-2">
                      <input
                        className="form-check-input cursor-pointer"
                        type="radio"
                        name="visibility"
                        id="visibility-all"
                        value="all"
                        checked={true} />
                      <label className="form-check-label cursor-pointer" htmlFor="visibility-all">All</label>
                    </div>
                    <div className="form-check form-check-inline mx-2">
                      <input
                        className="form-check-input cursor-pointercursor-pointer"
                        type="radio"
                        name="visibility"
                        id="visibility-active"
                        value="active" />
                      <label className="form-check-label cursor-pointer" htmlFor="visibility-active">Active</label>
                    </div>
                    <div className="form-check form-check-inline ml-2">
                      <input
                        className="form-check-input cursor-pointer"
                        type="radio"
                        name="visibility"
                        id="visibility-completed"
                        value="completed" />
                      <label
                        className="form-check-label cursor-pointer"
                        htmlFor="visibility-completed">
                        Completed
                      </label>
                    </div>
                  </div>

                  <div className="col align-self-end text-right">
                    <button type="button" className="btn btn-outline-danger mr-2">Remove completed</button>
                    <button type="button" className="btn btn-outline-info ml-2">Complete all</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
