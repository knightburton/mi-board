import PropTypes from 'prop-types';
import Waiting from './waiting.component';

Waiting.propTypes = {
  screen: PropTypes.bool,
  open: PropTypes.bool,
  label: PropTypes.string
};

Waiting.defaultProps = {
  screen: false,
  open: true,
  label: 'Loading...'
};

export default Waiting;
