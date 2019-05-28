"use strict";

(() => {
  const el = { buttons: [] };

  const create_tool_button = (text) => {
    let btn = document.createElement('button');
    btn.innerText = text;
    return btn;
  };

  window.paint.toolbox = window.paint.toolbox || {

    init: (toolboxElement) => {
      el.toolboxElement = toolboxElement;
    },

    add_button: (text, callback) => {
      let button = create_tool_button(text);
      el.toolboxElement.appendChild(button);
      el.buttons.push(button);
      button.onclick = callback;
    }
  };
})();

