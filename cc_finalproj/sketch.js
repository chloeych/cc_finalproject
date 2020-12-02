let layer1=[];
let layer2=[];

// declare object
let backgroundImg = [];
let layerOneImg = [];
let x,y; // Variables for Image Loc and Image Size 
let xScroll; // Variables for Horizontal Parallax
let x1, x2, y1, y2;

function preload(){
  for (let i=0; i<3; i++){
    layer1[i] = loadImage("art_img/layer1/img_"+i+".png"); // Preload 'backgroundImg' Object 
    layer2[i] = loadImage("art_img/layer2/img_"+i+".png"); // Preload Layer 2 Object 
  }
}

function setup() {
  createCanvas(4000, 2000); 
  for (let i=0; i<3; i++){
    backgroundImg[i] = new StaticImg();
    layerOneImg[i] = new MovingImg();
  }
   
}

function draw() {
  background(100);
  // xScroll = map(window.scrollX, 1000, 1400, 1600, 1800, true);
  // console.log(window.scrollX);

  backgroundImg[0].display([0], 0, 0);

  backgroundImg[1].display([1], 300, 0);


  for (let i=0; i<3; i++) { // Display Images 
    // backgroundImg[i].display([i],500, 500);
    layerOneImg[i].parallax(0, 1500, 200, 1800);
    layerOneImg[i].display([i],xScroll, 100 );
  }

}

class StaticImg{

  constructor(){
    }

  display(i, x, y){
    image(layer1[i], x, y);
    
  }  
}

class MovingImg{

  constructor(){
    }

  display(i, x, y){
    image(layer2[i], x, y);
  }

  parallax(x1, y1, x2, y2){
    xScroll = map(window.scrollX, x1, y1, x2, y2, true);
    console.log(window.scrollX);
  }
  
}





// References:
// https://www.aboriginalartstore.com.au/aboriginal-art-culture/aboriginal-symbols-glossary/aboriginal-symbols-and-their-meanings/
// https://theconversation.com/friday-essay-the-politics-of-aboriginal-kitsch-73683
// https://sc.artgallery.wa.gov.au/19900236a-b-maralinga
// http://www.powertopersuade.org.au/blog/the-impact-of-political-determinants-of-health-must-be-recognised-for-aboriginal-and-torres-strait-islander-women/21/2/2018
// https://www.art-almanac.com.au/julie-dowling-babanyu-friends-life/
// https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/33177/46135/AboriginalArt_DotArtworkforConcentration_MeditationandProsperity2_na_450_42-1629-1684_4100X5851_497__38650.1531550691.jpg?c=2
// https://www.pinterest.com.au/pin/6966574413647331/
// http://www.gabriellepizzi.com.au/exhibitions/gallery_gabrielle_pizzi_0706balgo.html
// https://www.widewalls.ch/magazine/aboriginal-culture-art-importance