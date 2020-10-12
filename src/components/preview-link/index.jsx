import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional

export default function Link({ href, alt, title, children }) {
  const slug = href
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/https?/g, '')
    .replace(/[^a-zA-Z0-9-]/g, '')

  return (
    <Tippy
      content={
        <img src={`/link-previews/${slug}.jpg`} alt={alt} title={title} />
      }
    >
      <a href={href}>{children}</a>
    </Tippy>
  )
}
