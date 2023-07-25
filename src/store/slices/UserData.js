/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   name: "",
//   age: "",
//   birth: "",
//   address: "",
//   gender: "",
//   country: "",
//   pic: "",
//   phone: "",
// };
const userData = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      // console.log('payload',action.payload)
      //   state.name = action.payload.name;
      //   state.age = action.payload.age;
      //   state.birth = action.payload.birth;
      //   state.address = action.payload.address;
      //   state.country = action.payload.country;
      //   state.gender = action.payload.gender;
      //   state.pic = action.payload.pic;
      //   state.phone = action.payload.phone;
      state.push(action.payload);
    },
    removeUser: (state, action) => {
      // console.log(action.payload)
      state.splice(action.payload, 1);
    },
    clearUsers: (state, action) => {
        return []
    },
    // extraReducers: (builder) => {
    //   builder.addCase(clearUsers, () => {
    //     return [];
    //   });
    // },
  },
});
export default userData.reducer;
export const { addUser, removeUser,clearUsers } = userData.actions;
