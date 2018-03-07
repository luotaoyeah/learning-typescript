/**
 * Listing 6-11. Cross-Browser enhanced events
 */

export const addEvent: (
  elem: Window | Document | Element | NodeListOf<Element>,
  eventName: string,
  callback: Function
) => void = (function() {
  if (document.addEventListener) {
    // Handles modern browsers
    return function(elem: any, eventName: any, callback: any) {
      if (elem && elem.addEventListener) {
        // Handles a single element
        elem.addEventListener(eventName, callback, false);
      } else if (elem && elem.length) {
        // Handles a collection of elements (recursively)
        for (let i = 0; i < elem.length; i++) {
          addEvent(elem[i], eventName, callback);
        }
      }
    };
  } else {
    // Handles some old browsers
    return function(elem: any, eventName: any, callback: any) {
      if (elem && elem.attachEvent) {
        // Handles a single element
        elem.attachEvent("on" + eventName, function() {
          return callback.call(elem, window.event);
        });
      } else if (elem && elem.length) {
        // Handles a collection of elements (recursively)
        for (let i = 0; i < elem.length; i++) {
          addEvent(elem[i], eventName, callback);
        }
      }
    };
  }
})();
