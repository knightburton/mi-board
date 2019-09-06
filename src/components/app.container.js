import { connect } from 'react-redux';
import App from './app.component';
import { getIsAppWaiting } from '../store/app';

const mapStateToProps = state => ({
  isAppWaiting: getIsAppWaiting(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
