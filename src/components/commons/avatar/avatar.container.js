import { connect } from 'react-redux';
import { getProfilePhotoUrl } from '../../../store/profile';
import Avatar from './avatar.component';

const mapStateToProps = state => ({
  url: getProfilePhotoUrl(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
