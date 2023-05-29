function fadeIn(el) {
    el.style.opacity = 0;
    var tick = function () {
        el.style.opacity = +el.style.opacity + 0.05;
        if (+el.style.opacity < 1) {
          var x =  (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}

function myFunction() {
    var el = document.getElementById("image_shower");
  console.log(el);
    fadeIn(el);
}

function myFunction2() {
    var el = document.getElementById("image_shower2");
  console.log(el);
    fadeIn(el);
}

function myFunction3() {
    var el = document.getElementById("image_shower3");
  console.log(el);
    fadeIn(el);
}

function myFunction4() {
    var el = document.getElementById("image_shower4");
  console.log(el);
    fadeIn(el);
}

function myFunction5() {
    var el = document.getElementById("image_shower5");
  console.log(el);
    fadeIn(el);
}

//This here is the fading animation connected through mulitple functions, this is to ensure all the image_showers don't fade in at the same time when only
//one of them should be changing.
// source = https://www.delftstack.com/howto/javascript/javascript-fade-in-image/