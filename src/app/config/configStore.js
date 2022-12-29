import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import user from '../modules/userSlice';

const rootReducer = combineReducers({
  user,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;