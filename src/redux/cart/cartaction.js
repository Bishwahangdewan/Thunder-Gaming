export const cartAction = () => ({
    type: "TOGGLE_HIDDEN"
})

export const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: item
})

export const removeItem = (item) => ({
    type: 'REMOVE_ITEM_FROM_CART',
    payload: item
})

export const reduceItemQuantity = (item) => ({
    type: 'REDUCE_ITEM_QUANTITY',
    payload: item
})