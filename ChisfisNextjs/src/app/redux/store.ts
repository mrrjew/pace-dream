"use client";
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { apiSlice } from './api/apiSlice';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    })
      .concat([apiSlice.middleware])
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export default store;