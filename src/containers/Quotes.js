import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";

class Quotes extends Component {
  render() {
    let quoteCards = this.props.quotes
      ? this.props.quotes.map(quote => (
          <QuoteCard quote={quote} key={quote.id} />
        ))
      : "No Quotes for now";
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">{quoteCards}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes };
};

export default connect(
  mapStateToProps,
  {}
)(Quotes);
