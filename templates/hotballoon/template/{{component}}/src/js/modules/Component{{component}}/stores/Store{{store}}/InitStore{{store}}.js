import {InMemoryStoreParams, StoreBuilder} from 'hotballoon'
import {Store{{store}}} from './Store{{store}}'

/**
 *
 * @param {Component{{component}}} component
 * @returns {Store}
 */
export const initStore{{store}} = (component) => {
  /**
   *
   * @type {Store<Store{{store}}>}
   */
  const store{{store}} = StoreBuilder.InMemory(
    new InMemoryStoreParams(
      Store{{store}},
      (data) => {
        return data instanceof Store{{store}}
      },
      new Store{{store}}() // TODO initialize store {{store}}
    )
  )

  component.__componentContext.addStore(store{{store}})
  return store{{store}}
}
