import {Store{{store}}} from '../../stores/Store{{store}}/Store{{store}}'

/**
 *
 * @param {Component{{component}}} component
 */
export const listenAction{{action}} = (component) => {
  component.__action{{action}}.listenWithCallback((payload) => {
    // TODO callback action {{action}}
  })
}
