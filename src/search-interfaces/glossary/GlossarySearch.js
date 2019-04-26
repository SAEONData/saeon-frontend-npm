import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Autosuggest from 'react-autosuggest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../Shared.scss'
import './ReactAutoSuggest.scss'
import './GlossarySearch.scss'

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (data, value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : data.filter(d =>
    d.term.toLowerCase().includes(inputValue)
  ).slice(0, 9);
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.term;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <span>{suggestion.term}</span>
);

class GlossarySearch extends Component {

  constructor(props) {
    super(props);

    this.setFilter = this.setFilter.bind(this)
    this.onAutoSuggestChange = this.onAutoSuggestChange.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)

    this.state = {
      filter: "",
      search: "",
      suggestions: [],
      tooltipOpen: false
    }
  }

  onAutoSuggestChange(event, { newValue }) {
    this.setState({
      search: newValue,
      filter: ""
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(this.props.data, value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  };

  generateAlphabetLinks(filter) {
    let links = []

    for (let i = 0; i < 26; i++) {
      let letter = String.fromCharCode(97 + i).toUpperCase()

      links.push(
        <div
          key={"a.lnk_" + i}
          className={`glossary-search-link accent ${filter === letter ? "glossary-search-active-filter" : ""}`}
          onClick={() => this.setFilter(letter)}
        >
          {letter}
        </div>
      )
    }

    return links
  }

  generateContent(data, filter, search) {

    if (filter) {
      data = data.filter(d => d.term.toLowerCase().startsWith(filter.toLowerCase()))
    }
    else if (search) {
      data = data.filter(d => d.term.toLowerCase().includes(search.toLowerCase()))
    }

    let content = []

    //Sort data
    data.sort((a, b) => (a.term > b.term) ? 1 : ((b.term > a.term) ? -1 : 0));

    if (data && data.length > 0) {
      data.map(item => {
        content.push(
          <div className="glossary-search-content-item">
            <div className="glossary-search-content-item-term accent">{item.term}</div>
            <div className="glossary-search-content-item-def">{item.def}</div>
          </div>
        )
      })
    }

    return content;
  }

  setFilter(filter) {
    this.setState({ search: "", filter })
  }

  render() {

    let { data } = this.props
    let { filter, search, suggestions } = this.state

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search...',
      value: search,
      onChange: this.onAutoSuggestChange
    };

    return (
      <div className="glossary-search-container">
        <Row>
          <Col md="2"></Col>
          <Col md="1" className="text-right">
            <FontAwesomeIcon
              id="clearSearch"
              icon="eraser"
              size="2x"
              className="glossary-search-eraser accent"
              onClick={() => this.setState({ search: "", filter: "" })}
            />
          </Col>
          <Col md="6">
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
            />
          </Col>
          <Col md="3"></Col>
        </Row>
        <Row className="glossary-search-links-row">
          <Col>
            <div className="glossary-search-links-container">
              {this.generateAlphabetLinks(filter)}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="glossary-search-row-divider" />
          </Col>
        </Row>
        <Row className="glossary-search-content-container">
          <Col>
            {this.generateContent(data, filter, search)}
          </Col>
        </Row>
      </div>
    );
  }
}

export default GlossarySearch;