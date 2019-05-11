window.paint = window.paint || {};

window.paint.check_bounds = function(x, y, size, top, left){
  if (x>size[0]+left && x<(size[2]+size[0]+left) && y>size[1]+top && y<(size[3]+size[1]+top)){
    return(true)
  } 
}

