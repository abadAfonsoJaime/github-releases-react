import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// Componentes
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaBeer } from "react-icons/fa";
import GithubAvatar from "../GithubAvatar";

/**
 * Renderiza la información relativa a un repositorio
 */
class RepositoryRow extends React.PureComponent {
  /**
   * Props del componente
   */
  static propTypes = {
    repo: PropTypes.object.isRequired
  };

  /**
   * Render the RepositoryRow component
   */
  render() {
    let repo = this.props.repo;

    return (
      <tr>
        <td>{repo.full_name}</td>
        <td>
          <GithubAvatar author={repo.owner} />
        </td>
        <td>
          <FaStar /> {repo.stargazers_count}
        </td>
        <td>
          <FaBeer /> {repo.forks_count}
        </td>
        <td className="align-right">
          {
            <a className="button button-primary" to={`/${repo.full_name}`}>
              Releases
            </a>
          }
        </td>
      </tr>
    );
  }
}

// Export the class
export default RepositoryRow;
