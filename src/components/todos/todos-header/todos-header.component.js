import React from 'react';
import PropTypes from 'prop-types';

export default class TodosHeader extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.handleChange = event => {
      const { value } = event.target;

      this.setState({
        text: value
      });
    };

    this.handleKeyDown = event => {
      if (event.which === 13) {
        this.props.handleTodoSubmit(this.state.text);

        this.setState({
          text: ''
        });
      }
    };
  }

  render() {
    return (
      <div className="form-group mt-5 mb-4">
        <input
          type="text"
          className="form-control"
          id="todo-text"
          placeholder="What do you need to do?"
          autoComplete="false"
          value={this.state.text}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange} />
      </div>
    );
  }
}

TodosHeader.propTypes = {
  handleTodoSubmit: PropTypes.func.isRequired
};
