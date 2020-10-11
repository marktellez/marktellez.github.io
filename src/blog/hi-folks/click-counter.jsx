import React, { useState } from 'react'

export default function ClickCounter() {
  const [count, setCount] = useState(0)
  const onClick = () => {
    setCount((prev) => prev + 1)
  }
  return <button onClick={onClick}>Click Me! ({count})</button>
}
