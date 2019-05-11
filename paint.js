(function() {

  var canvas;
  var ctx;
  var size;
  var line_color;
  var fill_color;
  var left;
  var top;

  var drawing_bounds;
  var square_button_bounds;
  var circle_button_bounds;
  var color_bounds;

  var clicked_object;
  var shape;
  var x;
  var y;

  var init = function() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    left = canvas.getBoundingClientRect().left;
    top = canvas.getBoundingClientRect().top;

    shape = "square"

    fill_color = "blue"
    line_color = "blue"
    drawing_bounds = [5, 5, 600, 400];
    square_button_bounds = [10, 420, 20, 20];
    circle_button_bounds = [50, 430, 20, 20];
    color_bounds = [100, 420, 500, 20];
    paint.draw_square(ctx, drawing_bounds, "blue", 4, "white");
    paint.draw_square(ctx, square_button_bounds, "black", 4, "black");
    paint.draw_circle(ctx,  circle_button_bounds, "black", 4, "black");
    paint.draw_colors(ctx, color_bounds);

    window.removeEventListener('load', init);
  };

  var edit_shape = function(x, y){
    size = [5, 5, 10, 10];
    size[0] = x - left;
    size[1] = y - top;
    if (shape=="square"){
      paint.draw_square(ctx, size, line_color, 1, fill_color);
    }
    else if (shape=="circle"){
      paint.draw_circle(ctx, size, line_color, 1, fill_color);
    }
    
  }
  
  var determine_clicked_object = function(event){
    x = event.clientX;
    y = event.clientY;
    clicked_object = 0
    var bounds = [drawing_bounds, square_button_bounds, circle_button_bounds, color_bounds]
    for (var ii=0; ii<4; ii++){
      if (paint.check_bounds(x, y, bounds[ii], top, left)){
        clicked_object = ii+1
      }
    }
    respond_to_click(clicked_object)
  }

  var respond_to_click = function(clicked_object){
    console.log(clicked_object)
    if (clicked_object===1){
      edit_shape(x, y)
    } else if (clicked_object===2){
      shape = "square"
    } else if (clicked_object===3){
      shape = "circle"
    } else if (clicked_object===4){
      determine_clicked_color()
    }
  }

  var determine_clicked_color = function(){
    var pixel_data = ctx.getImageData(x-left, y-top, 1, 1).data;
    var pixel_color = rgb_converter(pixel_data)
    fill_color = pixel_color
    line_color = pixel_color
  }

  var rgb_converter = function(rgb){
    var value = ["00", "00", "00"];
    for (var ii=0; ii<3; ii++){
      value[ii] = Number(rgb[ii]).toString(16);
      if (value[ii].length<2){
        value[ii] = "0" + value[ii]
      }
    }
    color = "#" + value[0] + value[1] + value[2]
    return(color)
  }

  window.paint = window.paint || {};
  window.addEventListener('load', init, false);
  window.addEventListener('click', determine_clicked_object, false);

})();