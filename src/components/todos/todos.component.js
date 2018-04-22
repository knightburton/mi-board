import React from 'react';
import Helmet from 'react-helmet';
import TodosHeader from './todos-header/todos-header.container';
import TodosList from './todos-list/todos-list.container';
import TodosFooter from './todos-footer/todos-footer.component';

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
            <TodosHeader />
            <TodosList todos={[]}/>
            <TodosFooter />
          </div>

        </div>
      </div>
    );
  }
}
