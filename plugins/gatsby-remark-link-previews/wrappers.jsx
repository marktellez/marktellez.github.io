import React from 'react'
import { MDXProvider } from '@mdx-js/react'

function Link(props) {
  debugger
  return <notalink></notalink>
}

export default function WrappedRoot({ children }) {
  return (
    <MDXProvider
      components={{
        a: PostLink,
      }}
    >
      {children}
    </MDXProvider>
  )
}
