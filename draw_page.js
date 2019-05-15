window.paint = window.paint || {};

window.paint.draw_colors = function(ctx, color_bounds) {
  var gradient = ctx.createLinearGradient(0, 0, 500, 0); 
  gradient.addColorStop(0, 'blue');
  gradient.addColorStop(0.5, 'green');
  gradient.addColorStop(1, 'yellow');
  paint.draw_square(ctx, color_bounds, gradient, 1, gradient);
}

window.paint.draw_button = function(){

}

window.paint.draw_screen = function(ctx, drawing_bounds, square_button_bounds, circle_button_bounds, color_bounds) {
  
  
  paint.draw_square(ctx, drawing_bounds, "blue", 4, "white");
  paint.draw_square(ctx, square_button_bounds, "black", 4, "black");
  paint.draw_circle(ctx,  circle_button_bounds, "black", 4, "black");
  paint.draw_colors(ctx, color_bounds);

  var shape_square_button = document.createElement('button');
  shape_square_button.id = 'button';
  shape_square_button.style.background = '#4FFF8F';
  shape_square_button.innerHTML = '|  |';
  document.body.appendChild(shape_square_button);
}

