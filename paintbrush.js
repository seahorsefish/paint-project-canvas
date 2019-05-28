"use strict";

(() => {
  const setup_toolbox = (toolbox) => {
    toolbox.add_button("Paintbrush", paintbrush.activate);
  };

  const paintbrush = window.paint.tools.paintbrush = window.paint.tools.paintbrush || {
    load: (app) => {
      setup_toolbox(app.toolbox);
    },

    activate: () => {
      console.log('foobar!');
    }
  };
})();