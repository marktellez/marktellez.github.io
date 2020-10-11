import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

export default function LiveCodeBlock({ codeString }) {
  return (
    <LiveProvider code={codeString} noInline={true}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
}
