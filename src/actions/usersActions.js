import axios from 'axios';
import sharedConst from '../shared/sharedConst'

/**
 * Loads the users according the request.
 * 
 * @returns A dispatch with the new users
 */
const loadUsers = () => {
    return dispatch => {
       return axios.get(sharedConst.URL_GIT_USERS)
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