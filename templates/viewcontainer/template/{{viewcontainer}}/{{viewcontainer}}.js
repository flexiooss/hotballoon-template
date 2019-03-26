'use strict'
import {ViewContainer, ViewParameters, ViewEventListenerBuilder} from 'hotballoon'

import '../../assets/css/style.css'
import {StoreContainer} from '../StoreContainer'

const VIEW = Symbol('VIEW')

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
      new View( // TODO set View
        new ViewParameters(VIEW, this), // TODO set id of view
        new StoreContainer() // TODO set stores to use in view
      )
    )
    this.__handleEvents()
  }

  __handleEvents() {

  }
}
