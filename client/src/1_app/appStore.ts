import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@/1_app/rootReducers";
import { useDispatch, useSelector } from "react-redux";
import { baseApi } from "@/6_shared/api";
import { persistStore, persistReducer } from "redux-persist";
import { PersistConfig } from "redux-persist/lib/types";
import storage from "redux-persist/lib/storage";

const persistConfig: PersistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function makeStore() {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(baseApi.middleware),
  });
  return store;
}

export const appStore = makeStore();

export const persistedStore = persistStore(appStore);

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

// hooks

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
