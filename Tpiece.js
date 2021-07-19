
function clearRStateT0 () {
    ctx.clearRect(pBX,pBY,28,28)
    array[pointBY/30][pointBX/30] = 0

    ctx.clearRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 0

    ctx.clearRect (pDX,pDY, 28,28)
    array[pointDY/30][pointDX/30] = 0

    ctx.clearRect (pFX,pFY,28,28)
    array[pointFY/30][pointFX/30] = 0 

    ghostT0remover()
}

function fillRStateT0 () {
    ctx.fillRect(pBX,pBY,28,28)
    array[pointBY/30][pointBX/30] = 4

    ctx.fillRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 4

    ctx.fillRect (pDX,pDY, 28,28)
    array[pointDY/30][pointDX/30] = 4

    ctx.fillRect (pFX,pFY,28,28)
    array[pointFY/30][pointFX/30] = 4

    ghostT0()
}

function fillRStateT1 () {
    ctx.fillRect(pBX,pBY,28,28)
    array[pointBY/30][pointBX/30] = 4

    ctx.fillRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 4


    ctx.fillRect (pDX,pDY, 28,28)
    array[pointDY/30][pointDX/30] = 4

    ctx.fillRect (pHX,pHY,28,28)
    array[pointHY/30][pointHX/30] = 4

    ghostT3()
}

function clearRStateT1 () 
{
    ctx.clearRect(pBX,pBY,28,28)
    array[pointBY/30][pointBX/30] = 0

    ctx.clearRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 0

    ctx.clearRect (pDX,pDY, 28,28)
    array[pointDY/30][pointDX/30] = 0

    ctx.clearRect (pHX,pHY,28,28)
    array[pointHY/30][pointHX/30] = 0

    ghostT3remover()

}

function fillRStateT2 () {
    ctx.fillRect(pFX,pFY,28,28)
    array[pointFY/30][pointFX/30] = 4

    ctx.fillRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 4

    ctx.fillRect (pDX,pDY, 28,28)
    array[pointDY/30][pointDX/30] = 4

    ctx.fillRect (pHX,pHY,28,28)
    array[pointHY/30][pointHX/30] = 4

    ghostT2()
}

function clearRStateT2 () {
    ctx.clearRect(pFX,pFY,28,28)
    array[pointFY/30][pointFX/30] = 0

    ctx.clearRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 0

    ctx.clearRect (pDX,pDY, 28,28)
    array[pointDY/30][pointDX/30] = 0

    ctx.clearRect (pHX,pHY,28,28)
    array[pointHY/30][pointHX/30] = 0

    ghostT2remover()
}

function fillRStateT3 () 
{
    ctx.fillRect(pFX,pFY,28,28)
    array[pointFY/30][pointFX/30] = 4

    ctx.fillRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 4


    ctx.fillRect (pBX,pBY, 28,28)
    array[pointBY/30][pointBX/30] = 4

    ctx.fillRect (pHX,pHY,28,28)
    array[pointHY/30][pointHX/30] = 4

    ghostT1()

}
function clearRStateT3 () {
    ctx.clearRect(pFX,pFY,28,28)
    array[pointFY/30][pointFX/30] = 0

    ctx.clearRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 0

    ctx.clearRect (pBX,pBY, 28,28)
    array[pointBY/30][pointBX/30] = 0

    ctx.clearRect (pHX,pHY,28,28)
    array[pointHY/30][pointHX/30] = 0

    ghostT1remover()

}

function moveDownT() {
t()
}
function moveLeftT () { if (rotationState === 0 && counter < array.length-1 && array[(pointAY/30)][(pointAX/30)] === 0 && array[(pointDY/30)][(pointDX/30)-1] === 0 )
//Left movement , rotationstate 0
{
clearRStateT0 ()
minusX (30)
fillRStateT0 ()
}
//Left movement , rotationstate 1

else if (rotationState === 1 && counter < array.length-1 && array[(pointAY/30)][(pointAX/30)] === 0 && array[(pointDY/30)][(pointDX/30)-1] === 0  && array[(pointGY/30)][(pointGX/30)] === 0  )

{
clearRStateT1 ()
minusX (30)
fillRStateT1 ()
}

//Left movement , rotationstate 2

else if (rotationState === 2 && counter < array.length-1 && array[(pointDY/30)][(pointDX/30)-1] === 0 && array[(pointGY/30)][(pointGX/30)] === 0  )

{
clearRStateT2()
minusX (30)
fillRStateT2()
}

//Left movement , rotationstate 3
else if (rotationState === 3 && counter < array.length-1 && array[(pointAY/30)][(pointAX/30)] === 0 && array[(pointDY/30)][(pointDX/30)] === 0 && array[(pointGY/30)][(pointGX/30)] === 0  )

{
clearRStateT3 ()
minusX (30)
fillRStateT3 ()
}
else {}}


function moveRightT () { if (rotationState === 0 && array[(pointCY/30)][(pointCX/30)] === 0 && array[(pointFY/30)][(pointFX/30)+1] === 0 )
//Right movement , rotation state 0
{console.log('hey')
clearRStateT0 ()
plusX(30)
fillRStateT0 ()
}

//Right movement , rotation state 1
else if (rotationState === 1 && array[pointCY/30][pointCX/30]=== 0 && array[pointFY/30][pointFX/30]=== 0 && array[pointIY/30][pointIX/30]=== 0 )
{
clearRStateT1 ()
plusX(30)
fillRStateT1()
}

//Right movement , rotation state 2
else if (rotationState === 2  && array[(pointFY/30)][(pointFX/30)+1] === 0 && array[(pointIY/30)][(pointIX/30)] === 0)
{
clearRStateT2 ()
plusX(30)
fillRStateT2 ()
}

//Right movement, rotation state 3
else if (rotationState === 3 && array[(pointCY/30)][(pointCX/30)] === 0 && array[(pointFY/30)][(pointFX/30)+1] === 0 && array[(pointIY/30)][(pointIX/30)] === 0)
{
clearRStateT3()
plusX(30)
fillRStateT3()
}
  else {}}


function moveUpT () {

//Rotationstate 0 to 3 
if (rotationState === 0 && array[pointHY/30][pointHX/30]=== 0)
{
clearRStateT0()
fillRStateT3()
rotationState =3
}

//Rotationstate 0 to 3  , WallKick 1
else if (rotationState === 0 && array[pointHY/30][pointHX/30] !== 0 &&   array[pointAY/30][pointAX/30] === 0 && array[pointGY/30][pointGX/30] === 0  )
{
clearRStateT0()
minusX(30)
fillRStateT3()
rotationState =3
}

//Rotationstate 0 to 3 , WallKick 3
else if (rotationState === 0 && array[pointGY/30][pointGX/30] !== 0 && array[pointHY/30][pointHX/30] !== 0 &&   array[pointAY/30][pointAX/30] === 0 && array[(pointAY/30)-1][pointAX/30] === 0 )
{
clearRStateT0()
minusX(30)
minusY(30)
fillRStateT3()
rotationState =3
}

//Rotationstate 0 to 3 , WallKick 4
else if (rotationState === 0 && array[pointGY/30][pointGX/30] === 0 && array[(pointGY/30)+1][pointGX/30] === 0 && array[(pointGY/30)+2][pointGX/30] === 0 && array[(pointHY/30)+1][pointHX/30] === 0 &&  array[pointAY/30][pointAX/30] !== 0 )
{
clearRStateT0()
minusX(30)
plusY(60)
fillRStateT3()
rotationState =3      
}

//Rotationstate 3 to 2
else if ( rotationState === 3 && array[pointDY/30][pointDX/30]=== 0 )
{
clearRStateT3()
fillRStateT2()
rotationState = 2
}

//Rotationstate 3 to 2 , WallKick1
else if (rotationState===3 && array[pointDY/30][pointDX/30] !== 0 &&  array[pointIY/30][pointIX/30] === 0 && array[pointFY/30][(pointFX/30)+1] === 0)
{
clearRStateT3()
plusX(30)
fillRStateT2()
rotationState = 2
}

//Rotationstate 3 to 2 , WallKick2
else if ( rotationState===3 && array[pointFY/30][(pointFX/30)+1] !== 0 && array[pointDY/30][pointDX/30] !== 0 && array[pointIY/30][pointIX/30] === 0 && array[pointIY/30][(pointIX/30)+1] === 0 && array[(pointIY/30)+1][pointIX/30] === 0 )
{
clearRStateT3()
plusX(30)
plusY(30)
fillRStateT2()
rotationState = 2
}

//Rotationstate 3 to 2 , WallKick3
else if (rotationState===3 && array[(pointAY/30)-1][pointAX/30] === 0 && array[(pointBY/30)-1][pointBX/30] === 0 && array[(pointCY/30)-1][pointCX/30] === 0 && array[pointFY/30][(pointFX/30)+1] !== 0 && array[pointDY/30][pointDX/30] !== 0 && (array[pointIY/30][pointIX/30]  !== 0 || array[pointIY/30][(pointIX/30)+1] !== 0 || array[(pointIY/30)+1][pointIX/30] !== 0 ))
{
clearRStateT3()
minusY(60)
fillRStateT2()
rotationState = 2
}


//Rotationstate 3 to 2 , WallKick4
else if (rotationState===3 && array[(pointAY/30)-1][pointAX/30] !== 0 && array[(pointBY/30)-1][pointBX/30] === 0 && array[(pointCY/30)-1][pointCX/30] === 0 && 
array[pointCY/30][pointCX/30] === 0 && array[(pointCY/30)-1][(pointCX/30)+1] === 0 && (array[pointFY/30][(pointFX/30)+1] !== 0 || array[pointDY/30][pointDX/30] !== 0) && (array[pointIY/30][pointIX/30]  !== 0 || array[pointIY/30][(pointIX/30)+1] !== 0 || array[(pointIY/30)+1][pointIX/30] !== 0 ))
{console.log("hello")
clearRStateT3()
minusY(60)
plusX(30)
fillRStateT2()
rotationState = 2
}
//Rotaionstate 2 to 1
else if (rotationState === 2 && array[pointBY/30][pointBX/30]=== 0 )
{
clearRStateT2()
fillRStateT1 ()
rotationState = 1
} 

//Rotaionstate 2 to 1 , Wallkick 1
else if (rotationState === 2 && array[pointBY/30][pointBX/30] !== 0 && array[pointCY/30][pointCX/30] === 0 && array[pointIY/30][pointIX/30] === 0)
{
clearRStateT2()
plusX(30)
fillRStateT1()
rotationState = 1
}

//Rotaionstate 2 to 1 , Wallkick 3
else if (rotationState === 2 && array[(pointHY/30)+1][pointHX/30] === 0 && array[(pointHY/30)+2][pointHX/30] === 0 && array[(pointGY/30)+1][pointGX/30] === 0 && array[pointBY/30][pointBX/30] !== 0 && (array[pointCY/30][pointCX/30] !== 0 || array[pointIY/30][pointIX/30] !== 0))
{
clearRStateT2()
plusY(60)
fillRStateT1()
rotationState = 1
}

//Rotaionstate 2 to 1 , Wallkick 4

else if (rotationState === 2 && ( array[(pointHY/30)+2][pointHX/30] !== 0 || array[(pointGY/30)+1][pointGX/30] !== 0) && array[pointBY/30][pointBX/30] !== 0 && array[pointCY/30][pointCX/30] !== 0 && array[pointIY/30][pointIX/30] === 0 && array[(pointHY/30)+1][pointHX/30] === 0 && array[(pointIY/30)+1][pointIX/30] === 0  && array[(pointIY/30)+2][pointIX/30] === 0)
{
clearRStateT2()
plusY(60)
plusX(30)
fillRStateT1()
rotationState = 1
}
//Rotationstate 1 to 0
else if (rotationState === 1 && array[pointFY/30][pointFX/30]=== 0)
{
clearRStateT1()
fillRStateT0()
rotationState = 0
}

//Rotationstate 1 to 0 , Wallkick 1
else if (rotationState === 1 && array[pointFY/30][pointFX/30] !== 0 && array[pointDY/30][(pointDX/30)-1] === 0 && array[pointAY/30][pointAX/30] === 0)
{
       
       clearRStateT1()
       minusX(30)
       fillRStateT0()
       rotationState = 0
}
//Rotationstate 1 to 0 , Wallkick 2
else if (rotationState === 1 && array[(pointGY/30)][(pointGX/30)-1] === 0 && array[(pointGY/30)][(pointGX/30)] === 0 && array[pointFY/30][pointFX/30] !== 0 && array[pointDY/30][(pointDX/30)-1] !== 0 )
{ clearRStateT1()
minusX(30)
plusY(30)
fillRStateT0()
rotationState = 0
}

//Rotationstate 1 to 0 , Wallkick 3
else if (rotationState === 1 && (array[(pointGY/30)][(pointGX/30)-1] !== 0 || array[(pointGY/30)][(pointGX/30)] !== 0 )&& array[pointFY/30][pointFX/30] !== 0 && array[pointDY/30][(pointDX/30)-1] !== 0 && array[(pointAY/30)-1][pointAX/30] === 0 && array[(pointBY/30)-1][pointBX/30] === 0 && array[(pointCY/30)-1][pointCX/30] === 0 &&array[(pointBY/30)-2][pointBX/30] === 0)
{
clearRStateT1()
minusY(60)
fillRStateT0()
rotationState = 0     
}

//Rotationstate 1 to 0 , Wallkick 4
else if (rotationState === 1 && (array[(pointGY/30)][(pointGX/30)-1] !== 0 || array[(pointGY/30)][(pointGX/30)] !== 0 )&& array[pointFY/30][pointFX/30] !== 0 && array[pointDY/30][(pointDX/30)-1] !== 0 && (array[(pointCY/30)-1][pointCX/30] !== 0 || array[(pointBY/30)-2][pointBX/30] !== 0 )&& array[(pointAY/30)-1][pointAX/30] === 0 && array[(pointAY/30)-2][pointAX/30] === 0&& array[(pointAY/30)-1][(pointAX/30)-1] === 0 &&array[(pointBY/30)-1][pointBX/30] === 0)
{
clearRStateT1()
minusX(30)
minusY(60)
fillRStateT0()
rotationState = 0        
}
}


function moveZT () { if (rotationState === 0 && array[pointHY/30][pointHX/30]=== 0 )
{
//Rotationstate 0 to 1    
clearRStateT0 ()
fillRStateT1 ()
rotationState = 1}

//Rotaionstate 0 to 1 , WallKick 1  
else if ( rotationState === 0 && array[pointHY/30][pointHX/30] !== 0 &&   array[pointCY/30][pointCX/30] === 0 && array[pointIY/30][pointIX/30] === 0  )
{
clearRStateT0 ()
plusX(30)
fillRStateT1 ()
rotationState = 1
}

//Rotaionstate 0 to 1 , WallKick 2 
else if (rotationState === 0 && array[pointIY/30][pointIX/30] !== 0 && array[pointHY/30][pointHX/30] !== 0 && array[pointCY/30][pointCX/30] === 0 && array[(pointCY/30)-1][pointCX/30] === 0 )
{
clearRStateT0 ()
plusX(30)
minusY(30)
fillRStateT1 ()
rotationState = 1
}

//Rotaionstate 0 to 1 , WallKick 4
else if (rotationState === 0 && array[pointIY/30][pointIX/30] === 0 && array[(pointIY/30)+1][pointIX/30] === 0 && array[(pointIY/30)+2][pointIX/30] === 0 && array[(pointHY/30)+1][pointHX/30] === 0 &&  array[pointCY/30][pointCX/30] !== 0 )
{
clearRStateT0 ()
plusY(60)
plusX(30)
fillRStateT1 ()
rotationState = 1
}

//Rotationstate 1 to 2
else if ( rotationState === 1 && array[pointFY/30][pointFX/30]=== 0 )
{
clearRStateT1()
fillRStateT2()
rotationState = 2
}

//Rotationstate 1 to 2 , Wallkick 1 
else if (rotationState===1 && array[pointFY/30][pointFX/30] !== 0 &&  array[pointGY/30][pointGX/30] === 0 && array[pointDY/30][(pointDX/30)-1] === 0)
{
clearRStateT1()
minusX(30)
fillRStateT2()
rotationState = 2}

//Rotationstate 1 to 2 , Wallkick 2
else if ( rotationState===1 && array[pointFY/30][pointFX/30] !== 0 && array[pointDY/30][(pointDX/30)-1] !== 0 && array[pointGY/30][pointGX/30] === 0 && array[pointGY/30][(pointGX/30)-1] === 0 && array[(pointGY/30)+1][pointGX/30] === 0 )
{
clearRStateT1()
minusX(30)
plusY(30)
fillRStateT2()
rotationState = 2
}

//Rotationstate 1 to 2 , Wallkick 3
else if (rotationState===1 && array[(pointAY/30)-1][pointAX/30] === 0 && array[(pointBY/30)-1][pointBX/30] === 0 && array[(pointCY/30)-1][pointCX/30] === 0 && array[pointFY/30][pointFX/30] !== 0 && array[pointDY/30][(pointDX/30)-1] !== 0 && (array[pointGY/30][pointGX/30] !== 0 || array[pointGY/30][(pointGX/30)-1] !== 0 || array[(pointGY/30)+1][pointGX/30] !== 0 ))
{
clearRStateT1()
minusY(60)
fillRStateT2()
rotationState = 2}

//Rotationstate 1 to 2 , Wallkick 4
else if (rotationState===1 && array[(pointAY/30)-1][pointAX/30] === 0 && array[pointAY/30][pointAX/30] === 0 && array[(pointAY/30)-1][(pointAX/30)-1] === 0 && array[(pointBY/30)-1][pointBX/30] === 0 && array[(pointCY/30)-1][pointCX/30] !== 0 && (array[pointFY/30][pointFX/30] !==0 ||  array[pointDY/30][(pointDX/30)-1] !== 0)&& (array[pointGY/30][pointGX/30] !== 0 || array[pointGY/30][(pointGX/30)-1] !== 0 || array[(pointGY/30)+1][pointGX/30] !== 0 ))
{
       
clearRStateT1()
minusY(60)
minusX(30)
fillRStateT2()
rotationState = 2
}

//Rotaionstate 2 to 3
else if (rotationState === 2 && array[pointBY/30][pointBX/30]=== 0 )
{
clearRStateT2()
fillRStateT3 ()
rotationState = 3} 

//Rotaionstate 2 to 3 , wallkick 1

else if (rotationState === 2 && array[pointBY/30][pointBX/30] !== 0 && array[pointAY/30][pointAX/30] === 0 && array[pointGY/30][pointGX/30] === 0)
{
clearRStateT2()
minusX(30)
fillRStateT3()
rotationState = 3
}

//Rotaionstate 2 to 3 , wallkick 3
else if (rotationState === 2 && array[(pointHY/30)+1][pointHX/30] === 0 && array[(pointHY/30)+2][pointHX/30] === 0 && array[(pointIY/30)+1][pointIX/30] === 0 && array[pointBY/30][pointBX/30] !== 0 && (array[pointAY/30][pointAX/30] !== 0 || array[pointGY/30][pointGX/30] !== 0))
{
clearRStateT2()
plusY(60)
fillRStateT3()
rotationState = 3
}

//Rotaionstate 2 to 3 , wallkick 4
else if (rotationState === 2 && ( array[(pointHY/30)+2][pointHX/30] !== 0 || array[(pointIY/30)+1][pointIX/30] !== 0) && array[pointBY/30][pointBX/30] !== 0 && array[pointAY/30][pointAX/30] !== 0 && array[pointGY/30][pointGX/30] === 0 && array[(pointHY/30)+1][pointHX/30] === 0 && array[(pointGY/30)+1][pointGX/30] === 0  && array[(pointGY/30)+2][pointGX/30] === 0)
{
clearRStateT2()
plusY(60)
minusX(30)
fillRStateT3()
rotationState = 3}

//Rotaionstate 3 to 0

else if (rotationState === 3 && array[pointDY/30][pointDX/30]=== 0)
{
       clearRStateT3()
       fillRStateT0()
       rotationState = 0
}
//Rotaionstate 3 to 0 , WallKick 1

else if (rotationState === 3 && array[pointDY/30][pointDX/30] !== 0 && array[pointFY/30][(pointFX/30)+1] === 0 && array[pointCY/30][pointCX/30] === 0)
{
       
       clearRStateT3()
       plusX(30)
       fillRStateT0()
       rotationState = 0
}
//Rotaionstate 3 to 0 , WallKick 2

else if (rotationState === 3 && array[(pointIY/30)][(pointIX/30)+1] === 0 && array[(pointIY/30)][(pointIX/30)] === 0 && array[pointDY/30][pointDX/30] !== 0 && array[pointFY/30][(pointFX/30)+1] !== 0 )
{
       
       clearRStateT3()
       plusX(30)
       plusY(30)
       fillRStateT0()
       rotationState = 0
}

//Rotaionstate 3 to 0 , WallKick 3

else if (rotationState === 3 && (array[(pointIY/30)][(pointIX/30)+1] !== 0 || array[(pointIY/30)][(pointIX/30)] !== 0 )&& array[pointDY/30][pointDX/30] !== 0 && array[pointFY/30][(pointFX/30)+1] !== 0 && array[(pointAY/30)-1][pointAX/30] === 0 && array[(pointBY/30)-1][pointBX/30] === 0 && array[(pointCY/30)-1][pointCX/30] === 0 &&array[(pointBY/30)-2][pointBX/30] === 0)
{
       
       clearRStateT3()
       minusY(60)
       fillRStateT0()
       rotationState = 0
}
//Rotaionstate 3 to 0 , WallKick 4

else if (rotationState === 3 && (array[(pointIY/30)][(pointIX/30)+1] !== 0 || array[(pointIY/30)][(pointIX/30)] !== 0 )&& array[pointDY/30][pointDX/30] !== 0 && array[pointFY/30][(pointFX/30)+1] !== 0 && (array[(pointAY/30)-1][pointAX/30] !== 0 || array[(pointBY/30)-2][pointBX/30] !== 0 )&& array[(pointCY/30)-1][pointCX/30] === 0 && array[(pointCY/30)-2][pointCX/30] === 0&& array[(pointCY/30)-1][(pointCX/30)+1] === 0 &&array[(pointBY/30)-1][pointBX/30] === 0)
{
       
       clearRStateT3()
       minusY(60)
       plusX(30)
       fillRStateT0()
       rotationState = 0
}

}

function hardDropT () {
    for (let k =0 ; k<100; k++) {
        if (rotationState === 0 && (array[(pointHY/30)+k][pointHX/30] !==0 || array[(pointIY/30)+k][pointIX/30] !==0  || 
        array[(pointGY/30)+k][pointGX/30] !==0 )) {     
            clearRStateT0()
            plusY(k*30) 
            fillRStateT0()
            clearInterval(id2)
            id2 = setInterval(t,0) 
            hardDropScoring(k)

            break; 
        } else if (rotationState === 1 && (array[(pointHY/30)+k+1][pointHX/30] !==0 ||array[(pointGY/30)+k+1][pointGX/30] )) {    
            clearRStateT1()
            plusY(k*30) 
            fillRStateT1()
            clearInterval(id2)
            id2 = setInterval(t,0) 
            hardDropScoring(k)

            break; 
        } else if (rotationState === 2 && (array[(pointHY/30)+k+1][pointHX/30] !==0 || 
        array[(pointDY/30)+k+1][pointDX/30] !==0  || array[(pointFY/30)+k+1][pointFX/30] !==0 )) {    
            clearRStateT2()
            plusY(k*30) 
            fillRStateT2()
            clearInterval(id2)
            id2 = setInterval(t,0)
            hardDropScoring(k)

            break; 
        } else if (rotationState === 3 && (array[(pointHY/30)+k+1][pointHX/30] !==0 ||array[(pointIY/30)+k+1][pointIX/30] )) {    
            clearRStateT3()
            plusY(k*30) 
            fillRStateT3()
            clearInterval(id2)
            id2 = setInterval(t,0) 
            hardDropScoring(k)

            break; 
        }
    }
}

function ghostT0 () {
    for (let k =pointHY/30 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0 || array[k][pointIX/30] !==0 || array[k][pointGX/30] !==0 ) ) {
            if (k-(pointHY/30)<1) {
                return
            }
            if (k-(pointHY/30)<2) {
                ctx.fillStyle = "#C5CDD8";           
                ctx.fillRect(pDX,(k-1)*30,28,28) 
                ctx.fillRect(pEX,(k-1)*30,28,28) 
                ctx.fillRect (pFX,(k-1)*30, 28,28)
                ctx.fillStyle = "#6a0dad"
                return
            }

            ctx.fillStyle = "#C5CDD8";           
            ctx.fillRect(pBX,(k-2)*30,28,28)
            ctx.fillRect (pEX,(k-1)*30,28,28)
            ctx.fillRect (pDX,(k-1)*30, 28,28)
            ctx.fillRect (pFX,(k-1)*30,28,28)
            ctx.fillStyle = "#6a0dad"
            break;
        } 
    }
}

function ghostT0remover () {
    for (let k =pointHY/30 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0  || array[k][pointIX/30] !==0 || array[k][pointGX/30] !==0) ) {  
            ctx.clearRect(pBX,(k-2)*30,28,28)
            ctx.clearRect (pEX,(k-1)*30,28,28)
            ctx.clearRect (pDX,(k-1)*30, 28,28)
            ctx.clearRect (pFX,(k-1)*30,28,28)
            break;
        }
    }
}

function ghostT1 () {
    for (let k =(pointHY/30)+1 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0 || array[k-1][pointIX/30] !==0) ) {
            if (k-(pointHY/30)<2) {
                return
            }
            if (k-(pointHY/30)<3) {
                ctx.fillStyle = "#C5CDD8";           
                ctx.fillRect (pHX,(k-1)*30, 28,28)
                ctx.fillRect (pFX,(k-2)*30,28,28)
                ctx.fillStyle = "#6a0dad"
                return
            }

            if (k-(pointHY/30)<4) {
                ctx.fillStyle = "#C5CDD8";           
                ctx.fillRect (pEX,(k-2)*30,28,28)
                ctx.fillRect (pFX,(k-2)*30,28,28)
                ctx.fillRect (pHX,(k-1)*30, 28,28)
                ctx.fillStyle = "#6a0dad"
                return
            }

            ctx.fillStyle = "#C5CDD8";           
            ctx.fillRect(pBX,(k-3)*30,28,28)
            ctx.fillRect (pEX,(k-2)*30,28,28)
            ctx.fillRect (pHX,(k-1)*30, 28,28)
            ctx.fillRect (pFX,(k-2)*30,28,28)
            ctx.fillStyle = "#6a0dad"
            break;
        } 
    }
}

function ghostT1remover () {
    for (let k =(pointHY/30)+1 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0 || array[k-1][pointIX/30] !==0)  ) {  
            ctx.clearRect(pBX,(k-3)*30,28,28)
            ctx.clearRect (pEX,(k-2)*30,28,28)
            ctx.clearRect (pHX,(k-1)*30, 28,28)
            ctx.clearRect (pFX,(k-2)*30,28,28)            
            break;
        }
    }
}

function ghostT2 () {
    for (let k =(pointHY/30)+1 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0 || array[k-1][pointIX/30] !==0 || array[k-1][pointGX/30] !==0) ) {
            if (k-(pointHY/30)<2) {
                return
            }
            if (k-(pointHY/30)<3) {
                ctx.fillStyle = "#C5CDD8";           
                ctx.fillRect (pDX,(k-2)*30,28,28)
                ctx.fillRect (pFX,(k-2)*30,28,28)
                ctx.fillRect (pHX,(k-1)*30, 28,28)
                ctx.fillStyle = "#6a0dad"
                return
            }


            ctx.fillStyle = "#C5CDD8";           
            ctx.fillRect(pDX,(k-2)*30,28,28)
            ctx.fillRect (pEX,(k-2)*30,28,28)
            ctx.fillRect (pHX,(k-1)*30, 28,28)
            ctx.fillRect (pFX,(k-2)*30,28,28)
            ctx.fillStyle = "#6a0dad"
            break;
        } 
    }
}

function ghostT2remover () {
    for (let k =(pointHY/30)+1 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0 || array[k-1][pointIX/30] !==0 || array[k-1][pointGX/30] !==0) ) {  
            ctx.clearRect(pDX,(k-2)*30,28,28)
            ctx.clearRect (pEX,(k-2)*30,28,28)
            ctx.clearRect (pHX,(k-1)*30, 28,28)
            ctx.clearRect (pFX,(k-2)*30,28,28)          
            break;
        }
    }
}

function ghostT3 () {
    for (let k =(pointHY/30)+1 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0 || array[k-1][pointDX/30] !==0) ) {
            if (k-(pointHY/30)<2) {
                return
            }
            if (k-(pointHY/30)<3) {
                ctx.fillStyle = "#C5CDD8";           
                ctx.fillRect (pHX,(k-1)*30, 28,28)
                ctx.fillRect (pDX,(k-2)*30,28,28)
                ctx.fillStyle = "#6a0dad"
                return
            }

            if (k-(pointHY/30)<4) {
                ctx.fillStyle = "#C5CDD8";           
                ctx.fillRect (pEX,(k-2)*30,28,28)
                ctx.fillRect (pDX,(k-2)*30,28,28)
                ctx.fillRect (pHX,(k-1)*30, 28,28)
                ctx.fillStyle = "#6a0dad"
                return
            }

            ctx.fillStyle = "#C5CDD8";           
            ctx.fillRect(pBX,(k-3)*30,28,28)
            ctx.fillRect (pEX,(k-2)*30,28,28)
            ctx.fillRect (pHX,(k-1)*30, 28,28)
            ctx.fillRect (pDX,(k-2)*30,28,28)
            ctx.fillStyle = "#6a0dad"
            break;
        } 
    }
}

function ghostT3remover () {
    for (let k =(pointHY/30)+1 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0 || array[k-1][pointDX/30] !==0)  ) {  
            ctx.clearRect(pBX,(k-3)*30,28,28)
            ctx.clearRect (pEX,(k-2)*30,28,28)
            ctx.clearRect (pHX,(k-1)*30, 28,28)
            ctx.clearRect (pDX,(k-2)*30,28,28)            
            break;
        }
    }
}