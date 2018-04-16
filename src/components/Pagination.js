import React from 'react';
import { Link } from 'react-router-dom';
import store from '../store/store';
import { loadRepos } from '../actions/reposActions';

const Pagination = ({ pages = [], username, maxPage, seletedPage }) => {

    const reloadPage = (pageNumber) => {
        store.dispatch(loadRepos(username, pageNumber, maxPage));
    }

    return (
        <div style={{ margin: '20px' }}>
            <nav className="pagination is-fixed-bottom is-rounded is-right" aria-label="pagination">
                <ul className="pagination-list">
                    {
                        pages.map((page, index) =>
                            <li key={index}>
                                <Link onClick={() => reloadPage(page.number)}
                                    className={page.number.toString() === seletedPage ? 'pagination-link is-current' : 'pagination-link'}
                                    aria-label={page.number}
                                    aria-current="page"
                                    to={`/user/${username}/${page.number}`}>
                                    {page.number}
                                </Link>
                            </li>)
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;
