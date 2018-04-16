import axios from 'axios'
import sharedConst from '../shared/sharedConst'

const loadRepos = (username, page, maxPage) => {
    return dispatch => {
       return axios.get(sharedConst.URL_GIT_USERS + '/' + username + '/repos?page=' + page + '&per_page=' + maxPage +'')
        .then(response => {
            dispatch({
                type: "LOAD_REPOS",
                repos: response.data
            })
        })
    }
}

export { loadRepos };