function fillRStateJ2 () {
ctx.fillRect(pAX,pAY,48,48)
array[pointAY/50][pointAX/50] = 2

ctx.fillRect (pBX,pBY, 48,48)
array[pointBY/50][pointBX/50] = 2

ctx.fillRect (pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 2

ctx.fillRect (pHX,pHY,48,48)
array[pointHY/50][pointHX/50] = 2
}

function clearRStateJ2 () {
ctx.clearRect(pAX,pAY,48,48)
array[pointAY/50][pointAX/50] = 0

ctx.clearRect (pBX,pBY, 48,48)
array[pointBY/50][pointBX/50] = 0

ctx.clearRect (pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 0

ctx.clearRect (pHX,pHY,48,48)
array[pointHY/50][pointHX/50] = 0
}