let pontAX = 150
let pontAY = 0

let pontBX = 200
let pontBY = 0

let pontCX = 250
let pontCY = 0

let pontDX = 300
let pontDY = 0

let pontEX = 150
let pontEY = 50

let pontFX = 200
let pontFY = 50

let pontGX = 250
let pontGY = 50

let pontHX = 300
let pontHY = 50

let pontIX = 150
let pontIY = 100

let pontJX = 200
let pontJY = 100

let pontKX = 250
let pontKY = 100

let pontLX = 300
let pontLY = 100

let pontMX = 150
let pontMY = 150

let pontNX = 200
let pontNY = 150

let pontOX = 250
let pontOY = 150

let pontPX = 300
let pontPY = 150


let iAX = 151
let iAY = 1

let iBX = 201
let iBY = 1

let iCX = 251
let iCY = 1

let iDX = 301
let iDY = 1

let iEX = 151
let iEY = 51

let iFX = 201
let iFY = 51

let iGX = 251
let iGY = 51

let iHX = 301
let iHY = 51

let iIX = 151
let iIY = 101

let iJX = 201
let iJY = 101

let iKX = 251
let iKY = 101

let iLX = 301
let iLY = 101

let iMX = 151
let iMY = 151

let iNX = 201
let iNY = 151

let iOX = 251
let iOY = 151

let iPX = 301
let iPY = 151

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

mY(50)
function fillRStateI0 () {
ctx.fillRect(iEX,iEY,48,48)
array[pontEY/50][pontEX/50] = 2

ctx.fillRect (iFX,iFY,48,48)
array[pontFY/50][pontFX/50] = 2


ctx.fillRect (iGX,iGY, 48,48)
array[pontGY/50][pontGX/50] = 2

ctx.fillRect (iHX,iHY,48,48)
array[pontHY/50][pontHX/50] = 2
}

function clearRStateI0() {
ctx.clearRect(iEX,iEY,48,48)
array[pontEY/50][pontEX/50] = 0

ctx.clearRect (iFX,iFY,48,48)
array[pontFY/50][pontFX/50] = 0

ctx.clearRect (iGX,iGY, 48,48)
array[pontGY/50][pontGX/50] = 0

ctx.clearRect (iHX,iHY,48,48)
array[pontHY/50][pontHX/50] = 0

}

function fillRStateI1 () {
ctx.fillRect(iCX,iCY,48,48)
array[pontCY/50][pontCX/50] = 2

ctx.fillRect (iKX,iKY,48,48)
array[pontKY/50][pontKX/50] = 2


ctx.fillRect (iGX,iGY, 48,48)
array[pontGY/50][pontGX/50] = 2

ctx.fillRect (iOX,iOY,48,48)
array[pontOY/50][pontOX/50] = 2
}

function clearRStateI1() {
ctx.clearRect(iCX,iCY,48,48)
array[pontCY/50][pontCX/50] = 0

ctx.clearRect (iKX,iKY,48,48)
array[pontKY/50][pontKX/50] = 0


ctx.clearRect (iGX,iGY, 48,48)
array[pontGY/50][pontGX/50] = 0

ctx.clearRect (iOX,iOY,48,48)
array[pontOY/50][pontOX/50] = 0

}

function fillRStateI2 () {
ctx.fillRect(iIX,iIY,48,48)
array[pontIY/50][pontIX/50] = 2

ctx.fillRect (iKX,iKY,48,48)
array[pontKY/50][pontKX/50] = 2


ctx.fillRect (iJX,iJY, 48,48)
array[pontJY/50][pontJX/50] = 2

ctx.fillRect (iLX,iLY,48,48)
array[pontLY/50][pontLX/50] = 2
}

function clearRStateI2() {
ctx.clearRect(iIX,iIY,48,48)
array[pontIY/50][pontIX/50] = 0

ctx.clearRect (iKX,iKY,48,48)
array[pontKY/50][pontKX/50] = 0


ctx.clearRect (iJX,iJY, 48,48)
array[pontJY/50][pontJX/50] = 0

ctx.clearRect (iLX,iLY,48,48)
array[pontLY/50][pontLX/50] = 0

}
function fillRStateI3 () {
ctx.fillRect(iBX,iBY,48,48)
array[pontBY/50][pontBX/50] = 2

ctx.fillRect (iFX,iFY,48,48)
array[pontFY/50][pontFX/50] = 2


ctx.fillRect (iJX,iJY, 48,48)
array[pontJY/50][pontJX/50] = 2

ctx.fillRect (iNX,iNY,48,48)
array[pontNY/50][pontNX/50] = 2
}

function clearRStateI3() {
ctx.clearRect(iBX,iBY,48,48)
array[pontBY/50][pontBX/50] = 0

ctx.clearRect (iFX,iFY,48,48)
array[pontFY/50][pontFX/50] = 0

ctx.clearRect (iJX,iJY, 48,48)
array[pontJY/50][pontJX/50] = 0

ctx.clearRect (iNX,iNY,48,48)
array[pontNY/50][pontNX/50] = 0

}


function moveDownI() {
i()
}
function moveLeftI () { if (rotationState === 0 &&  array[(pontEY/50)][(pontEX/50)-1] === 0)
//Left movement , rotationstate 0
{
clearRStateI0 ()
mX (50)
fillRStateI0 ()
}
//Left movement , rotationstate 1

else if (rotationState ===1 &&  array[(pontBY/50)][(pontBX/50)] === 0  &&  array[(pontFY/50)][(pontFX/50)] === 0  &&  array[(pontJY/50)][(pontJX/50)] === 0  &&  array[(pontNY/50)][(pontNX/50)] === 0)
{
clearRStateI1 ()
mX(50)
fillRStateI1()
}

//Left movement , rotationstate 2
else if (rotationState ===2 &&  array[(pontIY/50)][(pontIX/50)-1] === 0)
{
clearRStateI2 ()
mX(50)
fillRStateI2()
}

//Left movement , rotationstate 3
else if (rotationState === 3 &&  array[(pontAY/50)][(pontAX/50)] === 0  &&  array[(pontEY/50)][(pontEX/50)] === 0  &&  array[(pontIY/50)][(pontIX/50)] === 0  &&  array[(pontMY/50)][(pontMX/50)] === 0)
{
clearRStateI3 ()
mX(50)
fillRStateI3()
}

else {}}


function moveRightI () { if (rotationState === 0 &&  array[(pontHY/50)][(pontHX/50)+1] === 0)
//Left movement , rotationstate 0
{
clearRStateI0 ()
pX (50)
fillRStateI0 ()
}
//Right movement , rotation state 1
else if (rotationState ===1 &&  array[(pontDY/50)][(pontDX/50)] === 0  &&  array[(pontHY/50)][(pontHX/50)] === 0  &&  array[(pontLY/50)][(pontLX/50)] === 0  &&  array[(pontPY/50)][(pontPX/50)] === 0)
{
clearRStateI1 ()
pX(50)
fillRStateI1()
}

//Right movement , rotation state 2
else if (rotationState ===2 &&  array[(pontLY/50)][(pontLX/50)+1] === 0)
{
clearRStateI2 ()
pX(50)
fillRStateI2()
}


//Right movement, rotation state 3
else if (rotationState ===3 &&  array[(pontCY/50)][(pontCX/50)] === 0  &&  array[(pontGY/50)][(pontGX/50)] === 0  &&  array[(pontKY/50)][(pontKX/50)] === 0  &&  array[(pontOY/50)][(pontOX/50)] === 0)
{
clearRStateI3 ()
pX(50)
fillRStateI3()
}
  else {}}


function moveUpI () {

    
//Rotationstate 0 to 1 , WallKick 
 if (rotationState === 0  && array[(pontOY/50)+1][(pontOX/50)] === 0  &&  array[(pontKY/50)][(pontKX/50)] === 0 &&  array[(pontOY/50)][(pontOX/50)] === 0)
{
clearRStateI0()
pY(50)
fillRStateI1()
rotationState =1
}
//Rotationstate 0 to 1 
else if (rotationState === 0 && array[(pontKY/50)][(pontKX/50)] === 0 &&  array[(pontOY/50)][(pontOX/50)] === 0 && array[(pontCY/50)][(pontCX/50)] === 0)
{
clearRStateI0()
fillRStateI1()
rotationState =1
}

//Rotationstate 0 to 1 , WallKick2 
 else  if (rotationState === 0  && array[(pontCY/50)-1][(pontCX/50)] === 0 &&  array[(pontCY/50)][(pontCX/50)] === 0 && array[(pontCY/50)-2][(pontCX/50)] === 0 )
{
clearRStateI0()
mY(100)
fillRStateI1()
rotationState =1
}
//Rotationstate 1 to 2 
 else if (rotationState === 1  && array[(pontIY/50)][(pontIX/50)] === 0  &&  array[(pontJY/50)][(pontJX/50)] === 0 &&  array[(pontLY/50)][(pontLX/50)] === 0)
{
clearRStateI1()
fillRStateI2()
rotationState =2
}
//Rotationstate 1 to 2 Wallkick
 else if (rotationState === 1  && array[(pontIY/50)][(pontIX/50)] === 0  &&  array[(pontJY/50)][(pontJX/50)] === 0 &&  array[(pontIY/50)][(pontIX/50)-1] === 0)
{
clearRStateI1()
mX(50)
fillRStateI2()
rotationState =2
}
//Rotationstate 1 to 2 Wallkick 2
 else if (rotationState === 1  && array[(pontLY/50)][(pontLX/50)] === 0  &&  array[(pontLY/50)][(pontLX/50)+1] === 0 &&  array[(pontLY/50)][(pontLX/50)+2] === 0)
{
clearRStateI1()
pX(100)
fillRStateI2()
rotationState =2
}

//Rotationstate 2 to 3 
 else if (rotationState === 2  && array[(pontBY/50)][(pontBX/50)] === 0  &&  array[(pontFY/50)][(pontFX/50)] === 0 &&  array[(pontNY/50)][(pontNX/50)] === 0)
{
clearRStateI2()
fillRStateI3()
rotationState =3
}
//Rotationstate 2 to 3 Wallkick
 else if (rotationState === 2  && array[(pontBY/50)][(pontBX/50)] === 0  &&  array[(pontFY/50)][(pontFX/50)] === 0 &&  array[(pontBY/50)-1][(pontBX/50)] === 0)
{
clearRStateI2()
mY(50)
fillRStateI3()
rotationState =3
}
//Rotationstate 3 to 0 
else if (rotationState === 3  && array[(pontEY/50)][(pontEX/50)] === 0  &&  array[(pontGY/50)][(pontGX/50)] === 0 &&  array[(pontHY/50)][(pontHX/50)] === 0)
{
clearRStateI3()
fillRStateI0()
rotationState =0
}
//Rotationstate 3 to 0  Wallkick 
else if (rotationState === 3  && array[(pontEY/50)][(pontEX/50)] === 0  &&  array[(pontEY/50)][(pontEX/50)-1] === 0 &&  array[(pontEY/50)][(pontEX/50)-2] === 0)
{
clearRStateI3()
mX(100)
fillRStateI0()
rotationState =0
}
//Rotationstate 3 to 0 Wallkick 2 
else if (rotationState === 3  && array[(pontHY/50)][(pontHX/50)+1] === 0  &&  array[(pontGY/50)][(pontGX/50)] === 0 &&  array[(pontHY/50)][(pontHX/50)] === 0)
{
clearRStateI3()
pX(50)
fillRStateI0()
rotationState =0
}
}

function moveZI (){
//Rotationstate 0 to 3 Wallkick
if (rotationState === 0  && array[(pontNY/50)+1][(pontNX/50)] === 0  &&  array[(pontJY/50)][(pontJX/50)] === 0 &&  array[(pontNY/50)][(pontNX/50)] === 0)
{
clearRStateI0()
pY(50)
fillRStateI3()
rotationState =3
}
//Rotationstate 0 to 3 
else if (rotationState === 0  && array[(pontBY/50)][(pontBX/50)] === 0  &&  array[(pontJY/50)][(pontJX/50)] === 0 &&  array[(pontNY/50)][(pontNX/50)] === 0)
{
clearRStateI0()
fillRStateI3()
rotationState =3
}
//Rotationstate 0 to 3 Wallkick 2
else if (rotationState === 0  && array[(pontBY/50)][(pontBX/50)] === 0  &&  array[(pontBY/50)-1][(pontBX/50)] === 0 &&  array[(pontBY/50)-2][(pontBX/50)] === 0)
{
clearRStateI0()
mY(100)
fillRStateI3()
rotationState =3
}

//Rotationstate 3 to 2 
 else if (rotationState === 3  && array[(pontIY/50)][(pontIX/50)] === 0  &&  array[(pontKY/50)][(pontKX/50)] === 0 &&  array[(pontLY/50)][(pontLX/50)] === 0)
{
clearRStateI3()
fillRStateI2()
rotationState =2
}
//Rotationstate 3 to 2 Wallkick

 else if (rotationState === 3  && array[(pontLY/50)][(pontLX/50)] === 0  &&  array[(pontKY/50)][(pontKX/50)] === 0 &&  array[(pontLY/50)][(pontLX/50)+1] === 0)
{
clearRStateI3()
pX(50)
fillRStateI2()
rotationState =2
}
//Rotationstate 3 to 2 Wallkick 2

 else if (rotationState === 3  && array[(pontIY/50)][(pontIX/50)] === 0  &&  array[(pontIY/50)][(pontIX/50)-1] === 0 &&  array[(pontIY/50)][(pontIX/50)-2] === 0)
{
clearRStateI3()
mX(100)
fillRStateI2()
rotationState =2
}
//Rotationstate 2 to 1 
else if (rotationState === 2 && array[(pontGY/50)][(pontGX/50)] === 0 &&  array[(pontOY/50)][(pontOX/50)] === 0 && array[(pontCY/50)][(pontCX/50)] === 0)
{
clearRStateI2()
fillRStateI1()
rotationState =1
}
//Rotationstate 2 to 1 Wallkick 
else if (rotationState === 2 && array[(pontGY/50)][(pontGX/50)] === 0 &&  array[(pontCY/50)][(pontCX/50)] === 0 && array[(pontCY/50)-1][(pontCX/50)] === 0)
{
clearRStateI2()
mY(50)
fillRStateI1()
rotationState =1
}
//Rotationstate 1 to 0 
else if (rotationState === 1  && array[(pontEY/50)][(pontEX/50)] === 0  &&  array[(pontFY/50)][(pontFX/50)] === 0 &&  array[(pontHY/50)][(pontHX/50)] === 0)
{
clearRStateI1()
fillRStateI0()
rotationState =0
}
//Rotationstate 1 to 0 Wallkick
else if (rotationState === 1  && array[(pontHY/50)][(pontHX/50)] === 0  &&  array[(pontHY/50)][(pontHX/50)+1] === 0 &&  array[(pontHY/50)][(pontHX/50)+2] === 0)
{
clearRStateI1()
pX(100)
fillRStateI0()
rotationState =0
}
//Rotationstate 1 to 0 Wallkick 2
else if (rotationState === 1  && array[(pontEY/50)][(pontEX/50)] === 0  &&  array[(pontFY/50)][(pontFX/50)] === 0 &&  array[(pontEY/50)][(pontEX/50)-1] === 0)
{
clearRStateI1()
mX(50)
fillRStateI0()
rotationState =0
}
}






