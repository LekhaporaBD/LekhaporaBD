import defaultImg from '../assets/defaultAvatar.png';

const initialState = {
  img: defaultImg,
};

const CHANGE_IMG = 'CHANGE_IMG';
const DEFAULT_IMG = 'DEFAULT_IMG';

const profilePicReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_IMG: {
      return { ...state, img: action.payload };
    }

    case DEFAULT_IMG: {
      return { ...state, img: defaultImg };
    }

    default: {
      return { ...state, img: defaultImg };
    }
  }
};

export default profilePicReducer;
