function clearRStateO0 () {

ctx.clearRect(pBX,pBY,48,48)
array[pointBY/50][pointBX/50] = 0

ctx.clearRect (pCX,pCY, 48,48)
array[pointCY/50][pointCX/50] = 0

ctx.clearRect (pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 0

ctx.clearRect (pFX,pFY,48,48)
array[pointFY/50][pointFX/50] = 0

}
function fillRStateO0 () {
ctx.fillRect(pBX,pBY,48,48)
array[pointBY/50][pointBX/50] = 1

ctx.fillRect (pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 1


ctx.fillRect (pCX,pCY, 48,48)
array[pointCY/50][pointCX/50] = 1

ctx.fillRect (pFX,pFY,48,48)
array[pointFY/50][pointFX/50] = 1
}


function moveDownO() {
o()
}
function moveLeftO () { if (rotationState === 0 &&  array[(pointAY/50)][(pointAX/50)] === 0 && array[(pointDY/50)][(pointDX/50)] === 0 )
//Left movement , rotationstate 0
{
clearRStateO0 ()
minusX (50)
fillRStateO0 ()
}

else {}}


function moveRightO () { if (rotationState === 0 && array[(pointCY/50)][(pointCX/50)+1] === 0 && array[(pointFY/50)][(pointFX/50)+1] === 0 )
//Right movement , rotation state 0
{
clearRStateO0 ()
plusX(50)
fillRStateO0 ()
}
  else {}}

