let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}

let index2 = 0;
displayImages2();
function displayImages2() {
  let i;
  const images = document.getElementsByClassName("image2");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index2++;
  if (index2 > images.length) {
    index2 = 1;
  }
  images[index2-1].style.display = "block";
  setTimeout(displayImages2, 2000); 
}

let index3 = 0;
displayImages3();
function displayImages3() {
  let i;
  const images = document.getElementsByClassName("image3");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index3++;
  if (index3 > images.length) {
    index3 = 1;
  }
  images[index3-1].style.display = "block";
  setTimeout(displayImages3, 2000); 
}

let index4 = 0;
displayImages4();
function displayImages4() {
  let i;
  const images = document.getElementsByClassName("image4");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index4++;
  if (index4 > images.length) {
    index4 = 1;
  }
  images[index4-1].style.display = "block";
  setTimeout(displayImages4, 2000); 
}

//https://www.educative.io/answers/how-to-create-an-automatic-slideshow-with-html-css-and-js
//This took a while to understand and I still have a hard time understanding how it works but I needed to construct 3 additional functions from the first
//and rename it slightly through it's code so I could have multiple of these working at once. Something I noticed upon sitting idle for a while on the
//index.html was that the last one eventually was delayed and changing just slightly after the other three. I wasn't sure what caused this problem so
//the issue still remains as of now.