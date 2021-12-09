import { createSelector } from "reselect";

//instead of doing this(below code) we do data normalization which means using object instead of list coz if there is a lot of list eg 10000 then finding an item will take a lot of time (worst case be 10000)so we use object with key as aearch value so the search happens only once

/*const COLLECTION_ID_MAP = {
    action: 1,
    fantasy: 2
}*/

const selectShop = state => state.shop

export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectShopCollection],
        collections => collections[collectionUrlParam]
    )
//object.keys returns array whose elements are object keys
export const selectCollectionsForPreview = createSelector(
    [selectShopCollection],
    collections => Object.keys(collections).map(key => collections[key])
)