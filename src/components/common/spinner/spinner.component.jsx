import React from 'react';

export default class Spinner extends React.PureComponent {
  render() {
    const { variant, grow, small, className, role } = this.props;

    const type = grow ? 'grow' : 'border';
    const sm = small ? ` spinner-${type}-sm` : '';
    const props = {
      className: `spinner-${type} text-${variant}${sm} ${className}`,
      ...role ? { role } : {}
    };

    return <span {...props} />
  }
}
