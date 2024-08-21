import { createSlice } from "@reduxjs/toolkit";

// Initial state for the products slice
const initialState = {
  products: [],
};

// Create a slice of the Redux store for managing products
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Action to add a new product
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    // Action to update an existing product
    updateProduct: (state, action) => {
      const { id, updates } = action.payload;
      const product = state.products.find(product => product.itemId === id);
      if (product) {
        Object.assign(product, updates);
      }
    },
    // Action to remove a product
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.itemId !== action.payload);
    },
    // Action to set products (useful for initializing state)
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

// Export actions
export const { addProduct, updateProduct, removeProduct, setProducts } = productsSlice.actions;

// Selector to get the list of products
export const selectProductList = (state) => state.products.products;

// Export the reducer to be used in the store
export default productsSlice.reducer;
