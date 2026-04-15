const cube = document.querySelector('.cube');



function rotateCube() {

  cube.style.transform = `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`;

}



setInterval(rotateCube, 3000);

###
###
