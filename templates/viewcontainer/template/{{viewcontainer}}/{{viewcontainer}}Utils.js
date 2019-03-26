import {{{viewcontainer}}} from './{{viewcontainer}}'
import {TypeCheck, ViewContainerParameters} from 'hotballoon'
import {assertType, isNode} from 'flexio-jshelpers'
import {ContainerStore} from '../ContainerStore'
import {ContainerAction} from '../ContainerAction'

export class {{viewcontainer}}Utils {
  constructor(componentContext, parentNode, action, store) {
    assertType(TypeCheck.isComponentContext(componentContext),
      '{{viewcontainer}}Utils:constructor: `componentContext` should be a ComponentContext'
    )
    assertType(isNode(parentNode),
      '{{viewcontainer}}Utils:constructor: `parentNode` should be a Node'
    )
    assertType(TypeCheck.isAction(action),
      '{{viewcontainer}}Utils:constructor: `action` should be a Action'
    )
    assertType(TypeCheck.isPublicStoreHandler(store),
      '{{viewcontainer}}Utils:constructor: `store` should be a Store'
    )
    this.__componentContext = componentContext
    this.__parentNode = parentNode
    this.__action = action
    this.__store = store
  }

  /**
   *
   * @returns {ViewContainer}
   */
  init() {
    const VIEWCONTAINER_ID = this.__componentContext.nextID()

    const VIEWCONTAINER_INST = this.__componentContext.addViewContainer(
      new {{viewcontainer}}(
        new ViewContainerParameters(
          this.__componentContext,
          VIEWCONTAINER_ID,
          this.__parentNode
        ),
        new ContainerStore(this.__store),
        new ContainerAction(this.__action)
      )
    )

    this.__componentContext.debug.log('VIEWCONTAINER_INST')
    this.__componentContext.debug.object(VIEWCONTAINER_INST)
    this.__componentContext.debug.print()

    return VIEWCONTAINER_INST
  }
}
