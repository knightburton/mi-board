import { connect } from 'react-redux';
import { getProfile } from '../../../store/profile';
import ProfileProviderComponent from './profile.provider.component';
import ProfileContext from './context';

const mapStateToProps = state => ({
  profile: getProfile(state),
});

const mapDispatchToProps = {};

export const ProfileProvider = connect(mapStateToProps, mapDispatchToProps)(ProfileProviderComponent);
export const ProfileConsumer = ProfileContext.Consumer;
export default {
  ProfileProvider,
  ProfileConsumer,
};
