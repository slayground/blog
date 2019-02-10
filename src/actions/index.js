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

// Refactoring fetchPosts
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}

// MEMOIZE approach
// put func outside to memoize (prevents overfetching)
// _fetchUser to indicate private func

// export const fetchUser = (id) => dispatch => {
//     _fetchUser(id, dispatch);
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//         type: 'FETCH_USERS',
//         payload: response.data
//     })
// })

// ORIGINAL approach
export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USERS',
        payload: response.data
    })
}

// call action creator inside action creator -> dispatch()
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // await makes sure fetchPosts finishes fetching before moving on to the next line
    await dispatch(fetchPosts());

    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));

    // optional way
    // _.chain(getState.posts)
    //     .map('userId')
    //     .uniq()
    //     .forEach(id => dispatch(fetchUser(id)))
    //     .value(); // execute
}