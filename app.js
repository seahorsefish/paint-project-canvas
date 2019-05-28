"use strict";

((el) => {
  
  const app = window.paint;
  const toolbox = app.toolbox;
  const canvas = app.canvas;

  const paintbrush = app.tools.paintbrush;
  const linetool = app.tools.linetool;

  toolbox.init(el.toolbox);
  canvas.init(el.canvas);

  app.load_tool(paintbrush);
  app.load_tool(linetool);


})({
  toolbox: document.querySelector("#app>.toolbox"),
  canvas: document.querySelector("#app>canvas")
});