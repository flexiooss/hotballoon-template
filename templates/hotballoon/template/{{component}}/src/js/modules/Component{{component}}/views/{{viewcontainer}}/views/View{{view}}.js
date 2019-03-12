import {View, ElementEventListenerBuilder, e} from 'hotballoon'

export class View{{view}} extends View {
  /**
   *
   * @param {ViewParameters} viewParameters
   * @param {StoreContainer} storeContainer
   */
  constructor(viewParameters, storeContainer) {
    super(viewParameters)
    this.__stores = storeContainer
    this.subscribeToStore(this.__stores.store{{store}})
  }

  /**
   *
   * @returns {Element}
   */
  template() {
    return this.html(
      e('div#id.class')
      // TODO describe {{view}} view template
    )
  }
}
