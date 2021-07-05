
let canvas = document.getElementById("canvas")
//canvas.getContext("2d")
canvas.width = 500
canvas.height = 1000
let ctx = canvas.getContext("2d")
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
]


for (let i =0 ; i <1000; i+=50)
{for (let j=0 ; j< 500; j)

{if (array[i/50][j/50] === 0){
ctx.fillStyle = "#f1f1f1"
ctx.fillRect(j,i,50, 50);
ctx.strokeStyle = "#000000";
ctx.lineWidth  = 2
ctx.strokeRect (j,i,50,50)

j +=50}
else if (array[i/50][j/50] === 5)
{ctx.fillStyle = "#ff0000"
ctx.fillRect(j,i,50, 50);
j +=50}}}

const tetrimino = ["l"];

let random = tetrimino[Math.floor(Math.random() * tetrimino.length)];

function randomizerTetrimino () {


if (random === "s")

{
//S tetrimino
ctx.fillStyle = "#00ff80"
ctx.fillRect (201,1,48,48)
array[0][4] = 2
ctx.fillRect (251,1,48,48)
array[0][5] = 2
ctx.fillRect (201,51,48,48)
array[1][4] = 2
ctx.fillRect (151,51,48,48)
array[1][3] = 2
}

else if (random === "t")

{
    //T tetrimino   
ctx.fillStyle = "#6a0dad"
ctx.fillRect (201,1,48,48)
array[0][4] = 2
ctx.fillRect (201,51,48,48)
array[1][4] = 2
ctx.fillRect (151,51,48,48)
array[1][3] = 2
ctx.fillRect (251,51,48,48)
array[1][5] = 2
}
else if (random === "z")
{
//Z tetrimino
ctx.fillStyle = "#ff0000"
ctx.fillRect (151,1,48,48)
array[0][3] = 2
ctx.fillRect (201,1,48,48)
array[0][4] = 2
ctx.fillRect (201,51,48,48)
array[1][4] = 2
ctx.fillRect (251,51,48,48)
array[1][5] = 2
}
else if (random === "l")
{
//L tetrimino
ctx.fillStyle = "#FFA500"
ctx.fillRect (251,1,48,48)
array[0][5] = 2
ctx.fillRect (151,51,48,48)
array[1][3] = 2
ctx.fillRect (201,51,48,48)
array[1][4] = 2
ctx.fillRect (251,51,48,48)
array[1][5] = 2
}
}
randomizerTetrimino ()

function downChecker () {
       if(random === "t"){moveDownT()}
       else if (random === "s") {moveDownS()}
       else if (random === "z") {moveDownZ()}
         else if (random === "l") {moveDownL()}

}

function leftChecker () {
       if(random === "t"){moveLeftT()}
       else if (random === "s") {moveLeftS()}
       else if (random === "z") {moveLeftZ()}
       else if (random === "l") {moveLeftL()}


}

function rightChecker () {
       if(random === "t"){moveRightT()}
       else if (random === "s") {moveRightS()}
       else if (random === "z") {moveRightZ()}
       else if (random === "l") {moveRightL()}


}

function upChecker () {
       if(random === "t"){moveUpT()}
       else if (random === "s") {moveUpS()}
       else if (random === "z") {moveUpZ()}
       else if (random === "l") {moveUpL()}


}

function zChecker () {
  if(random === "t"){moveZT()}
       else if (random === "s") {moveZS()}
       else if (random === "z") {moveZZ()}
       else if (random === "l") {moveZL()}



}
function getKeyAndMove(e) {				
		let key_code=e.which||e.keyCode;
		switch(key_code){
case 40:  // down arrow key
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

case 90: //Z key
zChecker();
break;}
}

let pAX = 151
let pAY = 1

let pBX = 201
let pBY = 1

let pCX = 251
let pCY = 1

let pDX = 151
let pDY = 51

let pEX = 201
let pEY = 51

let pFX = 251
let pFY = 51

let pGX = 151
let pGY = 101

let pHX = 201
let pHY = 101

let pIX = 251
let pIY = 101




let pointAX = 150
let pointAY = 0

let pointBX = 200
let pointBY = 0

let pointCX = 250
let pointCY = 0

let pointDX = 150
let pointDY = 50

let pointEX = 200
let pointEY = 50

let pointFX = 250
let pointFY = 50

let pointGX = 150
let pointGY = 100

let pointHX = 200
let pointHY = 100

let pointIX = 250
let pointIY = 100


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





//id = setInterval(square, 100);
if (random === "t") {
id2 = setInterval(t,1000)}
else if (random === "s")
{id3 = setInterval (s,1000)}
else if (random === "z")
{id4 = setInterval (z,1000)}
else if (random === "l")
{id5 = setInterval (l,1000)}

function t () {
       
//Rotation state of 0       
if (/*counter < array.length-1*/ pointHY <1000 && array[(pointGY/50)][pointGX/50]===0 && array[(pointHY/50)][pointHX/50]===0 &&array[(pointIY/50)][pointIX/50]===0 && rotationState === 0) {


clearRStateT0 ()
plusY(50)
fillRStateT0()
counter++
}
//Rotation state of 1
else if (/*counter < array.length-2*/ pointHY <950 && array[(pointGY/50)][pointGX/50]===0 &&/*array[(pointIY/50)][pointIX/50]===0 && */ array[(pointHY/50)+1][pointHX/50]===0 && rotationState === 1 )

{

clearRStateT1 ()
plusY(50)
fillRStateT1 ()
counter++
}

//Rotationstate of 2
else if (/*counter < array.length-2*/ pointHY <950 && array[(pointGY/50)][pointGX/50]===0 &&array[(pointIY/50)][pointIX/50]===0 && array[(pointHY/50)+1][pointHX/50]===0 && rotationState === 2 )

{
clearRStateT2 ()
plusY(50)
fillRStateT2 ()
counter++
test ()

}

//Rotationstate of 3
else if (/*counter < array.length-2*/ rotationState === 3 && pointHY <950  && array[(pointIY/50)][pointIX/50]===0 && array[(pointHY/50)+1][pointHX/50]===0 )

{
clearRStateT3 ()
plusY(50)
fillRStateT3 ()
counter++
}

else { 
      
pAX = 151
pAY = 1

pBX = 201
pBY = 1

pCX = 251
pCY = 1

pDX = 151
pDY = 51

pEX = 201
pEY = 51

pFX = 251
pFY = 51

pGX = 151
pGY = 101

pHX = 201
pHY = 101

pIX = 251
pIY = 101

counter = 1
pointAX = 150
 pointAY =0
 pointBX = 200
 pointBY = 0

 pointCX = 250
 pointCY = 0

 pointDX = 150
 pointDY = 50

 pointEX = 200
 pointEY = 50

 pointFX = 250
 pointFY = 50

 pointGX = 150
 pointGY = 100

 pointHX = 200
 pointHY = 100

 pointIX = 250
 pointIY = 100

rotationState = 0
clearInterval(id2)

random = tetrimino[Math.floor(Math.random() * tetrimino.length)];
randomizerTetrimino ()
if (random === "t")
{id2 = setInterval(t,1000)}
else if (random === "s")
{id3 = setInterval (s,1000)} 
}


}


function s () {
//Rotation state of 0
if (pointHY <1000 && rotationState === 0 && array[(pointGY/50)][pointGX/50]===0 && array[(pointHY/50)][pointHX/50]===0 &&array[(pointFY/50)][pointFX/50]===0)
{clearRStateS0()
plusY(50)
fillRStateS0()
}
//Rotation state of 1
else if (pointHY <1000 && rotationState === 1 && array[(pointHY/50)][pointHX/50]===0 &&array[(pointIY/50)+1][pointIX/50]===0)
{clearRStateS1()
plusY(50)
fillRStateS1()
}
//Rotation state of 2
else if (pointHY <1000 && rotationState === 2 && array[(pointHY/50)+1][pointHX/50]===0 && array[(pointGY/50)+1][pointGX/50]===0 &&array[(pointIY/50)][pointIX/50]===0)
{clearRStateS2()
plusY(50)
fillRStateS2()
}
//Rotation state of 3
else if (pointHY <1000 && rotationState === 3 && array[(pointHY/50)+1][pointHX/50]===0 && array[(pointGY/50)][pointGX/50]===0)
{clearRStateS3()
plusY(50)
fillRStateS3()
}
else { 
      
pAX = 151
pAY = 1

pBX = 201
pBY = 1

pCX = 251
pCY = 1

pDX = 151
pDY = 51

pEX = 201
pEY = 51

pFX = 251
pFY = 51

pGX = 151
pGY = 101

pHX = 201
pHY = 101

pIX = 251
pIY = 101

counter = 1
pointAX = 150
 pointAY =0
 pointBX = 200
 pointBY = 0

 pointCX = 250
 pointCY = 0

 pointDX = 150
 pointDY = 50

 pointEX = 200
 pointEY = 50

 pointFX = 250
 pointFY = 50

 pointGX = 150
 pointGY = 100

 pointHX = 200
 pointHY = 100

 pointIX = 250
 pointIY = 100

rotationState = 0
clearInterval(id3)

random = tetrimino[Math.floor(Math.random() * tetrimino.length)];
randomizerTetrimino ()
if (random === "t")
{id2 = setInterval(t,1000)}
else if (random === "s")
{id3 = setInterval (s,1000)} 
else if (random === "z")
{id4 = setInterval(z,1000)} 
}

}

function z () {
//Rotation state of 0
if (pointHY <1000 && rotationState === 0 && array[(pointDY/50)][pointDX/50]===0 && array[(pointHY/50)][pointHX/50]===0 &&array[(pointIY/50)][pointIX/50]===0)
{clearRStateZ0()
plusY(50)
fillRStateZ0()
}
//Rotation state of 1
else if (pointHY <1000 && rotationState === 1 && array[(pointHY/50)+1][pointHX/50]===0 && array[(pointIY/50)][pointIX/50]===0)
{clearRStateZ1()
plusY(50)
fillRStateZ1()
}
//Rotation state of 2
else if (pointHY <1000 && rotationState === 2 && array[(pointHY/50)+1][pointHX/50]===0 && array[(pointGY/50)][pointGX/50]===0 &&array[(pointIY/50)+1][pointIX/50]===0)
{clearRStateZ2()
plusY(50)
fillRStateZ2()
}
//Rotation state of 3
else if (pointHY <1000 && rotationState === 3 && array[(pointHY/50)][pointHX/50]===0 && array[(pointGY/50)+1][pointGX/50]===0)
{clearRStateZ3()
plusY(50)
fillRStateZ3()
}
else { 
      
pAX = 151
pAY = 1

pBX = 201
pBY = 1

pCX = 251
pCY = 1

pDX = 151
pDY = 51

pEX = 201
pEY = 51

pFX = 251
pFY = 51

pGX = 151
pGY = 101

pHX = 201
pHY = 101

pIX = 251
pIY = 101

counter = 1
pointAX = 150
 pointAY =0
 pointBX = 200
 pointBY = 0

 pointCX = 250
 pointCY = 0

 pointDX = 150
 pointDY = 50

 pointEX = 200
 pointEY = 50

 pointFX = 250
 pointFY = 50

 pointGX = 150
 pointGY = 100

 pointHX = 200
 pointHY = 100

 pointIX = 250
 pointIY = 100

rotationState = 0
clearInterval(id4)

random = tetrimino[Math.floor(Math.random() * tetrimino.length)];
randomizerTetrimino ()
if (random === "t")
{id2 = setInterval(t,1000)}
else if (random === "s")
{id3 = setInterval (s,1000)} 
else if (random === "z")
{id4 = setInterval(z,1000)} 
}



       
}


function l () {//Rotation state of 0
if (pointHY <1000 && rotationState === 0 && array[(pointGY/50)][pointGX/50]===0 && array[(pointHY/50)][pointHX/50]===0 &&array[(pointIY/50)][pointIX/50]===0)
{clearRStateL0()
plusY(50)
fillRStateL0()
}
//Rotation state of 1
else if (pointHY <1000 && rotationState === 1 && array[(pointHY/50)+1][pointHX/50]===0 && array[(pointIY/50)+1][pointIX/50]===0)
{clearRStateL1()
plusY(50)
fillRStateL1()
}
//Rotation state of 2
else if (pointHY <1000 && rotationState === 2 && array[(pointHY/50)][pointHX/50]===0 && array[(pointGY/50)+1][pointGX/50]===0 && array[(pointIY/50)][pointIX/50]===0)
{clearRStateL2()
plusY(50)
fillRStateL2()
}
//Rotation state of 3
else if (pointHY <1000 && rotationState === 3 && array[(pointHY/50)+1][pointHX/50]===0 && array[(pointDY/50)][pointDX/50]===0 )
{clearRStateL3()
plusY(50)
fillRStateL3()
}
else { 
      
pAX = 151
pAY = 1

pBX = 201
pBY = 1

pCX = 251
pCY = 1

pDX = 151
pDY = 51

pEX = 201
pEY = 51

pFX = 251
pFY = 51

pGX = 151
pGY = 101

pHX = 201
pHY = 101

pIX = 251
pIY = 101

counter = 1
pointAX = 150
 pointAY =0
 pointBX = 200
 pointBY = 0

 pointCX = 250
 pointCY = 0

 pointDX = 150
 pointDY = 50

 pointEX = 200
 pointEY = 50

 pointFX = 250
 pointFY = 50

 pointGX = 150
 pointGY = 100

 pointHX = 200
 pointHY = 100

 pointIX = 250
 pointIY = 100

rotationState = 0
clearInterval(id5)

random = tetrimino[Math.floor(Math.random() * tetrimino.length)];
randomizerTetrimino ()
if (random === "t")
{id2 = setInterval(t,1000)}
else if (random === "s")
{id3 = setInterval (s,1000)} 
else if (random === "z")
{id4 = setInterval(z,1000)}
else if (random === "l")
{id5 = setInterval (l,1000)} 
}



}