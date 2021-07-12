


let canvas = document.getElementById("canvas")
//canvas.getContext("2d")
canvas.width = 300
canvas.height = 600
let ctx = canvas.getContext("2d")
let nextOne = document.getElementById("nextone")
nextOne.width = 210
nextOne.height = 120
let ctx1 = nextOne.getContext("2d")
let array = [
       
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0],
       [1,1,1,1,1,1,1,1,1,1],
       [1,1,1,1,1,1,1,1,1,1],
       [1,1,1,1,1,1,1,1,1,1],
]

function drawArea () {
for (let i =0 ; i <600; i+=30)
{for (let j=0 ; j< 300; j+=30)

{if (array[i/30][j/30] === 0){
ctx.fillStyle = "#f1f1f1"
ctx.fillRect(j,i,30, 30);
ctx.strokeStyle = "#FFFFFF";
ctx.lineWidth  = 2
ctx.strokeRect (j,i,30,30)}
}}}
drawArea()

const tetrimino = ["o"/*,"t","s","z","i","l","j"*/];




random = tetrimino[Math.floor(Math.random() * tetrimino.length)];

function randomizerTetrimino () {

if (random === "o") {
// O tetrimino   
ctx.fillStyle = "#ffff00"
ctx.fillRect (121,1,28,28)
array[0][4] = 1
ctx.fillRect (151,1,28,28)
array[0][5] = 1
ctx.fillRect (121,31,28,28)
array[1][4] = 1
ctx.fillRect (151,31,28,28)
array[1][5] = 1

}

else if (random === "s")
{
//S tetrimino
ctx.fillStyle = "#00ff80"
ctx.fillRect (121,1,28,28)
array[0][4] = 3
ctx.fillRect (151,1,28,28)
array[0][5] = 3
ctx.fillRect (121,31,28,28)
array[1][4] = 3
ctx.fillRect (91,31,28,28)
array[1][3] = 3
}

else if (random === "t")

{
    //T tetrimino   
ctx.fillStyle = "#6a0dad"
ctx.fillRect (121,1,28,28)
array[0][4] = 4
ctx.fillRect (121,31,28,28)
array[1][4] = 4
ctx.fillRect (91,31,28,28)
array[1][3] = 4
ctx.fillRect (151,31,28,28)
array[1][5] = 4
}
else if (random === "z")
{
//Z tetrimino
ctx.fillStyle = "#ff0000"
ctx.fillRect (91,1,28,28)
array[0][3] = 5
ctx.fillRect (121,1,28,28)
array[0][4] = 5
ctx.fillRect (121,31,28,28)
array[1][4] = 5
ctx.fillRect (151,31,28,28)
array[1][5] = 5
}
else if (random === "l")
{
//L tetrimino
ctx.fillStyle = "#FFA500"
ctx.fillRect (151,1,28,28)
array[0][5] = 6
ctx.fillRect (91,31,28,28)
array[1][3] = 6
ctx.fillRect (121,31,28,28)
array[1][4] = 6
ctx.fillRect (151,31,28,28)
array[1][5] = 6

}
else if (random === "j")
{
//J tetrimino
ctx.fillStyle = "#2e8bc0"
ctx.fillRect (91,1,28,28)
array[0][3] = 7
ctx.fillRect (91,31,28,28)
array[1][3] = 7
ctx.fillRect (121,31,28,28)
array[1][4] = 7
ctx.fillRect (151,31,28,28)
array[1][5] = 7
}
else if (random === "i")
{
//I tetrimino
ctx.fillStyle = "#72bcd4"
ctx.fillRect (91,1,28,28)
array[0][3] = 2
ctx.fillRect (121,1,28,28)
array[0][4] = 2
ctx.fillRect (151,1,28,28)
array[0][5] = 2
ctx.fillRect (181,1,28,28)
array[0][6] = 2

}
}

randomizerTetrimino ()
function nextTetrimino () {

ctx1.clearRect(0, 0, nextOne.width, nextOne.height);
if (random2 === "o") {
// O tetrimino   
ctx1.fillStyle = "#ffff00"
ctx1.fillRect (76,31,28,28)
ctx1.fillRect (106,31,28,28)
ctx1.fillRect (76,61,28,28)
ctx1.fillRect (106,61,28,28)

}

else if (random2 === "s")
{
//S tetrimino
ctx1.fillStyle = "#00ff80"
ctx1.fillRect (121,31,28,28)
ctx1.fillRect (91,31,28,28)
ctx1.fillRect (91,61,28,28)
ctx1.fillRect (61,61,28,28)
}

else if (random2 === "t")

{
    //T tetrimino   
ctx1.fillStyle = "#6a0dad"
ctx1.fillRect (91,31,28,28)
ctx1.fillRect (61,61,28,28)
ctx1.fillRect (91,61,28,28)
ctx1.fillRect (121,61,28,28)
}
else if (random2 === "z")
{
//Z tetrimino
ctx1.fillStyle = "#ff0000"
ctx1.fillRect (61,31,28,28)
ctx1.fillRect (91,31,28,28)
ctx1.fillRect (91,61,28,28)
ctx1.fillRect (121,61,28,28)
}
else if (random2 === "l")
{
//L tetrimino
ctx1.fillStyle = "#FFA500"
ctx1.fillRect (121,31,28,28)
ctx1.fillRect (61,61,28,28)
ctx1.fillRect (91,61,28,28)
ctx1.fillRect (121,61,28,28)

}
else if (random2 === "j")
{
//J tetrimino
ctx1.fillStyle = "#2e8bc0"
ctx1.fillRect (61,31,28,28)
ctx1.fillRect (61,61,28,28)
ctx1.fillRect (91,61,28,28)
ctx1.fillRect (121,61,28,28)
}
else if (random2 === "i")
{
//I tetrimino
ctx1.fillStyle = "#72bcd4"
ctx1.fillRect (46,46,28,28)
ctx1.fillRect (76,46,28,28)
ctx1.fillRect (106,46,28,28)
ctx1.fillRect (136,46,28,28)

}
}
let random2 = tetrimino[Math.floor(Math.random() * tetrimino.length)];
nextTetrimino()
function downChecker () {

       if(random === "o"){moveDownO()}
       else if(random === "t"){moveDownT()}
       else if (random === "s") {moveDownS()}
       else if (random === "z") {moveDownZ()}
       else if (random === "l") {moveDownL()}
       else if (random === "j") {moveDownJ()}
       else if (random === "i") {moveDownI()}



}

function leftChecker () {
       if(random === "o"){moveLeftO()}
       else if(random === "t"){moveLeftT()}
       else if (random === "s") {moveLeftS()}
       else if (random === "z") {moveLeftZ()}
       else if (random === "l") {moveLeftL()}
       else if (random === "j") {moveLeftJ()}
       else if (random === "i") {moveLeftI()}

       



}

function rightChecker () {
       if(random === "o"){moveRightO()}
       else if(random === "t"){moveRightT()}
       else if (random === "s") {moveRightS()}
       else if (random === "z") {moveRightZ()}
       else if (random === "l") {moveRightL()}
       else if (random === "j") {moveRightJ()}
       else if (random === "i") {moveRightI()}




}

function upChecker () {
       if(random === "o"){moveUpO()}
       else if(random === "t"){moveUpT()}
       else if (random === "s") {moveUpS()}
       else if (random === "z") {moveUpZ()}
       else if (random === "l") {moveUpL()}
       else if (random === "j") {moveUpJ()}
       else if (random === "i") {moveUpI()}




}

function zChecker () {
       if (random === "o") {moveZO()}
       else if(random === "t"){moveZT()}
       else if (random === "s") {moveZS()}
       else if (random === "z") {moveZZ()}
       else if (random === "l") {moveZL()}
       else if (random === "j") {moveZJ()}
       else if (random === "i") {moveZI()}





}


function hardDrop () {
if (random === "o")
{hardDropO()}
else if (random === "t")
{hardDropT()}
else if (random === "s")
{hardDropS()}
else if (random === "z")
{hardDropZ()}
else if (random === "l")
{hardDropL()}
else if (random === "j")
{hardDropJ()} 
else if (random === "i")
{hardDropI()}

}

let pauseChecker = 0
let btn = document.createElement("button")
 let menu = document.getElementById("menu");
 btn.innerHTML = "hello"
function pause () {
      if (pauseChecker=== 0) {
clearInterval(id)
pauseChecker = 1
document.getElementById("main").appendChild(menu)
document.getElementById("menu").appendChild(btn)
}
else {id = setInterval(o,1000)
pauseChecker = 0}

}
let cleared = 0
function linesCleared () {
       cleared += counters
       document.getElementById("linenumber").innerHTML = Number(cleared)
}

function getKeyAndMove(e) {				
		let key_code=e.which||e.keyCode;
		switch(key_code){
case 40:
                     
// down arrow key
downChecker()
break;

case 38 : // up arrow key
upChecker ()
break;	

case 39: //right arrow key

rightChecker ();
break;

case 37: //left arrow key
leftChecker()
break;
case 27: //escape key
pause()
break;

case 90: //Z key
zChecker();
break;
case 32: //Space key
hardDrop()
break;}
}


let pAX = 91
let pAY = 1

let pBX = 121
let pBY = 1

let pCX = 151
let pCY = 1

let pDX = 91
let pDY = 31

let pEX = 121
let pEY = 31

let pFX = 151
let pFY = 31

let pGX = 91
let pGY = 61

let pHX = 121
let pHY = 61

let pIX = 151
let pIY = 61




let pointAX = 90
let pointAY = 0

let pointBX = 120
let pointBY = 0

let pointCX = 150
let pointCY = 0

let pointDX = 90
let pointDY = 30

let pointEX = 120
let pointEY = 30

let pointFX = 150
let pointFY = 30

let pointGX = 90
let pointGY = 60

let pointHX = 120
let pointHY = 60

let pointIX = 150
let pointIY = 60






function plusY (amount) 
{
pointAY += amount
pointBY += amount 
pointCY += amount
pointDY += amount
pointEY += amount
pointFY += amount
pointGY += amount
pointHY += amount
pointIY += amount
pAY += amount
pBY += amount
pCY += amount
pDY +=amount
pEY += amount
pFY +=amount
pGY += amount
pHY += amount
pIY += amount


}
function minusY (amount)
{
pointAY -= amount
pointBY -= amount 
pointCY -= amount
pointDY -= amount
pointEY -= amount
pointFY -= amount
pointGY -= amount
pointHY -= amount
pointIY -= amount
pAY -= amount
pBY -= amount
pCY -= amount
pDY -=amount
pEY -= amount
pFY -=amount
pGY -= amount
pHY -= amount
pIY -= amount



}
function plusX (amount) 
{
pointAX += amount
pointBX += amount 
pointCX += amount
pointDX += amount
pointEX += amount
pointFX += amount
pointGX += amount
pointHX += amount
pointIX += amount
pAX += amount
pBX += amount
pCX += amount
pDX +=amount
pEX += amount
pFX +=amount
pGX += amount
pHX += amount
pIX += amount

}
function minusX (amount) 
{
pointAX -= amount
pointBX -= amount 
pointCX -= amount
pointDX -= amount
pointEX -= amount
pointFX -= amount
pointGX -= amount
pointHX -= amount
pointIX -= amount
pAX -= amount
pBX -= amount
pCX -= amount
pDX -=amount
pEX -= amount
pFX -=amount
pGX -= amount
pHX -= amount
pIX -= amount

}
 
let rotationState = 0
let counter = 1

let id = null;
let id2 = null;
let id3 = null;
let id4 = null;
let id5 = null;
let id6 = null;
let id7 = null;



function startGame () {
if (random === "o")
{id = setInterval(o,1000)}
else if (random === "t")
{id2 = setInterval(t,1000)}
else if (random === "s")
{id3 = setInterval (s,1000)}
else if (random === "z")
{id4 = setInterval (z,1000)}
else if (random === "l")
{id5 = setInterval (l,1000)}
else if (random === "j")
{id6 = setInterval (j,1000)} 
else if (random === "i")
{id7 = setInterval (i,1000)}
document.getElementById("menu").remove()

}

let m = 0
let array2 = []
function numberChecker (item) {if (item >0){m+=1}}

function draw () {
for (let z = 0 ; z<600 ; z+=30){
for (let v = 0 ; v<300 ; v+=30)
{if (array[z/30][v/30] === 0){
       ctx.fillStyle = "#f1f1f1"
       ctx.fillRect(v,z,30, 30);
       ctx.strokeStyle = "#000000";
       ctx.lineWidth  = 2
       ctx.strokeRect (v,z,30,30)
  } else if (array[z/30][v/30] === 1)
  {
       ctx.fillStyle = "#ffff00"
       ctx.fillRect(v,z,30, 30);
       ctx.strokeStyle = "#000000";
       ctx.lineWidth  = 2
       ctx.strokeRect (v,z,30,30)
  }
else if (array[z/30][v/30] === 3)
  {
       ctx.fillStyle = "#00ff80"
       ctx.fillRect(v,z,30, 30);
       ctx.strokeStyle = "#000000";
       ctx.lineWidth  = 2
       ctx.strokeRect (v,z,30,30)
}
  else if (array[z/30][v/30] === 4)
  {
       ctx.fillStyle = "#6a0dad"
       ctx.fillRect(v,z,30, 30);
       ctx.strokeStyle = "#000000";
       ctx.lineWidth  = 2
       ctx.strokeRect (v,z,30,30)
  }
  else if (array[z/30][v/30] === 5)
  {
       ctx.fillStyle = "#ff0000"
       ctx.fillRect(v,z,30, 30);
       ctx.strokeStyle = "#000000";
       ctx.lineWidth  = 2
       ctx.strokeRect (v,z,30,30)
  }
  else if (array[z/30][v/30] === 6)
  {   
       ctx.fillStyle = "#FFA500"
       ctx.fillRect(v,z,30, 30);
       ctx.strokeStyle = "#000000";
       ctx.lineWidth  = 2
       ctx.strokeRect (v,z,30,30)
  }
  else if (array[z/30][v/30] === 7)
  {
       ctx.fillStyle = "#2e8bc0"
       ctx.fillRect(v,z,30, 30);
       ctx.strokeStyle = "#000000";
       ctx.lineWidth  = 2
       ctx.strokeRect (v,z,30,30)

  }
}}}

let counters = 0

function lineChecker () {
for (let i = 0 ; i< 20 ; i++){ 
  array[i].forEach(numberChecker)
  if (m === 10) {
array2 = array.slice(0,i)
for (let s = i+1 ; s <23 ; s++ )
{array2.push(array[s])}
array = array2
array.unshift([0,0,0,0,0,0,0,0,0,0])
m=0
counters++


draw()}
else {m=0}
  }
console.log(counters)
linesCleared()
counters = 0}







function t () {
       
//Rotation state of 0       
if (/*counter < array.length-1*/ pointHY <800 && array[(pointGY/30)][pointGX/30]===0 && array[(pointHY/30)][pointHX/30]===0 &&array[(pointIY/30)][pointIX/30]===0 && rotationState === 0) {


clearRStateT0 ()
plusY(30)
fillRStateT0()
counter++
}
//Rotation state of 1
else if (/*counter < array.length-2*/ pointHY <950 && array[(pointGY/30)][pointGX/30]===0 &&/*array[(pointIY/30)][pointIX/30]===0 && */ array[(pointHY/30)+1][pointHX/30]===0 && rotationState === 1 )

{

clearRStateT1 ()
plusY(30)
fillRStateT1 ()
counter++
}

//Rotationstate of 2
else if (/*counter < array.length-2*/ pointHY <950 && array[(pointGY/30)][pointGX/30]===0 &&array[(pointIY/30)][pointIX/30]===0 && array[(pointHY/30)+1][pointHX/30]===0 && rotationState === 2 )

{
clearRStateT2 ()
plusY(30)
fillRStateT2 ()
counter++

}

//Rotationstate of 3
else if (/*counter < array.length-2*/ rotationState === 3 && pointHY <950  && array[(pointIY/30)][pointIX/30]===0 && array[(pointHY/30)+1][pointHX/30]===0 )

{
clearRStateT3 ()
plusY(30)
fillRStateT3 ()
counter++
}

else { 
      
pAX = 91
pAY = 1

pBX = 121
pBY = 1

pCX = 151
pCY = 1

pDX = 91
pDY = 31

pEX = 121
pEY = 31

pFX = 151
pFY = 31

pGX = 91
pGY = 61

pHX = 121
pHY = 61

pIX = 151
pIY = 61

counter = 1
pointAX = 90
 pointAY =0
 pointBX = 120
 pointBY = 0

 pointCX = 150
 pointCY = 0

 pointDX = 90
 pointDY = 30

 pointEX = 120
 pointEY = 30

 pointFX = 150
 pointFY = 30

 pointGX = 90
 pointGY = 60

 pointHX = 120
 pointHY = 60

 pointIX = 150
 pointIY = 60

rotationState = 0
clearInterval(id2)
lineChecker()
random = random2
random2 = tetrimino[Math.floor(Math.random() * tetrimino.length)];
randomizerTetrimino ()
nextTetrimino()



if (random === "o")
{id = setInterval(o,1000)}
else if (random === "t")
{id2 = setInterval(t,1000)}
else if (random === "s")
{id3 = setInterval (s,1000)} 
else if (random === "z")
{id4 = setInterval (z,1000)}
else if (random === "l")
{id5 = setInterval (l,1000)} 
else if (random === "j")
{id6 = setInterval (j,1000)}
else if (random === "i")
{id7 = setInterval (i,1000)}  
}



}


function s () {
//Rotation state of 0
if (pointHY <800 && rotationState === 0 && array[(pointGY/30)][pointGX/30]===0 && array[(pointHY/30)][pointHX/30]===0 &&array[(pointFY/30)][pointFX/30]===0)
{clearRStateS0()
plusY(30)
fillRStateS0()
}
//Rotation state of 1
else if (pointHY <800 && rotationState === 1 && array[(pointHY/30)][pointHX/30]===0 &&array[(pointIY/30)+1][pointIX/30]===0)
{clearRStateS1()
plusY(30)
fillRStateS1()
}
//Rotation state of 2
else if (pointHY <800 && rotationState === 2 && array[(pointHY/30)+1][pointHX/30]===0 && array[(pointGY/30)+1][pointGX/30]===0 &&array[(pointIY/30)][pointIX/30]===0)
{clearRStateS2()
plusY(30)
fillRStateS2()
}
//Rotation state of 3
else if (pointHY <800 && rotationState === 3 && array[(pointHY/30)+1][pointHX/30]===0 && array[(pointGY/30)][pointGX/30]===0)
{clearRStateS3()
plusY(30)
fillRStateS3()
}
else { 
      
pAX = 91
pAY = 1

pBX = 121
pBY = 1

pCX = 151
pCY = 1

pDX = 91
pDY = 31

pEX = 121
pEY = 31

pFX = 151
pFY = 31

pGX = 91
pGY = 61

pHX = 121
pHY = 61

pIX = 151
pIY = 61

counter = 1
pointAX = 90
 pointAY =0
 pointBX = 120
 pointBY = 0

 pointCX = 150
 pointCY = 0

 pointDX = 90
 pointDY = 30

 pointEX = 120
 pointEY = 30

 pointFX = 150
 pointFY = 30

 pointGX = 90
 pointGY = 60

 pointHX = 120
 pointHY = 60

 pointIX = 150
 pointIY = 60

rotationState = 0
clearInterval(id3)
lineChecker ()
random = random2
random2 = tetrimino[Math.floor(Math.random() * tetrimino.length)];
randomizerTetrimino ()
nextTetrimino()
if (random === "o")
{id = setInterval(o,1000)}
else if (random === "t")
{id2 = setInterval(t,1000)}
else if (random === "s")
{id3 = setInterval (s,1000)} 
else if (random === "z")
{id4 = setInterval(z,1000)} 
else if (random === "l")
{id5 = setInterval (l,1000)} 
else if (random === "j")
{id6 = setInterval (j,1000)}
else if (random === "i")
{id7 = setInterval (i,1000)} 

}

}

function z () {
//Rotation state of 0
if (pointHY <800 && rotationState === 0 && array[(pointDY/30)][pointDX/30]===0 && array[(pointHY/30)][pointHX/30]===0 &&array[(pointIY/30)][pointIX/30]===0)
{clearRStateZ0()
plusY(30)
fillRStateZ0()
}
//Rotation state of 1
else if (pointHY <800 && rotationState === 1 && array[(pointHY/30)+1][pointHX/30]===0 && array[(pointIY/30)][pointIX/30]===0)
{clearRStateZ1()
plusY(30)
fillRStateZ1()
}
//Rotation state of 2
else if (pointHY <800 && rotationState === 2 && array[(pointHY/30)+1][pointHX/30]===0 && array[(pointGY/30)][pointGX/30]===0 &&array[(pointIY/30)+1][pointIX/30]===0)

{clearRStateZ2()
plusY(30)
fillRStateZ2()
}
//Rotation state of 3
else if (pointHY <800 && rotationState === 3 && array[(pointHY/30)][pointHX/30]===0 && array[(pointGY/30)+1][pointGX/30]===0)
{clearRStateZ3()
plusY(30)
fillRStateZ3()
}
else { 
      
pAX = 91
pAY = 1

pBX = 121
pBY = 1

pCX = 151
pCY = 1

pDX = 91
pDY = 31

pEX = 121
pEY = 31

pFX = 151
pFY = 31

pGX = 91
pGY = 61

pHX = 121
pHY = 61

pIX = 151
pIY = 61

counter = 1
pointAX = 90
 pointAY =0
 pointBX = 120
 pointBY = 0

 pointCX = 150
 pointCY = 0

 pointDX = 90
 pointDY = 30

 pointEX = 120
 pointEY = 30

 pointFX = 150
 pointFY = 30

 pointGX = 90
 pointGY = 60

 pointHX = 120
 pointHY = 60

 pointIX = 150
 pointIY = 60

rotationState = 0
clearInterval(id4)
lineChecker ()
random = random2
random2 = tetrimino[Math.floor(Math.random() * tetrimino.length)];
randomizerTetrimino ()
nextTetrimino()
if (random === "o")
{id = setInterval(o,1000)}
else if (random === "t")
{id2 = setInterval(t,1000)}
else if (random === "s")
{id3 = setInterval (s,1000)} 
else if (random === "z")
{id4 = setInterval(z,1000)} 
else if (random === "l")
{id5 = setInterval (l,1000)} 
else if (random === "j")
{id6 = setInterval (j,1000)} 
else if (random === "i")
{id7 = setInterval (i,1000)} 
}



       
}


function l () {
//Rotation state of 0
if (pointHY <800 && rotationState === 0 && array[(pointGY/30)][pointGX/30]===0 && array[(pointHY/30)][pointHX/30]===0 &&array[(pointIY/30)][pointIX/30]===0)
{clearRStateL0()
plusY(30)
fillRStateL0()
}
//Rotation state of 1
else if (pointHY <800 && rotationState === 1 && array[(pointHY/30)+1][pointHX/30]===0 && array[(pointIY/30)+1][pointIX/30]===0)
{clearRStateL1()
plusY(30)
fillRStateL1()
}
//Rotation state of 2
else if (pointHY <800 && rotationState === 2 && array[(pointHY/30)][pointHX/30]===0 && array[(pointGY/30)+1][pointGX/30]===0 && array[(pointIY/30)][pointIX/30]===0)
{clearRStateL2()
plusY(30)
fillRStateL2()
}
//Rotation state of 3
else if (pointHY <800 && rotationState === 3 && array[(pointHY/30)+1][pointHX/30]===0 && array[(pointDY/30)][pointDX/30]===0 )
{clearRStateL3()
plusY(30)
fillRStateL3()
}
else { 
      
pAX = 91
pAY = 1

pBX = 121
pBY = 1

pCX = 151
pCY = 1

pDX = 91
pDY = 31

pEX = 121
pEY = 31

pFX = 151
pFY = 31

pGX = 91
pGY = 61

pHX = 121
pHY = 61

pIX = 151
pIY = 61

counter = 1
pointAX = 90
 pointAY =0
 pointBX = 120
 pointBY = 0

 pointCX = 150
 pointCY = 0

 pointDX = 90
 pointDY = 30

 pointEX = 120
 pointEY = 30

 pointFX = 150
 pointFY = 30

 pointGX = 90
 pointGY = 60

 pointHX = 120
 pointHY = 60

 pointIX = 150
 pointIY = 60

rotationState = 0
clearInterval(id5)
lineChecker()
random = random2
random2 = tetrimino[Math.floor(Math.random() * tetrimino.length)];
randomizerTetrimino ()
nextTetrimino()
if (random === "o")
{id = setInterval(o,1000)}
else if (random === "t")
{id2 = setInterval(t,1000)}
else if (random === "s")
{id3 = setInterval (s,1000)} 
else if (random === "z")
{id4 = setInterval(z,1000)}
else if (random === "l")
{id5 = setInterval (l,1000)}
else if (random === "j")
{id6 = setInterval (j,1000)} 
else if (random === "i")
{id7 = setInterval (i,1000)}  
}
}


function j () {
//Rotation state of 0
if (pointHY <800 && rotationState === 0 && array[(pointGY/30)][pointGX/30]===0 && array[(pointHY/30)][pointHX/30]===0 &&array[(pointIY/30)][pointIX/30]===0)
{clearRStateJ0()
plusY(30)
fillRStateJ0()
}
//Rotation state of 1
else if (pointHY <800 && rotationState === 1 && array[(pointHY/30)+1][pointHX/30]===0 && array[(pointFY/30)][pointFX/30]===0)
{clearRStateJ1()
plusY(30)
fillRStateJ1()
}
//Rotation state of 2
else if (pointHY <800 && rotationState === 2 && array[(pointHY/30)][pointHX/30]===0 && array[(pointGY/30)][pointGX/30]===0 && array[(pointIY/30)+1][pointIX/30]===0)
{
clearRStateJ2()
plusY(30)
fillRStateJ2()
}
//Rotation state of 3
else if (pointHY <800 && rotationState === 3 && array[(pointHY/30)+1][pointHX/30]===0 && array[(pointGY/30)+1][pointGX/30]===0 )
{clearRStateJ3()
plusY(30)
fillRStateJ3()
}
else { 
      
pAX = 91
pAY = 1

pBX = 121
pBY = 1

pCX = 151
pCY = 1

pDX = 91
pDY = 31

pEX = 121
pEY = 31

pFX = 151
pFY = 31

pGX = 91
pGY = 61

pHX = 121
pHY = 61

pIX = 151
pIY = 61

counter = 1
pointAX = 90
 pointAY =0
 pointBX = 120
 pointBY = 0

 pointCX = 150
 pointCY = 0

 pointDX = 90
 pointDY = 30

 pointEX = 120
 pointEY = 30

 pointFX = 150
 pointFY = 30

 pointGX = 90
 pointGY = 60

 pointHX = 120
 pointHY = 60

 pointIX = 150
 pointIY = 60

rotationState = 0
clearInterval(id6)
lineChecker()
random = random2
random2 = tetrimino[Math.floor(Math.random() * tetrimino.length)];
randomizerTetrimino ()
nextTetrimino()

if (random === "o")
{id = setInterval(o,1000)}
else if (random === "t")
{id2 = setInterval(t,1000)}
else if (random === "s")
{id3 = setInterval (s,1000)} 
else if (random === "z")
{id4 = setInterval(z,1000)}
else if (random === "l")
{id5 = setInterval (l,1000)}
else if (random === "j")
{id6 = setInterval (j,1000)} 
else if (random === "i")
{id7 = setInterval (i,1000)}  
}
}


function i () { if (pontNY <630 && rotationState === 0 && array[(pontIY/30)][pontIX/30]===0 && array[(pontJY/30)][pontJX/30]===0 && array[(pontKY/30)][pontKX/30]===0  && array[(pontLY/30)][pontLX/30]===0)
//Rotation state of 0
{
clearRStateI0 ()
pY (30)
fillRStateI0()
}
//Rotation state of 1
else if (pontNY <660 && rotationState === 1 && array[(pontOY/30)+1][pontOX/30]===0 )
{
clearRStateI1 ()
pY (30)
fillRStateI1()
}
else if (pontNY <630 && rotationState === 2 && array[(pontMY/30)][pontMX/30]===0 && array[(pontNY/30)][pontNX/30]===0 && array[(pontOY/30)][pontOX/30]===0  && array[(pontPY/30)][pontPX/30]===0)
//Rotation state of 2
{
clearRStateI2 ()
pY (30)
fillRStateI2()
}
else if (pontNY <630 && rotationState === 3 && array[(pontNY/30)+1][pontNX/30]===0 )
//Rotation state of 3
{
clearRStateI3 ()
pY (30)
fillRStateI3()
}
else {

clearInterval(id7)
lineChecker()
random = random2
random2 = tetrimino[Math.floor(Math.random() * tetrimino.length)];
randomizerTetrimino ()
nextTetrimino()
if (random === "o")
{id = setInterval(o,1000)}
else if (random === "t")
{id2 = setInterval(t,1000)}
else if (random === "s")
{id3 = setInterval (s,1000)} 
else if (random === "z")
{id4 = setInterval(z,1000)}
else if (random === "l")
{id5 = setInterval (l,1000)}
else if (random === "j")
{id6 = setInterval (j,1000)} 
else if (random === "i")
{id7 = setInterval (i,1000)}  
pontAX = 90
pontAY = 0

pontBX = 120
pontBY = 0

pontCX = 150
pontCY = 0

pontDX = 180
pontDY = 0

pontEX = 90
pontEY = 30

pontFX = 120
pontFY = 30

pontGX = 150
pontGY = 30

pontHX = 180
pontHY = 30

pontIX = 90
pontIY = 60

pontJX = 120
pontJY = 60

pontKX = 150
pontKY = 60

pontLX = 180
pontLY = 60

pontMX = 90
pontMY = 90

pontNX = 120
pontNY = 90

pontOX = 150
pontOY = 90

pontPX = 180
pontPY = 90


iAX = 91
iAY = 1

iBX = 121
iBY = 1

iCX = 151
iCY = 1

iDX = 181
iDY = 1

iEX = 91
iEY = 31

iFX = 121
iFY = 31

iGX = 151
iGY = 31

iHX = 181
iHY = 31

iIX = 91
iIY = 61

iJX = 121
iJY = 61

iKX = 151
iKY = 61

iLX = 181
iLY = 61

iMX = 91
iMY = 91

iNX = 121
iNY = 91

iOX = 151
iOY = 91

iPX = 181
iPY = 91
mY(30)
rotationState =0
}
}


function o ()
//Rotation state of 0 
{
       if (rotationState === 0 &&  pointHY <600  && array[(pointHY/30)][pointHX/30]===0 &&array[(pointIY/30)][pointIX/30]===0 ) 
{

clearRStateO0 ()
plusY(30)
fillRStateO0()


}

else { 
      
pAX = 91
pAY = 1

pBX = 121
pBY = 1

pCX = 151
pCY = 1

pDX = 91
pDY = 31

pEX = 121
pEY = 31

pFX = 151
pFY = 31

pGX = 91
pGY = 61

pHX = 121
pHY = 61

pIX = 151
pIY = 61

pointAX = 90
 pointAY =0
 pointBX = 120
 pointBY = 0

 pointCX = 150
 pointCY = 0

 pointDX = 90
 pointDY = 30

 pointEX = 120
 pointEY = 30

 pointFX = 150
 pointFY = 30

 pointGX = 90
 pointGY = 60

 pointHX = 120
 pointHY = 60

 pointIX = 150
 pointIY = 60

rotationState = 0
clearInterval(id)
lineChecker()
random = random2
random2 = tetrimino[Math.floor(Math.random() * tetrimino.length)];
randomizerTetrimino ()
nextTetrimino()
if (random === "o")
{id = setInterval(o,1000)}
else if (random === "t")
{id2 = setInterval(t,1000)}
else if (random === "s")
{id3 = setInterval (s,1000)} 
else if (random === "z")
{id4 = setInterval (z,1000)}
else if (random === "l")
{id5 = setInterval (l,1000)} 
else if (random === "j")
{id6 = setInterval (j,1000)}
else if (random === "i")
{id7 = setInterval (i,1000)}  
}
}
