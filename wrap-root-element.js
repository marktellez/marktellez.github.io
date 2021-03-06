import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from './src/components/code-block'
import { preToCodeBlock } from 'mdx-utils'

import PreviewLink from './src/components/preview-link'

// components is its own object outside of render so that the references to
// components are stable
const components = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <CodeBlock {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  },
  a: (props) => <PreviewLink {...props} />,
}
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
