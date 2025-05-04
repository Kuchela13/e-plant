import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost} = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
        // If item already exists in the cart, increase its quantity
        existingItem.quantity++;
        } else {
        // If item does not exist, add it to the cart with quantity 1
        state.items.push({ name, image, cost, quantity: 1 });
        }
    },

    removeItem: (state, action) => {
        const {name}=action.payload;
        state.items = state.items.filter(item => item.name !== name);
    },


    
    
    updateQuantity: (state, action) => {
        const {name, quantity}=action.payload;
        const existingItemUpdate=state.items.find(item => item.name === name);
        if (existingItemUpdate) {
        existingItemUpdate.quantity=quantity;
        }
    
    },
},
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
