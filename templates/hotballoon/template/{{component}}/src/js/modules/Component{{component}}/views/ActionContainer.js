import {TypeCheck} from 'hotballoon'

/**
 */
export class ActionContainer {
  /**
   *
   * @param {Action.<Action{{action}}>} action{{action}}
   */
  constructor(action{{action}}) {
    this.__action{{action}} = TypeCheck.assertIsAction(action{{action}})
  }

  /**
   *
   * @return {Action.<Action{{action}}>}
   */
  get action{{action}}() {
    return this.__action{{action}}
  }
}
