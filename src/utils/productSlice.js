import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: null,
    reducers: {
        addProducts: (state, action) => action.payload,
        removeProducts: () => null,
    },
})

export const { addProducts, removeProducts } = productSlice.actions;
export default productSlice.reducer;