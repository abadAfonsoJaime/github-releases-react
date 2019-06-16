import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

/**
 * Renderiza el formulario de búsqueda.
 */
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    // Binds
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      search: ""
    };
  }

  // Capturamos el evento del campo de texto cuando escribe el usuario
  onChange(e) {
    // e --> represents the event
    // target --> represents the element
    // value --> represents the value attribute
    this.setState({ search: e.target.value });
  }

  // Evento para enviar correctamente el texto completo guardado en el state
  onSubmit(value) {
    value.preventDefault();
    this.props.onSubmit(this.state.search);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Search a Repository</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="react, webpack..."
          onChange={this.onChange}
          // if value instead of defaultValue it would be readOnly
          defaultValue={this.state.search}
        />
        <p className="align-center">
          <input type="submit" className="button-primary" value="Search" />
        </p>
      </form>
    );
  }
}

// Export the class
export default SearchForm;
