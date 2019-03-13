import {TypeCheck} from 'hotballoon'
import {assert} from 'flexio-jshelpers'

/**
 */
export class StoreContainer {
  /**
   *
   * @param {StoreHandler} store
   */
  constructor(store) {
    assert(
      store.isTypeOf(Store),
      'ContainerStore: `store` should be a Store of Store')

    this.__store{{store}} = TypeCheck.assertStoreBase(store)

    // TODO define all stores to use in view container
  }

  /**
   *
   * @return {PublicStoreHandler}
   */
  get store() {
    return this.__store // TODO getters for stores
  }
}
