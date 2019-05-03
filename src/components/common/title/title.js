import PropTypes from 'prop-types';
import Title from './title.jsx';

Title.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.string), PropTypes.string ]),
  variant: PropTypes.oneOf(['light', 'white', 'dark', 'black']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  uppercase: PropTypes.bool
};

Title.defaultProps = {
  icon: null,
  variant: 'black',
  align: 'left',
  uppercase: true
};

export default Title;
