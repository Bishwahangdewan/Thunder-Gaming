export const addItem = (currentItems, newItem) => {
    //We dont want to add same items on the cart . When the same item clashes we just increase the quantity. The below code checks whether the item to have is in our current item list

    const exist = currentItems.find(currentItem => currentItem.id === newItem.id)

    //if the item to add is already in our list then we just change the quantity
    if (exist) {
        return currentItems.map(currentItem => currentItem.id === newItem.id ? { ...currentItem, quantity: currentItem.quantity + 1 } : { ...currentItem })
    } else {
        //if its a new item i.e the item to add is not in current item list
        return [...currentItems, { ...newItem, quantity: 1 }]
    }
}


export const reduceItem = (currentItems, itemToReduce) => {
    //first check if current items contains the item to reduce .If it contains then add in a variable
    const currentItem = currentItems.find(item => item.id === itemToReduce.id)

    //check if the quantity is one . If the current item quantity is one then we need to remove the item
    if (currentItem.quantity === 1) {
        //remove item
        return currentItems.filter(currentItem => currentItem.id !== itemToReduce.id)
    }

    //if quatity is more than one then just reduce
    return currentItems.map(currentItem =>
        currentItem.id === itemToReduce.id ? { ...currentItem, quantity: currentItem.quantity - 1 } : currentItem
    )
}