let pontAX = 90
let pontAY = 0

let pontBX = 120
let pontBY = 0

let pontCX = 150
let pontCY = 0

let pontDX = 180
let pontDY = 0

let pontEX = 90
let pontEY = 30

let pontFX = 120
let pontFY = 30

let pontGX = 150
let pontGY = 30

let pontHX = 180
let pontHY = 30

let pontIX = 90
let pontIY = 60

let pontJX = 120
let pontJY = 60

let pontKX = 150
let pontKY = 60

let pontLX = 180
let pontLY = 60

let pontMX = 90
let pontMY = 90

let pontNX = 120
let pontNY = 90

let pontOX = 150
let pontOY = 90

let pontPX = 180
let pontPY = 90


let iAX = 91
let iAY = 1

let iBX = 121
let iBY = 1

let iCX = 151
let iCY = 1

let iDX = 181
let iDY = 1

let iEX = 91
let iEY = 31

let iFX = 121
let iFY = 31

let iGX = 151
let iGY = 31

let iHX = 181
let iHY = 31

let iIX = 91
let iIY = 61

let iJX = 121
let iJY = 61

let iKX = 151
let iKY = 61

let iLX = 181
let iLY = 61

let iMX = 91
let iMY = 91

let iNX = 121
let iNY = 91

let iOX = 151
let iOY = 91

let iPX = 181
let iPY = 91

function pY (amount) 
{
pontAY += amount
pontBY += amount
pontCY += amount
pontDY += amount
pontEY += amount
pontFY += amount
pontGY += amount
pontHY += amount
pontIY += amount
pontJY += amount
pontKY += amount
pontLY += amount
pontMY += amount
pontNY += amount
pontOY += amount
pontPY += amount

iAY += amount
iBY += amount
iCY += amount
iDY += amount
iEY += amount
iFY += amount
iGY += amount
iHY += amount
iIY += amount
iJY += amount
iKY += amount
iLY += amount
iMY += amount
iNY += amount
iOY += amount
iPY += amount

}
function mY (amount)
{
pontAY -= amount
pontBY -= amount
pontCY -= amount
pontDY -= amount
pontEY -= amount
pontFY -= amount
pontGY -= amount
pontHY -= amount
pontIY -= amount
pontJY -= amount
pontKY -= amount
pontLY -= amount
pontMY -= amount
pontNY -= amount
pontOY -= amount
pontPY -= amount

iAY -= amount
iBY -= amount
iCY -= amount
iDY -= amount
iEY -= amount
iFY -= amount
iGY -= amount
iHY -= amount
iIY -= amount
iJY -= amount
iKY -= amount
iLY -= amount
iMY -= amount
iNY -= amount
iOY -= amount
iPY -= amount



}
function pX (amount) 
{
pontAX += amount
pontBX += amount
pontCX += amount
pontDX += amount
pontEX += amount
pontFX += amount
pontGX += amount
pontHX += amount
pontIX += amount
pontJX += amount
pontKX += amount
pontLX += amount
pontMX += amount
pontNX += amount
pontOX += amount
pontPX += amount

iAX += amount
iBX += amount
iCX += amount
iDX += amount
iEX += amount
iFX += amount
iGX += amount
iHX += amount
iIX += amount
iJX += amount
iKX += amount
iLX += amount
iMX += amount
iNX += amount
iOX += amount
iPX += amount


}
function mX (amount) 
{
pontAX -= amount
pontBX -= amount
pontCX -= amount
pontDX -= amount
pontEX -= amount
pontFX -= amount
pontGX -= amount
pontHX -= amount
pontIX -= amount
pontJX -= amount
pontKX -= amount
pontLX -= amount
pontMX -= amount
pontNX -= amount
pontOX -= amount
pontPX -= amount

iAX -= amount
iBX -= amount
iCX -= amount
iDX -= amount
iEX -= amount
iFX -= amount
iGX -= amount
iHX -= amount
iIX -= amount
iJX -= amount
iKX -= amount
iLX -= amount
iMX -= amount
iNX -= amount
iOX -= amount
iPX -= amount
}

mY(30)
function fillRStateI0 () {
ctx.fillRect(iEX,iEY,28,28)
array[pontEY/30][pontEX/30] = 2

ctx.fillRect (iFX,iFY,28,28)
array[pontFY/30][pontFX/30] = 2


ctx.fillRect (iGX,iGY, 28,28)
array[pontGY/30][pontGX/30] = 2

ctx.fillRect (iHX,iHY,28,28)
array[pontHY/30][pontHX/30] = 2
}

function clearRStateI0() {
ctx.clearRect(iEX,iEY,28,28)
array[pontEY/30][pontEX/30] = 0

ctx.clearRect (iFX,iFY,28,28)
array[pontFY/30][pontFX/30] = 0

ctx.clearRect (iGX,iGY, 28,28)
array[pontGY/30][pontGX/30] = 0

ctx.clearRect (iHX,iHY,28,28)
array[pontHY/30][pontHX/30] = 0

}

function fillRStateI1 () {
ctx.fillRect(iCX,iCY,28,28)
array[pontCY/30][pontCX/30] = 2

ctx.fillRect (iKX,iKY,28,28)
array[pontKY/30][pontKX/30] = 2


ctx.fillRect (iGX,iGY, 28,28)
array[pontGY/30][pontGX/30] = 2

ctx.fillRect (iOX,iOY,28,28)
array[pontOY/30][pontOX/30] = 2
}

function clearRStateI1() {
ctx.clearRect(iCX,iCY,28,28)
array[pontCY/30][pontCX/30] = 0

ctx.clearRect (iKX,iKY,28,28)
array[pontKY/30][pontKX/30] = 0


ctx.clearRect (iGX,iGY, 28,28)
array[pontGY/30][pontGX/30] = 0

ctx.clearRect (iOX,iOY,28,28)
array[pontOY/30][pontOX/30] = 0

}

function fillRStateI2 () {
ctx.fillRect(iIX,iIY,28,28)
array[pontIY/30][pontIX/30] = 2

ctx.fillRect (iKX,iKY,28,28)
array[pontKY/30][pontKX/30] = 2


ctx.fillRect (iJX,iJY, 28,28)
array[pontJY/30][pontJX/30] = 2

ctx.fillRect (iLX,iLY,28,28)
array[pontLY/30][pontLX/30] = 2
}

function clearRStateI2() {
ctx.clearRect(iIX,iIY,28,28)
array[pontIY/30][pontIX/30] = 0

ctx.clearRect (iKX,iKY,28,28)
array[pontKY/30][pontKX/30] = 0


ctx.clearRect (iJX,iJY, 28,28)
array[pontJY/30][pontJX/30] = 0

ctx.clearRect (iLX,iLY,28,28)
array[pontLY/30][pontLX/30] = 0

}
function fillRStateI3 () {
ctx.fillRect(iBX,iBY,28,28)
array[pontBY/30][pontBX/30] = 2

ctx.fillRect (iFX,iFY,28,28)
array[pontFY/30][pontFX/30] = 2


ctx.fillRect (iJX,iJY, 28,28)
array[pontJY/30][pontJX/30] = 2

ctx.fillRect (iNX,iNY,28,28)
array[pontNY/30][pontNX/30] = 2
}

function clearRStateI3() {
ctx.clearRect(iBX,iBY,28,28)
array[pontBY/30][pontBX/30] = 0

ctx.clearRect (iFX,iFY,28,28)
array[pontFY/30][pontFX/30] = 0

ctx.clearRect (iJX,iJY, 28,28)
array[pontJY/30][pontJX/30] = 0

ctx.clearRect (iNX,iNY,28,28)
array[pontNY/30][pontNX/30] = 0

}


function moveDownI() {
i()
}
function moveLeftI () { if (rotationState === 0 &&  array[(pontEY/30)][(pontEX/30)-1] === 0)
//Left movement , rotationstate 0
{
clearRStateI0 ()
mX (30)
fillRStateI0 ()
}
//Left movement , rotationstate 1

else if (rotationState ===1 &&  array[(pontBY/30)][(pontBX/30)] === 0  &&  array[(pontFY/30)][(pontFX/30)] === 0  &&  array[(pontJY/30)][(pontJX/30)] === 0  &&  array[(pontNY/30)][(pontNX/30)] === 0)
{
clearRStateI1 ()
mX(30)
fillRStateI1()
}

//Left movement , rotationstate 2
else if (rotationState ===2 &&  array[(pontIY/30)][(pontIX/30)-1] === 0)
{
clearRStateI2 ()
mX(30)
fillRStateI2()
}

//Left movement , rotationstate 3
else if (rotationState === 3 &&  array[(pontAY/30)][(pontAX/30)] === 0  &&  array[(pontEY/30)][(pontEX/30)] === 0  &&  array[(pontIY/30)][(pontIX/30)] === 0  &&  array[(pontMY/30)][(pontMX/30)] === 0)
{
clearRStateI3 ()
mX(30)
fillRStateI3()
}

else {}}


function moveRightI () { if (rotationState === 0 &&  array[(pontHY/30)][(pontHX/30)+1] === 0)
//Left movement , rotationstate 0
{
clearRStateI0 ()
pX (30)
fillRStateI0 ()
}
//Right movement , rotation state 1
else if (rotationState ===1 &&  array[(pontDY/30)][(pontDX/30)] === 0  &&  array[(pontHY/30)][(pontHX/30)] === 0  &&  array[(pontLY/30)][(pontLX/30)] === 0  &&  array[(pontPY/30)][(pontPX/30)] === 0)
{
clearRStateI1 ()
pX(30)
fillRStateI1()
}

//Right movement , rotation state 2
else if (rotationState ===2 &&  array[(pontLY/30)][(pontLX/30)+1] === 0)
{
clearRStateI2 ()
pX(30)
fillRStateI2()
}


//Right movement, rotation state 3
else if (rotationState ===3 &&  array[(pontCY/30)][(pontCX/30)] === 0  &&  array[(pontGY/30)][(pontGX/30)] === 0  &&  array[(pontKY/30)][(pontKX/30)] === 0  &&  array[(pontOY/30)][(pontOX/30)] === 0)
{
clearRStateI3 ()
pX(30)
fillRStateI3()
}
  else {}}


function moveUpI () {

    
//Rotationstate 0 to 1 , WallKick 
 if (rotationState === 0  && array[(pontOY/30)+1][(pontOX/30)] === 0  &&  array[(pontKY/30)][(pontKX/30)] === 0 &&  array[(pontOY/30)][(pontOX/30)] === 0)
{
clearRStateI0()
pY(30)
fillRStateI1()
rotationState =1
}
//Rotationstate 0 to 1 
else if (rotationState === 0 && array[(pontKY/30)][(pontKX/30)] === 0 &&  array[(pontOY/30)][(pontOX/30)] === 0 && array[(pontCY/30)][(pontCX/30)] === 0)
{
clearRStateI0()
fillRStateI1()
rotationState =1
}

//Rotationstate 0 to 1 , WallKick2 
 else  if (rotationState === 0  && array[(pontCY/30)-1][(pontCX/30)] === 0 &&  array[(pontCY/30)][(pontCX/30)] === 0 && array[(pontCY/30)-2][(pontCX/30)] === 0 )
{
clearRStateI0()
mY(60)
fillRStateI1()
rotationState =1
}
//Rotationstate 1 to 2 
 else if (rotationState === 1  && array[(pontIY/30)][(pontIX/30)] === 0  &&  array[(pontJY/30)][(pontJX/30)] === 0 &&  array[(pontLY/30)][(pontLX/30)] === 0)
{
clearRStateI1()
fillRStateI2()
rotationState =2
}
//Rotationstate 1 to 2 Wallkick
 else if (rotationState === 1  && array[(pontIY/30)][(pontIX/30)] === 0  &&  array[(pontJY/30)][(pontJX/30)] === 0 &&  array[(pontIY/30)][(pontIX/30)-1] === 0)
{
clearRStateI1()
mX(30)
fillRStateI2()
rotationState =2
}
//Rotationstate 1 to 2 Wallkick 2
 else if (rotationState === 1  && array[(pontLY/30)][(pontLX/30)] === 0  &&  array[(pontLY/30)][(pontLX/30)+1] === 0 &&  array[(pontLY/30)][(pontLX/30)+2] === 0)
{
clearRStateI1()
pX(60)
fillRStateI2()
rotationState =2
}

//Rotationstate 2 to 3 
 else if (rotationState === 2  && array[(pontBY/30)][(pontBX/30)] === 0  &&  array[(pontFY/30)][(pontFX/30)] === 0 &&  array[(pontNY/30)][(pontNX/30)] === 0)
{
clearRStateI2()
fillRStateI3()
rotationState =3
}
//Rotationstate 2 to 3 Wallkick
 else if (rotationState === 2  && array[(pontBY/30)][(pontBX/30)] === 0  &&  array[(pontFY/30)][(pontFX/30)] === 0 &&  array[(pontBY/30)-1][(pontBX/30)] === 0)
{
clearRStateI2()
mY(30)
fillRStateI3()
rotationState =3
}
//Rotationstate 3 to 0 
else if (rotationState === 3  && array[(pontEY/30)][(pontEX/30)] === 0  &&  array[(pontGY/30)][(pontGX/30)] === 0 &&  array[(pontHY/30)][(pontHX/30)] === 0)
{
clearRStateI3()
fillRStateI0()
rotationState =0
}
//Rotationstate 3 to 0  Wallkick 
else if (rotationState === 3  && array[(pontEY/30)][(pontEX/30)] === 0  &&  array[(pontEY/30)][(pontEX/30)-1] === 0 &&  array[(pontEY/30)][(pontEX/30)-2] === 0)
{
clearRStateI3()
mX(60)
fillRStateI0()
rotationState =0
}
//Rotationstate 3 to 0 Wallkick 2 
else if (rotationState === 3  && array[(pontHY/30)][(pontHX/30)+1] === 0  &&  array[(pontGY/30)][(pontGX/30)] === 0 &&  array[(pontHY/30)][(pontHX/30)] === 0)
{
clearRStateI3()
pX(30)
fillRStateI0()
rotationState =0
}
}

function moveZI (){
//Rotationstate 0 to 3 Wallkick
if (rotationState === 0  && array[(pontNY/30)+1][(pontNX/30)] === 0  &&  array[(pontJY/30)][(pontJX/30)] === 0 &&  array[(pontNY/30)][(pontNX/30)] === 0)
{
clearRStateI0()
pY(30)
fillRStateI3()
rotationState =3
}
//Rotationstate 0 to 3 
else if (rotationState === 0  && array[(pontBY/30)][(pontBX/30)] === 0  &&  array[(pontJY/30)][(pontJX/30)] === 0 &&  array[(pontNY/30)][(pontNX/30)] === 0)
{
clearRStateI0()
fillRStateI3()
rotationState =3
}
//Rotationstate 0 to 3 Wallkick 2
else if (rotationState === 0  && array[(pontBY/30)][(pontBX/30)] === 0  &&  array[(pontBY/30)-1][(pontBX/30)] === 0 &&  array[(pontBY/30)-2][(pontBX/30)] === 0)
{
clearRStateI0()
mY(60)
fillRStateI3()
rotationState =3
}

//Rotationstate 3 to 2 
 else if (rotationState === 3  && array[(pontIY/30)][(pontIX/30)] === 0  &&  array[(pontKY/30)][(pontKX/30)] === 0 &&  array[(pontLY/30)][(pontLX/30)] === 0)
{
clearRStateI3()
fillRStateI2()
rotationState =2
}
//Rotationstate 3 to 2 Wallkick

 else if (rotationState === 3  && array[(pontLY/30)][(pontLX/30)] === 0  &&  array[(pontKY/30)][(pontKX/30)] === 0 &&  array[(pontLY/30)][(pontLX/30)+1] === 0)
{
clearRStateI3()
pX(30)
fillRStateI2()
rotationState =2
}
//Rotationstate 3 to 2 Wallkick 2

 else if (rotationState === 3  && array[(pontIY/30)][(pontIX/30)] === 0  &&  array[(pontIY/30)][(pontIX/30)-1] === 0 &&  array[(pontIY/30)][(pontIX/30)-2] === 0)
{
clearRStateI3()
mX(60)
fillRStateI2()
rotationState =2
}
//Rotationstate 2 to 1 
else if (rotationState === 2 && array[(pontGY/30)][(pontGX/30)] === 0 &&  array[(pontOY/30)][(pontOX/30)] === 0 && array[(pontCY/30)][(pontCX/30)] === 0)
{
clearRStateI2()
fillRStateI1()
rotationState =1
}
//Rotationstate 2 to 1 Wallkick 
else if (rotationState === 2 && array[(pontGY/30)][(pontGX/30)] === 0 &&  array[(pontCY/30)][(pontCX/30)] === 0 && array[(pontCY/30)-1][(pontCX/30)] === 0)
{
clearRStateI2()
mY(30)
fillRStateI1()
rotationState =1
}
//Rotationstate 1 to 0 
else if (rotationState === 1  && array[(pontEY/30)][(pontEX/30)] === 0  &&  array[(pontFY/30)][(pontFX/30)] === 0 &&  array[(pontHY/30)][(pontHX/30)] === 0)
{
clearRStateI1()
fillRStateI0()
rotationState =0
}
//Rotationstate 1 to 0 Wallkick
else if (rotationState === 1  && array[(pontHY/30)][(pontHX/30)] === 0  &&  array[(pontHY/30)][(pontHX/30)+1] === 0 &&  array[(pontHY/30)][(pontHX/30)+2] === 0)
{
clearRStateI1()
pX(60)
fillRStateI0()
rotationState =0
}
//Rotationstate 1 to 0 Wallkick 2
else if (rotationState === 1  && array[(pontEY/30)][(pontEX/30)] === 0  &&  array[(pontFY/30)][(pontFX/30)] === 0 &&  array[(pontEY/30)][(pontEX/30)-1] === 0)
{
clearRStateI1()
mX(30)
fillRStateI0()
rotationState =0
}
}






