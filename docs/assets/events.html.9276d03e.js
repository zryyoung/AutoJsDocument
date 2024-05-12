const e=JSON.parse(`{"key":"v-7750e8c0","path":"/en/v8/events.html","title":"events","lang":"en-US","frontmatter":{"summary":"events \\" Stability: 2-Stable\\" The events module provides an interface for monitoring mobile phone notifications, buttons, and touches. You can use it to cooperate with the automati","head":[["meta",{"property":"og:url","content":"https://pro.autojs.org/docs/en/v8/events.html"}],["meta",{"property":"og:site_name","content":"Auto.js Pro Docs"}],["meta",{"property":"og:title","content":"events"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T08:03:46.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T08:03:46.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://pro.autojs.org/docs/v8/events.html"}]]},"excerpt":"","headers":[{"level":2,"title":"events.emitter()","slug":"events-emitter","link":"#events-emitter","children":[]},{"level":2,"title":"events.observeKey()","slug":"events-observekey","link":"#events-observekey","children":[]},{"level":2,"title":"events.onKeyDown(keyName, listener)","slug":"events-onkeydown-keyname-listener","link":"#events-onkeydown-keyname-listener","children":[]},{"level":2,"title":"events.onKeyUp(keyName, listener)","slug":"events-onkeyup-keyname-listener","link":"#events-onkeyup-keyname-listener","children":[]},{"level":2,"title":"events.onceKeyDown(keyName, listener)","slug":"events-oncekeydown-keyname-listener","link":"#events-oncekeydown-keyname-listener","children":[]},{"level":2,"title":"events.onceKeyUp(keyName, listener)","slug":"events-oncekeyup-keyname-listener","link":"#events-oncekeyup-keyname-listener","children":[]},{"level":2,"title":"events.removeAllKeyDownListeners(keyName)","slug":"events-removeallkeydownlisteners-keyname","link":"#events-removeallkeydownlisteners-keyname","children":[]},{"level":2,"title":"events.removeAllKeyUpListeners(keyName)","slug":"events-removeallkeyuplisteners-keyname","link":"#events-removeallkeyuplisteners-keyname","children":[]},{"level":2,"title":"events.setKeyInterceptionEnabled([key, ]enabled)","slug":"events-setkeyinterceptionenabled-key-enabled","link":"#events-setkeyinterceptionenabled-key-enabled","children":[]},{"level":2,"title":"events.observeTouch()","slug":"events-observetouch","link":"#events-observetouch","children":[]},{"level":2,"title":"events.setTouchEventTimeout(timeout)","slug":"events-settoucheventtimeout-timeout","link":"#events-settoucheventtimeout-timeout","children":[]},{"level":2,"title":"events.getTouchEventTimeout()","slug":"events-gettoucheventtimeout","link":"#events-gettoucheventtimeout","children":[]},{"level":2,"title":"events.onTouch(listener)","slug":"events-ontouch-listener","link":"#events-ontouch-listener","children":[]},{"level":2,"title":"events.removeAllTouchListeners()","slug":"events-removealltouchlisteners","link":"#events-removealltouchlisteners","children":[]},{"level":2,"title":"Event:'key'","slug":"event-key","link":"#event-key","children":[]},{"level":2,"title":"Event:'key_down'","slug":"event-key-down","link":"#event-key-down","children":[]},{"level":2,"title":"Event:'key_up'","slug":"event-key-up","link":"#event-key-up","children":[]},{"level":2,"title":"Event:'exit\`","slug":"event-exit","link":"#event-exit","children":[]},{"level":2,"title":"events.observeNotification()","slug":"events-observenotification","link":"#events-observenotification","children":[]},{"level":2,"title":"events.observeToast()","slug":"events-observetoast","link":"#events-observetoast","children":[]},{"level":2,"title":"Event:'toast'","slug":"event-toast","link":"#event-toast","children":[]},{"level":2,"title":"Event:'notification'","slug":"event-notification","link":"#event-notification","children":[]},{"level":2,"title":"Notification.number","slug":"notification-number","link":"#notification-number","children":[]},{"level":2,"title":"Notification.when","slug":"notification-when","link":"#notification-when","children":[]},{"level":2,"title":"Notification.getPackageName()","slug":"notification-getpackagename","link":"#notification-getpackagename","children":[]},{"level":2,"title":"Notification.getTitle()","slug":"notification-gettitle","link":"#notification-gettitle","children":[]},{"level":2,"title":"Notification.getText()","slug":"notification-gettext","link":"#notification-gettext","children":[]},{"level":2,"title":"Notification.click()","slug":"notification-click","link":"#notification-click","children":[]},{"level":2,"title":"Notification.delete()","slug":"notification-delete","link":"#notification-delete","children":[]},{"level":2,"title":"KeyEvent.getAction()","slug":"keyevent-getaction","link":"#keyevent-getaction","children":[]},{"level":2,"title":"KeyEvent.getKeyCode()","slug":"keyevent-getkeycode","link":"#keyevent-getkeycode","children":[]},{"level":2,"title":"KeyEvent.getEventTime()","slug":"keyevent-geteventtime","link":"#keyevent-geteventtime","children":[]},{"level":2,"title":"KeyEvent.getDownTime()","slug":"keyevent-getdowntime","link":"#keyevent-getdowntime","children":[]},{"level":2,"title":"KeyEvent.keyCodeToString(keyCode)","slug":"keyevent-keycodetostring-keycode","link":"#keyevent-keycodetostring-keycode","children":[]},{"level":2,"title":"EventEmitter.defaultMaxListeners","slug":"eventemitter-defaultmaxlisteners","link":"#eventemitter-defaultmaxlisteners","children":[]},{"level":2,"title":"EventEmitter.addListener(eventName, listener)","slug":"eventemitter-addlistener-eventname-listener","link":"#eventemitter-addlistener-eventname-listener","children":[]},{"level":2,"title":"EventEmitter.emit(eventName[, ...args])","slug":"eventemitter-emit-eventname-args","link":"#eventemitter-emit-eventname-args","children":[]},{"level":2,"title":"EventEmitter.eventNames()","slug":"eventemitter-eventnames","link":"#eventemitter-eventnames","children":[]},{"level":2,"title":"EventEmitter.getMaxListeners()","slug":"eventemitter-getmaxlisteners","link":"#eventemitter-getmaxlisteners","children":[]},{"level":2,"title":"EventEmitter.listenerCount(eventName)","slug":"eventemitter-listenercount-eventname","link":"#eventemitter-listenercount-eventname","children":[]},{"level":2,"title":"EventEmitter.listeners(eventName)","slug":"eventemitter-listeners-eventname","link":"#eventemitter-listeners-eventname","children":[]},{"level":2,"title":"EventEmitter.on(eventName, listener)","slug":"eventemitter-on-eventname-listener","link":"#eventemitter-on-eventname-listener","children":[]},{"level":2,"title":"EventEmitter.once(eventName, listener)#","slug":"eventemitter-once-eventname-listener","link":"#eventemitter-once-eventname-listener","children":[]},{"level":2,"title":"EventEmitter.prependListener(eventName, listener)","slug":"eventemitter-prependlistener-eventname-listener","link":"#eventemitter-prependlistener-eventname-listener","children":[]},{"level":2,"title":"EventEmitter.prependOnceListener(eventName, listener)","slug":"eventemitter-prependoncelistener-eventname-listener","link":"#eventemitter-prependoncelistener-eventname-listener","children":[]},{"level":2,"title":"EventEmitter.removeAllListeners([eventName])","slug":"eventemitter-removealllisteners-eventname","link":"#eventemitter-removealllisteners-eventname","children":[]},{"level":2,"title":"EventEmitter.removeListener(eventName, listener)","slug":"eventemitter-removelistener-eventname-listener","link":"#eventemitter-removelistener-eventname-listener","children":[]},{"level":2,"title":"EventEmitter.setMaxListeners(n)","slug":"eventemitter-setmaxlisteners-n","link":"#eventemitter-setmaxlisteners-n","children":[]}],"git":{"createdTime":1666450300000,"updatedTime":1671869026000,"contributors":[{"name":"hyb1996","email":"946994919@qq.com","commits":2}]},"readingTime":{"minutes":9.88,"words":2965},"filePathRelative":"en/v8/events.md","localizedDate":"October 22, 2022"}`);export{e as data};
