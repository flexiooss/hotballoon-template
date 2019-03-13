import {Component{{component}}} from './Component{{component}}'

export class Component{{component}}Builder {
  /**
   *
   * @param {HotBalloonApplication} APP
   * @param {Node} parentNode
   */
  constructor(APP, parentNode) {
    Component{{component}}.create(
      APP.addComponentContext(),
      parentNode
    ).setEvent().mountView()
  }

  /**
   *
   * @param {HotBalloonApplication} APP
   * @param {Node} parentNode
   * @return {InitComponent{{component}}}
   * @constructor
   * @static
   */
  static create(APP, parentNode) {
    return new this(APP, parentNode)
  }
}
