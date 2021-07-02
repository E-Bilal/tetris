

//let canvas = document.createElement("canvas")
let canvas = document.getElementById("canvas")
//canvas.getContext("2d")

canvas.width = 500
canvas.height = 1000
//document.body.insertBefore(canvas, document.body.childNodes[0])
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
/*ctx.strokeStyle = "#a6a6a6";
ctx.lineWidth  = 1
ctx.strokeRect (j,i,50,50)*/

j +=50}
else if (array[i/50][j/50] === 5)
{ctx.fillStyle = "#ff0000"
ctx.fillRect(j,i,50, 50);
j +=50}}}

const tetrimino = ["t"];

let random = tetrimino[Math.floor(Math.random() * tetrimino.length)];

/*const tetrimino = ["square", "t", "s", "z", "I", "L", "j"];

const random = tetrimino[Math.floor(Math.random() * tetrimino.length)];
console.log(random)*/
function randomizerTetrimino () {


if (random === "s")

{
//S tetrimino
ctx.fillStyle = "#00ff80"
ctx.fillRect (200,0,50,50)
array[0][4] = 2
ctx.fillRect (250,0,50,50)
array[0][5] = 2
ctx.fillRect (200,50,50,50)
array[1][4] = 2
ctx.fillRect (150,50,50,50)
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
/*ctx.strokeStyle = "#000000";
ctx.lineWidth  = 2
ctx.strokeRect(200, 0, 50, 50);
ctx.strokeRect (200,50,50,50)
ctx.strokeRect (150,50,50,50)
ctx.strokeRect (250,50,50,50)*/
}
}
randomizerTetrimino ()
//}
/*ctx.strokeStyle = "#000000";
ctx.lineWidth  = 2
ctx.strokeRect(200, 0, 50, 50);
ctx.strokeRect (200,50,50,50)
ctx.strokeRect (150,50,50,50)
ctx.strokeRect (250,50,50,50)*/



function getKeyAndMove(e){				
		let key_code=e.which||e.keyCode;
		switch(key_code){
case 40:  // down arrow key
moveDownT()
break;

case 38 : // up arrow key
moveUpT()
break;	

case 39: //right arrow key
moveRightT();
break;

case 37: //left arrow key
moveLeftT()
break;

case 90: //Z key
moveZT();
break;}

}





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

function clearRStateS0 () {
ctx.clearRect(pointBX,pointBY,50,50)
array[pointBY/50][pointBX/50] = 0

ctx.clearRect (pointCX,pointCY,50,50)
array[pointCY/50][pointCX/50] = 0   

ctx.clearRect (pointEX,pointEY,50,50)
array[pointEY/50][pointEX/50] = 0

ctx.clearRect (pointDX,pointDY, 50,50)
array[pointDY/50][pointDX/50] = 0
}

function fillRStateS0 () {
ctx.fillRect(pointBX,pointBY,50,50)
array[pointBY/50][pointBX/50] = 2

ctx.fillRect (pointCX,pointCY,50,50)
array[pointCY/50][pointCX/50] = 0   

ctx.fillRect (pointEX,pointEY,50,50)
array[pointEY/50][pointEX/50] = 2

ctx.fillRect (pointDX,pointDY, 50,50)
array[pointDY/50][pointDX/50] = 2
console.log("hel")
ctx.strokeStyle = "#000000"
ctx.lineWidth  = 2
ctx.strokeRect (pointBX,pointBY, 50, 50);
ctx.strokeRect (pointCX,pointCY,50,50)
ctx.strokeRect (pointEX,pointEY,50,50)
ctx.strokeRect (pointDX,pointDY,50,50)
console.log('hal')
}

function clearRStateT0 () {

ctx.clearRect(pointBX,pointBY,48,48)
array[pointBY/50][pointBX/50] = 0

ctx.clearRect (pointEX,pointEY,48,48)
array[pointEY/50][pointEX/50] = 0

ctx.clearRect (pointDX,pointDY, 48,48)
array[pointDY/50][pointDX/50] = 0

ctx.clearRect (pointFX,pointFY,48,48)
array[pointFY/50][pointFX/50] = 0

}

function fillRStateT0 () {
ctx.fillRect(pointBX,pointBY,48,48)
array[pointBY/50][pointBX/50] = 2

ctx.fillRect (pointEX,pointEY,48,48)
array[pointEY/50][pointEX/50] = 2


ctx.fillRect (pointDX,pointDY, 48,48)
array[pointDY/50][pointDX/50] = 2

ctx.fillRect (pointFX,pointFY,48,48)
array[pointFY/50][pointFX/50] = 2



}

function clearRState1 () 
{
ctx.clearRect(pointBX,pointBY,50,50)
array[pointBY/50][pointBX/50] = 0

ctx.clearRect (pointEX,pointEY,50,50)
array[pointEY/50][pointEX/50] = 0


ctx.clearRect (pointDX,pointDY, 50,50)
array[pointDY/50][pointDX/50] = 0

ctx.clearRect (pointHX,pointHY,50,50)
array[pointHY/50][pointHX/50] = 0

}

function fillRState1 () {
ctx.fillRect(pointBX,pointBY,50,50)
array[pointBY/50][pointBX/50] = 2

ctx.fillRect (pointEX,pointEY,50,50)
array[pointEY/50][pointEX/50] = 2


ctx.fillRect (pointDX,pointDY, 50,50)
array[pointDY/50][pointDX/50] = 2

ctx.fillRect (pointHX,pointHY,50,50)
array[pointHY/50][pointHX/50] = 2

}

function clearRState1 () 
{
ctx.clearRect(pointBX,pointBY,50,50)
array[pointBY/50][pointBX/50] = 0

ctx.clearRect (pointEX,pointEY,50,50)
array[pointEY/50][pointEX/50] = 0


ctx.clearRect (pointDX,pointDY, 50,50)
array[pointDY/50][pointDX/50] = 0

ctx.clearRect (pointHX,pointHY,50,50)
array[pointHY/50][pointHX/50] = 0

}

function fillRState2 () {
ctx.fillRect(pointFX,pointFY,50,50)
array[pointFY/50][pointFX/50] = 2

ctx.fillRect (pointEX,pointEY,50,50)
array[pointEY/50][pointEX/50] = 2


ctx.fillRect (pointDX,pointDY, 50,50)
array[pointDY/50][pointDX/50] = 2

ctx.fillRect (pointHX,pointHY,50,50)
array[pointHY/50][pointHX/50] = 2
}

function clearRState2 () {
ctx.clearRect(pointFX,pointFY,50,50)
array[pointFY/50][pointFX/50] = 0

ctx.clearRect (pointEX,pointEY,50,50)
array[pointEY/50][pointEX/50] = 0


ctx.clearRect (pointDX,pointDY, 50,50)
array[pointDY/50][pointDX/50] = 0

ctx.clearRect (pointHX,pointHY,50,50)
array[pointHY/50][pointHX/50] = 0
}

function fillRState3 () 
{
ctx.fillRect(pointBX,pointBY,50,50)
array[pointBY/50][pointBX/50] = 2

ctx.fillRect (pointEX,pointEY,50,50)
array[pointEY/50][pointEX/50] = 2


ctx.fillRect (pointFX,pointFY, 50,50)
array[pointFY/50][pointFX/50] = 2

ctx.fillRect (pointHX,pointHY,50,50)
array[pointHY/50][pointHX/50] = 2
}
function clearRState3 () {
ctx.clearRect(pointBX,pointBY,50,50)
array[pointBY/50][pointBX/50] = 0

ctx.clearRect (pointEX,pointEY,50,50)
array[pointEY/50][pointEX/50] = 0


ctx.clearRect (pointFX,pointFY, 50,50)
array[pointFY/50][pointFX/50] = 0

ctx.clearRect (pointHX,pointHY,50,50)
array[pointHY/50][pointHX/50] = 0

}



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
}

let clearY =0
let rotationState = 0
let counter = 1



function moveDownT() {
//Copying function tetrmino clip through other tetriminos , calling the function doesn't
t()
}

function moveLeftT () { if (rotationState === 0 && counter < array.length-1 && array[(pointAY/50)][(pointAX/50)] === 0 && array[(pointDY/50)][(pointDX/50)-1] === 0 )
//Left movement , rotationstate 0
{
clearRStateT0 ()
minusX (50)
fillRStateT0 ()
}
//Left movement , rotationstate 1

else if (rotationState === 1 && counter < array.length-1 && array[(pointAY/50)][(pointAX/50)] === 0 && array[(pointDY/50)][(pointDX/50)-1] === 0  && array[(pointGY/50)][(pointGX/50)] === 0  )

{
clearRState1 ()
minusX (50)
fillRState1 ()
}

//Left movement , rotationstate 2

else if (rotationState === 2 && counter < array.length-1 && array[(pointDY/50)][(pointDX/50)-1] === 0 && array[(pointGY/50)][(pointGX/50)] === 0  )

{
clearRState2()
minusX (50)
fillRState2()
}

//Left movement , rotationstate 3
else if (rotationState === 3 && counter < array.length-1 && array[(pointAY/50)][(pointAX/50)] === 0 && array[(pointDY/50)][(pointDX/50)] === 0 && array[(pointGY/50)][(pointGX/50)] === 0  )

{
clearRState3 ()
minusX (50)
fillRState3 ()
}
else {}}


function moveRightT () { if (rotationState === 0 &&counter < array.length-1 && array[(pointCY/50)][(pointCX/50)] === 0 && array[(pointFY/50)][(pointFX/50)+1] === 0 )
//Right movement , rotation state 0
{
clearRStateT0 ()
plusX(50)
fillRStateT0 ()
}

//Right movement , rotation state 1
else if (rotationState === 1 && array[pointCY/50][pointCX/50]=== 0 && array[pointFY/50][pointFX/50]=== 0 && array[pointIY/50][pointIX/50]=== 0 )
{
clearRState1 ()
plusX(50)
fillRState1()
}

//Right movement , rotation state 2
else if (rotationState === 2 && counter < array.length-1 && array[(pointFY/50)][(pointFX/50)+1] === 0 && array[(pointIY/50)][(pointIX/50)] === 0)
{
clearRState2 ()
plusX(50)
fillRState2 ()
}

//Right movement, rotation state 3
else if (rotationState === 3 && counter < array.length-1 && array[(pointCY/50)][(pointCX/50)] === 0 && array[(pointFY/50)][(pointFX/50)+1] === 0 && array[(pointIY/50)][(pointIX/50)] === 0)
{
clearRState3()
plusX(50)
fillRState3()
}
  else {}}


function moveUpT () {

//Rotationstate 0 to 3 
if (rotationState === 0 && array[pointHY/50][pointHX/50]=== 0)
{
clearRStateT0()
fillRState3()
rotationState =3
}

//Rotationstate 0 to 3  , WallKick 1
else if (rotationState === 0 && array[pointHY/50][pointHX/50] !== 0 &&   array[pointAY/50][pointAX/50] === 0 && array[pointGY/50][pointGX/50] === 0  )
{
clearRStateT0()
minusX(50)
fillRState3()
rotationState =3
}

//Rotationstate 0 to 3 , WallKick 3
else if (rotationState === 0 && array[pointGY/50][pointGX/50] !== 0 && array[pointHY/50][pointHX/50] !== 0 &&   array[pointAY/50][pointAX/50] === 0 && array[(pointAY/50)-1][pointAX/50] === 0 )
{
clearRStateT0()
minusX(50)
minusY(50)
fillRState3()
rotationState =3
}

//Rotationstate 0 to 3 , WallKick 4
else if (rotationState === 0 && array[pointGY/50][pointGX/50] === 0 && array[(pointGY/50)+1][pointGX/50] === 0 && array[(pointGY/50)+2][pointGX/50] === 0 && array[(pointHY/50)+1][pointHX/50] === 0 &&  array[pointAY/50][pointAX/50] !== 0 )
{
clearRStateT0()
minusX(50)
plusY(100)
fillRState3()
rotationState =3      
}

//Rotationstate 3 to 2
else if ( rotationState === 3 && array[pointDY/50][pointDX/50]=== 0 )
{
clearRState3()
fillRState2()
rotationState = 2
}

//Rotationstate 3 to 2 , WallKick1
else if (rotationState===3 && array[pointDY/50][pointDX/50] !== 0 &&  array[pointIY/50][pointIX/50] === 0 && array[pointFY/50][(pointFX/50)+1] === 0)
{
clearRState3()
plusX(50)
fillRState2()
rotationState = 2
}

//Rotationstate 3 to 2 , WallKick2
else if ( rotationState===3 && array[pointFY/50][(pointFX/50)+1] !== 0 && array[pointDY/50][pointDX/50] !== 0 && array[pointIY/50][pointIX/50] === 0 && array[pointIY/50][(pointIX/50)+1] === 0 && array[(pointIY/50)+1][pointIX/50] === 0 )
{
clearRState3()
plusX(50)
plusY(50)
fillRState2()
rotationState = 2
}

//Rotationstate 3 to 2 , WallKick3
else if (rotationState===3 && array[(pointAY/50)-1][pointAX/50] === 0 && array[(pointBY/50)-1][pointBX/50] === 0 && array[(pointCY/50)-1][pointCX/50] === 0 && array[pointFY/50][(pointFX/50)+1] !== 0 && array[pointDY/50][pointDX/50] !== 0 && (array[pointIY/50][pointIX/50]  !== 0 || array[pointIY/50][(pointIX/50)+1] !== 0 || array[(pointIY/50)+1][pointIX/50] !== 0 ))
{
clearRState3()
minusY(100)
fillRState2()
rotationState = 2
}


//Rotationstate 3 to 2 , WallKick4
else if (rotationState===3 && array[(pointAY/50)-1][pointAX/50] !== 0 && array[(pointBY/50)-1][pointBX/50] === 0 && array[(pointCY/50)-1][pointCX/50] === 0 && 
array[pointCY/50][pointCX/50] === 0 && array[(pointCY/50)-1][(pointCX/50)+1] === 0 && (array[pointFY/50][(pointFX/50)+1] !== 0 || array[pointDY/50][pointDX/50] !== 0) && (array[pointIY/50][pointIX/50]  !== 0 || array[pointIY/50][(pointIX/50)+1] !== 0 || array[(pointIY/50)+1][pointIX/50] !== 0 ))
{console.log("hello")
clearRState3()
minusY(100)
plusX(50)
fillRState2()
rotationState = 2
}
//Rotaionstate 2 to 1
else if (rotationState === 2 && array[pointBY/50][pointBX/50]=== 0 )
{
clearRState2()
fillRState1 ()
rotationState = 1
} 

//Rotaionstate 2 to 1 , Wallkick 1
else if (rotationState === 2 && array[pointBY/50][pointBX/50] !== 0 && array[pointCY/50][pointCX/50] === 0 && array[pointIY/50][pointIX/50] === 0)
{
clearRState2()
plusX(50)
fillRState1()
rotationState = 1
}

//Rotaionstate 2 to 1 , Wallkick 3
else if (rotationState === 2 && array[(pointHY/50)+1][pointHX/50] === 0 && array[(pointHY/50)+2][pointHX/50] === 0 && array[(pointGY/50)+1][pointGX/50] === 0 && array[pointBY/50][pointBX/50] !== 0 && (array[pointCY/50][pointCX/50] !== 0 || array[pointIY/50][pointIX/50] !== 0))
{
clearRState2()
plusY(100)
fillRState1()
rotationState = 1
}

//Rotaionstate 2 to 1 , Wallkick 4

else if (rotationState === 2 && ( array[(pointHY/50)+2][pointHX/50] !== 0 || array[(pointGY/50)+1][pointGX/50] !== 0) && array[pointBY/50][pointBX/50] !== 0 && array[pointCY/50][pointCX/50] !== 0 && array[pointIY/50][pointIX/50] === 0 && array[(pointHY/50)+1][pointHX/50] === 0 && array[(pointIY/50)+1][pointIX/50] === 0  && array[(pointIY/50)+2][pointIX/50] === 0)
{
clearRState2()
plusY(100)
plusX(50)
fillRState1()
rotationState = 1
}
//Rotationstate 1 to 0
else if (rotationState === 1 && array[pointFY/50][pointFX/50]=== 0)
{
clearRState1()
fillRStateT0()
rotationState = 0
}

//Rotationstate 1 to 0 , Wallkick 1
else if (rotationState === 1 && array[pointFY/50][pointFX/50] !== 0 && array[pointDY/50][(pointDX/50)-1] === 0 && array[pointAY/50][pointAX/50] === 0)
{
       
       clearRState1()
       minusX(50)
       fillRStateT0()
       rotationState = 0
}
//Rotationstate 1 to 0 , Wallkick 2
else if (rotationState === 1 && array[(pointGY/50)][(pointGX/50)-1] === 0 && array[(pointGY/50)][(pointGX/50)] === 0 && array[pointFY/50][pointFX/50] !== 0 && array[pointDY/50][(pointDX/50)-1] !== 0 )
{ clearRState1()
minusX(50)
plusY(50)
fillRStateT0()
rotationState = 0
}

//Rotationstate 1 to 0 , Wallkick 3
else if (rotationState === 1 && (array[(pointGY/50)][(pointGX/50)-1] !== 0 || array[(pointGY/50)][(pointGX/50)] !== 0 )&& array[pointFY/50][pointFX/50] !== 0 && array[pointDY/50][(pointDX/50)-1] !== 0 && array[(pointAY/50)-1][pointAX/50] === 0 && array[(pointBY/50)-1][pointBX/50] === 0 && array[(pointCY/50)-1][pointCX/50] === 0 &&array[(pointBY/50)-2][pointBX/50] === 0)
{
clearRState1()
minusY(100)
fillRStateT0()
rotationState = 0     
}

//Rotationstate 1 to 0 , Wallkick 4
else if (rotationState === 1 && (array[(pointGY/50)][(pointGX/50)-1] !== 0 || array[(pointGY/50)][(pointGX/50)] !== 0 )&& array[pointFY/50][pointFX/50] !== 0 && array[pointDY/50][(pointDX/50)-1] !== 0 && (array[(pointCY/50)-1][pointCX/50] !== 0 || array[(pointBY/50)-2][pointBX/50] !== 0 )&& array[(pointAY/50)-1][pointAX/50] === 0 && array[(pointAY/50)-2][pointAX/50] === 0&& array[(pointAY/50)-1][(pointAX/50)-1] === 0 &&array[(pointBY/50)-1][pointBX/50] === 0)
{
clearRState1()
minusX(50)
minusY(100)
fillRStateT0()
rotationState = 0        
}
}






function moveZT () { if (rotationState === 0 && array[pointHY/50][pointHX/50]=== 0 )
{
//Rotationstate 0 to 1    
clearRStateT0 ()
fillRState1 ()
rotationState = 1}

//Rotaionstate 0 to 1 , WallKick 1  
else if ( rotationState === 0 && array[pointHY/50][pointHX/50] !== 0 &&   array[pointCY/50][pointCX/50] === 0 && array[pointIY/50][pointIX/50] === 0  )
{
clearRStateT0 ()
plusX(50)
fillRState1 ()
rotationState = 1
}

//Rotaionstate 0 to 1 , WallKick 2 
else if (rotationState === 0 && array[pointIY/50][pointIX/50] !== 0 && array[pointHY/50][pointHX/50] !== 0 && array[pointCY/50][pointCX/50] === 0 && array[(pointCY/50)-1][pointCX/50] === 0 )
{
clearRStateT0 ()
plusX(50)
minusY(50)
fillRState1 ()
rotationState = 1
}

//Rotaionstate 0 to 1 , WallKick 4
else if (rotationState === 0 && array[pointIY/50][pointIX/50] === 0 && array[(pointIY/50)+1][pointIX/50] === 0 && array[(pointIY/50)+2][pointIX/50] === 0 && array[(pointHY/50)+1][pointHX/50] === 0 &&  array[pointCY/50][pointCX/50] !== 0 )
{
clearRStateT0 ()
plusY(100)
plusX(50)
fillRState1 ()
rotationState = 1
}

//Rotationstate 1 to 2
else if ( rotationState === 1 && array[pointFY/50][pointFX/50]=== 0 )
{
clearRState1()
fillRState2()
rotationState = 2
}

//Rotationstate 1 to 2 , Wallkick 1 
else if (rotationState===1 && array[pointFY/50][pointFX/50] !== 0 &&  array[pointGY/50][pointGX/50] === 0 && array[pointDY/50][(pointDX/50)-1] === 0)
{
clearRState1()
minusX(50)
fillRState2()
rotationState = 2}

//Rotationstate 1 to 2 , Wallkick 2
else if ( rotationState===1 && array[pointFY/50][pointFX/50] !== 0 && array[pointDY/50][(pointDX/50)-1] !== 0 && array[pointGY/50][pointGX/50] === 0 && array[pointGY/50][(pointGX/50)-1] === 0 && array[(pointGY/50)+1][pointGX/50] === 0 )
{
clearRState1()
minusX(50)
plusY(50)
fillRState2()
rotationState = 2
}

//Rotationstate 1 to 2 , Wallkick 3
else if (rotationState===1 && array[(pointAY/50)-1][pointAX/50] === 0 && array[(pointBY/50)-1][pointBX/50] === 0 && array[(pointCY/50)-1][pointCX/50] === 0 && array[pointFY/50][pointFX/50] !== 0 && array[pointDY/50][(pointDX/50)-1] !== 0 && (array[pointGY/50][pointGX/50] !== 0 || array[pointGY/50][(pointGX/50)-1] !== 0 || array[(pointGY/50)+1][pointGX/50] !== 0 ))
{
clearRState1()
minusY(100)
fillRState2()
rotationState = 2}

//Rotationstate 1 to 2 , Wallkick 4
else if (rotationState===1 && array[(pointAY/50)-1][pointAX/50] === 0 && array[pointAY/50][pointAX/50] === 0 && array[(pointAY/50)-1][(pointAX/50)-1] === 0 && array[(pointBY/50)-1][pointBX/50] === 0 && array[(pointCY/50)-1][pointCX/50] !== 0 && (array[pointFY/50][pointFX/50] !==0 ||  array[pointDY/50][(pointDX/50)-1] !== 0)&& (array[pointGY/50][pointGX/50] !== 0 || array[pointGY/50][(pointGX/50)-1] !== 0 || array[(pointGY/50)+1][pointGX/50] !== 0 ))
{
       
clearRState1()
minusY(100)
minusX(50)
fillRState2()
rotationState = 2
}

//Rotaionstate 2 to 3
else if (rotationState === 2 && array[pointBY/50][pointBX/50]=== 0 )
{
clearRState2()
fillRState3 ()
rotationState = 3} 

//Rotaionstate 2 to 3 , wallkick 1

else if (rotationState === 2 && array[pointBY/50][pointBX/50] !== 0 && array[pointAY/50][pointAX/50] === 0 && array[pointGY/50][pointGX/50] === 0)
{
clearRState2()
minusX(50)
fillRState3()
rotationState = 3
}

//Rotaionstate 2 to 3 , wallkick 3
else if (rotationState === 2 && array[(pointHY/50)+1][pointHX/50] === 0 && array[(pointHY/50)+2][pointHX/50] === 0 && array[(pointIY/50)+1][pointIX/50] === 0 && array[pointBY/50][pointBX/50] !== 0 && (array[pointAY/50][pointAX/50] !== 0 || array[pointGY/50][pointGX/50] !== 0))
{
clearRState2()
plusY(100)
fillRState3()
rotationState = 3
}

//Rotaionstate 2 to 3 , wallkick 4
else if (rotationState === 2 && ( array[(pointHY/50)+2][pointHX/50] !== 0 || array[(pointIY/50)+1][pointIX/50] !== 0) && array[pointBY/50][pointBX/50] !== 0 && array[pointAY/50][pointAX/50] !== 0 && array[pointGY/50][pointGX/50] === 0 && array[(pointHY/50)+1][pointHX/50] === 0 && array[(pointGY/50)+1][pointGX/50] === 0  && array[(pointGY/50)+2][pointGX/50] === 0)
{
clearRState2()
plusY(100)
minusX(50)
fillRState3()
rotationState = 3}

//Rotaionstate 3 to 0

else if (rotationState === 3 && array[pointDY/50][pointDX/50]=== 0)
{
       clearRState3()
       fillRStateT0()
       rotationState = 0
}
//Rotaionstate 3 to 0 , WallKick 1

else if (rotationState === 3 && array[pointDY/50][pointDX/50] !== 0 && array[pointFY/50][(pointFX/50)+1] === 0 && array[pointCY/50][pointCX/50] === 0)
{
       
       clearRState3()
       plusX(50)
       fillRStateT0()
       rotationState = 0
}
//Rotaionstate 3 to 0 , WallKick 2

else if (rotationState === 3 && array[(pointIY/50)][(pointIX/50)+1] === 0 && array[(pointIY/50)][(pointIX/50)] === 0 && array[pointDY/50][pointDX/50] !== 0 && array[pointFY/50][(pointFX/50)+1] !== 0 )
{
       
       clearRState3()
       plusX(50)
       plusY(50)
       fillRStateT0()
       rotationState = 0
}

//Rotaionstate 3 to 0 , WallKick 3

else if (rotationState === 3 && (array[(pointIY/50)][(pointIX/50)+1] !== 0 || array[(pointIY/50)][(pointIX/50)] !== 0 )&& array[pointDY/50][pointDX/50] !== 0 && array[pointFY/50][(pointFX/50)+1] !== 0 && array[(pointAY/50)-1][pointAX/50] === 0 && array[(pointBY/50)-1][pointBX/50] === 0 && array[(pointCY/50)-1][pointCX/50] === 0 &&array[(pointBY/50)-2][pointBX/50] === 0)
{
       
       clearRState3()
       minusY(100)
       fillRStateT0()
       rotationState = 0
}
//Rotaionstate 3 to 0 , WallKick 4

else if (rotationState === 3 && (array[(pointIY/50)][(pointIX/50)+1] !== 0 || array[(pointIY/50)][(pointIX/50)] !== 0 )&& array[pointDY/50][pointDX/50] !== 0 && array[pointFY/50][(pointFX/50)+1] !== 0 && (array[(pointAY/50)-1][pointAX/50] !== 0 || array[(pointBY/50)-2][pointBX/50] !== 0 )&& array[(pointCY/50)-1][pointCX/50] === 0 && array[(pointCY/50)-2][pointCX/50] === 0&& array[(pointCY/50)-1][(pointCX/50)+1] === 0 &&array[(pointBY/50)-1][pointBX/50] === 0)
{
       
       clearRState3()
       minusY(100)
       plusX(50)
       fillRStateT0()
       rotationState = 0
}

}

console.log(random)
//id = setInterval(square, 100);
/*if (random === "t") {
id2 = setInterval(t,1000)}
else if (random === "s")
{
id3 = setInterval (s,1000)
}*/




function s () {
if (pointHY <1000 && array[(pointGY/50)][pointGX/50]===0 && array[(pointHY/50)][pointHX/50]===0 &&array[(pointIY/50)][pointIX/50]===0 && rotationState === 0)
{}
}

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

clearRState1 ()
plusY(50)
fillRState1 ()
counter++
}

//Rotationstate of 2
else if (/*counter < array.length-2*/ pointHY <950 && array[(pointGY/50)][pointGX/50]===0 &&array[(pointIY/50)][pointIX/50]===0 && array[(pointHY/50)+1][pointHX/50]===0 && rotationState === 2 )

{
clearRState2 ()
plusY(50)
fillRState2 ()
counter++
}

//Rotationstate of 3
else if (/*counter < array.length-2*/ rotationState === 3 && pointHY <950  && array[(pointIY/50)][pointIX/50]===0 && array[(pointHY/50)+1][pointHX/50]===0 )

{
clearRState3 ()
plusY(50)
fillRState3 ()
counter++
}

else { 
      


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


