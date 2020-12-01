let layer1=[];
let layer2=[];

function preload(){
  for (let i=0; i<3; i++) {
    layer1[i] = loadImage("art_img/layer1/img_"+i+".png");
    layer2[i] = loadImage("art_img/layer2/img_"+i+".png");
  }
}

function setup() {
  createCanvas(4000, 2000);
}

function draw() {
  background(100);
  for (let i=0; i<3; i++) {
    image(layer1[i], 20, 20);
    image(layer2[i], 1000, 100);
  }
}
