import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "./api/booksApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [bookApi.reducerPath]: bookApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(bookApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
