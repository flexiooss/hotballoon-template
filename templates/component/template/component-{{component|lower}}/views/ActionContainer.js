import {TypeCheck} from 'hotballoon'

/**
 */
export class ActionContainer {
  /**
   *
   * @param {Action.<Action>} action
   */
  constructor(action{{action}}) {
    this.__action = TypeCheck.assertIsAction(action)
    // TODO define all actions to use in view container
  }

  /**
   *
   * @return {Action.<Action{{action}}>}
   */
  get action() {
    return this.__action // TODO getters for actions
  }
}
