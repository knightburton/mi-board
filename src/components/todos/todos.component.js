import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import TodosHeader from './todos-header/todos-header.container';
import TodosList from './todos-list/todos-list.container';
import TodosFooter from './todos-footer/todos-footer.container';

export default class Todos extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { todos, filter } = this.props;

    return (
      <div className="wrapper">
        <Helmet>
          <title>MI - Todo</title>
        </Helmet>

        <div className="content">
          <h2 className="text-center my-2">Todos</h2>

          <div className="container">
            <TodosHeader />
            <TodosList todos={todos} filter={filter} />
            <TodosFooter todos={todos} filter={filter} />
          </div>

        </div>
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired
};
