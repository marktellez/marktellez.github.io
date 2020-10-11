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
  if (!document.querySelector('meta[name="description"]')) {
    const meta = document.createElement('meta')
    meta.name = 'description'
    meta.content = description
    document.getElementsByTagName('head')[0].appendChild(meta)
  } else {
    document.querySelector('meta[name="description"]').content = description
  }
  document.querySelector('title').innerHTML = title.content

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
