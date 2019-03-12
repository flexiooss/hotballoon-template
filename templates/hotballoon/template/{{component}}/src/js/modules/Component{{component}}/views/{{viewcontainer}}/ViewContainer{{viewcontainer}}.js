'use strict'
import {ViewContainer, ViewParameters, ViewEventListenerBuilder} from 'hotballoon'
import {View{{view}}} from './views/View{{view}}'

import '../../assets/css/style.css'
import {StoreContainer} from '../StoreContainer'

const {{view}}_VIEW = Symbol('{{view}}_VIEW')

export class ViewContainer{{viewcontainer}} extends ViewContainer {
  /**
   *
   * @param {ViewContainerParameters} viewContainerParameters
   * @param {StoreContainer} storeContainer
   * @param {ActionContainer} actionContainer
   */
  constructor(viewContainerParameters, storeContainer, actionContainer) {
    super(viewContainerParameters)
    this.__stores = storeContainer
    this.__actions = actionContainer
    this.__registerViews()
  }

  /**
   *
   * @private
   */
  __registerViews() {
    this.addView(
      new View{{view}}(
        new ViewParameters({{view}}_VIEW, this),
        new StoreContainer(this.__stores.store{{store}})
      )
    )
    this.__handleEvents()
  }

  __handleEvents() {

  }
}
