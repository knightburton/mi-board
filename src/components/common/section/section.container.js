import PropTypes from 'prop-types';
import Paper from './section.component';

Paper.propTypes = {
  title: PropTypes.string,
  gutterBottom: PropTypes.bool,
  children: PropTypes.any.isRequired
};

Paper.defaultProps = {
  title: '',
  gutterBottom: false
};

export default Paper;
