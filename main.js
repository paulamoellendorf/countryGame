let number = 0;
let xCord = 0;
let yCord = 0;
let countryName;
let img;
let img2;
let img3;
let img4;
let W = 1252; 
let H = 588;
let canvas;
let game= new Game();
//let random= new randomCountry();




function preload(){
    img = loadImage(
        "map.png"
      );
      img2=loadImage(
        "plane1.png" 
      );
      img3=loadImage(
        "correct.png"
      );
      img4=loadImage(
        "openBook.jpg" 
      );
           game.init();
}


function setup(){

    createCanvas(W, H);

}

function draw(){
clear();
    image(img, xCord, yCord, W, H);
    image(img2, 40.00231456756592, 353.0023145675659,250,200);
    game.draw();
    //random.display();
}

function mousePressed(){
    for(let i=0; i<game.countryList.length;i++){
     game.countryList[i].clicked();
    }
    if(game.randomCountry == game.clickedCountry) {
    let d=dist(mouseX, mouseY,922.7682853717026, 451.03125 );
	  if(d<=100){
		  game.getRandomCountry();
  } 
  console.log("here")
}
}



//function mouseClicked(){
 //console.log(mouseX,mouseY)
//}
