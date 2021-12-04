//A “selector” is simply a function that accepts Redux state as an argument and returns data that is derived from that state. 

import { createSelector } from 'reselect';

//There are two types of selector : InputSelector , Output Selector.
//output selector use input selectors and create selectors to build themselves


//input selector
const selectCart = state => state.cart;

//output Selector
//createSelector takes 2 arguments first is an array of input selectors and second is a function that returns the value that is needed

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0)
)

