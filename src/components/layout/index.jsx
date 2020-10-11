import React from 'react'

export default function Layout({ children }) {
  return (
    <>
      <div className="header">Header</div>
      <div className="content">{children}</div>
      <div className="footer">Footer</div>
    </>
  )
}
