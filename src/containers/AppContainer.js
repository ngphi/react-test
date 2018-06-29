import {connect} from 'react-redux';
import App from '../components/App';
import {loadImages} from '../actions/ImageActions';

const mapStateToProps = (state) => ({
  urls : state.images.urls,
  shouldScroll: !state.images.urls.length,
  isLoading: state.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  scrollFunction: () => dispatch(loadImages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
