import {combineReducers} from 'redux';
import images from './images';
import isLoading from './isLoading';

export default combineReducers({
  images,
  isLoading
});
