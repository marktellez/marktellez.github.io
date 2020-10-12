import tippy from 'tippy.js'
import WrappedRoot from './wrappers'

export function onRouteUpdate({}) {
  tippy('[data-tippy-content]')
}

export const wrapRootElement = (arg) => {
  return WrappedRoot(arg)
}
