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
iAX += amount
iBX += amount
iCX += amount
iDX +=amount
iEX += amount
iFX +=amount
iGX += amount
iHX += amount
iIX += amount

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
iAX -= amount
iBX -= amount
iCX -= amount
iDX -=amount
iEX -= amount
iFX -=amount
iGX -= amount
iHX -= amount
iIX -= amount

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