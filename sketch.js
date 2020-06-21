const Engine = Matter.Engine;
const World= Matter.World;
const  Events = Matter.Events;
const Bodies = Matter.Bodies;

var gameState = "start";
var turn = 0;
var particle;
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw()
{
  background("black");
  textSize(20)
  Engine.update(engine);

  text("SCORE : "+score,50,40);

  if (gameState == "end")
  {
    text("GAME OVER", 400, 450);
  }

  text("1000",20,520);
  text("1000",100,520);
  text("1000",180,520);
  text("700",260,520);
  text("700",340,520);
  text("700",420,520);
  text("700",500,520);
  text("500",580,520);
  text("500",660,520);
  text("500",740,520);
 
  for (var i = 0; i < plinkos.length; i++)
  {
     plinkos[i].display();
     
   }

   if(particle != null)
   {
     particle.display();

     if(particle.body.position.y > 760)
     {
       if(particle.body.position.x <= 240)
       {
         score = score + 1000;
         particle = null;
         if (turn >= 5)
         {
            gameState = "end"
         }
       }
       else if(particle.body.position.x > 240 && particle.body.position.x <= 560 )
       {
         score = score + 700;
         particle = null;
         if (turn >= 5)
         {
            gameState = "end"
         }
       }
       else if(particle.body.position.x > 560 && particle.body.position.x <= 800)
       {
         score = score + 500;
         particle = null;
         if (turn >= 5)
         {
            gameState = "end"
         }
       }
       else
       {
        particle = null;
        if (turn >= 5)
        {
           gameState = "end"
        }
       }
     }
    }

  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed()
{
  if (gameState == "start")
  {
    particle = new Particle(mouseX, 10,10);
    turn ++;
  }
}