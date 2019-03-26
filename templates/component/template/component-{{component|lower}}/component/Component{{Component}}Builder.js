import {Component{{component}}} from './ComponentCounter'
import {Component{{component}}Public} from './Component{{component}}Public'
import {assertType, isNode} from 'flexio-jshelpers'
import {TypeCheck} from 'hotballoon'

export class Component{{component}}Builder {
  /**
   *
   * @param {HotBalloonApplication} APP
   * @param {Element} parentNode
   * @return {Component{{component}}Public}
   */
  static build(APP, parentNode) {
    assertType(TypeCheck.isHotballoonApplication(APP),
      'ComponentCounterBuilder:constructor: `APP` argument should be an instanceof HotballoonApplication, %s given',
      typeof APP)

    assertType(!!isNode(parentNode),
      'ComponentCounterBuilder:constructor: `parentNode` argument should be NodeType, %s given',
      typeof parentNode)

    return new Component{{component}}Public(
      new Component{{component}}(APP.addComponentContext(), parentNode).setEventLoop()
    )
  }
}
