var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["20b9a208-515e-4640-84f2-a8cf2b1b66f1","35b4313b-618f-4ff8-a316-35e25c1a5509"],"propsByKey":{"20b9a208-515e-4640-84f2-a8cf2b1b66f1":{"name":"emoji_19_1","sourceUrl":"assets/api/v1/animation-library/gamelab/h_LF7PqnHba0BOlL85_9g6TgRHqzd_Lh/category_emoji/emoji_19.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"h_LF7PqnHba0BOlL85_9g6TgRHqzd_Lh","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/h_LF7PqnHba0BOlL85_9g6TgRHqzd_Lh/category_emoji/emoji_19.png"},"35b4313b-618f-4ff8-a316-35e25c1a5509":{"name":"award_trophy1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qYuvwscvicUp26fkvQOaDTrPjKxv1BlU/category_video_games/award_trophy1.png","frameSize":{"x":312,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qYuvwscvicUp26fkvQOaDTrPjKxv1BlU","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":312,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qYuvwscvicUp26fkvQOaDTrPjKxv1BlU/category_video_games/award_trophy1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Sofia = createSprite(365,25,15,15);
Sofia.shapeColor = "yellow";
Sofia.setAnimation("emoji_19_1");
Sofia.scale = 0.1;

var WinnerCup = createSprite(25,375,15,15);
WinnerCup.shapeColor = "yellow";
WinnerCup.setAnimation("award_trophy1_1");
WinnerCup.scale = 0.12;

var wall = createSprite(20,30,20,100);
wall.shapeColor = "yellow";
var wall2 = createSprite(395,55,130,20);
wall2.shapeColor = "yellow";
var wall3 = createSprite(395,345,130,20);
wall3.shapeColor = "yellow";
var wall4 = createSprite(330,330,20,100);
wall4.shapeColor = "yellow";
var wall5 = createSprite(390,170,80,20);
wall5.shapeColor = "yellow";
var wall6 = createSprite(0,320,150,20);
wall6.shapeColor = "yellow";
var wall7 = createSprite(70,400,20,50);
wall7.shapeColor = "yellow";
var wall8 = createSprite(0,80,150,20);
wall8.shapeColor = "yellow";
var wall9 = createSprite(130,30,100,20);
wall9.shapeColor = "yellow";
var wall10 = createSprite(130,60,20,80);
wall10.shapeColor = "yellow";
var wall11 = createSprite(140,400,20,150);
wall11.shapeColor = "yellow";
var wall12 = createSprite(170,325,80,20);
wall12.shapeColor = "yellow";
var wall13 = createSprite(265,400,20,240);
wall13.shapeColor = "yellow";
var wall14 = createSprite(245,0,20,250);
wall14.shapeColor = "yellow";
var wall15 = createSprite(290,115,100,20);
wall15.shapeColor = "yellow";
var wall16 = createSprite(0,130,200,20);
wall16.shapeColor = "yellow";
var wall17 = createSprite(0,270,200,20);
wall17.shapeColor = "yellow";
var wall18 = createSprite(100,170,20,100);
wall18.shapeColor = "yellow";
var wall19 = createSprite(360,220,300,20);
wall19.shapeColor = "yellow";
var wall20 = createSprite(210,220,20,135);
wall20.shapeColor = "yellow";
var wall21 = createSprite(165,150,20,100);
wall21.shapeColor = "yellow";
var wall22 = createSprite(150,250,20,50);
wall22.shapeColor = "yellow";

function draw() {
background("black");

if (Sofia.collide(WinnerCup)) {
 background("white");
}
if (keyDown("UP_ARROW")) {
Sofia.y=Sofia.y-4;
  }
if (keyDown("DOWN_ARROW")) {
Sofia.y=Sofia.y+4;
  }
if (keyDown("LEFT_ARROW")) {
Sofia.x=Sofia.x-4;
}
if (keyDown("RIGHT_ARROW")) {
Sofia.x=Sofia.x+4;
}

createEdgeSprites();
Sofia.bounceOff(edges);
Sofia.bounceOff(wall);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);

drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
