import {TypeCheck} from 'hotballoon'
import {isNode,assertType} from 'flexio-jshelpers'

export class ComponentCounter {
  /**
   *
   * @param {ComponentContext} componentContext
   * @param {Node} parentNode
   */
  constructor(componentContext, parentNode) {
    assertType(
      TypeCheck.isComponentContext(componentContext),
      'Component{{component}}:constructor: `componentContext` argument should be an instanceof ComponentContext'
    )
    assertType(!!isNode(parentNode),
      'Component{{component}}:constructor: `parentNode` argument should be NodeType'
    )

    this.__componentContext = componentContext
    this.__parentNode = parentNode

    this.__store = null //TODO set stores
    this.__action = null // TODO set actions
  }

  /**
   *
   * @return {ComponentCounter}
   */
  __initStore() {
    // TODO init store
    return this
  }

  /**
   *
   * @return {ComponentCounter}
   */
  __initAction() {
    // TODO init action
    return this
  }

  /**
   *
   * @returns {ComponentCounter}
   */
  setEventLoop() {
    this.__initStore()
    this.__initAction()
    return this
  }

  mountView() {
    assertType(isNode(this.__parentNode),
      'Component{{component}}:mountView: `parentNode` should be a NodeType, %s given',
      typeof this.__parentNode
    )
    // TODO init viewContainer
    .renderAndMount(this.__parentNode)
  }
}
