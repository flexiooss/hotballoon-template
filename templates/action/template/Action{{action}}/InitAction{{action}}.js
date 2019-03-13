import {ActionBuilder, ActionParams} from 'hotballoon'
import {assert} from 'flexio-jshelpers'
import {Action{{action}}} from './Action{{action}}'

/**
 *
 * @param {Component{{component}}} component
 * @return {Action.<Action{{action}}>}
 */
export const initAction{{action}} = (component) => {
  return ActionBuilder.build(
    new ActionParams(
      Action{{action}},
      (payload) => {
        assert(
          payload instanceof Action{{action}},
          'initAction{{action}}:validate: `payload` argument should be an instance of Action{{action}}'
        )
        return true
      },
      component.__componentContext.dispatcher()
    )
  )
}
