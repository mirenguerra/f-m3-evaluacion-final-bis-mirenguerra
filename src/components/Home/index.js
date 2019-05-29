import React from 'react';
import './styles.scss';
import Search from '../Search/index';
import RepoList from '../RepoList/index';
import PropTypes from 'prop-types';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <header className="Home__header">Repos at Adalab in GitHub</header>
        <main className="Home__main">
          <Search />
          <RepoList repos={this.props.repos}/>
        </main>
      </div>
    );
  }
}

Home.propTypes={
  repos:PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Home;
