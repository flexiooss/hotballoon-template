import {HotBalloonApplication, Dispatcher} from 'hotballoon'
import {InitComponent{{component}}} from './modules/Component{{component}}/component/InitComponent{{component}}'

export const APP = new HotBalloonApplication('{{component}}', new Dispatcher())
const HTML_NODE = document.body
;(function(app) {
  (InitComponent{{component}}.create(
    app,
    HTML_NODE
  ))
})(APP)
