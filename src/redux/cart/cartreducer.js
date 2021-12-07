import { addItem } from './cart.util';
import { reduceItem } from './cart.util';

const initialState = {
    hidden: false,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_HIDDEN':
            return {
                ...state,
                hidden: !state.hidden
            }

        case 'ADD_ITEM':
            return {
                ...state,
                cartItems: addItem(state.cartItems, action.payload)
            }

        case 'REMOVE_ITEM_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }

        case 'REDUCE_ITEM_QUANTITY':
            return {
                ...state,
                cartItems: reduceItem(state.cartItems, action.payload)
            }

        default:
            return state;
    }

}

export default cartReducer;