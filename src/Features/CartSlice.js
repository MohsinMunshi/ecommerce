import { createSlice } from '@reduxjs/toolkit'
export const cartSlice = createSlice({
    name: 'counter',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state,action) => {
            if(state.cart.find((item) => item.id === action.payload.id)){
                state.cart.forEach((item) => {
                    if(item.id === action.payload.id){
                        item.count++
                    }
                })
                return
            }else{
                state.cart.push(action.payload)
            }
        },
        removeFromCart: (state,action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        countIncrement: (state,action) => {
            state.cart.forEach((item) => {
                if(item.id === action.payload){
                    item.count++
                }
            })
        },
        countDecrement: (state,action) => {
            state.cart.forEach((item) => {
                if (item.id === action.payload) {
                    if (item.count === 1) {
                        return
                    }
                    item.count--
                }
            })
        },

    }
})

// Action creators are generated for each case reducer function
export const { addToCart,removeFromCart,countIncrement,countDecrement } = cartSlice.actions

export default cartSlice.reducer