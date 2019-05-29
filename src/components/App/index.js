import React from "react";
import "./styles.scss";
import fetchRepos from "../../services/repos-service";
import Home from "../Home/index";
import RepoDetailPage from "../RepoDetailPage/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      isLoading: true,
      filterName: ""
    };
    this.handleSearchName = this.handleSearchName.bind(this);
  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos() {
    fetchRepos().then(data => {
      this.setState({
        repos: data,
        isLoading: false
      });
    });
  }

  handleSearchName(event) {
    const searchedName = event.currentTarget.value;
    this.setState({
      filterName: searchedName
    });
  }

  render() {
    if (this.state.isLoading === true) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="App">
          <Home
            repos={this.state.repos}
            onChangeName={this.handleSearchName}
            filterName={this.state.filterName}
          />
          <RepoDetailPage />
        </div>
      );
    }
  }
}

export default App;
