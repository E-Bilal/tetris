function clearRStateO0 () {

ctx.clearRect(pBX,pBY,28,28)
array[pointBY/30][pointBX/30] = 0

ctx.clearRect (pCX,pCY, 28,28)
array[pointCY/30][pointCX/30] = 0

ctx.clearRect (pEX,pEY,28,28)
array[pointEY/30][pointEX/30] = 0

ctx.clearRect (pFX,pFY,28,28)
array[pointFY/30][pointFX/30] = 0

}
function fillRStateO0 () {
ctx.fillRect(pBX,pBY,28,28)
array[pointBY/30][pointBX/30] = 1

ctx.fillRect (pEX,pEY,28,28)
array[pointEY/30][pointEX/30] = 1


ctx.fillRect (pCX,pCY, 28,28)
array[pointCY/30][pointCX/30] = 1

ctx.fillRect (pFX,pFY,28,28)
array[pointFY/30][pointFX/30] = 1
}


function moveDownO() {

o()


}
function moveLeftO () { if (rotationState === 0  && array[(pointAY/30)][(pointAX/30)] === 0 && array[(pointDY/30)][(pointDX/30)] === 0 )
//Left movement , rotationstate 0
{
clearRStateO0 ()
minusX (30)
fillRStateO0 ()

}

else {}}


function moveRightO () { if (rotationState === 0  && array[(pointCY/30)][(pointCX/30)+1] === 0 && array[(pointFY/30)][(pointFX/30)+1] === 0 )
//Right movement , rotation state 0
{
clearRStateO0 ()
plusX(30)
fillRStateO0 ()

}
  else {}}



 


function hardDropO () {
       for (let k =0 ; k<100; k++) {
           if (array[(pointHY/30)+k][pointHX/30] !==0 || array[(pointIY/30)+k][pointIX/30] !==0 )

{     
       clearRStateO0()

multiplY(0)
plusHardDrop(0)
plusY(k*30) 
fillRStateO0()
clearInterval(id)
id = setInterval(o,0) 
break; // Zonder break werkt niet ??
}}}