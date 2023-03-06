import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import './header.scss'

const Header = ({ siteTitle }) => (
  <header className='header__container'>
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
