import React from "react";
import "./styles.scss";
import Search from "../Search/index";
import RepoList from "../RepoList/index";
import PropTypes from "prop-types";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <header className="Home__header">Repos at Adalab in GitHub</header>
        <main className="Home__main">
          <Search
            repos={this.props.repos}
            onChangeName={this.props.onChangeName}
            filterName={this.props.filterName}
          />
          <RepoList
            repos={this.props.repos}
            filterName={this.props.filterName}
          />
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterName: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired
};

export default Home;
