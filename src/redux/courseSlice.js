import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	allCourses: [],
};

export const courseSlice = createSlice({
	name: "courses",
	initialState,
	reducers: {
		addToAllCourses(state, action){
			state.allCourses.push(action.payload);
		}
  },})
  export const {
    addToAllCourses,
  } = courseSlice.actions;
  
  export default courseSlice.reducer;