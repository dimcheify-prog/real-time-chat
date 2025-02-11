import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@/1_app/rootReducers";
import { useDispatch, useSelector } from "react-redux";

export function makeStore() {
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
}

export const appStore = makeStore();

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

// hooks

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
