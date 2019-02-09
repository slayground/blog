export default (state = [], action) => {
    // optimal: switch >> if
    switch (action.type) {
        case 'FETCH_USER':
            return [...state, action.payload];
        default:
            return state;
    }
}