import {TypeCheck} from 'hotballoon'
import {assert} from 'flexio-jshelpers'
import {Store{{store}}} from '../stores/Store{{store}}/Store{{store}}'

/**
 */
export class StoreContainer {
  /**
   *
   * @param {StoreHandler{{store}}} store{{view}}
   */
  constructor(store{{store}}) {
    assert(
      store{{store}}.isTypeOf(Store{{store}}),
      'ContainerStore: `store{{store}}` should be a Store of Store{{store}}')

    this.__store{{store}} = TypeCheck.assertStoreBase(store{{store}})
  }

  /**
   *
   * @return {PublicStoreHandler}
   */
  get store{{store}}() {
    return this.__store{{store}}
  }
}
