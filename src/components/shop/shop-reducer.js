export const ShopReducer = (state, action) => {
    switch (action.type) {
        case 'addProduct':
            return [...state, action.payload];
        case 'addFavProduct':
            return [];

        default:
            return state;
    }
}