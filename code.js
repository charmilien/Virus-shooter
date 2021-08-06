var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e8743e83-baf7-4b18-bce0-b0384b4fdde5","0b508f55-35b8-4bae-bdc0-436541b673c0","9dc3521d-7977-49ea-a9f6-f7ffb7844ac5","efc78f92-7ef3-4654-ac9e-dabcf9271278","7caace55-1b67-4d30-9bda-1f831335b68e","45e6da66-ff98-4584-96d5-1bdc4e35a216","37a5ad87-6d1f-4a94-9d06-946bae803105","9fe3445c-cf7b-46f4-8629-dff61d324354","936ac704-14e2-4694-b4da-75a1a6a3f07c"],"propsByKey":{"e8743e83-baf7-4b18-bce0-b0384b4fdde5":{"name":"shooter","sourceUrl":null,"frameSize":{"x":380,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"SmY1hHy7Couy9VZGzibEIu_Rvi2wuSiH","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":398},"rootRelativePath":"assets/e8743e83-baf7-4b18-bce0-b0384b4fdde5.png"},"0b508f55-35b8-4bae-bdc0-436541b673c0":{"name":"background","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"9dc3521d-7977-49ea-a9f6-f7ffb7844ac5":{"name":"lives","sourceUrl":"assets/api/v1/animation-library/gamelab/edNh.EZfL2674p6wcwAYMigX_Dc7QnKR/category_emoji/vdayemoji_13.png","frameSize":{"x":362,"y":336},"frameCount":1,"looping":true,"frameDelay":2,"version":"edNh.EZfL2674p6wcwAYMigX_Dc7QnKR","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":362,"y":336},"rootRelativePath":"assets/api/v1/animation-library/gamelab/edNh.EZfL2674p6wcwAYMigX_Dc7QnKR/category_emoji/vdayemoji_13.png"},"efc78f92-7ef3-4654-ac9e-dabcf9271278":{"name":"b1","sourceUrl":"assets/api/v1/animation-library/gamelab/kMWv_JmgF4a6ZBEKvp_RVVgM8sQh7vQJ/category_germs/gameplaywacky_10.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":45,"version":"kMWv_JmgF4a6ZBEKvp_RVVgM8sQh7vQJ","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kMWv_JmgF4a6ZBEKvp_RVVgM8sQh7vQJ/category_germs/gameplaywacky_10.png"},"7caace55-1b67-4d30-9bda-1f831335b68e":{"name":"b2","sourceUrl":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png","frameSize":{"x":400,"y":398},"frameCount":1,"looping":true,"frameDelay":45,"version":"NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png"},"45e6da66-ff98-4584-96d5-1bdc4e35a216":{"name":"b4","sourceUrl":"assets/api/v1/animation-library/gamelab/BnjDVhiSCi1qxzxKHZpbeYSo.y5kz0tq/category_germs/virus02_04.png","frameSize":{"x":400,"y":396},"frameCount":1,"looping":true,"frameDelay":60,"version":"BnjDVhiSCi1qxzxKHZpbeYSo.y5kz0tq","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BnjDVhiSCi1qxzxKHZpbeYSo.y5kz0tq/category_germs/virus02_04.png"},"37a5ad87-6d1f-4a94-9d06-946bae803105":{"name":"bullet","sourceUrl":"assets/api/v1/animation-library/gamelab/sgPdLrZdfJvLRM1OXBLfDNS9Ietk5ayX/category_video_games/gameplayadventure_13.png","frameSize":{"x":328,"y":399},"frameCount":1,"looping":true,"frameDelay":60,"version":"sgPdLrZdfJvLRM1OXBLfDNS9Ietk5ayX","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":328,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sgPdLrZdfJvLRM1OXBLfDNS9Ietk5ayX/category_video_games/gameplayadventure_13.png"},"9fe3445c-cf7b-46f4-8629-dff61d324354":{"name":"b3","sourceUrl":"assets/api/v1/animation-library/gamelab/jtYFwldEv_5qJnCT2glgiwdohYvywxlK/category_germs/virus03_02.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":60,"version":"jtYFwldEv_5qJnCT2glgiwdohYvywxlK","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jtYFwldEv_5qJnCT2glgiwdohYvywxlK/category_germs/virus03_02.png"},"936ac704-14e2-4694-b4da-75a1a6a3f07c":{"name":"b5","sourceUrl":"assets/api/v1/animation-library/gamelab/XPV2K6ikOfhF.2Jek87gD9AAVCmeN53r/category_germs/gameplaywacky_18.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"XPV2K6ikOfhF.2Jek87gD9AAVCmeN53r","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/XPV2K6ikOfhF.2Jek87gD9AAVCmeN53r/category_germs/gameplaywacky_18.png"}}};
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

var bg=createSprite(200,200)
bg.setAnimation("background")
var balloon,balloons,bullet,bullets,i=0;
var shooter=createSprite(190,350,10,30)
shooter.setAnimation("shooter")
shooter.scale=0.2
var gameState=0; var score=0
var frames=0; var lives=3; var live1,live2,live3;
balloons=createGroup()
bullets=createGroup()
createLives();
var edges=createEdgeSprites();

function createLives()
{
 live1=createSprite(20,20,5,15)
 live2=createSprite(50,20,5,15)
 live3=createSprite(80,20,5,15)
 live1.setAnimation("lives")
 live2.setAnimation("lives")
 live3.setAnimation("lives")
 live1.scale=0.08
 live2.scale=0.08
 live3.scale=0.08
  }
  
function draw() {
  background(0)
  
  shooter.bounceOff(edges[0])
  shooter.bounceOff(edges[1])
  //shooter.x=World.mouseX
  if(keyWentDown("right"))shooter.velocityX=5
  if(keyWentDown("left"))shooter.velocityX=-5
  
  if(keyDown("space")&& lives===0){gameState=0;score=0;createLives();lives=3;}
  
  if(keyWentDown("space")&& lives!=0 && gameState!==5)
  {
     playSound("assets/category_hits/retro_game_simple_impact_1.mp3")
     bullet=createSprite(shooter.x,shooter.y,10,30)
     
     bullet.scale=0.08
     bullet.velocityY=-7
     bullet.lifetime=50
     bullets.add(bullet)
    bullets.setLifetimeEach(100)
    bullets.setAnimationEach("bullet")
  }
  
 
 if(World.frameCount % 50 ===0 && lives!==0 && gameState!==5){
  balloon=createSprite(random(20,350),0,20,20);
  balloon.velocityY=5;
  balloon.lifetime=60;
  balloon.setAnimation("b1"); balloon.scale=0.1; balloons.add(balloon);
}
 
 if(gameState===1){ balloon.velocityY=6;balloon.setAnimation("b2");balloon.scale=0.1}
 if(gameState===2){ balloon.velocityY=7;balloon.setAnimation("b3");balloon.scale=0.1}
 if(gameState===3){balloon.velocityY=8;balloon.setAnimation("b4");balloon.scale=0.1}
 if(gameState===4){balloon.velocityY=9;balloon.setAnimation("b5");balloon.scale=0.1}
 
 
  
  
  if(bullets.isTouching(balloons))
  {
    playSound("assets/category_pop/bamboo_pop_v2_notification4.mp3");
    balloons.get(i)
    balloons[i].destroy()
    bullets.get(i)
    bullets[i].destroy()
    score+=10
    if(score===370){ playSound("assets/category_female_voiceover/congratulations_female.mp3",false);}
    
  }
  
   if(score===50){gameState=1}
  if(score===100){gameState=2}
  if(score===150){gameState=3}
  if(score===250){gameState=4}
  if(score===370){gameState=5;}  
  
   if(balloons.isTouching(shooter))
  {
    playSound("assets/category_alerts/playful_game_error_sound_4.mp3",false);
    balloons.get(i)
    balloons[i].destroy()
    score-=10;
    if(lives>=0)
    lives-=1;
    if(lives==0){ 
      playSound("assets/category_female_voiceover/game_over_female.mp3",false);
    }
  }
  
 
  drawSprites()
 
  fill("yellow"); textSize(20)
  text("Score : " + score,250,15)
  
  
  if(lives===2){ live1.destroy(); }
  if(lives===1){ live2.destroy(); }
  
  if(lives===0)
    { 
      balloons.setVelocityYEach(0);
      bullets.setVelocityYEach(0);
      live3.destroy(); 
      shooter.velocityX=0;
      textSize(20)
      fill("yellow")
      stroke("red")
      strokeWeight(3)
      text("OOPS !!  Hit 'SPACE' to Re-start",35,180)
      text("Score 370 to kill All and Win !!",35,240)
    }
    
  
  if(gameState===5)
  { 
      balloons.setVelocityYEach(0);
      bullets.setVelocityYEach(0);
      live3.destroy(); 
      textSize(20)
      fill("yellow")
      stroke("blue")
      strokeWeight(3)
      text("HEYY!!! YOU WON- CONGRATS",40,150)
  }
}

console.log("dfd"+(0&&1))

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
