
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/auth.jsx';
import productReducer from '../slices/Products.jsx';
import cartReducer from '../slices/Cart.jsx'
export const store = configureStore({
  reducer: {
    auth: authReducer, 
    products:productReducer,
    cart:cartReducer
  },
});

export default store;
