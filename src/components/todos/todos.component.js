import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import TodosError from './todos-error/todos.error.component';
import TodosHeader from './todos-header/todos-header.container';
import TodosList from './todos-list/todos-list.container';
import TodosFooter from './todos-footer/todos-footer.container';

export default class Todos extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, error } = this.props;

    return (
      <div className="wrapper">
        <Helmet>
          <title>MI - Todo</title>
        </Helmet>

        <div className="content">
          <h2 className="text-center my-2">Todos</h2>

          <div className="container">

            {error !== null &&
              <TodosError error={error}/>
            }

            <TodosHeader />
            <TodosList todos={todos} />
            <TodosFooter todos={todos} />
          </div>

        </div>
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  error: PropTypes.object,
  fetchTodos: PropTypes.func.isRequired
};
