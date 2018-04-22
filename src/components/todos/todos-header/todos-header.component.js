import React from 'react';

export default class TodosHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-group mt-5 mb-4">
        <input
          type="text"
          className="form-control"
          id="todo-text"
          aria-describedby="emailHelp"
          placeholder="What do you need to do?" />
      </div>
    );
  }
}
