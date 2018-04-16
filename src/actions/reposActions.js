import axios from 'axios'
import sharedConst from '../shared/sharedConst'

const loadRepos = (username, page, maxPage) => {
    return dispatch => {
        return axios.get(sharedConst.URL_GIT_USERS + '/' + username + '/repos?page=' + page + '&per_page=' + maxPage + '')
            .then(response => {
                dispatch({
                    type: "LOAD_REPOS",
                    repos: response.data
                })
            })
    }
}

const getPages = (username, maxPage) => {
    return axios.get(sharedConst.URL_GIT_USERS + '/' + username + '/repos')
        .then(response => {
            let pages = response.data.length / maxPage;
            let newPages = []
            for (let index = 1; index <= pages; index++) {
                newPages.push({ number: index, isSelected: false });
            }

            return newPages;
        })
}

export { loadRepos, getPages };