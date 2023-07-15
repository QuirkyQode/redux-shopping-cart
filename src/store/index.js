import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";

// can send HTTP request or do anything asynchronous in the reducers.
// Instead: 1. Implement asychronous calls in useEffect hooks of components
// OR 2. Create "action creater"
const store= configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
    },
})

export default store;