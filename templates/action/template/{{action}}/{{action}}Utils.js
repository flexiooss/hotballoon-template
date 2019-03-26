import { isNode, assertType, FLEXIO_IMPORT_OBJECT, isNull } from 'flexio-jshelpers'
import { ActionBuilder, ActionParams, ActionTypeParam, TypeCheck } from 'hotballoon'

const {{action}} = window[FLEXIO_IMPORT_OBJECT] // TODO path

export class {{action}}Utils {
  /**
   *
   * @param {Dispatcher} dispatcher
   * @param {HotBalloonApplication} application
   * @param {Element} parentElement
   */
  constructor(dispatcher, application) {
    assertType(TypeCheck.isDispatcher(dispatcher),
      '{{action}}Utils:constructor: `dispatcher` should be a Dispatcher'
    )

    this.__dispatcher = dispatcher
    this.__action = null
  }

  init() {
    this.__action = ActionBuilder.build(
      new ActionParams(
        new ActionTypeParam(
          {{action}},
          /**
           *
           * @param { {{action}} } data
           * @return { {{action}} }
           */
          (data) => {
            return data
          },
          /**
           *
           * @param { {{action}} } payload
           * @return {boolean}
           */
          (payload) => {
            return true
          }
        ),
        this.__dispatcher
      )
    )
    return this
  }

  listen() {
    assertType(!isNull(this.__action),
      '{{action}}Utils:listen: action should be initialize before using it'
    )
    this.__action.listenWithCallback(
      /**
       *
       * @param { {{action}} } payload
       */
      (payload) => {
        // TODO set code to callback
      }
    )
    return this
  }

  action() {
    return this.__action
  }
}
