import { createSlice } from "@reduxjs/toolkit";
import { GetItems, SetItems } from "../../utils/LocalStorage";

const initialState = {
  token: GetItems("user") || null
};


export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      SetItems('user',action.payload)
      state.token=action.payload
      
    },
    logout:(state)=>{
      state.token=null;
    }
  },
});

export const userActions=authSlice.actions
export default authSlice.reducer;
