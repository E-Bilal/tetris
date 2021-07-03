
function clearRStateT0 () {

ctx.clearRect(pBX,pBY,48,48)
array[pointBY/50][pointBX/50] = 0

ctx.clearRect (pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 0

ctx.clearRect (pDX,pDY, 48,48)
array[pointDY/50][pointDX/50] = 0

ctx.clearRect (pFX,pFY,48,48)
array[pointFY/50][pointFX/50] = 0

}
function fillRStateT0 () {
ctx.fillRect(pBX,pBY,48,48)
array[pointBY/50][pointBX/50] = 2

ctx.fillRect (pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 2


ctx.fillRect (pDX,pDY, 48,48)
array[pointDY/50][pointDX/50] = 2

ctx.fillRect (pFX,pFY,48,48)
array[pointFY/50][pointFX/50] = 2
}


function fillRStateT1 () {
ctx.fillRect(pBX,pBY,48,48)
array[pointBY/50][pointBX/50] = 2

ctx.fillRect (pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 2


ctx.fillRect (pDX,pDY, 48,48)
array[pointDY/50][pointDX/50] = 2

ctx.fillRect (pHX,pHY,48,48)
array[pointHY/50][pointHX/50] = 2

}

function clearRStateT1 () 
{
ctx.clearRect(pBX,pBY,48,48)
array[pointBY/50][pointBX/50] = 0

ctx.clearRect (pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 0

ctx.clearRect (pDX,pDY, 48,48)
array[pointDY/50][pointDX/50] = 0

ctx.clearRect (pHX,pHY,48,48)
array[pointHY/50][pointHX/50] = 0

}

function fillRStateT2 () {
ctx.fillRect(pFX,pFY,48,48)
array[pointFY/50][pointFX/50] = 2

ctx.fillRect (pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 2


ctx.fillRect (pDX,pDY, 48,48)
array[pointDY/50][pointDX/50] = 2

ctx.fillRect (pHX,pHY,48,48)
array[pointHY/50][pointHX/50] = 2
}

function clearRStateT2 () {
ctx.clearRect(pFX,pFY,48,48)
array[pointFY/50][pointFX/50] = 0

ctx.clearRect (pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 0

ctx.clearRect (pDX,pDY, 48,48)
array[pointDY/50][pointDX/50] = 0

ctx.clearRect (pHX,pHY,48,48)
array[pointHY/50][pointHX/50] = 0
}

function fillRStateT3 () 
{
ctx.fillRect(pFX,pFY,48,48)
array[pointFY/50][pointFX/50] = 2

ctx.fillRect (pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 2


ctx.fillRect (pBX,pBY, 48,48)
array[pointBY/50][pointBX/50] = 2

ctx.fillRect (pHX,pHY,48,48)
array[pointHY/50][pointHX/50] = 2
}
function clearRStateT3 () {
ctx.clearRect(pFX,pFY,48,48)
array[pointFY/50][pointFX/50] = 0

ctx.clearRect (pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 0

ctx.clearRect (pBX,pBY, 48,48)
array[pointBY/50][pointBX/50] = 0

ctx.clearRect (pHX,pHY,48,48)
array[pointHY/50][pointHX/50] = 0

}

function moveDownT() {
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
clearRStateT1 ()
minusX (50)
fillRStateT1 ()
}

//Left movement , rotationstate 2

else if (rotationState === 2 && counter < array.length-1 && array[(pointDY/50)][(pointDX/50)-1] === 0 && array[(pointGY/50)][(pointGX/50)] === 0  )

{
clearRStateT2()
minusX (50)
fillRStateT2()
}

//Left movement , rotationstate 3
else if (rotationState === 3 && counter < array.length-1 && array[(pointAY/50)][(pointAX/50)] === 0 && array[(pointDY/50)][(pointDX/50)] === 0 && array[(pointGY/50)][(pointGX/50)] === 0  )

{
clearRStateT3 ()
minusX (50)
fillRStateT3 ()
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
clearRStateT1 ()
plusX(50)
fillRStateT1()
}

//Right movement , rotation state 2
else if (rotationState === 2 && counter < array.length-1 && array[(pointFY/50)][(pointFX/50)+1] === 0 && array[(pointIY/50)][(pointIX/50)] === 0)
{
clearRStateT2 ()
plusX(50)
fillRStateT2 ()
}

//Right movement, rotation state 3
else if (rotationState === 3 && counter < array.length-1 && array[(pointCY/50)][(pointCX/50)] === 0 && array[(pointFY/50)][(pointFX/50)+1] === 0 && array[(pointIY/50)][(pointIX/50)] === 0)
{
clearRStateT3()
plusX(50)
fillRStateT3()
}
  else {}}


function moveUpT () {

//Rotationstate 0 to 3 
if (rotationState === 0 && array[pointHY/50][pointHX/50]=== 0)
{
clearRStateT0()
fillRStateT3()
rotationState =3
}

//Rotationstate 0 to 3  , WallKick 1
else if (rotationState === 0 && array[pointHY/50][pointHX/50] !== 0 &&   array[pointAY/50][pointAX/50] === 0 && array[pointGY/50][pointGX/50] === 0  )
{
clearRStateT0()
minusX(50)
fillRStateT3()
rotationState =3
}

//Rotationstate 0 to 3 , WallKick 3
else if (rotationState === 0 && array[pointGY/50][pointGX/50] !== 0 && array[pointHY/50][pointHX/50] !== 0 &&   array[pointAY/50][pointAX/50] === 0 && array[(pointAY/50)-1][pointAX/50] === 0 )
{
clearRStateT0()
minusX(50)
minusY(50)
fillRStateT3()
rotationState =3
}

//Rotationstate 0 to 3 , WallKick 4
else if (rotationState === 0 && array[pointGY/50][pointGX/50] === 0 && array[(pointGY/50)+1][pointGX/50] === 0 && array[(pointGY/50)+2][pointGX/50] === 0 && array[(pointHY/50)+1][pointHX/50] === 0 &&  array[pointAY/50][pointAX/50] !== 0 )
{
clearRStateT0()
minusX(50)
plusY(100)
fillRStateT3()
rotationState =3      
}

//Rotationstate 3 to 2
else if ( rotationState === 3 && array[pointDY/50][pointDX/50]=== 0 )
{
clearRStateT3()
fillRStateT2()
rotationState = 2
}

//Rotationstate 3 to 2 , WallKick1
else if (rotationState===3 && array[pointDY/50][pointDX/50] !== 0 &&  array[pointIY/50][pointIX/50] === 0 && array[pointFY/50][(pointFX/50)+1] === 0)
{
clearRStateT3()
plusX(50)
fillRStateT2()
rotationState = 2
}

//Rotationstate 3 to 2 , WallKick2
else if ( rotationState===3 && array[pointFY/50][(pointFX/50)+1] !== 0 && array[pointDY/50][pointDX/50] !== 0 && array[pointIY/50][pointIX/50] === 0 && array[pointIY/50][(pointIX/50)+1] === 0 && array[(pointIY/50)+1][pointIX/50] === 0 )
{
clearRStateT3()
plusX(50)
plusY(50)
fillRStateT2()
rotationState = 2
}

//Rotationstate 3 to 2 , WallKick3
else if (rotationState===3 && array[(pointAY/50)-1][pointAX/50] === 0 && array[(pointBY/50)-1][pointBX/50] === 0 && array[(pointCY/50)-1][pointCX/50] === 0 && array[pointFY/50][(pointFX/50)+1] !== 0 && array[pointDY/50][pointDX/50] !== 0 && (array[pointIY/50][pointIX/50]  !== 0 || array[pointIY/50][(pointIX/50)+1] !== 0 || array[(pointIY/50)+1][pointIX/50] !== 0 ))
{
clearRStateT3()
minusY(100)
fillRStateT2()
rotationState = 2
}


//Rotationstate 3 to 2 , WallKick4
else if (rotationState===3 && array[(pointAY/50)-1][pointAX/50] !== 0 && array[(pointBY/50)-1][pointBX/50] === 0 && array[(pointCY/50)-1][pointCX/50] === 0 && 
array[pointCY/50][pointCX/50] === 0 && array[(pointCY/50)-1][(pointCX/50)+1] === 0 && (array[pointFY/50][(pointFX/50)+1] !== 0 || array[pointDY/50][pointDX/50] !== 0) && (array[pointIY/50][pointIX/50]  !== 0 || array[pointIY/50][(pointIX/50)+1] !== 0 || array[(pointIY/50)+1][pointIX/50] !== 0 ))
{console.log("hello")
clearRStateT3()
minusY(100)
plusX(50)
fillRStateT2()
rotationState = 2
}
//Rotaionstate 2 to 1
else if (rotationState === 2 && array[pointBY/50][pointBX/50]=== 0 )
{
clearRStateT2()
fillRStateT1 ()
rotationState = 1
} 

//Rotaionstate 2 to 1 , Wallkick 1
else if (rotationState === 2 && array[pointBY/50][pointBX/50] !== 0 && array[pointCY/50][pointCX/50] === 0 && array[pointIY/50][pointIX/50] === 0)
{
clearRStateT2()
plusX(50)
fillRStateT1()
rotationState = 1
}

//Rotaionstate 2 to 1 , Wallkick 3
else if (rotationState === 2 && array[(pointHY/50)+1][pointHX/50] === 0 && array[(pointHY/50)+2][pointHX/50] === 0 && array[(pointGY/50)+1][pointGX/50] === 0 && array[pointBY/50][pointBX/50] !== 0 && (array[pointCY/50][pointCX/50] !== 0 || array[pointIY/50][pointIX/50] !== 0))
{
clearRStateT2()
plusY(100)
fillRStateT1()
rotationState = 1
}

//Rotaionstate 2 to 1 , Wallkick 4

else if (rotationState === 2 && ( array[(pointHY/50)+2][pointHX/50] !== 0 || array[(pointGY/50)+1][pointGX/50] !== 0) && array[pointBY/50][pointBX/50] !== 0 && array[pointCY/50][pointCX/50] !== 0 && array[pointIY/50][pointIX/50] === 0 && array[(pointHY/50)+1][pointHX/50] === 0 && array[(pointIY/50)+1][pointIX/50] === 0  && array[(pointIY/50)+2][pointIX/50] === 0)
{
clearRStateT2()
plusY(100)
plusX(50)
fillRStateT1()
rotationState = 1
}
//Rotationstate 1 to 0
else if (rotationState === 1 && array[pointFY/50][pointFX/50]=== 0)
{
clearRStateT1()
fillRStateT0()
rotationState = 0
}

//Rotationstate 1 to 0 , Wallkick 1
else if (rotationState === 1 && array[pointFY/50][pointFX/50] !== 0 && array[pointDY/50][(pointDX/50)-1] === 0 && array[pointAY/50][pointAX/50] === 0)
{
       
       clearRStateT1()
       minusX(50)
       fillRStateT0()
       rotationState = 0
}
//Rotationstate 1 to 0 , Wallkick 2
else if (rotationState === 1 && array[(pointGY/50)][(pointGX/50)-1] === 0 && array[(pointGY/50)][(pointGX/50)] === 0 && array[pointFY/50][pointFX/50] !== 0 && array[pointDY/50][(pointDX/50)-1] !== 0 )
{ clearRStateT1()
minusX(50)
plusY(50)
fillRStateT0()
rotationState = 0
}

//Rotationstate 1 to 0 , Wallkick 3
else if (rotationState === 1 && (array[(pointGY/50)][(pointGX/50)-1] !== 0 || array[(pointGY/50)][(pointGX/50)] !== 0 )&& array[pointFY/50][pointFX/50] !== 0 && array[pointDY/50][(pointDX/50)-1] !== 0 && array[(pointAY/50)-1][pointAX/50] === 0 && array[(pointBY/50)-1][pointBX/50] === 0 && array[(pointCY/50)-1][pointCX/50] === 0 &&array[(pointBY/50)-2][pointBX/50] === 0)
{
clearRStateT1()
minusY(100)
fillRStateT0()
rotationState = 0     
}

//Rotationstate 1 to 0 , Wallkick 4
else if (rotationState === 1 && (array[(pointGY/50)][(pointGX/50)-1] !== 0 || array[(pointGY/50)][(pointGX/50)] !== 0 )&& array[pointFY/50][pointFX/50] !== 0 && array[pointDY/50][(pointDX/50)-1] !== 0 && (array[(pointCY/50)-1][pointCX/50] !== 0 || array[(pointBY/50)-2][pointBX/50] !== 0 )&& array[(pointAY/50)-1][pointAX/50] === 0 && array[(pointAY/50)-2][pointAX/50] === 0&& array[(pointAY/50)-1][(pointAX/50)-1] === 0 &&array[(pointBY/50)-1][pointBX/50] === 0)
{
clearRStateT1()
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
fillRStateT1 ()
rotationState = 1}

//Rotaionstate 0 to 1 , WallKick 1  
else if ( rotationState === 0 && array[pointHY/50][pointHX/50] !== 0 &&   array[pointCY/50][pointCX/50] === 0 && array[pointIY/50][pointIX/50] === 0  )
{
clearRStateT0 ()
plusX(50)
fillRStateT1 ()
rotationState = 1
}

//Rotaionstate 0 to 1 , WallKick 2 
else if (rotationState === 0 && array[pointIY/50][pointIX/50] !== 0 && array[pointHY/50][pointHX/50] !== 0 && array[pointCY/50][pointCX/50] === 0 && array[(pointCY/50)-1][pointCX/50] === 0 )
{
clearRStateT0 ()
plusX(50)
minusY(50)
fillRStateT1 ()
rotationState = 1
}

//Rotaionstate 0 to 1 , WallKick 4
else if (rotationState === 0 && array[pointIY/50][pointIX/50] === 0 && array[(pointIY/50)+1][pointIX/50] === 0 && array[(pointIY/50)+2][pointIX/50] === 0 && array[(pointHY/50)+1][pointHX/50] === 0 &&  array[pointCY/50][pointCX/50] !== 0 )
{
clearRStateT0 ()
plusY(100)
plusX(50)
fillRStateT1 ()
rotationState = 1
}

//Rotationstate 1 to 2
else if ( rotationState === 1 && array[pointFY/50][pointFX/50]=== 0 )
{
clearRStateT1()
fillRStateT2()
rotationState = 2
}

//Rotationstate 1 to 2 , Wallkick 1 
else if (rotationState===1 && array[pointFY/50][pointFX/50] !== 0 &&  array[pointGY/50][pointGX/50] === 0 && array[pointDY/50][(pointDX/50)-1] === 0)
{
clearRStateT1()
minusX(50)
fillRStateT2()
rotationState = 2}

//Rotationstate 1 to 2 , Wallkick 2
else if ( rotationState===1 && array[pointFY/50][pointFX/50] !== 0 && array[pointDY/50][(pointDX/50)-1] !== 0 && array[pointGY/50][pointGX/50] === 0 && array[pointGY/50][(pointGX/50)-1] === 0 && array[(pointGY/50)+1][pointGX/50] === 0 )
{
clearRStateT1()
minusX(50)
plusY(50)
fillRStateT2()
rotationState = 2
}

//Rotationstate 1 to 2 , Wallkick 3
else if (rotationState===1 && array[(pointAY/50)-1][pointAX/50] === 0 && array[(pointBY/50)-1][pointBX/50] === 0 && array[(pointCY/50)-1][pointCX/50] === 0 && array[pointFY/50][pointFX/50] !== 0 && array[pointDY/50][(pointDX/50)-1] !== 0 && (array[pointGY/50][pointGX/50] !== 0 || array[pointGY/50][(pointGX/50)-1] !== 0 || array[(pointGY/50)+1][pointGX/50] !== 0 ))
{
clearRStateT1()
minusY(100)
fillRStateT2()
rotationState = 2}

//Rotationstate 1 to 2 , Wallkick 4
else if (rotationState===1 && array[(pointAY/50)-1][pointAX/50] === 0 && array[pointAY/50][pointAX/50] === 0 && array[(pointAY/50)-1][(pointAX/50)-1] === 0 && array[(pointBY/50)-1][pointBX/50] === 0 && array[(pointCY/50)-1][pointCX/50] !== 0 && (array[pointFY/50][pointFX/50] !==0 ||  array[pointDY/50][(pointDX/50)-1] !== 0)&& (array[pointGY/50][pointGX/50] !== 0 || array[pointGY/50][(pointGX/50)-1] !== 0 || array[(pointGY/50)+1][pointGX/50] !== 0 ))
{
       
clearRStateT1()
minusY(100)
minusX(50)
fillRStateT2()
rotationState = 2
}

//Rotaionstate 2 to 3
else if (rotationState === 2 && array[pointBY/50][pointBX/50]=== 0 )
{
clearRStateT2()
fillRStateT3 ()
rotationState = 3} 

//Rotaionstate 2 to 3 , wallkick 1

else if (rotationState === 2 && array[pointBY/50][pointBX/50] !== 0 && array[pointAY/50][pointAX/50] === 0 && array[pointGY/50][pointGX/50] === 0)
{
clearRStateT2()
minusX(50)
fillRStateT3()
rotationState = 3
}

//Rotaionstate 2 to 3 , wallkick 3
else if (rotationState === 2 && array[(pointHY/50)+1][pointHX/50] === 0 && array[(pointHY/50)+2][pointHX/50] === 0 && array[(pointIY/50)+1][pointIX/50] === 0 && array[pointBY/50][pointBX/50] !== 0 && (array[pointAY/50][pointAX/50] !== 0 || array[pointGY/50][pointGX/50] !== 0))
{
clearRStateT2()
plusY(100)
fillRStateT3()
rotationState = 3
}

//Rotaionstate 2 to 3 , wallkick 4
else if (rotationState === 2 && ( array[(pointHY/50)+2][pointHX/50] !== 0 || array[(pointIY/50)+1][pointIX/50] !== 0) && array[pointBY/50][pointBX/50] !== 0 && array[pointAY/50][pointAX/50] !== 0 && array[pointGY/50][pointGX/50] === 0 && array[(pointHY/50)+1][pointHX/50] === 0 && array[(pointGY/50)+1][pointGX/50] === 0  && array[(pointGY/50)+2][pointGX/50] === 0)
{
clearRStateT2()
plusY(100)
minusX(50)
fillRStateT3()
rotationState = 3}

//Rotaionstate 3 to 0

else if (rotationState === 3 && array[pointDY/50][pointDX/50]=== 0)
{
       clearRStateT3()
       fillRStateT0()
       rotationState = 0
}
//Rotaionstate 3 to 0 , WallKick 1

else if (rotationState === 3 && array[pointDY/50][pointDX/50] !== 0 && array[pointFY/50][(pointFX/50)+1] === 0 && array[pointCY/50][pointCX/50] === 0)
{
       
       clearRStateT3()
       plusX(50)
       fillRStateT0()
       rotationState = 0
}
//Rotaionstate 3 to 0 , WallKick 2

else if (rotationState === 3 && array[(pointIY/50)][(pointIX/50)+1] === 0 && array[(pointIY/50)][(pointIX/50)] === 0 && array[pointDY/50][pointDX/50] !== 0 && array[pointFY/50][(pointFX/50)+1] !== 0 )
{
       
       clearRStateT3()
       plusX(50)
       plusY(50)
       fillRStateT0()
       rotationState = 0
}

//Rotaionstate 3 to 0 , WallKick 3

else if (rotationState === 3 && (array[(pointIY/50)][(pointIX/50)+1] !== 0 || array[(pointIY/50)][(pointIX/50)] !== 0 )&& array[pointDY/50][pointDX/50] !== 0 && array[pointFY/50][(pointFX/50)+1] !== 0 && array[(pointAY/50)-1][pointAX/50] === 0 && array[(pointBY/50)-1][pointBX/50] === 0 && array[(pointCY/50)-1][pointCX/50] === 0 &&array[(pointBY/50)-2][pointBX/50] === 0)
{
       
       clearRStateT3()
       minusY(100)
       fillRStateT0()
       rotationState = 0
}
//Rotaionstate 3 to 0 , WallKick 4

else if (rotationState === 3 && (array[(pointIY/50)][(pointIX/50)+1] !== 0 || array[(pointIY/50)][(pointIX/50)] !== 0 )&& array[pointDY/50][pointDX/50] !== 0 && array[pointFY/50][(pointFX/50)+1] !== 0 && (array[(pointAY/50)-1][pointAX/50] !== 0 || array[(pointBY/50)-2][pointBX/50] !== 0 )&& array[(pointCY/50)-1][pointCX/50] === 0 && array[(pointCY/50)-2][pointCX/50] === 0&& array[(pointCY/50)-1][(pointCX/50)+1] === 0 &&array[(pointBY/50)-1][pointBX/50] === 0)
{
       
       clearRStateT3()
       minusY(100)
       plusX(50)
       fillRStateT0()
       rotationState = 0
}

}






