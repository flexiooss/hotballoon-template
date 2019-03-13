import {ViewContainer{{viewcontainer}}} from './ViewContainer{{viewcontainer}}'
import {ViewContainerParameters} from 'hotballoon'
import {StoreContainer} from '../StoreContainer'
import {ActionContainer} from '../ActionContainer'

export const addViewContainer{{viewcontainer}} = (component) => {
  const VIEW_CONTAINER_ID = component.__componentContext.nextID()
  let VIEW_CONTAINER_INST = component.__componentContext.addViewContainer(
    new ViewContainer{{viewcontainer}}(
      new ViewContainerParameters(
        component.__componentContext,
        VIEW_CONTAINER_ID,
        component.__parentNode
      ),
      new StoreContainer(), // TODO add stores to use in view container {{viewcontainer}}
      new ActionContainer() // TODO add actions to use in view container {{viewcontainer}}
    )
  )

  component.__componentContext.debug.log('VIEW_CONTAINER_INST')
  component.__componentContext.debug.object(VIEW_CONTAINER_INST)
  component.__componentContext.debug.print()

  return VIEW_CONTAINER_INST
}
