let layer1=[];
let layer2=[];

// declare object
let backgroundImg = [];
let layerOneImg = [];
let x,y; // Variables for Image Loc and Image Size 
let xScroll = [];
let yScroll = []; // Variables for Horizontal Parallax
let x1, x2, y1, y2; //Variables for Parallax Locations

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

  // Background Image Repeated
  let rows = 2; 
  let cols = 5; 

  for (let yVal=0; yVal < rows; yVal++){
    for (let xVal = 0; xVal < cols; xVal++){
      backgroundImg[0].display([0], xVal*800, yVal*800);
    }
  }

  // Display Static

  backgroundImg[1].display([1], 300, 0);

  // Display and Setup of Parallax Images 

  layerOneImg[0].parallax([0], 0, 200, 100, 200, 0, 400, 100, 800);
  layerOneImg[1].parallax([1], 500, 800, 600, 1200, 0, 100, 200, 300);
  layerOneImg[1].parallax([2], 300, 600, 200, 400, 1000, 1200, 800, 1000);
  for (let i=0; i<3; i++) { // Display Images 
    layerOneImg[i].display([i],xScroll[i], yScroll[i] );
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

  parallax(i, xStart1, xStop1, xStart2, xStop2, yStart1, yStop1, yStart2, yStop2){
    xScroll[i] = map(window.scrollX, xStart1, xStop1, xStart2, xStop2, true);
    yScroll[i] = map(window.scrollY, yStart1, yStop1, yStart2, yStop2, true);
  }

  display(i, x, y){
    image(layer2[i], x, y);
  }
  
}





// References:
    // Images
        // https://www.aboriginalartstore.com.au/aboriginal-art-culture/aboriginal-symbols-glossary/aboriginal-symbols-and-their-meanings/
        // https://theconversation.com/friday-essay-the-politics-of-aboriginal-kitsch-73683
        // https://sc.artgallery.wa.gov.au/19900236a-b-maralinga
        // http://www.powertopersuade.org.au/blog/the-impact-of-political-determinants-of-health-must-be-recognised-for-aboriginal-and-torres-strait-islander-women/21/2/2018
        // https://www.art-almanac.com.au/julie-dowling-babanyu-friends-life/
        // https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/33177/46135/AboriginalArt_DotArtworkforConcentration_MeditationandProsperity2_na_450_42-1629-1684_4100X5851_497__38650.1531550691.jpg?c=2
        // https://www.pinterest.com.au/pin/6966574413647331/
        // http://www.gabriellepizzi.com.au/exhibitions/gallery_gabrielle_pizzi_0706balgo.html
        // https://www.widewalls.ch/magazine/aboriginal-culture-art-importance
        // https://www.aboriginalartstore.com.au/artists/malcolm-maloney-jagamarra/lander-river/
        // https://www.aboriginalartstore.com.au/artists/paddy-fordham-wainburranga/mermaid-sisters/
        // https://www.aboriginalartstore.com.au/artists/malcolm-maloney-jagamarra/inapaku-dreaming/
    // Audio 
        // https://www.youtube.com/watch?v=xDJrnldb08o

