import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

class Search extends React.Component {
  render() {
    return (
      <div className="Search">
        <form>
          <label htmlFor="name">Search by name: </label>
          <input
            className="input"
            name="name"
            type="text"
            value={this.props.filterName}
            onChange={this.props.onChangeName}
          />
        </form>
      </div>
    );
  }
}
Search.propTypes={
  filterName: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
}

export default Search;
