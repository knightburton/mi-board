import { connect } from 'react-redux';
import { getIsDrawerOpened } from '../../store/app';
import Wrapper from './wrapper.component';

const mapStateToProps = state => ({
  isDrawerOpened: getIsDrawerOpened(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
