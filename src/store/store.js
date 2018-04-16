import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

/**
 * A Reduser to return the new state according the action type.
 * 
 * @param {object} state The state parameter.
 * @param {object} action The action parameter
 */
const reducer = (state, action) => {
    if (action.type === 'LOAD_USERS') {
        return {
            users: action.users
        }
    } else if (action.type === 'LOAD_REPOS') {
        return {
            repos: action.repos
        }
    }

    return state;
}


export default createStore(reducer, { users: [], repos: [] }, applyMiddleware(thunk));