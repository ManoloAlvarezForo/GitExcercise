import React, { Component } from 'react';
import CardList from '../components/CardList';
import RepoDetailCard from '../components/RepoDetailCard';
import { connect } from 'react-redux';
import { loadRepos } from '../actions/reposActions';
import store from '../store/store';

const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    navTitle: {
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '10px'
    }
}

class RepoDetailPage extends Component {

    constructor(props) {
        super();
        this.state = {
            pages: [],
        }
    }

    componentDidMount() {
        store.dispatch(loadRepos(this.props.match.params.username, this.state.defaultPage, this.state.maxPage));
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <nav className="navbar" style={styles.navTitle} aria-label="main navigation">
                    <div style={styles.navTitle}>
                        {this.props.match.params.username} Repos
                    </div>
                </nav>
                <CardList cards={this.props.repos.map((repo, index) => <RepoDetailCard key={index} repo={repo} />)} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    if (!state.repos) {
        state = {
            repos: []
        }
    }

    return {
        repos: state.repos
    };
}


export default connect(mapStateToProps)(RepoDetailPage);