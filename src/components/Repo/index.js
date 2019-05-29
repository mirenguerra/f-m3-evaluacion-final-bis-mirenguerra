import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

class Repo extends React.Component {
  render() {
    return (
      <div className="Repo">
        <h2 className="Repo__name">{this.props.name}</h2>
        <p className="Repo__description">{this.props.description}</p>
        <p className="Repo__language">{this.props.language}</p>
      </div>
    );
  }
}

Repo.propTypes={
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  language: PropTypes.string.isRequired,
}

export default Repo;
