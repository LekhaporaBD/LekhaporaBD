import defaultImg from '../assets/default-avatar.png';

const initialState = {
  img: defaultImg,
  localStrem : {}
};

const CHANGE_IMG = 'CHANGE_IMG';
const DEFAULT_IMG = 'DEFAULT_IMG';
const SET_LOCAL = 'SET_LOCAL';

const profilePicReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_IMG: {
      return { ...state, img: action.payload };
    }

    case DEFAULT_IMG: {
      return { ...state, img: defaultImg };
    }

    case SET_LOCAL: {
      console.log(action.payload);
      return { ...state };
    }

    default: {
      return { ...state, img: defaultImg };
    }
  }
};

export default profilePicReducer;
