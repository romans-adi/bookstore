// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      state.status = action.payload === 'Under construction'
        ? 'Under construction' : state.status;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
