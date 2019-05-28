"use strict";

(() => {
  const el = { };
  let context;

  const dom_events = ['click']
  const dom_event_listener = {};

  const update_behavior = (behavior) => {
    dom_events.forEach((dom_event) => {
      if(dom_event_listener.hasOwnProperty(dom_event)) {
        el.canvasElement.removeEventListener(dom_event, dom_event_listener[dom_event]);
        delete dom_event_listener[dom_event];
      }
      if(behavior.hasOwnProperty(dom_event)) {
        dom_event_listener[dom_event] = (event) => {
          behavior[dom_event](context, event);
        };
        el.canvasElement.addEventListener(dom_event, dom_event_listener[dom_event], false);
      }
    });
  };



  window.paint.canvas = window.paint.canvas || {

    init: (canvasElement) => {
      console.debug('canvas.init', canvasElement);
      el.canvasElement = canvasElement;
      context = canvasElement.getContext('2d');
    },

    behavior: (canvasBehavior) => {
      console.debug('canvas.behavior', canvasBehavior);
      if(typeof canvasBehavior === 'undefined')
        return behavior;
      update_behavior(canvasBehavior);
    },

    context: () => {
      return context;
    },

    boundingClientRect: () => {
      return el.canvasElement.getBoundingClientRect();
    },

    width: () => {
      return el.canvasElement.width;
    },

    height: () => {
      return el.canvasElement.height;
    }


  };
})();