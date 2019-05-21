import PropTypes from 'prop-types';
import TopTabs from './top-tabs.component';

TopTabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
    to: PropTypes.string
  })).isRequired,
  selectedByDefault: PropTypes.string.isRequired
};

TopTabs.defaultProps = {};

export default TopTabs;
