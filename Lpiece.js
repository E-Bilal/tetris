
function clearRStateL0 () {

ctx.clearRect(pCX,pCY,28,28)
array[pointCY/30][pointCX/30] = 0

ctx.clearRect (pEX,pEY,28,28)
array[pointEY/30][pointEX/30] = 0

ctx.clearRect (pDX,pDY, 28,28)
array[pointDY/30][pointDX/30] = 0

ctx.clearRect (pFX,pFY,28,28)
array[pointFY/30][pointFX/30] = 0

}
function fillRStateL0 () {
ctx.fillRect(pCX,pCY,28,28)
array[pointCY/30][pointCX/30] = 6

ctx.fillRect (pEX,pEY,28,28)
array[pointEY/30][pointEX/30] = 6


ctx.fillRect (pDX,pDY, 28,28)
array[pointDY/30][pointDX/30] = 6

ctx.fillRect (pFX,pFY,28,28)
array[pointFY/30][pointFX/30] = 6
}


function fillRStateL1 () {
ctx.fillRect(pBX,pBY,28,28)
array[pointBY/30][pointBX/30] = 6

ctx.fillRect (pEX,pEY,28,28)
array[pointEY/30][pointEX/30] = 6


ctx.fillRect (pIX,pIY, 28,28)
array[pointIY/30][pointIX/30] = 6

ctx.fillRect (pHX,pHY,28,28)
array[pointHY/30][pointHX/30] = 6

}

function clearRStateL1 () 
{
ctx.clearRect(pBX,pBY,28,28)
array[pointBY/30][pointBX/30] = 0

ctx.clearRect (pEX,pEY,28,28)
array[pointEY/30][pointEX/30] = 0

ctx.clearRect (pIX,pIY, 28,28)
array[pointIY/30][pointIX/30] = 0

ctx.clearRect (pHX,pHY,28,28)
array[pointHY/30][pointHX/30] = 0

}

function fillRStateL2 () 
{
ctx.fillRect (pDX,pDY,28,28)
array[pointDY/30][pointDX/30] = 6

ctx.fillRect(pFX,pFY,28,28)
array[pointFY/30][pointFX/30] = 6

ctx.fillRect (pEX,pEY,28,28)
array[pointEY/30][pointEX/30] = 6

ctx.fillRect (pGX,pGY, 28,28)
array[pointGY/30][pointGX/30] = 6
}

function clearRStateL2 () {
ctx.clearRect (pDX,pDY,28,28)
array[pointDY/30][pointDX/30] = 0

ctx.clearRect(pFX,pFY,28,28)
array[pointFY/30][pointFX/30] = 0

ctx.clearRect (pEX,pEY,28,28)
array[pointEY/30][pointEX/30] = 0

ctx.clearRect (pGX,pGY, 28,28)
array[pointGY/30][pointGX/30] = 0


}


function fillRStateL3 () 
{
ctx.fillRect(pAX,pAY,28,28)
array[pointAY/30][pointAX/30] = 6

ctx.fillRect (pBX,pBY, 28,28)
array[pointBY/30][pointBX/30] = 6

ctx.fillRect (pEX,pEY,28,28)
array[pointEY/30][pointEX/30] = 6

ctx.fillRect (pHX,pHY,28,28)
array[pointHY/30][pointHX/30] = 6
}
function clearRStateL3 () {
ctx.clearRect(pAX,pAY,28,28)
array[pointAY/30][pointAX/30] = 0

ctx.clearRect (pBX,pBY, 28,28)
array[pointBY/30][pointBX/30] = 0

ctx.clearRect (pEX,pEY,28,28)
array[pointEY/30][pointEX/30] = 0

ctx.clearRect (pHX,pHY,28,28)
array[pointHY/30][pointHX/30] = 0

}

function moveDownL() {
l()
}
function moveLeftL () { if (rotationState === 0 && counter < array.length-1 && array[(pointBY/30)][(pointBX/30)] === 0 && array[(pointDY/30)][(pointDX/30)-1] === 0 )
//Left movement , rotationstate 0
{
clearRStateL0 ()
minusX (30)
fillRStateL0 ()
}
//Left movement , rotationstate 1

else if (rotationState === 1 && counter < array.length-1 && array[(pointAY/30)][(pointAX/30)] === 0 && array[(pointDY/30)][(pointDX/30)] === 0  && array[(pointGY/30)][(pointGX/30)] === 0  )

{
clearRStateL1 ()
minusX (30)
fillRStateL1 ()
}

//Left movement , rotationstate 2

else if (rotationState === 2 && counter < array.length-1 && array[(pointDY/30)][(pointDX/30)-1] === 0 && array[(pointGY/30)][(pointGX/30)-1] === 0  )

{
clearRStateL2()
minusX (30)
fillRStateL2()
}

//Left movement , rotationstate 3
else if (rotationState === 3 && counter < array.length-1 && array[(pointAY/30)][(pointAX/30)-1] === 0 && array[(pointDY/30)][(pointDX/30)] === 0 && array[(pointGY/30)][(pointGX/30)] === 0  )

{
clearRStateL3 ()
minusX (30)
fillRStateL3 ()
}
else {}}


function moveRightL () { if (rotationState === 0 &&counter < array.length-1 && array[(pointCY/30)][(pointCX/30)+1] === 0 && array[(pointFY/30)][(pointFX/30)+1] === 0 )
//Right movement , rotation state 0
{
clearRStateL0 ()
plusX(30)
fillRStateL0 ()
}

//Right movement , rotation state 1
else if (rotationState === 1 && array[pointCY/30][pointCX/30]=== 0 && array[pointFY/30][pointFX/30]=== 0 && array[pointIY/30][(pointIX/30)+1]=== 0 )
{
clearRStateL1 ()
plusX(30)
fillRStateL1()
}

//Right movement , rotation state 2
else if (rotationState === 2 && counter < array.length-1 && array[(pointFY/30)][(pointFX/30)+1] === 0 && array[(pointHY/30)][(pointHX/30)] === 0)
{
clearRStateL2 ()
plusX(30)
fillRStateL2 ()
}

//Right movement, rotation state 3
else if (rotationState === 3 && counter < array.length-1 && array[(pointCY/30)][(pointCX/30)] === 0 && array[(pointFY/30)][(pointFX/30)] === 0 && array[(pointIY/30)][(pointIX/30)] === 0)
{
clearRStateL3()
plusX(30)
fillRStateL3()
}
  else {}}


function moveUpL () {
//Rotationstate 0 to 1 
if (rotationState === 0 && array[pointBY/30][pointBX/30]=== 0 && array[pointHY/30][pointHX/30]=== 0 && array[pointIY/30][pointIX/30]=== 0)
{
clearRStateL0()
fillRStateL1()
rotationState =1
}

//Rotationstate 0 to 1 , WallKick 
else if (rotationState === 0 && array[pointAY/30][pointAX/30] === 0 && array[(pointAY/30)-1][pointAX/30] === 0 )
{
clearRStateL0()
minusY(30)
fillRStateL1()
rotationState =1
}


//Rotationstate 1 to 2
else if (rotationState===1 && array[pointDY/30][pointDX/30] === 0 &&  array[pointGY/30][pointGX/30] === 0 && array[pointFY/30][(pointFX/30)] === 0)
{
clearRStateL1()
fillRStateL2()
rotationState = 2
}

//Rotationstate 1 to 2 , WallKick
else if (rotationState===1 &&  array[pointFY/30][(pointFX/30)] === 0 && array[pointFY/30][(pointFX/30)+1] === 0)
{
clearRStateL1()
plusX(30)
fillRStateL2()
rotationState = 2
}

//Rotationstate 2 to 3 
else if ( rotationState===2 && array[pointAY/30][pointAX/30] === 0 &&  array[pointBY/30][pointBX/30] === 0 &&array[pointHY/30][pointHX/30]=== 0 )
{
clearRStateL2()
fillRStateL3()
rotationState = 3
}
//Rotationstate 3 to 0
else if (rotationState === 3 && array[pointDY/30][(pointDX/30)] === 0 && array[pointFY/30][pointFX/30]=== 0)
{
clearRStateL3()
fillRStateL0()
rotationState = 0
}

//Rotationstate 3 to 0 Wallkick
else if (rotationState === 3 && array[pointDY/30][(pointDX/30)-1] === 0 && array[pointDY/30][pointDX/30]=== 0)
{
clearRStateL3()
minusX(30)
fillRStateL0()
rotationState = 0
}
}


function moveZL (){
//Rotationstate 0 to 3 
if ( rotationState===0 && array[pointAY/30][pointAX/30] === 0 &&  array[pointBY/30][pointBX/30] === 0 &&array[pointHY/30][pointHX/30]=== 0 )
{
clearRStateL0()
fillRStateL3()
rotationState = 3
}

//Rotationstate 0 to 3 , WallKick 
else if (rotationState === 0 && array[pointBY/30][pointBX/30] === 0 && array[(pointBY/30)-1][pointBX/30] === 0 && array[(pointAY/30)-1][pointAX/30] === 0 )
{
clearRStateL0()
minusY(30)
fillRStateL3()
rotationState =3
}

//Rotationstate 3 to 2
else if (rotationState===3 && array[pointDY/30][pointDX/30] === 0 &&  array[pointGY/30][pointGX/30] === 0 && array[pointFY/30][(pointFX/30)] === 0)
{
clearRStateL3()
fillRStateL2()
rotationState = 2
}
//Rotationstate 3 to 2 Wallkick
else if (rotationState===3 && array[pointDY/30][pointDX/30] === 0 &&  array[pointGY/30][(pointGX/30)-1] === 0 && array[pointDY/30][(pointDX/30)-1] === 0)
{
clearRStateL3()
minusX(30)
fillRStateL2()
rotationState = 2
}

//Rotationstate 2 to 1 
else if (rotationState === 2 && array[pointBY/30][pointBX/30]=== 0 && array[pointHY/30][pointHX/30]=== 0 && array[pointIY/30][pointIX/30]=== 0)
{
clearRStateL2()
fillRStateL1()
rotationState =1
}
//Rotationstate 1 to 0
else if (rotationState === 1 && array[pointCY/30][(pointCX/30)] === 0 && array[pointDY/30][(pointDX/30)] === 0 && array[pointFY/30][pointFX/30]=== 0)
{
clearRStateL1()
fillRStateL0()
rotationState = 0
}
//Rotationstate 1 to 0 Wallkick
else if (rotationState===1 && array[pointFY/30][pointFX/30] === 0 &&  array[pointFY/30][(pointFX/30)+1] === 0 && array[pointCY/30][(pointCX/30)+1] === 0)
{
clearRStateL1()
plusX(30)
fillRStateL0()
rotationState = 0
}
}


function hardDropL () {
       for (let k =0 ; k<100; k++) {
           if (rotationState === 0 && (array[(pointGY/30)+k][pointGX/30]!==0 || array[(pointHY/30)+k][pointHX/30]!==0 ||array[(pointIY/30)+k][pointIX/30] !==0))

{    
clearRStateL0()

plusY(k*30) 
fillRStateL0()
clearInterval(id5)
id5 = setInterval(l,0) 
break; 
}

else if ( rotationState === 1 && (array[(pointHY/30)+1+k][pointHX/30]!==0 || array[(pointIY/30)+1+k][pointIX/30]!==0)){
    
clearRStateL1()
plusY(k*30) 
fillRStateL1()
clearInterval(id5)
id5 = setInterval(l,0) 
break;
}
else if (rotationState === 2 && (array[(pointHY/30)+k][pointHX/30]!==0 || array[(pointGY/30)+1+k][pointGX/30]!==0 || array[(pointIY/30)+k][pointIX/30]!==0)){ 

clearRStateL2()
plusY(k*30) 
fillRStateL2()
clearInterval(id5)
id5 = setInterval(l,0) 
break;
}
else if (rotationState === 3 && (array[(pointHY/30)+1+k][pointHX/30]!==0 || array[(pointDY/30)+k][pointDX/30]!==0))
{   
clearRStateL3()
plusY(k*30) 
fillRStateL3()
clearInterval(id5)
id5 = setInterval(l,0) 
break;
}


}}



