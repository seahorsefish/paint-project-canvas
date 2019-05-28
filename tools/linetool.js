"use strict";

(() => {  
  const STATE = { READY:0, ONE_CLICK:1 };

  let paint;
  let canvas;
  let state;
  let first_click_position;

  const event_cursor_position = (event) => {
    // stolen and adapted from https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas
    let rect = canvas.boundingClientRect();
    let scaleX = canvas.width() / rect.width;
    let scaleY = canvas.height() / rect.height;
    return {
      x: (event.clientX - rect.left) * scaleX,
      y: (event.clientY - rect.top) * scaleY
    };
  };

  const draw_line = (context, point_a, point_b) => {
    console.debug('linetool{draw_line()}', context, point_a, point_b);
    context.beginPath();
    context.moveTo(point_a.x, point_a.y);
    context.lineTo(point_b.x, point_b.y);
    context.stroke();
  };

  const canvas_behavior = {

    click: (context, event) => {
      console.debug("linetool{canvas_behavior.click()}", context, event);
      let click_position = event_cursor_position(event);
      if(state === STATE.ONE_CLICK) {
        draw_line(context, first_click_position, click_position);
        first_click_position = null;
        state = STATE.READY;
      } else if(state === STATE.READY) {
        first_click_position = click_position;
        state = STATE.ONE_CLICK;
      }
    }

  };

  const add_toolbox_button = (toolbox) => {
    toolbox.add_button("Line tool", linetool.activate);
  };

  const linetool = window.paint.tools.linetool = window.paint.tools.linetool || {
    load: (app) => {
      paint = app;
      canvas = paint.canvas;
      add_toolbox_button(paint.toolbox);
    },

    activate: () => {
      state = STATE.READY;
      first_click_position = null;
      paint.canvas.behavior(canvas_behavior);
    }
  };
})();