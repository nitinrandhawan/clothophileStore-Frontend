import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import reducer from "./auth";

const initialState = {
  products: [],
  discountedProducts: [],
  latestProducts:[],
  HighToLowProducts:[],
  productDetails: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {

    try {
    
      const { data } = await axios.get(
        "http://localhost:3000/get-all-products"
      );

     
      return data.AllProducts;
    } catch (error) {
      console.log("Get all products error", error);

      thunkAPI.rejectWithValue(error.response.data);
      toast.error("Something went wrong! please explore our page later");
    }
  }
);

export const fetchSellProducts = createAsyncThunk(
  "products/fetchSellProducts",
  async (_, thunkAPI) => {
  
    try {
    
      const { data } = await axios.post(
        "http://localhost:3000/filter-products",
        { discount: "yes", limit: 6 }
      );
    
     
      return data.AllProducts;
    } catch (error) {
      console.log("Get all products error", error);
    
      thunkAPI.rejectWithValue(error.response.data);
      toast.error("Something went wrong! please explore our page later");
    }
  }
);
export const fetchLatestProducts = createAsyncThunk(
  "products/fetchLatestProducts",
  async (_, thunkAPI) => {
  
    try {
    
      const { data } = await axios.post(
        "http://localhost:3000/filter-products",
        { latest: "yes" }
      );
    
      return data.AllProducts;
    } catch (error) {
      console.log("Get latest products error", error);
    
      thunkAPI.rejectWithValue(error.response.data);
      toast.error("Something went wrong! please explore our page later");
    }
  }
);
export const fetchProductDetails = createAsyncThunk(
  "product/fetchProductDetails",
  async (slug) => {
  

    try {
    
      const { data } = await axios.post(
        "http://localhost:3000/get-product-details",{slug}
      );
    
      
      return data.productDetails;
    } catch (error) {
      console.log("Get product details error", error);
    
      toast.error("Something went wrong! please explore our page later");
    }
  }
);
export const fetchHighToLowProducts = createAsyncThunk(
  "products/fetchHighToLowProducts",
  async (_, thunkAPI) => {
  
    try {
    
      const { data } = await axios.post(
        "http://localhost:3000/filter-products",
        { HighToLow: "yes" }
      );
    
      return data.AllProducts;
    } catch (error) {
      console.log("Get high to low products error", error);
    
      thunkAPI.rejectWithValue(error.response.data);
      toast.error("Something went wrong! please explore our page later");
    }
  }
);
export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearProductDetails: (state) => {
      state.productDetails = null;
    },
    updateProducts:(state,action)=>{
      let {data}=action.payload;
      state.products=data
    },
    discountProducts:(state)=>{
      state.products=state.discountedProducts
    },
    newestProducts:(state)=>{
      state.products=state.latestProducts
    },
    highToLowProducts:(state)=>{
      state.products=state.HighToLowProducts
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(fetchSellProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSellProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.discountedProducts = action.payload;
      })
      .addCase(fetchSellProducts.rejected, (state,action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetails = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state,action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(fetchLatestProducts.pending,(state)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLatestProducts.fulfilled,(state,action)=>{
        state.loading = false;
        state.latestProducts = action.payload;
      })
      .addCase(fetchLatestProducts.rejected, (state,action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(fetchHighToLowProducts.pending,(state)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHighToLowProducts.fulfilled,(state,action)=>{
        state.loading = false;
        state.HighToLowProducts = action.payload;
      })
      .addCase(fetchHighToLowProducts.rejected, (state,action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })
  },
});

export const {clearProductDetails,updateProducts,discountProducts,newestProducts,highToLowProducts} = ProductsSlice.actions;
export default ProductsSlice.reducer;
