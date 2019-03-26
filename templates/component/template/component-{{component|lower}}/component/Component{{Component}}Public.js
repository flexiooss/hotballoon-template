import {assertType} from 'flexio-jshelpers'
import {Component{{component}}} from './Component{{component}}'

const __component = Symbol('__component{{component}}')

export class Component{{component}}Public {
  /**
   *
   * @param {ComponentCounter} component
   */
  constructor(component) {
    assertType(component instanceof Component{{component}}, 'Component{{component}}Public:constructor: `component` should be a Component{{component}}')
    /**
     * @private
     * @property {Component{{component}}} Component{{component}}Public.__component
     */
    this[__component] = component
  }

  /**
   *
   * @return {ComponentCounterPublic}
   */
  mountView() {
    this[__component]
      .mountView()
    return this
  }
}
