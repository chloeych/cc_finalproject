let layer1=[];
let layer2=[];

// declare objects
let backgroundImg = [];
let layerOneImg = [];
let x,y; // Variables for Image Loc and Image Size 
let xScroll = [];
let yScroll = []; // Variables for Horizontal Parallax
let x1, x2, y1, y2; //Variables for Parallax Locations

// declaring audio
let dreamtimeAudio;

// declaring buttons
let audioBtn;
let audioCount = 0;

function preload(){
  // Preload Images

  layer1[0] = loadImage("art_img/layer1/img_0.png"); // Preload 'backgroundImg' Object 
  for (let i=0; i<14; i++){ 
    layer2[i] = loadImage("art_img/layer2/img_"+i+".png"); // Preload Layer 2 Object 
  }

  // Preload Audio 
  soundFormats('mp3');
  dreamtimeAudio = loadSound('audio/dreamtime_0.mp3');
}

function setup() {
  createCanvas(4000, 2000); 
  backgroundImg[0] = new StaticImg();
  for (let i=0; i<14; i++){
    layerOneImg[i] = new MovingImg();
    
    // Audio Button Set Up 
    audioBtn = new Clickable();
    audioBtn.resize(100, 50); 
  
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


  // Display and Setup of Parallax Images 

  layerOneImg[0].parallax([0], 200, 250, 100, 500, 0, 700, 700, 800);
  layerOneImg[1].parallax([1], 0, 100, 50, 200, 0, 100, 200, 300);
  layerOneImg[2].parallax([2], 2800, 2900, 3000, 3200, 0, 100, 50, 300);
  layerOneImg[3].parallax([3], 100, 1900, 200, 2200, 0, 100, 200, 300);
  layerOneImg[4].parallax([4], 900, 1100, 1200, 1600, 0, 400, 0, 800);
  layerOneImg[5].parallax([5], 800, 1000, 2000, 2200, 0, 100, 200, 300);
  layerOneImg[6].parallax([6], 700, 800, 1000, 1400, 600, 900, 1100, 1400);
  layerOneImg[7].parallax([7], 200, 600, 900, 1000, 0, 100, 200, 300);
  layerOneImg[8].parallax([8], 2600, 2800, 3000, 3200, 500, 800, 1200, 1300);
  layerOneImg[9].parallax([9], 500, 800, 600, 1200, 0, 100, 200, 300);
  layerOneImg[10].parallax([10], 100, 120, 100, 120, 0, 20, 0, 30);
  layerOneImg[11].parallax([11], 0, 50, 100, 200, 900, 1200, 1000, 1400);
  layerOneImg[12].parallax([12], 2600, 2700, 2500, 2600, 600, 700, 600, 800);
  layerOneImg[13].parallax([13],2700, 2900, 3200, 3500, 0, 100, 200, 300);

  for (let i=0; i<14; i++) { // Display Images 
    layerOneImg[i].display([i],xScroll[i], yScroll[i] );
  }

  // Display Buttons 
  audioBtn.draw();
  audioBtn.onPress = function(){
    audioCount += 1; 
    console.log(audioCount);

    if(audioCount == 1){
      dreamtimeAudio.play();
    }

    if(audioCount == 2){
      dreamtimeAudio.stop();
    }

    if(audioCount == 3){
      audioCount = 1;
      dreamtimeAudio.play();
    }
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
        // https://www.hiclipart.com/free-transparent-background-png-clipart-pvqyd
        // https://theupsider.com.au/the-national-2019/9814
        // https://www.artnews.com/gallery/art-in-america/aia-photos/history-wars-aboriginal-art/
        // https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mca.com.au%2Fartists-works%2Fartists%2Fgordon-bennett%2F&psig=AOvVaw1wGMaGMN45pGaPCb0WgEQb&ust=1607062181913000&source=images&cd=vfe&ved=2ahUKEwiVg5Olk7HtAhVjkOYKHVQwAVcQjhx6BAgAEA4
        // https://books.openedition.org/obp/8107

    // Audio 
        // https://www.youtube.com/watch?v=xDJrnldb08o

