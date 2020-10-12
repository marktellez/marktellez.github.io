import React from 'react'
import PreviewLink from '../components/preview-link'
import Page from '../components/page'

export default function Homepage({}) {
  return (
    <Page title="The Devmentor blog" description="This is my awesoem blog">
      <h1>Hello I am the homepage header</h1>
      <PreviewLink href="https://devmentor.live">DevmentorLive</PreviewLink>
    </Page>
  )
}
