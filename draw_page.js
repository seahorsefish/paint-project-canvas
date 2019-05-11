window.paint = window.paint || {};

window.paint.draw_colors = function(ctx, color_bounds){
  var gradient = ctx.createLinearGradient(0, 0, 500, 0); 
  gradient.addColorStop(0, 'blue')
  gradient.addColorStop(0.5, 'green')
  gradient.addColorStop(1, 'yellow')
  paint.draw_square(ctx, color_bounds, gradient, 1, gradient)
}

