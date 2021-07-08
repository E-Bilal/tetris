function clearRStateZ0 () {
ctx.clearRect (pAX,pAY,28,28)
array[pointAY/30][pointAX/30] = 0   

ctx.clearRect(pBX,pBY,28,28)
array[pointBY/30][pointBX/30] = 0

ctx.clearRect (pEX,pEY,28,28)
array[pointEY/30][pointEX/30] = 0

ctx.clearRect (pFX,pFY, 28,28)
array[pointFY/30][pointFX/30] = 0
}

function fillRStateZ0 () {
ctx.fillRect (pAX,pAY,28,28)
array[pointAY/30][pointAX/30] = 5

ctx.fillRect(pBX,pBY,28,28)
array[pointBY/30][pointBX/30] = 5


ctx.fillRect (pEX,pEY,28,28)
array[pointEY/30][pointEX/30] = 5

ctx.fillRect (pFX,pFY, 28,28)
array[pointFY/30][pointFX/30] = 5


}

function clearRStateZ1 () {
ctx.clearRect(pCX,pCY,28,28)
array[pointCY/30][pointCX/30] = 0

ctx.clearRect (pFX,pFY,28,28)
array[pointFY/30][pointFX/30] = 0   

ctx.clearRect (pEX,pEY,28,28)
array[pointEY/30][pointEX/30] = 0

ctx.clearRect (pHX,pHY, 28,28)
array[pointHY/30][pointHX/30] = 0
}

function fillRStateZ1 () {
ctx.fillRect(pCX,pCY,28,28)
array[pointCY/30][pointCX/30] = 5

ctx.fillRect (pFX,pFY,28,28)
array[pointFY/30][pointFX/30] = 5

ctx.fillRect (pEX,pEY,28,28)
array[pointEY/30][pointEX/30] = 5

ctx.fillRect (pHX,pHY, 28,28)
array[pointHY/30][pointHX/30] = 5
}

function clearRStateZ2 () {
ctx.clearRect (pEX,pEY,28,28)
array[pointEY/30][pointEX/30] = 0

ctx.clearRect (pDX,pDY,28,28)
array[pointDY/30][pointDX/30] = 0   

ctx.clearRect(pIX,pIY,28,28)
array[pointIY/30][pointIX/30] = 0

ctx.clearRect (pHX,pHY, 28,28)
array[pointHY/30][pointHX/30] = 0
}

function fillRStateZ2 () {
ctx.fillRect (pEX,pEY,28,28)
array[pointEY/30][pointEX/30] = 5

ctx.fillRect (pDX,pDY,28,28)
array[pointDY/30][pointDX/30] = 5   

ctx.fillRect(pIX,pIY,28,28)
array[pointIY/30][pointIX/30] = 5

ctx.fillRect (pHX,pHY, 28,28)
array[pointHY/30][pointHX/30] = 5
}

function clearRStateZ3 () {
ctx.clearRect (pBX,pBY,28,28)
array[pointBY/30][pointBX/30] = 0   

ctx.clearRect(pDX,pDY,28,28)
array[pointDY/30][pointDX/30] = 0

ctx.clearRect (pEX,pEY,28,28)
array[pointEY/30][pointEX/30] = 0

ctx.clearRect (pGX,pGY, 28,28)
array[pointGY/30][pointGX/30] = 0
}

function fillRStateZ3 () {
ctx.fillRect (pBX,pBY,28,28)
array[pointBY/30][pointBX/30] = 5

ctx.fillRect(pDX,pDY,28,28)
array[pointDY/30][pointDX/30] = 5

ctx.fillRect (pEX,pEY,28,28)
array[pointEY/30][pointEX/30] = 5

ctx.fillRect (pGX,pGY, 28,28)
array[pointGY/30][pointGX/30] = 5
}


function moveDownZ () {
    z()
}

function moveLeftZ () {
    if (rotationState === 0 && array[(pointAY/30)][(pointAX/30)-1] === 0 && array[(pointDY/30)][(pointDX/30)] === 0 )
//Left movement , rotationstate 0
    {
    clearRStateZ0 ()
    minusX (30)
    fillRStateZ0 ()
    }
//Left movement , rotationstate 1
    else if (rotationState ===1 && array[(pointBY/30)][(pointBX/30)] === 0 && array[(pointDY/30)][(pointDX/30)] === 0 && array[(pointGY/30)][(pointGX/30)] === 0 )
    {
      clearRStateZ1 ()
    minusX (30)
    fillRStateZ1 ()  
    }
    //Left movement , rotationstate 2
  else if (rotationState ===2 && array[(pointDY/30)][(pointDX/30)-1] === 0 && array[(pointGY/30)][(pointGX/30)] === 0 )
    {
      clearRStateZ2 ()
    minusX (30)
    fillRStateZ2 ()  
    }
     //Left movement , rotationstate 3
    else if (rotationState ===3&& array[(pointAY/30)][(pointAX/30)] === 0 && array[(pointDY/30)][(pointDX/30)-1] === 0 &&array[(pointGY/30)][(pointGX/30)-1] === 0)
    {
      clearRStateZ3 ()
    minusX (30)
    fillRStateZ3 ()  
    }
}

function moveRightZ () {
//Right movement , rotationstate 0
    if (rotationState === 0 && array[(pointCY/30)][(pointCX/30)] === 0 && array[(pointFY/30)][(pointFX/30)+1] === 0 )
    {clearRStateZ0 ()
    plusX (30)
    fillRStateZ0 ()
    }
    //Right movement , rotationstate 1
    if (rotationState === 1 && array[(pointCY/30)][(pointCX/30)+1] === 0 && array[(pointFY/30)][(pointFX/30)+1] === 0 && array[(pointIY/30)][(pointIX/30)] === 0 )
    {clearRStateZ1 ()
    plusX (30)
    fillRStateZ1 ()
    }
     //Right movement , rotationstate 2
    if (rotationState === 2 &&  array[(pointFY/30)][(pointFX/30)] === 0 && array[(pointIY/30)][(pointIX/30)+1] === 0 )
    {clearRStateZ2 ()
    plusX (30)
    fillRStateZ2 ()
    }
       //Right movement , rotationstate 3
    if (rotationState === 3 && array[(pointCY/30)][(pointCX/30)] === 0 &&  array[(pointFY/30)][(pointFX/30)] === 0 && array[(pointHY/30)][(pointHX/30)] === 0 )
    {clearRStateZ3 ()
    plusX (30)
    fillRStateZ3 ()
    }
}

function moveUpZ () {
    //Rotationstate 0 to 1
if (rotationState === 0 && array[pointHY/30][pointHX/30]=== 0 && array[pointCY/30][pointCX/30]=== 0)
{
clearRStateZ0()
fillRStateZ1()
rotationState =1
}else if (rotationState === 0 && array[(pointHY/30)][pointHX/30] !== 0 && array[(pointBY/30)-1][pointBX/30]=== 0 && array[pointDY/30][pointDX/30]=== 0 )
{ //Rotationstate 0 to 1 , WallKick
clearRStateZ0()
minusY(30)
fillRStateZ1()
rotationState =1
}
    //Rotationstate 1 to 2
else if (rotationState === 1 && array[pointDY/30][pointDX/30]=== 0 && array[pointIY/30][pointIX/30]=== 0)
{
clearRStateZ1()
fillRStateZ2()
rotationState =2
}
    //Rotationstate 1 to 2 Wallkick
else if (rotationState === 1 && array[pointIY/30][pointIX/30]=== 0 && array[pointIY/30][(pointIX/30)+1]=== 0)
{
clearRStateZ1()
plusX(30)
fillRStateZ2()
rotationState =2
}
    //Rotationstate 2 to 3
else if (rotationState === 2 && array[pointGY/30][pointGX/30]=== 0 && array[pointBY/30][pointBX/30]=== 0)
{
clearRStateZ2()
fillRStateZ3()
rotationState =3
}
    //Rotationstate 3 to 0
else if (rotationState === 3 && array[pointAY/30][pointAX/30]=== 0 && array[pointFY/30][pointFX/30]=== 0)
{console.log("hello")
clearRStateZ3()
fillRStateZ0()
rotationState =0
}
    //Rotationstate 3 to 0 Wallkick
else if (rotationState === 3 && array[pointAY/30][pointAX/30]=== 0 && array[pointAY/30][(pointAX/30)-1]=== 0)
{
clearRStateZ3()
minusX(30)
fillRStateZ0()
rotationState =0
}
}


function moveZZ () { 
//Rotationstate 0 to 3
if (rotationState === 0 && array[pointDY/30][pointDX/30]=== 0 && array[pointGY/30][pointGX/30]=== 0)
{
clearRStateZ0()
fillRStateZ3()
rotationState =3
}

//Rotationstate 0 to 3 Wallkick
else if (rotationState === 0 && array[(pointBY/30)-1][pointBX/30]=== 0 && array[pointDY/30][pointDX/30]=== 0)
{
clearRStateZ0()
minusY(30)
fillRStateZ3()
rotationState =3
}
//Rotationstate 3 to 2
else if (rotationState === 3 && array[pointHY/30][pointHX/30]=== 0 && array[pointIY/30][pointIX/30]=== 0)
{
clearRStateZ3()
fillRStateZ2()
rotationState =2
}

//Rotationstate 3 to 2 Wallkick
else if (rotationState === 3 && array[pointHY/30][pointHX/30]=== 0 && array[pointDY/30][(pointDX/30)-1]=== 0)
{
clearRStateZ3()
minusX(30)
fillRStateZ2()
rotationState =2
}
//Rotationstate 2 to 1
else if (rotationState === 2 && array[pointBY/30][pointBX/30]=== 0 && array[pointGY/30][pointGX/30]=== 0)
{
clearRStateZ2()
fillRStateZ1()
rotationState =1
}

//Rotationstate 1 to 0
else if (rotationState === 1 && array[pointBY/30][pointBX/30]=== 0 && array[pointAY/30][pointAX/30]=== 0)
{
clearRStateZ1()
fillRStateZ0()
rotationState =0
}
//Rotationstate 1 to 0 Wallkick
else if (rotationState === 1 && array[pointBY/30][pointBX/30]=== 0 && array[pointFY/30][(pointFX/30)+1]=== 0)
{
clearRStateZ1()
plusX(30)
fillRStateZ0()
rotationState =0
}

}