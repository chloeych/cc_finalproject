//Acknowledgement
let a = 'I would like to begin by acknowledging the American Indigenous population, Traditional Custodians of the land on which we learn today, and pay my respects to their Elders past and present. I extend this respect to the Australian Aboriginal and Torres Strait Islander peoples that created these works of art using pieces of their culture and experiences. I would also like to pay my respects to their Elders past and present and to thank them for sharing their work.'

let instruction = 'Instructions: Use your trackpad or mouse to navigate around the Canvas. Interact with shapes to hear Dreamtime Stories.'
//img set up

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
let dreamtimeAudio1;

// declaring buttons
let audioBtn;
let audioBtn1;
let audioBtn2;
let audioCount = 0;
let audio1Count = 0;
let audio2Count = 0;
let xBtn; 
let xBtnCount = 0; 

// declare popup box variables 
let outBoxOpacity = 190; 
let boxOpacity = 255; 

// music player 
let icons = []; 
let mP; 
let w, h, xVal, yVal;
let tBtns = [];
let count; 

function preload(){
  // Preload Images

  layer1[0] = loadImage("art_img/layer1/img_0.png"); // Preload 'backgroundImg' Object 
  for (let i=0; i<19; i++){ 
    layer2[i] = loadImage("art_img/layer2/img_"+i+".png"); // Preload Layer 2 Object 
  }

  // Preload Audio 
  soundFormats('mp3');
  dreamtimeAudio = loadSound('audio/dreamtime_0.mp3');
  dreamtimeAudio1 = loadSound('audio/dreamtime_1.mp3');
  dreamtimeAudio2 = loadSound('audio/dreamtime_2.mp3');

  // Preload Music Player Icons 
  for (let i=0; i<4; i++){
  icons[i] = createImg("art_img/player/icon_"+i+".png", 'icons');
  }

}

function setup() {
  createCanvas(4000, 2000); 
  backgroundImg[0] = new StaticImg();


  for (let i=0; i<19; i++){
    layerOneImg[i] = new MovingImg();
    
    // Popup Button Set Up 
    xBtn = new Clickable();
    xBtn.resize(10, 10);
    xBtn.locate(960,270);
    xBtn.textColor = 255;
    xBtn.text = "X";  
    xBtn.color = 0;
    xBtn.textSize = 20;


    // Audio Button Set Up 
    audioBtn = new Clickable();
    audioBtn1 = new Clickable();
    audioBtn2 = new Clickable();
  
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

  layerOneImg[0].parallax([0], 400, 650, 500, 800, 0, 700, 700, 800);
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
  layerOneImg[12].parallax([12], 2800, 2900, 3100, 3200, 400, 500, 500, 600);
  layerOneImg[13].parallax([13],2700, 2900, 3200, 3500, 0, 100, 200, 300);
  layerOneImg[14].parallax([14],2000, 2300, 2400, 2900, 400, 600, 500, 800);
  layerOneImg[15].parallax([15], 700, 900, 800, 1100, 550, 700, 650, 900);
  layerOneImg[16].parallax([16],0, 300, 50, 500, 0, 50, 300, 600);
  layerOneImg[17].parallax([17],1900, 2600, 2300, 2900, 600, 700, 650, 800);
  layerOneImg[18].parallax([18],300, 600, 400, 700, 0, 100, 0, 100);

  for (let i=0; i<19; i++) { // Display Images 
    layerOneImg[i].display([i],xScroll[i], yScroll[i] );
  }

  // Display Buttons 
  audioBtn.draw();
  audioBtn.textFont = "Antic Slab";
  audioBtn.color = '#702c28';
  audioBtn.strokeWeight = 0;
  audioBtn.locate(1080,580);
  audioBtn.resize(300,50);
  audioBtn.text = "Mirram The Kangaroo and Warreen The Wombat";
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

  audioBtn1.draw();
    audioBtn1.textFont = "Antic Slab";
    audioBtn1.color = '#702c28';
    audioBtn1.strokeWeight = 0;
    audioBtn1.locate(2500,800);
    audioBtn1.resize(300,50);
    audioBtn1.text = "How The Kangaroo Got It's Pouch";
    audioBtn1.onPress = function(){
      audio1Count += 1; 
  
      if(audio1Count == 1){
        dreamtimeAudio1.play();
      }
  
      if(audio1Count == 2){
        dreamtimeAudio1.stop();
      }
  
      if(audio1Count == 3){
        audio1Count = 1;
        dreamtimeAudio1.play();
      }
}

audioBtn2.draw();
    audioBtn2.textFont = "Antic Slab";
    audioBtn2.color = '#702c28';
    audioBtn2.strokeWeight = 0;
    audioBtn2.locate(3200,1800);
    audioBtn2.resize(300,50);
    audioBtn2.text = "Wayambeh The Turtle";
    audioBtn2.onPress = function(){
      audio2Count += 1; 
  
      if(audio2Count == 1){
        dreamtimeAudio2.play();
      }
  
      if(audio2Count == 2){
        dreamtimeAudio2.stop();
      }
  
      if(audio2Count == 3){
        audio2Count = 1;
        dreamtimeAudio2.play();
      }
  }

  let mP = new musicPlayer();
    for (let i=0; i<4; i++){
      mP.display(i, 100, 100, (i*100)+500, 650);
      mP.buttons(i, 100, 100, (i*100)+500, 650); 
    } 

  //acknowledgement pop up 
  fill(0,outBoxOpacity);
  rect(0, 0, width, height); 
  fill(0, boxOpacity);
  rect(width/10, height/8, 600, 300); 
  fill(255, outBoxOpacity);
  textFont("Antic Slab");
  text(a, width/10+50, height/9, 500, 250);
  text(instruction, width/10+50, height/6, 500, 250);

  xBtn.draw()
  xBtn.onHover = function(){
    xBtn.textSize = 25;
  }
  xBtn.onOutside = function(){
    xBtn.textSize = 20;
    
  }
  xBtn.onPress = function(){
    outBoxOpacity = 0; 
    boxOpacity = 0; 
    xBtn.text = "   ";
    xBtn.resize(0,0);
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



class musicPlayer{
  constructor(){

  }

  display(i, w, h, xVal, yVal){
    image(icons[i], w, h);
    icons[i].position(xVal, yVal, 'fixed');
    icons[i].size(w, h);
  }

  buttons(i, w, h, xVal, yVal){
    tBtns[i] = createButton(" "); 
    tBtns[i].position(xVal,yVal,'fixed');
    tBtns[i].size(w, h);
    tBtns[i].style('backgroundColor', color(0,0));
    tBtns[i].style('border-style', 'none');
    tBtns[i].mousePressed(playerBtns);
  }
}

function playerBtns(i){
  count = 0;
    if (i == 0){
      count -= 1; 
    }
    if (i == 1){
      count = 0;
    }

  if (count == 0){
    dreamtimeAudio.play();
  }
  if (count == -1){
    count = 3; 
  }
  if (count == 1){
    dreamtimeAudio1.play();
  }
  if (count == 2){
    dreamtimeAudio2.play();
  }
  if (count == 3){
    dreamtimeAudio2.play();
  }

  console.log(count);
  console.log(i);
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
        // https://www.aboriginalsignature.com/art-aborigene-papunya-tula/ronnie-tjampitjinpa-site-of-walungurru-ancestral-stories
        // https://www.nytimes.com/2011/11/05/arts/05iht-rartabor05.html
        // https://www.aboriginalartstore.com.au/artists/paddy-fordham-wainburranga/married-man/
        // http://www.outstation.com.au/stockroom/carlene-thompson-tjulpu-kulunypa/
        // https://www.artery.com.au/index.php?option=com_shop&view=product&catalogue=11575


    // Audio 
        // https://www.youtube.com/watch?v=xDJrnldb08o Mirram The Kangaroo and Warreen The Wombat
        // https://www.youtube.com/watch?v=8sWFAGGWvUA How the Kangaroo Got It's Pouch
        // https://www.youtube.com/watch?v=DpzDvpZ0hMg&t=1s Wayambeh The Turtle

