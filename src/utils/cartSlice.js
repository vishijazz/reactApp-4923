import { createSlice, current, nanoid } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit uses immer BTS
      const newItem = {
        ...action.payload,
        id_Value: nanoid(),
      };
      state.items.push(newItem);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    removeById: (state, action) => {
      const itemIdToRemove = action.payload;
      console.log("itemIdToRemove :: ",itemIdToRemove)
      // state.items = state.items.filter((item) => item.card.info.id != itemIdToRemove);
      state.items = state.items.filter((item) => item.id_Value != itemIdToRemove);
    }, 
    //originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
      //RTK - either Mutate the existing  state or return a new State
      // state.items.length = 0; // originalState = []

      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart, removeById } = cartSlice.actions;

export default cartSlice.reducer;
