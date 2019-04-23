// Demo component
// this is only example component

import React from 'react';
import { Row, Col, Input, InputGroup, InputGroupAddon, Button, Alert } from 'reactstrap';

import './SearchExample.scss'

class SearchExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      showSearch: false
    }
  }

  render() {
    return (
      <div className="search-container">
        <Row>
          <Col md="12">
            <InputGroup>
              <Input
                placeholder="Type here..."
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
              />

              <InputGroupAddon addonType="append">
                <Button color="info" onClick={() => {
                  if (this.state.search !== "") {
                    this.setState({ showSearch: true })
                    setTimeout(() => {
                      this.setState({ showSearch: false })
                    }, 5000);
                  }
                }}>
                  Search
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>

        {
          this.state.showSearch === true &&
          <div>
            <div className="vertical-spacer" />
            <Row>
              <Col md="12">
                <Alert color="info">
                  You searched:
                  <br />
                  {this.state.search}
                </Alert>
              </Col>
            </Row>
          </div>
        }

      </div>
    )
  }
}

export default SearchExample;
