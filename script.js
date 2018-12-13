(function() {
  'use strict';
  
  
  // Get mouse position
  // function getMousePos(c, evt) {
  //     var rect = c.getBoundingClientRect();
  //     console.log("rect.left =  ",rect.left)
  //     return {
  //         x: evt.clientX - rect.left,
  //         y: evt.clientY - rect.top
  //     };
  // };
  
  // Write mouse position
  // function writeMessage(c, m) {
  //     var context = c.getContext('2d');
  //     context.clearRect(0, 0, c.width, c.height);
  //     context.font = '18pt Calibri';
  //     context.fillStyle = 'black';
  //     context.fillText(m, 10, 25);
  // };
  
  // Make circle
  function makeCircle(context, x, y, color, circleSize,start,end) {
      // context.beginPath()
      // context.arc(x, y, circleSize, start, Math.PI * end, true);
      // context.fillStyle = color;
      // context.fill();
      // context.closePath();

      context.beginPath();
      context.strokeStyle = color;
      context.arc(x, y, circleSize, start, Math.PI * end);
      context.lineWidth = 2 * circleSize;
      context.stroke();
  };
  
  var c = document.getElementById('canvas');
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  var context = c.getContext('2d');
  var elements = [];
  
  elements.push({
      color: '#008000',
      circleSize: 80,
      x: 300,
      y: 300,
      start : -1.55,
      end : 0.80,
      clicked: function() {
          alert('This circle green has been clicked');
      }
  });
  
  elements.push({
      color: '#ffffff',
      circleSize: 70,
      x: 300,
      y: 300,
      start : 0,
      end : 2,
      clicked: function() {
          alert('This circle White big has been clicked');
      }
  });

  elements.push({
    color: '#ffff00',
    circleSize: 60,
    x: 300,
    y: 300,
    start : -1.55,
    end : 0.80,
    clicked: function() {
        alert('This circle yellow has been clicked');
    }
  });

  elements.push({
    color: '#ffffff',
    circleSize: 50,
    x: 300,
    y: 300,
    start : 0,
    end : 2,
    clicked: function() {
        alert('This circle white small has been clicked');
    }
  });

  elements.push({
    color: '#ff0000',
    circleSize: 40,
    x: 300,
    y: 300,
    start : 0,
    end : 2,
    clicked: function() {
        alert('This circle red has been clicked');
    }
  });
  
  elements.forEach(function(element) {
      var circle = new makeCircle(context, element.x, element.y, element.color, element.circleSize,element.start,element.end);
      console.log(circle);
  });
  
function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}
  
  canvas.addEventListener('click', function(e) {
      var x = e.pageX - c.offsetLeft;
      var y = e.pageY - c.offsetTop;
      var pixelData = context.getImageData(x,y, 1, 1).data;
      //console.log(pixelData);
     // Convert it to HEX if you want using the rgbToHex method.
      var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
      console.log(hex);
      //console.log('x = ',x,' y = ',y );
      elements.reverse();
      var count = 0;
      elements.forEach(function(element){
        //console.log("value1 = " ,Math.pow(x-element.x,2) + Math.pow(y-element.y,2))
        //console.log("Math.pow(element.circleSize * 2,2) = ", Math.pow(element.circleSize * 2,2));
        if(Math.pow(x-element.x,2) + Math.pow(y-element.y,2) < Math.pow(element.circleSize * 2,2) && hex != '#ffffff' && hex != '#000000') {
            count = count + 1;
            if(count == 1 ) element.clicked();   
          }
      });
      elements.reverse();
  });
  
})();