import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

// fetchPosts is an action creator
// Bad approach with plain async awajt
// Action creator rule: Actions must be plain objects

// export const fetchPosts = () => {
//     return async function(dispatch, getState) {
//         const response = await jsonPlaceholder.get('/posts')

//         dispatch({
//             type: 'FETCH_POSTS',
//             payload: response
//         })
//     }
// };

// Refactoring fetchPosts
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}

// what really happens with async await babeljs
// export const fetchPosts = async () => {
//     case 0:
//         return jsonPlaceholder.get('/posts'); -> this is a request object, not a plain object
//     case 2:
//         return {
//             type: 'FETCH_POSTS',
//             payload: resp
//         }
// }

// promise gives a handle on when requests data is complete

export const fetchUser = (id) => dispatch => {
    _fetchUser(id, dispatch);
}

// put func outside to memoize (prevents overfetching)
// _fetchUser to indicate private func
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USERS',
        payload: response.data
    })
})