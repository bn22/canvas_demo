// SVG Reference: http://www.w3.org/TR/SVG/
// Raphael Reference: http://raphaeljs.com/reference.html

var PURPLE = "#39275B";
var GOLD = "#C79900";

$(document).ready(function(){

  //intialization
  var paper = Raphael('raphael',600,600); //put in the #raphael div

  //drawing
  var rect = paper.rect(50, 60, 100, 150).attr ({
      'fill' : PURPLE,
      'stroke' : GOLD,
      'stroke-width' : 4
    });

 rect.click(function(){
    rect.animation ( {
        fill : GOLD,
        
    })
 })


});

