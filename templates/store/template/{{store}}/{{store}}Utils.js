import {StoreBuilder, InMemoryStoreParams, StoreTypeParam, TypeCheck, PublicStoreHandler} from 'hotballoon'
import {assertType, FLEXIO_IMPORT_OBJECT, isNull} from 'flexio-jshelpers'
import '../../generated/io/package'

const {{store}} = window[FLEXIO_IMPORT_OBJECT] // TODO path
const {{store}}Builder = window[FLEXIO_IMPORT_OBJECT] // TODO path

export class StoreCounterUtils {
  constructor(componentContext) {
    assertType(TypeCheck.isComponentContext(componentContext),
      'StoreCounterUtils:constructor: `componentContext` should be a ComponentContext'
    )
    this.__componentContext = componentContext
    this.__store = null
    this.__storePublic = null
  }

  build() {
    this.__store = this.__componentContext.addStore(StoreBuilder.InMemory(
      new InMemoryStoreParams(
        new StoreTypeParam(
          {{store}},
          /**
           *
           * @param {{{store}}} data
           * @return {{{store}}}
           */
          (data) => {
            return data
          },
          /**
           *
           * @param {{{store}}} data
           * @return {boolean}
           */
          (data) => {
            return true
          },
          /**
           *
           * @param {Object} obj
           * @return {{{store}}}
           */
          (obj) => {{store}}Utils.fromObject(obj).build()
        ),
        new {{store}}Builder(/* TODO set values */).build()
      ))
    )
    this.__storePublic = new PublicStoreHandler(this.__store)
    return this
  }

  store() {
    return this.__store
  }

  storePublic() {
    return this.__storePublic
  }
}
