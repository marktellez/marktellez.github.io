const visit = require('unist-util-visit')
const toString = require('mdast-util-to-string')

module.exports = ({ markdownAST }, pluginOptions) => {
  visit(markdownAST, 'link', (node) => {
    const text = toString(node)
    const html = `<a href="${node.url}" data-tippy-content="Tooltip">${text}</a>`
    node.type = 'html'
    node.children = undefined
    node.value = html
  })
  return markdownAST
}
