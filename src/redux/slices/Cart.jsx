import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetItems } from "../../utils/LocalStorage";
import toast from "react-hot-toast";
import axios from "axios";

let token = GetItems("user");
let user_id = token?.user_id;
const initialState = {
  cart: 0,
  user_id: user_id || null,
  loading: false,
  error: null,
  cartData:[]
};

export const AddToCart = createAsyncThunk(
  "cart/AddToCart",
  async ({user_id,slug,size,quantity}) => {
   

    if (!user_id) {
      return toast.error("Login first to add to cart");
    } 
    if(!slug || !quantity || !size){
        console.log("provide slug,size and quantity");
        
    }
      try {
    
        const { data } = await axios.post("https://clothophile.onrender.com/add-to-cart", {
          user_id,
          slug,
          quantity,
          size
        }); 
       
        return data;
      } catch (error) {
        console.log("add to cart error", error);
    
        toast.error(error.message)
        thunkAPI.rejectWithValue(error.response.data);
        toast.error("Something went wrong! please explore our page later");
      }
    
  }
);

export const GetCart = createAsyncThunk(
    "cart/GetCart",
    async (user_id) => {
     
      if (!user_id) {
        return toast.error("Login first to add to cart");
      } 
     
        try {
          const { data } = await axios.post("https://clothophile.onrender.com/get-cart", {
            user_id,
          }); 
          return data.cart.cartItems;
        } catch (error) {
          console.log("add to cart error", error);
      
          toast.error(error.message)
          thunkAPI.rejectWithValue(error.response.data);
          toast.error("Something went wrong! please explore our page later");
        }
      
    }
  );

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    increaseCart: (state, action) => {
      const { slug } = action.payload;
      state.cart += 1;
      console.log(slug);

      console.log("increase", state.cart);
    },
    descreaseCart: (state) => {
      state.cart -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AddToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AddToCart.fulfilled, (state, action) => {
        state.loading = false;
            state.cart += 1;
 
      })
      .addCase(AddToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(GetCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetCart.fulfilled, (state, action) => {
        state.loading = false;
            state.cartData =action.payload;
 
      })
      .addCase(GetCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { increaseCart, descreaseCart } = CartSlice.actions;
export default CartSlice.reducer;
