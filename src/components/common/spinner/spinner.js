import PropTypes from 'prop-types';
import Spinner from './spinner.jsx';

Spinner.propTypes = {
  variant: PropTypes.string,
  grow: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string,
  role: PropTypes.string
};

Spinner.defaultProps = {
  variant: 'light',
  grow: false,
  small: false,
  className: '',
  role: null
};

export default Spinner;
