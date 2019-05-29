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
      isLoading: true
    };
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

  render() {
    if (this.state.isLoading === true) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="App">
          <Home repos={this.state.repos} />
          <RepoDetailPage />
        </div>
      );
    }
  }
}

export default App;
