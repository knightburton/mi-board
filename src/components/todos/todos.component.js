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
        </div>
      </div>
    );
  }
}
