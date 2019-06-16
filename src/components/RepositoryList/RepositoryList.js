import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import RepositoryRow from "../RepositoryRow";
import HintMessage from "../HintMessage";
import Paginator from "../Paginator";

/**
 * Muestra los repositorios en una lista.
 */
class RepositoryList extends React.PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    queried: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired
  };

  renderMessage() {
    let texto = "",
      number = this.props.data.length;
    if (this.props.loading) {
      texto = (
        <span>
          Searching results for <b>{this.props.search}</b>
        </span>
      );
    } else if (number > 0) {
      texto = (
        <span>
          We found <b>{number}</b> repositories{" "}
        </span>
      );
    } else if (number === 0 && this.props.queried) {
      texto = (
        <span>
          We couldn't find any data matching <b>{this.props.search}</b> Try
          another search
        </span>
      );
    } else {
      texto = "Type the name of a repository and click search";
    }
    // Return
    return <HintMessage>{texto}</HintMessage>;
  }

  renderTable() {
    if (this.props.data.length === 0) {
      return null;
    }

    return (
      <table className="u-full-width">
        <thead>
          <tr>
            <th>Repository</th>
            <th>Owner</th>
            <th>Stars</th>
            <th>Forks</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.data.map(repo => (
            <RepositoryRow key={repo.id} repo={repo} />
          ))}
        </tbody>
      </table>
    );
  }

  /**
   * Render the RepositoryList component
   */
  render() {
    return (
      <section className="RepositoryList">
        {this.renderMessage()}
        {this.renderTable()}
      </section>
    );
  }
}

// Export the class
export default Paginator(RepositoryList);
