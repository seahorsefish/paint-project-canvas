window.paint = window.paint || {};


window.paint.draw_square = function(ctx, size, line_color, line_width, fill_color) {
  ctx.beginPath();
  ctx.lineWidth = line_width;
  ctx.fillStyle = fill_color;
  ctx.fillRect(size[0], size[1], size[2], size[3]);
  ctx.strokeStyle = line_color;
  ctx.rect(size[0], size[1], size[2], size[3]); 
  ctx.closePath();
  ctx.stroke();
}

window.paint.draw_circle = function(ctx, size, line_color, line_width, fill_color) {
  ctx.beginPath();
  ctx.arc(size[0], size[1], size[2]/2, 0, 2 * Math.PI, false);
  ctx.fillStyle = fill_color;
  ctx.fill();
  ctx.lineWidth = line_width;
  ctx.strokeStyle = line_color;
  ctx.stroke();
}

