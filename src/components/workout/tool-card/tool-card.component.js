import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class ToolCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { icon, name, text } = this.props;
    const style = {
      width: '18rem'
    };

    return (
      <div className="card card-link pt-3" style={style}>
        <div className="text-center">
          <FontAwesomeIcon icon={icon} size="6x" />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    );
  }
}


ToolCard.propTypes = {
  icon: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
