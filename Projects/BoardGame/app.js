
const WATER=0;
const LAND=1;
const PLAYER1=2;
const PLAYER2=3;
const WEPON1=4;
const WEPON2=5;
const WEPON3=6;
const WEPON4=7;
var x,y;
const health=100;
const ROWS=10;
const COLS=10;
const MAX_ROWS=ROWS-1;
const MIN_ROWS=0;
const MAX_COL=COLS-1;
const MIN_COL=0;
const MAX_MOVES=3;

//function Player(id, name, x, y, defend, health, cyrrentWepon, cssClass) {
  class Player {
   constructor (id, name, x, y, defend, health, CurrentWepon, cssClass) {

    this.id = id;
    this.name = name;
    this.x=x;
    this.y=y;
    this.defend=false;
    this.health=health;
    this.CurrentWepon=CurrentWepon;
    this.cssClass=cssClass;
  }
}

class Weapon {
  constructor (id, name, x, y, damage, cssClass) {
    this.id = id;
    this.name = name;
    this.x=x;
    this.y=y;
    this.damage=damage;
    this.cssClass = cssClass;

  }
}



// Game weapons
const weapons = {
  WEPON1: {
    name: 'WEPON1',
    id: 4,
    damage: 10,
    cssClass: "player1W1",
  },
  WEPON2: {
    name: 'WEPON2',
    id: 5,
    damage: 30,
    cssClass: "player1W2",
  },
  WEPON3: {
    name: 'WEPON3',
    id: 6,
    damage: 40,
    cssClass: "player1W3",
  },
  WEPON4: {
    name: 'WEPON4',
    id: 7,
    damage: 50,
    cssClass: "player1W4",
  },
};




//2D Array Creation Declaration.
var board_map = createGround(10, 10);



let P1= new Player(PLAYER1, "player1", x, y, defend, health, WEPON1,"player1W1");
let P2= new Player(PLAYER2, "player2", x, y, defend, health, WEPON1,"player2W1");
let W= new Weapon(WEPON1,"wepon1",x, y, weapons.WEPON1.damage);

let CurrentPlayer=P1;
let CurrentMoves=0;
let CurrentWepon=W;


// moviments
const keys = {
  up: 38,
  down: 40,
  right: 39,
  left: 37,
  return:13,
  keyPressed: 0,
};


function handleKey(e) {
  switch (e.keyCode) {
    case keys.left:
    MoveLeft();
    
    CurrentMoves++;
    switchPlayer();

    break;
    case keys.up: 
    MoveUp();
    CurrentMoves++;
    switchPlayer();

    break;
    case keys.right:
    MoveRight()
    CurrentMoves++;
    switchPlayer();

    break;
    case keys.down:
    MoveDown();
    CurrentMoves++;
    switchPlayer();

    break;
    case keys.return:
    CurrentMoves=3;
    switchPlayer();

    break;
  }
  dysplaymap();
}



function handlewepons(wep){

  switch (wep) {
    case 4:
    if (CurrentPlayer.name=="player1") {
      P1.cssClass="player1W1";
      P1.damage=10;
      if (typeof P2.damage==="undefined") {P2.damage=10} else {}
    } else {
      P2.cssClass="player2W1"
      P2.damage=10;
      if (typeof P1.damage==="undefined") {P1.damage=10} else {}
    };

  $('.Player1Wepon').text(`Player 1 wepon (${P1.CurrentWepon})`);
  $('.Player2Wepon').text(`Player 2 wepon (${P2.CurrentWepon})`);
  $('.Player1Wstrength').text(`Wepon strength (${P1.damage})`);
  $('.Player2Wstrength').text(`Wepon strength (${P2.damage})`);

  break;
  case 5: 
  if (CurrentPlayer.name=="player1") {
    P1.cssClass="player1W2";
    P1.damage=20;
    if (typeof P2.damage==="undefined") {P2.damage=10} else {}
  } else {
    P2.cssClass="player2W2";
    P2.damage=20;
    if (typeof P1.damage==="undefined") {P1.damage=10;} else {}
  };

  $('.Player1Wepon').text(`Player 1 wepon (${P1.CurrentWepon})`);
  $('.Player2Wepon').text(`Player 2 wepon (${P2.CurrentWepon})`);
  $('.Player1Wstrength').text(`Wepon strength (${P1.damage})`);
  $('.Player2Wstrength').text(`Wepon strength (${P2.damage})`);


  break;
  case 6:
  if (CurrentPlayer.name=="player1") {
    P1.cssClass="player1W3";
    P1.damage=30;
    if (typeof P2.damage==="undefined") {P2.damage=10;} else {}
  } else {
    P2.cssClass="player2W3";
    P2.damage=30;
    if (typeof P1.damage==="undefined") {P1.damage=10;} else {}
  };
  $('.Player1Wepon').text(`Player 1 wepon (${P1.CurrentWepon})`);
  $('.Player2Wepon').text(`Player 2 wepon (${P2.CurrentWepon})`);
  $('.Player1Wstrength').text(`Wepon strength (${P1.damage})`);
  $('.Player2Wstrength').text(`Wepon strength (${P2.damage})`);
  break;
  case 7:
  if (CurrentPlayer.name=="player1") {
    P1.cssClass="player1W4";
    P1.damage=40;
    if (typeof P2.damage==="undefined") {P2.damage=10} else {}
  } else {
    P2.cssClass="player2W4";
    P2.damage=40;
    if (typeof P1.damage==="undefined") {P1.damage=10} else {}
  };

$('.Player1Wepon').text(`Player 1 wepon (${P1.CurrentWepon})`);
$('.Player2Wepon').text(`Player 2 wepon (${P2.CurrentWepon})`);
$('.Player1Wstrength').text(`Wepon strength (${P1.damage})`);
$('.Player2Wstrength').text(`Wepon strength (${P2.damage})`);
break;
}

}


//2D Array Creation.
function createGround(width, height){
 var result = [];
 for (var i = 0 ; i < width; i++) {
  result[i] = [];
  for (var j = 0; j < height; j++) {

    result[i][j] = WATER;
    //console.log ("result :" + result[i][j])

  }
}
return result;

}







function switchPlayer(){
  if (CurrentMoves==MAX_MOVES && CurrentPlayer.id==P1.id) {
   CurrentMoves=0;
   CurrentPlayer=P2; 
   $('.Player1').removeClass("highlightG");
   $('.Player2').removeClass("highlightG");
   $('.Player2').addClass("highlightR");
  // $(".PlayerActive").effect( "highlight", {color:"#FF0000 "}, 5000);

}  else if (CurrentMoves==MAX_MOVES && CurrentPlayer.id==P2.id) {
  CurrentMoves=0;
  CurrentPlayer=P1; 
//$(".PlayerActive").effect( "highlight", {color:"#008000"}, 5000);
$('.Player2').removeClass("highlightR");
$('.Player2').removeClass("highlightG");
$('.Player1').addClass("highlightG");
}  else  {

}
$('.PlayerActive').text(`Now the Active Player is: ${CurrentPlayer.name}`);


}


function checkBoundaary(x,y){
  if (x<MIN_ROWS || Y<MIN_COL ||x>MAX_ROWS||y>MAX_COL) {
    return(false);
  } else{
    return(true);
  }


}



function MoveLeft(){
  //console.log("left");

  let newX=CurrentPlayer.x;
  let newY=CurrentPlayer.y-1;
  let oldX=CurrentPlayer.x;
  let oldY=CurrentPlayer.y;


//change bodary condition
if (checkBoundaary[newX,newY]==true) {
// console.log("Out Of Boudary") 
} else {
  let  oldWeapon=CurrentPlayer.CurrentWepon;

  if (board_map[newX][newY]==WEPON1 || board_map[newX][newY]==WEPON2 || board_map[newX][newY]==WEPON3 || board_map[newX][newY]==WEPON4) {

   CurrentPlayer.CurrentWepon=board_map[newX][newY];
   console.log(CurrentPlayer.CurrentWepon);

   let  newWeapon=CurrentPlayer.CurrentWepon;


   board_map[newX][newY]=CurrentPlayer.id;
   board_map[oldX][oldY]=oldWeapon;
   CurrentPlayer.x=newX;
   CurrentPlayer.y=newY;

   handlewepons(newWeapon);


 } else if (board_map[newX][newY]==WATER) {

  board_map[newX][newY]=CurrentPlayer.id;
  board_map[oldX][oldY]=WATER;
  CurrentPlayer.x=newX;
  CurrentPlayer.y=newY;
  

} else {
 $('#attack').attr('disabled', false);



}
}
}


function MoveRight(){
  //console.log("right");

  let newX=CurrentPlayer.x;
  let newY=CurrentPlayer.y+1;
  let oldX=CurrentPlayer.x;
  let oldY=CurrentPlayer.y;



//change bodary condition
if (checkBoundaary[newX,newY]==true) {
// console.log("Out Of Boudary") 
} else {
  let  oldWeapon=CurrentPlayer.CurrentWepon;

  if (board_map[newX][newY]==WEPON1 || board_map[newX][newY]==WEPON2 || board_map[newX][newY]==WEPON3 || board_map[newX][newY]==WEPON4) {

   CurrentPlayer.CurrentWepon=board_map[newX][newY];
   console.log(CurrentPlayer.CurrentWepon);

   let  newWeapon=CurrentPlayer.CurrentWepon;


   board_map[newX][newY]=CurrentPlayer.id;
   board_map[oldX][oldY]=oldWeapon;
   CurrentPlayer.x=newX;
   CurrentPlayer.y=newY;

   handlewepons(newWeapon);



 } else if (board_map[newX][newY]==WATER) {

  board_map[newX][newY]=CurrentPlayer.id;
  board_map[oldX][oldY]=WATER;
  CurrentPlayer.x=newX;
  CurrentPlayer.y=newY;
  

} else {

  $('#attack').attr('disabled', false);

}
}
}



function MoveUp(){
 // console.log("up");

 let newX=CurrentPlayer.x-1;
 let newY=CurrentPlayer.y;
 let oldX=CurrentPlayer.x;
 let oldY=CurrentPlayer.y;



//change bodary condition
if (checkBoundaary[newX,newY]==true) {
// console.log("Out Of Boudary") 
} else {
  let  oldWeapon=CurrentPlayer.CurrentWepon;

  if (board_map[newX][newY]==WEPON1 || board_map[newX][newY]==WEPON2 || board_map[newX][newY]==WEPON3 || board_map[newX][newY]==WEPON4) {

   CurrentPlayer.CurrentWepon=board_map[newX][newY];
   console.log(CurrentPlayer.CurrentWepon);

   let  newWeapon=CurrentPlayer.CurrentWepon;


   board_map[newX][newY]=CurrentPlayer.id;
   board_map[oldX][oldY]=oldWeapon;
   CurrentPlayer.x=newX;
   CurrentPlayer.y=newY;

   handlewepons(newWeapon);



 } else if (board_map[newX][newY]==WATER) {

  board_map[newX][newY]=CurrentPlayer.id;
  board_map[oldX][oldY]=WATER;
  CurrentPlayer.x=newX;
  CurrentPlayer.y=newY;
  

} else {
  $('#attack').attr('disabled', false);
}
}
}




function MoveDown(){
 // console.log("down");

 let newX=CurrentPlayer.x+1;
 let newY=CurrentPlayer.y;
 let oldX=CurrentPlayer.x;
 let oldY=CurrentPlayer.y;

 

//change bodary condition
if (checkBoundaary[newX,newY]==true) {
// console.log("Out Of Boudary") 
} else {
  let  oldWeapon=CurrentPlayer.CurrentWepon;

  if (board_map[newX][newY]==WEPON1 || board_map[newX][newY]==WEPON2 || board_map[newX][newY]==WEPON3 || board_map[newX][newY]==WEPON4) {

   CurrentPlayer.CurrentWepon=board_map[newX][newY];
   console.log(CurrentPlayer.CurrentWepon);

   let  newWeapon=CurrentPlayer.CurrentWepon;


   board_map[newX][newY]=CurrentPlayer.id;
   board_map[oldX][oldY]=oldWeapon;
   CurrentPlayer.x=newX;
   CurrentPlayer.y=newY;

   handlewepons(newWeapon);
   console.log(P1.cssClass)
   console.log(P2.cssClass)

     // board_map[newX][newY]=newWeapon;


   } else if (board_map[newX][newY]==WATER) {

    board_map[newX][newY]=CurrentPlayer.id;
    board_map[oldX][oldY]=WATER;
    CurrentPlayer.x=newX;
    CurrentPlayer.y=newY;


  } else {
   $('#attack').attr('disabled', false);
 }
}
}





function generatewater (){
  board_map=createGround(10,10);

}


function generateland(){
  for (var i = 0; i < 10; i++) {
    //myrandomizer();
    let [x,y]=myrandomizer();
    if (board_map[x][y]==WATER) {
      board_map[x][y]=LAND
     // console.log (board_map[x][y]);

    }

    else {
      i--;
    }

  }

}

function generatePlayer1(){
  //myrandomizer();
  let [x,y]=myrandomizer();
  if (board_map[x][y]==WATER) {
    board_map[x][y]=PLAYER1;
        //Getting Player 1 Current Position
        P1.x=x;
        P1.y=y;

      }

      else {
        generatePlayer1();
      }


    }


    function generatePlayer2(){
      //myrandomizer();
      let [x,y]=myrandomizer();
      if (board_map[x][y]==WATER) {
        board_map[x][y]=PLAYER2;
        //Getting Player 1 Current Position
        P2.x=x;
        P2.y=y;

      }

      else {
        generatePlayer2();
      }


    }





    function generateWepon1(){
     
      let [x,y]=myrandomizer();
      if (board_map[x][y]==WATER) {
        board_map[x][y]=WEPON1;
     WEPON1.x=x
     WEPON1.y=y

      }
      else {
        generateWepon1();
      }

    }


    function generateWepon2(){
      
      let [x,y]=myrandomizer();
      if (board_map[x][y]==WATER) {
        board_map[x][y]=WEPON2;
      }

      else {
       generateWepon2();
     }
   }




   function generateWepon3(){
    // myrandomizer();
    let [x,y]=myrandomizer();
    if (board_map[x][y]==WATER) {
      board_map[x][y]=WEPON3;
     // console.log (board_map[x][y]);
    }

    else {
     generateWepon3();
   }

 }


 function generateWepon4(){
   // myrandomizer();
   let [x,y]=myrandomizer();
   if (board_map[x][y]==WATER) {
    board_map[x][y]=WEPON4;
    //console.log (board_map[x][y]);
  }

  else {
   generateWepon4();
 }


}






function myrandomizer(){

  let  x=Math.floor(Math.random()*10)
  let  y=Math.floor(Math.random()*10)
  return([x,y]);

}

function addBox (obj) {
  var box=document.createElement("div")
  box.classList.add("box")
  box.classList.add(obj)
  box.innerHTML="&nbsp;"
  var board=document.getElementById('board')
  board.appendChild(box)

}

function clearMap(){
  var board=document.getElementById('board')
  board.innerHTML="";
}

function dysplaymap(){
  var myplay;
  var mycase=0;
  clearMap();
  for (var row = 0 ; row <= 9; row++) {
   for (var col = 0; col <= 9; col++) {

  
   mycase=(board_map[row][col]);

   switch (mycase) {
    case 0:
    addBox("water");
    break;
    case 1:
    addBox("land");
    break;
    case 2:
    addBox (P1.cssClass);
   // addBox ("player1W1");
    break;
    case 3:
     addBox (P2.cssClass);
   // addBox("player2W1");
    break;
    case 4:
    addBox("wepon1");
    break;
    case 5:
    addBox("wepon2");
    break;
    case 6:
    addBox("wepon3");
    break;
    case 7:
    addBox("wepon4");
    break;
  }
}
}

}


function myattack(){
  newX=CurrentPlayer.x
  newY=CurrentPlayer.y

  if (board_map[newX][newY]== PLAYER1 && P2.defend==true) {
   P2.health=P2.health-CurrentWepon.damage/2;
   CurrentMoves=3;
   switchPlayer();

 } else if (board_map[newX][newY]== PLAYER2 && P1.defend==true) {
  P1.health=P1.health-CurrentWepon.damage/2;
  CurrentMoves=3;
  switchPlayer();

}  else if (board_map[newX][newY]== PLAYER2 && P1.defend==false) {
  P1.health=P1.health-CurrentWepon.damage;
  CurrentMoves=3;
  switchPlayer();
}  else if (board_map[newX][newY]== PLAYER1 && P2.defend==false) {
  P2.health=P2.health-CurrentWepon.damage;
  CurrentMoves=3;
  switchPlayer();
} else { console.log ("no battle");
}

$('.PlayerLife').text(`Player 1 Life (${P1.health}) - Player 2 Life (${P2.health})`);
if (P1.health==0) {
  $('.Winer').text(`Player 2 is the winer!`);
  $( function() {
    $( function() {
     $("#dialog2").dialog({
      autoOpen: true,
      hide: {
        effect: "fade",
        duration: 1000
      }
    });
   });
  });
} else if ((P2.health==0)){
  $('.Winer').text(`Player 1 is the winer! `);
  $( function() {
    $( function() {
     $("#dialog2").dialog({
      autoOpen: true,
      hide: {
        effect: "fade",
        duration: 1000
      }
    });
   });
  });

} else {}

};


function mydefend() {
CurrentPlayer.defend=true;
  CurrentMoves=3;
  switchPlayer();


};



function draw(){
	generatewater();
  generateland();
  generatePlayer1();
  generatePlayer2();
  generateWepon1();
  generateWepon2();
  generateWepon3();
  generateWepon4();
  dysplaymap();
  window.addEventListener("keydown", handleKey);

}




$('.newGame').click(function() {
  location.reload();
});



$('#Gameinfo').click(function() {
   //CurrentMoves=3;
    //switchPlayer();
    $("#dialog").dialog();

  });



$('#attack').attr('disabled', true);
$('#attack').click(function() {
 CurrentMoves++;
 myattack();

});



$('#defend').click(function() {

 CurrentMoves++;
 mydefend();

});
$('.PlayerActive').text(`Now the Active Player is: ${CurrentPlayer.name}`);
$('.Player1Wepon').text(`Player 1 Wepon (${P1.CurrentWepon})`);
$('.Player2Wepon').text(`Player 2 Wepon (${P2.CurrentWepon})`);

$('.Player1Wstrength').text(`Wepon strength 10`);
$('.Player2Wstrength').text(`Wepon strength 10`);

$('.PlayerLife').text(`Player 1 Life (${P1.health}) - Player 2 Life (${P2.health})`);


$( function() {
 $("#dialog2").dialog({
  autoOpen: false,
  hide: {
    effect: "fade",
    duration: 1000
  }
});
});

$( function() {
 $("#dialog").dialog();
});

draw();
