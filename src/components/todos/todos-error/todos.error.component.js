import React from 'react';
import PropTypes from 'prop-types';

export default class TodosError extends React.Component {

  constructor(props) {
    super(props);

    this.getErrorHead = () => {
      return `Error${this.props.error.response.status ? ` ${this.props.error.response.status}` : ''}! `;
    };

    this.getErrorMessage = () => {
      const { error } = this.props;
      const statusText = error.response.statusText ? error.response.statusText : 'Something went wrong';
      const message = error.response.data.message ? error.response.data.message : 'it\'s not a bug, it\'s a feature.';

      return `${statusText}, ${message}`;
    };
  }

  render() {
    return (
      <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>{this.getErrorHead()}</strong>{this.getErrorMessage()}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

TodosError.propTypes = {
  error: PropTypes.object.isRequired
};
