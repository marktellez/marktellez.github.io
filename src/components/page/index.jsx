import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layout'

export default function Page({
  children,
  description,
  keywords,
  title,
  canonical,
}) {
  return <Layout>{children}</Layout>
}

Page.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

Page.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
