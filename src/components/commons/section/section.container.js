import { connect } from 'react-redux';
import { getIsSectionWaiting } from '../../../store/app';
import Section from './section.component';

const mapStateToProps = (state, props) => {
  const { waitingKey } = props;
  const isWaiting = waitingKey ? getIsSectionWaiting(waitingKey)(state) : false;

  return {
    isWaiting
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Section);
