function clearRStateO0 () {
    ctx.clearRect(pBX,pBY,28,28)
    array[pointBY/30][pointBX/30] = 0

    ctx.clearRect (pCX,pCY, 28,28)
    array[pointCY/30][pointCX/30] = 0

    ctx.clearRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 0

    ctx.clearRect (pFX,pFY,28,28)
    array[pointFY/30][pointFX/30] = 0
    

  ghostOremover()
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
    ghostO()
}

function moveDownO() {
    o()
    
}

function moveLeftO () { if (rotationState === 0  && array[(pointAY/30)][(pointAX/30)] === 0 && array[(pointDY/30)][(pointDX/30)] === 0 ) {
//Left movement , rotationstate 0
        clearRStateO0 ()
        minusX (30)
        fillRStateO0 ()
    }
}

function moveRightO () { if (rotationState === 0  && array[(pointCY/30)][(pointCX/30)+1] === 0 && array[(pointFY/30)][(pointFX/30)+1] === 0 ) {
//Right movement , rotation state 0
        clearRStateO0 ()
        plusX(30)
        fillRStateO0 ()
        
    }
}

function hardDropO () {
    for (let k =0 ; k<100; k++) {
        if (array[(pointHY/30)+k][pointHX/30] !==0 || array[(pointIY/30)+k][pointIX/30] !==0 ) {  
            clearRStateO0()
            plusY(k*30) 
            fillRStateO0()
            clearInterval(id)
            id = setInterval(o,0)
            hardDropScoring(k)
            break; // Zonder break werkt niet ??
            
        }
    }
}

function ghostO () {
    for (let k =pointHY/30 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0 || array[k][pointIX/30] !==0 ) ) {
            if (k-(pointHY/30)<1) {
                return
            }
            if (k-(pointHY/30)<2) {
                ctx.fillStyle = "#C5CDD8";           
                ctx.fillRect(pEX,(k-1)*30,28,28) 
                ctx.fillRect (pFX,(k-1)*30, 28,28)
                ctx.fillStyle = "#ffff00"
                return
            }

            ctx.fillStyle = "#C5CDD8";           
            ctx.fillRect(pBX,(k-2)*30,28,28)
            ctx.fillRect (pEX,(k-1)*30,28,28)
            ctx.fillRect (pCX,(k-2)*30, 28,28)
            ctx.fillRect (pFX,(k-1)*30,28,28)
            ctx.fillStyle = "#ffff00"
            break;
        } 
    }
}

function ghostOremover () {
    for (let k =pointHY/30 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0  || array[k][pointIX/30] !==0 ) ) {  
            ctx.clearRect(pBX,(k-2)*30,28,28)
            ctx.clearRect (pEX,(k-1)*30,28,28)
            ctx.clearRect (pCX,(k-2)*30, 28,28)
            ctx.clearRect (pFX,(k-1)*30,28,28)
            break;
        }
    }
}