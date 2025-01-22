import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetItems } from "../../utils/LocalStorage";
import toast from "react-hot-toast";
import axios from "axios";

let token = GetItems("user");
let user_id = token?.user_id;
const initialState = {
  cart: 0,
  isCartOpen: false,
  user_id: user_id || null,
  loading: false,
  error: null,
  cartData: [],
  fullCartData: {},
};

export const AddToCart = createAsyncThunk(
  "cart/AddToCart",
  async ({ user_id, slug, size, quantity }) => {
    if (!user_id) {
      return toast.error("Login first to add to cart");
    }
    if (!slug || !quantity || !size) {
      console.log("provide slug,size and quantity");
    }
    try {
      const { data } = await axios.post("http://localhost:3000/add-to-cart", {
        user_id,
        slug,
        quantity,
        size,
      });

      return data;
    } catch (error) {
      console.log("add to cart error", error);

      toast.error(error.message);
      thunkAPI.rejectWithValue(error.response.data);
      toast.error("Something went wrong! please explore our page later");
    }
  }
);

export const GetCart = createAsyncThunk("cart/GetCart", async (user_id) => {
  if (!user_id) {
    return toast.error("Login first to add to cart");
  }

  try {
    const { data } = await axios.post("http://localhost:3000/get-cart", {
      user_id,
    });
    return data.cart;
  } catch (error) {
    console.log("get cart error", error);

    toast.error(error.message);
    thunkAPI.rejectWithValue(error.response.data);
    toast.error("Something went wrong! please explore our page later");
  }
});

export const RemoveCart = createAsyncThunk(
  "cart/RemoveCart",
  async ({ user_id, slug, size }) => {
    if (!user_id || !slug || !size) {
      console.log(" user_id ,sizeand slug are required");
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:3000/remove-from-cart",
        {
          user_id,
          slug,
          size,
        }
      );
      return;
    } catch (error) {
      console.log("add to cart error", error);

      toast.error(error.message);
      thunkAPI.rejectWithValue(error.response.data);
      toast.error("Something went wrong! please explore our page later");
    }
  }
);
export const DeleteCart = createAsyncThunk(
  "cart/DeleteCart",
  async ({ user_id, slug, size }) => {
    if (!user_id || !slug || !size) {
      console.log(" user_id ,sizeand slug are required");
      return;
    }
    try {
      await axios.post("http://localhost:3000/delete-from-cart", {
        user_id,
        slug,
        size,
      });
    } catch (error) {
      console.log("delete to cart error", error);

      toast.error(error.message);
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
    },
    descreaseCart: (state) => {
      state.cart -= 1;
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
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
        state.cart = action.payload.cartItems?.length;
        state.cartData = action.payload.cartItems;
        state.fullCartData = action.payload;
      })
      .addCase(GetCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(RemoveCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(RemoveCart.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(RemoveCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(DeleteCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(DeleteCart.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(DeleteCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { increaseCart, descreaseCart, toggleCart, openCart, closeCart } =
  CartSlice.actions;
export default CartSlice.reducer;
