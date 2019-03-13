'use strict'
import {TypeCheck} from 'hotballoon'
import {isNode, assert} from 'flexio-jshelpers'

export class Component{{component}} {
  /**
   *
   * @param {ComponentContext} componentContext
   * @param {Node} parentNode
   */
  constructor(componentContext, parentNode) {
    assert(!!isNode(parentNode),
      'Component{{component}}:constructor: `parentNode` argument should be NodeType, %s given',
      typeof parentNode)
    assert(
      TypeCheck.isComponentContext(componentContext),
      'Component{{component}}:constructor: `componentContext` argument should be ComponentContext, %s given',
      typeof componentContext
    )

    this.__parentNode = parentNode
    this.__componentContext = componentContext
  }

  mountView() {
    addViewContainer(this) // TODO set viewContainer
      .renderAndMount(this.__parentNode)
    return this
  }

  setEvent() {
    // TODO init stores
    // TODO init storeHandlers
    // TODO init actions
    // TODO listen actions
    return this
  }

  /**
   *
   * @return {ComponentContext}
   */
  get componentContext() {
    return this.__componentContext
  }


  /**
   *
   * @param {ComponentContext} componentContext
   * @param {Node} parentNode
   * @return {Component{{component}}}
   * @constructor
   * @static
   */
  static create(componentContext, parentNode) {
    return new this(componentContext, parentNode)
  }
}
