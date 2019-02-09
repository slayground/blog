export default (state = [], action) => {
    // optimal: switch >> if
    // in FETCH_USERS, we need to store all users data, not just 1 and then throw away => frontend only recognize the last, so?
    // => one user at a time through ownProps
    switch (action.type) {
        case 'FETCH_USERS':
            return [...state, action.payload];
        default:
            return state;
    }
}