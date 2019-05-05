import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Title extends React.PureComponent {
  render() {
    const { text, icon, variant, uppercase, align } = this.props;

    return (
      <h2 className={`my-3 ${uppercase ? ' text-uppercase ' : ''}text-${variant} text-${align}`}>
        {icon &&
          <FontAwesomeIcon icon={icon} />
        }
        <span className={icon ? 'ml-2' : ''}>{text}</span>
      </h2>
    );
  }
}
