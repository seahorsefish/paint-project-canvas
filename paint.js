"use strict";

(() => {
  const paint = window.paint = window.paint || {
    load_tool: (tool) => {
      tool.load(paint);
    }
  };
})();
