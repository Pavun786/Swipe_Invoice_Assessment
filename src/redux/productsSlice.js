import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [],
};


const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
   
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    
    updateProduct: (state, action) => {
      const { id, updates } = action.payload;
      const product = state.products.find(product => product.itemId === id);
      if (product) {
        Object.assign(product, updates);
      }
    },
    
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.itemId !== action.payload);
    },
    
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});


export const { addProduct, updateProduct, removeProduct, setProducts } = productsSlice.actions;


export const selectProductList = (state) => state.products.products;


export default productsSlice.reducer;
