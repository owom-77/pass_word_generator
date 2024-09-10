import { configureStore } from "@reduxjs/toolkit";
import passSlice from "./passSlice";

let store = configureStore({
    reducer : passSlice
})

export default store;