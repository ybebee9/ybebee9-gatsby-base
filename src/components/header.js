import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header
    className = "header-size"
    style={{
      background: `#a28aff`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className="header-content"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div style={{ maxWidth: `100px`}}>
      <Image className="profile-img"  />
    </div>
      <h1 className="header-h1-01" style={{ margin: 0 }}>
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
      <h2 className="header-h2-01">
          {data.site.siteMetadata.subtitle}
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
