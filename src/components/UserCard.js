import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user, page = 1 }) => {
    return (
        <div style={{ width: '23%', minHeight: '350px', margin: '5px', borderRadius: '5px' }} className="card background-gradient">
            <div className="card-image">
                <figure className="image is-square">
                    <img style={{ borderRadius: '5px 5px 0 0' }} src={user.avatar_url} alt="" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{user.login}</p>
                    </div>
                </div>
                <div className="content">
                    Github link.
                    <a href={user.html_url}>#github</a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Link to={`/user/${user.login}/${page}`} className="button is-primary is-outlined">Repos
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserCard;