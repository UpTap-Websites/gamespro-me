/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flex min-h-screen flex-col md:bg-gradient-to-b md:from-blue-700 md:to-blue-800 md:bg-scroll">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <main className="flex grow flex-col">{children}</main>

      <footer className="bg-white p-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} {data.site.siteMetadata?.title}
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
