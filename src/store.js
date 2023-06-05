import { combineReducers, configureStore } from "@reduxjs/toolkit";
import page from "./reducers/page";
import plan from "./reducers/plan";
import user from "./reducers/user";

const reducer = combineReducers({ page, plan, user });
const store = configureStore({ reducer });

export default store;
