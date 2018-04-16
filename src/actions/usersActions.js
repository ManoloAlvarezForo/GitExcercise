import axios from 'axios';

/**
 * Constant to represent the users url to get all users for github API.
 */
const usersUrl = 'https://api.github.com/users';

/**
 * Loads the users according the request.
 * 
 * @returns A dispatch with the new users
 */
const loadUsers = () => {
    return dispatch => {
       return axios.get(usersUrl)
        .then(response => {
            dispatch({
                type: "LOAD_USERS",
                users: response.data
            })
        }).catch(error => {
            console.log('Error to dispatch load users [' + error + ']');
        })
    }
}

export { loadUsers };