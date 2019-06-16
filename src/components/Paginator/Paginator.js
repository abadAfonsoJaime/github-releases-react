import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// Styles
import "./Paginator.css";

export default PaginatedComponent =>
  class extends React.Component {
    static propTypes = {
      itemsPerPage: PropTypes.number.isRequired,
      data: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    static defaultProps = {
      itemsPerPage: 8
    };

    constructor() {
      super();
      // Binds
      this.onClick = this.onClick.bind(this);

      this.state = {
        page: 0
      };
    }
    // Necesario para evitar una interfaz en blanco (típico error UI de Appian)
    // en caso de estar en un número de página mayor al resultado de la nueva búsqyeda
    componentWillReceiveProps(nextProps) {
      // Comprobamos si los datos son distintos y si seguimos viéndolos por pantalla.
      // Si no, forzamos la página a 0
      let page = this.state.page;
      if (nextProps.data.length / this.props.itemsPerPage < page) {
        page = 0;
      }

      // Comprobamos si ha cambiado algo
      if (page !== this.state.page) {
        this.setState({ page });
      }
    }

    onClick(e, page) {
      // para que no recargue la página pues el elemento será un link
      e.preventDefault();
      if (page !== this.state.page) {
        this.setState({ page });
      }
    }

    // regenerar el número de links en función de las páginas
    renderPagination() {
      let numberPages = Math.ceil(
        this.props.data.length / this.props.itemsPerPage
      );
      let pages = [];
      // Create links
      if (numberPages > 1) {
        for (let i = 0; i < numberPages; i++) {
          // Podemos agregar elementos JSX a nuestro array.
          //Recordad que en esencia, son llamadas al método React.creatElement
          let cssClass = "Paginator__Page";
          cssClass =
            i === this.state.page
              ? `${cssClass} Paginator__Page--active`
              : cssClass;

          pages.push(
            <a
              href="http://localhost:3000/" //"#"
              className={cssClass}
              key={i}
              onClick={e => this.onClick(e, i)}
            >
              {i + 1}
            </a>
          );
        }
      }
      // Englobamos todos los elementos en uno
      return <div className="Paginator__Pagination">{pages}</div>;
    }

    // Obtenemos los datos que hay que mostrar
    pageData() {
      let data = [];

      if (this.props.data.length > 0) {
        // el método slice() GENERA UNA NUEVA COPIA de un array
        // partiendo de un index inicial y final
        data = this.props.data.slice(
          this.state.page * this.props.itemsPerPage,
          (this.state.page + 1) * this.props.itemsPerPage
        );
      }

      return data;
    }

    render() {
      let newProps = Object.assign({}, this.props, { data: this.pageData() });

      return (
        // no le enviamos las propiedades del padre que sería la misma colección
        // si no unas nuevas ...newProps para recibir una nueva colección de datos
        <div className="Paginator">
          <PaginatedComponent {...newProps} />
          {this.renderPagination()}
        </div>
      );
    }
  };
