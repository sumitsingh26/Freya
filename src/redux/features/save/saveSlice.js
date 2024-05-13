import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  savedItems: [],
};

const savedItemsSlice = createSlice({
  name: 'savedItems',
  initialState,
  reducers: {
    saveItem(state, action) {
      state.savedItems.push(action.payload);
    },
    unsaveItem(state, action) {
      state.savedItems = state.savedItems.filter(
        itemId => itemId !== action.payload,
      );
    },
  },
});

export const {saveItem, unsaveItem} = savedItemsSlice.actions;
export default savedItemsSlice.reducer;
