import React from 'react';

const styles = {
    mainCard: {
        minHeight: '300px',
        width: '23%',
        margin: '5px',
        borderRadius: '5px'
    }
}

const RepoDetailCard = ({ repo }) => {
    return (
        <div style={ styles.mainCard} className="card background-gradient">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <span className="icon">
                            <i className="fa fa-github" style={{fontSize: '32px'}}></i>
                        </span>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{repo.name}</p>
                    </div>
                </div>

                <div className="content" style={{ display: 'flex', flexDirection: 'column' }}>
                    <a href={repo.html_url}>#github</a>
                    <div>
                        {repo.description}
                    </div>
                    <br></br>
                    <div>
                        <b>Open issues:</b>  {repo.open_issues_count}
                    </div>
                    <div>
                        <b>Forks:</b>  {repo.forks}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RepoDetailCard;