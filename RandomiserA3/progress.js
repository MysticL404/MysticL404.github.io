var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
        document.getElementById("myProgress").style.display = 'block';
      }
    }
  }
}

//https://www.w3schools.com/howto/howto_js_progressbar.asp
//Here I was able to understand and develop the progression/loading bars so the users could understand how long they needed to wait. Initally it was only
//going by 10 frames a second although I thought that might've been too quick to notice so I x5 that to 50 a frame.