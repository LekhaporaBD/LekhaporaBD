import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import profilePicReducer from './store/users';
import ui from './store/ui';

import dashboardReducer from './video/store/reducers/dashboardReducer';
import callReducer from './video/store/reducers/callReducer';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  };
  
  const rootReducer = combineReducers({ ui, profilePicReducer , dashboard: dashboardReducer, call: callReducer });
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
  });

export default store;