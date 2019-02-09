export default (state = [], action) => {
    // optimal: switch >> if
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
}