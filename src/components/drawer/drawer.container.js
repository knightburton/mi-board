import { connect } from 'react-redux';
import { getIsDrawerOpened, toggleDrawer } from '../../store/app';
import Drawer from './drawer.component';

const mapStateToProps = state => ({
  isDrawerOpened: getIsDrawerOpened(state)
});

const mapDispatchToProps = {
  toggleDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
