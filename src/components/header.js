import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="hidden bg-white shadow-md md:block">
    <div className="container mx-auto px-4 py-2 align-middle">
      <h1 className="text-center font-semibold">
        <Link
          to="/"
          className="flex items-center justify-center font-bold text-red-500"
        >
          {siteTitle}
        </Link>
      </h1>
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
