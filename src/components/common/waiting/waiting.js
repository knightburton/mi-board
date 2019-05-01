import PropTypes from 'prop-types';
import Waiting from './waiting.jsx';

Waiting.propTypes = {
  screen: PropTypes.bool,
  show: PropTypes.bool,
  label: PropTypes.string
};

Waiting.defaultProps = {
  screen: false,
  show: true,
  label: 'Loading...'
};

export default Waiting;
