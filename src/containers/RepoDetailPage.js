import React, { Component } from 'react';
import CardList from '../components/CardList';
import RepoDetailCard from '../components/RepoDetailCard';
import Pagination from '../components/Pagination'
import { connect } from 'react-redux';
import { loadRepos, getPages} from '../actions/reposActions';
import store from '../store/store';


const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '60px'
    },
    navTitle: {
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
    }, title: {
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
            maxPage: 8,
            defaultPage: 1
        }
    }

    componentDidMount() {
        store.dispatch(loadRepos(this.props.match.params.username, this.state.defaultPage, this.state.maxPage));
        getPages(this.props.match.params.username, this.state.maxPage)
        .then(response => {
            this.setState({
                pages: response
            })
        })
    }

    render() {
        return (
            <div style={styles.mainContainer}>
                <nav className="navbar is-fixed-top" style={styles.navTitle} aria-label="main navigation">
                    <div style={styles.title}>
                        {this.props.match.params.username} Repos
                    </div>
                </nav>
                <CardList cards={this.props.repos.map((repo, index) => <RepoDetailCard key={index} repo={repo} />)} />
                <Pagination seletedPage={this.props.match.params.page} maxPage={this.state.maxPage} pages={ this.state.pages } username={this.props.match.params.username}/>
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