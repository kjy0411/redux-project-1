import {applyMiddleware, configureStore} from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";
import {createLogger} from "redux-logger/src"; // 오류 출력
import {thunk} from "redux-thunk"; // 비동기 프로그램

// 오류 출력
const logger=createLogger()
// 비동기
const middleware = [thunk,logger];
const store = configureStore({
    reducer: rootReducer,
})
export default store;