import React from 'react';

const RepoDetailCard = ({repo}) => {
        return(
            <div style={{ minHeight: '300px', width: '23%', margin: '5px', borderRadius: '5px' }} className="card background-gradient">
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{repo.name}</p>
                    </div>
                </div>

                <div className="content">
                    Here for the Github link.
                    <a href={repo.html_url}>#github</a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    hello
                </div>
            </div>
        </div>
        )
}

export default RepoDetailCard;