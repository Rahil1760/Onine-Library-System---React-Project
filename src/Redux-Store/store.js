import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";

const store = configureStore({
    reducer: {
        fetch:bookSlice
    }
});

export default store;