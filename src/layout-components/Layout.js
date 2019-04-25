import React from 'react';
import './Layout.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let { header, navbar, sidebar, footer } = this.props

    return (
      <div className="layout-container">
        {
          header &&
          header
        }
        {
          navbar &&
          navbar
        }
        {
          sidebar &&
          sidebar
        }

        <div className="layout-children-container">
          {this.props.children}
        </div>

        {
          footer &&
          footer
        }

      </div>
    )
  }
}

export default Layout;
