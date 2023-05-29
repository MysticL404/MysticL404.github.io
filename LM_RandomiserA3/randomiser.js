image_array = [
    'bear1.png',
    'bee1.png',
    'bird1.png',
    'bird2.png',
    'bird3.png',
    'bird4.png',
    'bird5.png',
    'bird6.png',
    'bird7.png',
    'bird8.png',
    'bird9.png',
    'bird10.png',
    'bird11.png',
    'bird12.png',
    'cat1.png',
    'crab1.png',
    'dog1.png',
    'dog2.png',
    'dog3.png',
    'fly1.png',
    'fly2.png',
    'fly3.png',
    'frog1.png',
    'lizard1.png',
    'lizard2.png',
    'lizard3.png',
    'rabbit1.png',
    'snail1.png',
    'spider1.png',
    'squirrel1.png',
    'tiger1.png',
    'zebra1.png',
]
//Above is my image_array I've put together, this is basically all the things the randomiser can pull and it consists of over 30 outcomes so the user
//doesn't encounter the same outcome too frequently.

function getRandomImage(){
    random_index = Math.floor(Math.random() * image_array.length);
    selected_image = image_array[random_index]
    document.getElementById('image_shower').src = `./images/${selected_image}`
}

function getRandomImage2(){
    random_index = Math.floor(Math.random() * image_array.length);
    selected_image = image_array[random_index]
    document.getElementById('image_shower2').src = `./images/${selected_image}`
}

function getRandomImage3(){
    random_index = Math.floor(Math.random() * image_array.length);
    selected_image = image_array[random_index]
    document.getElementById('image_shower3').src = `./images/${selected_image}`
}

function getRandomImage4(){
    random_index = Math.floor(Math.random() * image_array.length);
    selected_image = image_array[random_index]
    document.getElementById('image_shower4').src = `./images/${selected_image}`
}

function getRandomImage5(){
    random_index = Math.floor(Math.random() * image_array.length);
    selected_image = image_array[random_index]
    document.getElementById('image_shower5').src = `./images/${selected_image}`
}

//Similar to the slideshow.js, I needed to make more functions from the initial one given from the links below, this was due to the same image appearing on
//all 5 image_showers which would defeat the purpose of even naming this webpage a dream team making randomiser if there are such limited outcomes.

//https://www.javatpoint.com/random-image-generator-in-javascript
//https://www.youtube.com/watch?v=1YjybCS4B2U