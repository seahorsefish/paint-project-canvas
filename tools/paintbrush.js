"use strict";

(() => {  

  let paint;

  const canvas_behavior = {

    click: (ctx, event) => {
      console.log(ctx);
      console.log(event);
    }

  };

  const setup_toolbox = (toolbox) => {
    toolbox.add_button("Paintbrush", paintbrush.activate);
  };

  const paintbrush = window.paint.tools.paintbrush = window.paint.tools.paintbrush || {
    load: (app) => {
      paint = app;
      setup_toolbox(paint.toolbox);
    },

    activate: () => {
      paint.canvas.behavior(canvas_behavior);
    }
  };
})();