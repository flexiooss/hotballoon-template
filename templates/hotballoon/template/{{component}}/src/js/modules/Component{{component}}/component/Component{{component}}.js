'use strict'
import {TypeCheck} from 'hotballoon'
import {isNode, assert} from 'flexio-jshelpers'
import {initStore{{store}}} from '../stores/Store{{store}}/InitStore{{store}}'
import {StoreHandler{{store}}} from '../stores/Store{{store}}/StoreHandler{{store}}'
import {initAction{{action}}} from '../actions/Action{{action}}/InitAction{{action}}'
import {listenAction{{action}}} from '../actions/Action{{action}}/ListenAction{{action}}'
import {addViewContainer{{viewcontainer}}} from '../views/{{viewcontainer}}/addViewContainer{{viewcontainer}}'

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
    addViewContainer{{viewcontainer}}(this)
      .renderAndMount(this.__parentNode)
    return this
  }

  setEvent() {
    this.__store{{store}} = initStore{{store}}(this)
    this.__storeHandler{{store}} = new StoreHandler{{store}}(this.__store{{store}})
    this.__action{{action}} = initAction{{action}}(this)
    listenAction{{action}}(this)
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
   * @returns {Store}
   */
  get store{{store}}() {
    return this.__store{{store}}
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
