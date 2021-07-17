
function clearRStateJ0 () {

    ctx.clearRect(pAX,pAY,28,28)
    array[pointAY/30][pointAX/30] = 0

    ctx.clearRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 0

    ctx.clearRect (pDX,pDY, 28,28)
    array[pointDY/30][pointDX/30] = 0

    ctx.clearRect (pFX,pFY,28,28)
    array[pointFY/30][pointFX/30] = 0

    ghostJ0remover()
}

function fillRStateJ0 () {
    ctx.fillRect(pAX,pAY,28,28)
    array[pointAY/30][pointAX/30] = 7

    ctx.fillRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 7

    ctx.fillRect (pDX,pDY, 28,28)
    array[pointDY/30][pointDX/30] = 7

    ctx.fillRect (pFX,pFY,28,28)
    array[pointFY/30][pointFX/30] = 7

    ghostJ0()
}


function fillRStateJ1 () {
    ctx.fillRect(pBX,pBY,28,28)
    array[pointBY/30][pointBX/30] = 7

    ctx.fillRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 7

    ctx.fillRect (pCX,pCY, 28,28)
    array[pointCY/30][pointCX/30] = 7

    ctx.fillRect (pHX,pHY,28,28)
    array[pointHY/30][pointHX/30] = 7

    ghostJ1()
}

function clearRStateJ1 () 
{
    ctx.clearRect(pBX,pBY,28,28)
    array[pointBY/30][pointBX/30] = 0

    ctx.clearRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 0

    ctx.clearRect (pCX,pCY, 28,28)
    array[pointCY/30][pointCX/30] = 0

    ctx.clearRect (pHX,pHY,28,28)
    array[pointHY/30][pointHX/30] = 0

    ghostJ1remover()
}

function fillRStateJ2 () {
    ctx.fillRect(pDX,pDY,28,28)
    array[pointDY/30][pointDX/30] = 7

    ctx.fillRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 7

    ctx.fillRect (pFX,pFY, 28,28)
    array[pointFY/30][pointFX/30] = 7

    ctx.fillRect (pIX,pIY,28,28)
    array[pointIY/30][pointIX/30] = 7

    ghostJ2()
}

function clearRStateJ2 () {
    ctx.clearRect(pDX,pDY,28,28)
    array[pointDY/30][pointDX/30] = 0

    ctx.clearRect(pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 0

    ctx.clearRect(pFX,pFY, 28,28)
    array[pointFY/30][pointFX/30] = 0

    ctx.clearRect(pIX,pIY,28,28)
    array[pointIY/30][pointIX/30] = 0

    ghostJ2Remover()

}



function fillRStateJ3 () {
    ctx.fillRect (pBX,pBY, 28,28)
    array[pointBY/30][pointBX/30] = 7

    ctx.fillRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 7

    ctx.fillRect (pHX,pHY,28,28)
    array[pointHY/30][pointHX/30] = 7

    ctx.fillRect(pGX,pGY,28,28)
    array[pointGY/30][pointGX/30] = 7

    ghostJ3()
}

function clearRStateJ3 () {
    ctx.clearRect (pBX,pBY, 28,28)
    array[pointBY/30][pointBX/30] = 0

    ctx.clearRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 0

    ctx.clearRect (pHX,pHY,28,28)
    array[pointHY/30][pointHX/30] = 0

    ctx.clearRect(pGX,pGY,28,28)
    array[pointGY/30][pointGX/30] = 0

    ghostJ3Remover()
}

function moveDownJ() {
j()
}
function moveLeftJ () { if (rotationState === 0 && counter < array.length-1 && array[(pointAY/30)][(pointAX/30)-1] === 0 && array[(pointDY/30)][(pointDX/30)-1] === 0 )
//Left movement , rotationstate 0
{
clearRStateJ0 ()
minusX (30)
fillRStateJ0 ()
}
//Left movement , rotationstate 1

else if (rotationState === 1 && counter < array.length-1 && array[(pointAY/30)][(pointAX/30)] === 0 && array[(pointDY/30)][(pointDX/30)] === 0  && array[(pointGY/30)][(pointGX/30)] === 0  )

{
clearRStateJ1 ()
minusX (30)
fillRStateJ1 ()
}

//Left movement , rotationstate 2

else if (rotationState === 2 && counter < array.length-1 && array[(pointDY/30)][(pointDX/30)-1] === 0 && array[(pointHY/30)][(pointHX/30)] === 0  )

{
clearRStateJ2()
minusX (30)
fillRStateJ2()
}

//Left movement , rotationstate 3
else if (rotationState === 3 && counter < array.length-1 && array[(pointAY/30)][(pointAX/30)] === 0 && array[(pointDY/30)][(pointDX/30)] === 0 && array[(pointGY/30)][(pointGX/30)-1] === 0  )

{
clearRStateJ3 ()
minusX (30)
fillRStateJ3 ()
}
else {}}


function moveRightJ () { if (rotationState === 0 &&counter < array.length-1 && array[(pointBY/30)][(pointBX/30)] === 0 && array[(pointFY/30)][(pointFX/30)+1] === 0 )
//Right movement , rotation state 0
{
clearRStateJ0 ()
plusX(30)
fillRStateJ0 ()
}

//Right movement , rotation state 1
else if (rotationState === 1 && array[pointCY/30][(pointCX/30)+1]=== 0 && array[pointFY/30][pointFX/30]=== 0 && array[pointIY/30][(pointIX/30)]=== 0 )
{
clearRStateJ1 ()
plusX(30)
fillRStateJ1()
}

//Right movement , rotation state 2
else if (rotationState === 2  && array[(pointFY/30)][(pointFX/30)+1] === 0 && array[(pointIY/30)][(pointIX/30)+1] === 0)
{console.log("ss")
clearRStateJ2 ()
plusX(30)
fillRStateJ2 ()
}

//Right movement, rotation state 3
else if (rotationState === 3 && counter < array.length-1 && array[(pointCY/30)][(pointCX/30)] === 0 && array[(pointFY/30)][(pointFX/30)] === 0 && array[(pointIY/30)][(pointIX/30)] === 0)
{
clearRStateJ3()
plusX(30)
fillRStateJ3()
}
  else {}}


function moveUpJ () {
//Rotationstate 0 to 1 
if (rotationState === 0 && array[pointBY/30][pointBX/30]=== 0 && array[pointHY/30][pointHX/30]=== 0 && array[pointCY/30][pointCX/30]=== 0)
{
clearRStateJ0()
fillRStateJ1()
rotationState =1
}

//Rotationstate 0 to 1 , WallKick 
else if (rotationState === 0 && array[pointBY/30][pointBX/30] === 0 && array[(pointBY/30)-1][pointBX/30] === 0 && array[(pointCY/30)-1][pointCX/30] === 0)
{
clearRStateJ0()
minusY(30)
fillRStateJ1()
rotationState =1
}


//Rotationstate 1 to 2
else if (rotationState===1 && array[pointDY/30][pointDX/30] === 0 &&  array[pointIY/30][pointIX/30] === 0 && array[pointFY/30][(pointFX/30)] === 0)
{
clearRStateJ1()
fillRStateJ2()
rotationState = 2
}

//Rotationstate 1 to 2 , WallKick
else if (rotationState===1 &&  array[pointFY/30][(pointFX/30)] === 0 && array[pointFY/30][(pointFX/30)+1] === 0 && array[pointIY/30][(pointIX/30)+1] === 0 )
{
clearRStateJ1()
plusX(30)
fillRStateJ2()
rotationState = 2
}

//Rotationstate 2 to 3 
else if (rotationState === 2 && array[pointBY/30][(pointBX/30)] === 0 && array[pointHY/30][pointHX/30]=== 0 && array[pointGY/30][(pointGX/30)] === 0)
{
clearRStateJ2()
fillRStateJ3()
rotationState = 3
}
//Rotationstate 3 to 0
else if (rotationState === 3 && array[pointAY/30][(pointAX/30)] === 0 && array[pointDY/30][pointDX/30]=== 0 && array[pointFY/30][(pointFX/30)] === 0)


{
clearRStateJ3()
fillRStateJ0()
rotationState = 0
}

//Rotationstate 3 to 0 Wallkick
else if (rotationState === 3 && array[pointAY/30][(pointAX/30)-1] === 0 && array[pointDY/30][(pointDX/30)-1] === 0 && array[pointDY/30][pointDX/30]=== 0)
{
clearRStateJ3()
minusX(30)
fillRStateJ0()
rotationState = 0
}
}


function moveZJ (){
//Rotationstate 0 to 3 
if ( rotationState===0 && array[pointBY/30][pointBX/30] === 0 &&  array[pointHY/30][pointHX/30] === 0 &&array[pointGY/30][pointGX/30]=== 0 )
{
clearRStateJ0()
fillRStateJ3()
rotationState = 3
}

//Rotationstate 0 to 3 , WallKick 
else if (rotationState === 0 && array[pointBY/30][pointBX/30] === 0 && array[(pointBY/30)-1][pointBX/30] === 0 )
{
clearRStateJ0()
minusY(30)
fillRStateJ3()
rotationState =3
}

//Rotationstate 3 to 2
else if (rotationState===3 && array[pointDY/30][pointDX/30] === 0 &&  array[pointIY/30][pointIX/30] === 0 && array[pointFY/30][(pointFX/30)] === 0)
{
clearRStateJ3()
fillRStateJ2()
rotationState = 2
}
//Rotationstate 3 to 2 Wallkick
else if (rotationState===3 && array[pointDY/30][pointDX/30] === 0  && array[pointDY/30][(pointDX/30)-1] === 0)
{
clearRStateJ3()
minusX(30)
fillRStateJ2()
rotationState = 2
}

//Rotationstate 2 to 1 
else if (rotationState === 2 && array[pointBY/30][pointBX/30]=== 0 && array[pointHY/30][pointHX/30]=== 0 && array[pointCY/30][pointCX/30]=== 0)
{
clearRStateJ2()
fillRStateJ1()
rotationState =1
}
//Rotationstate 1 to 0
else if (rotationState === 1 && array[pointAY/30][(pointAX/30)] === 0 && array[pointDY/30][(pointDX/30)] === 0 && array[pointFY/30][pointFX/30]=== 0)
{
clearRStateJ1()
fillRStateJ0()
rotationState = 0
}
//Rotationstate 1 to 0 Wallkick
else if (rotationState===1 && array[pointFY/30][pointFX/30] === 0 &&  array[pointFY/30][(pointFX/30)+1] === 0 && array[pointCY/30][(pointCX/30)+1] === 0)
{
clearRStateJ1()
plusX(30)
fillRStateJ0()
rotationState = 0
}
}



function hardDropJ () {
       for (let k =0 ; k<100; k++) {
           if (rotationState === 0 && (array[(pointGY/30)+k][pointGX/30]!==0 || array[(pointHY/30)+k][pointHX/30]!==0 ||array[(pointIY/30)+k][pointIX/30] !==0))

{   
clearRStateJ0()
plusY(k*30) 
fillRStateJ0()
clearInterval(id6)
id6 = setInterval(j,0)
            hardDropScoring(k)

break; 
}

else if ( rotationState === 1 && (array[(pointHY/30)+1+k][pointHX/30]!==0 || array[(pointFY/30)+k][pointFX/30]!==0)){
    
clearRStateJ1()
plusY(k*30) 
fillRStateJ1()
clearInterval(id6)
id6 = setInterval(j,0) 
            hardDropScoring(k)

break; 
}
else if (rotationState === 2 && (array[(pointHY/30)+k][pointHX/30]!==0 || array[(pointGY/30)+k][pointGX/30]!==0 || array[(pointIY/30)+1+k][pointIX/30]!==0)){ 

clearRStateJ2()
plusY(k*30) 
fillRStateJ2()
clearInterval(id6)
id6 = setInterval(j,0) 
            hardDropScoring(k)

break; 
}
else if (rotationState === 3 && (array[(pointHY/30)+1+k][pointHX/30]!==0 || array[(pointGY/30)+1+k][pointGX/30]!==0))
{
clearRStateJ3()
plusY(k*30) 
fillRStateJ3()
clearInterval(id6)
id6 = setInterval(j,0)
            hardDropScoring(k)

break; 
}


}}
function ghostJ0 () {
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
            ctx.fillStyle = "#2e8bc0"
                return
            }

            ctx.fillStyle = "#C5CDD8";           
            ctx.fillRect(pAX,(k-2)*30,28,28)
            ctx.fillRect (pEX,(k-1)*30,28,28)
            ctx.fillRect (pDX,(k-1)*30, 28,28)
            ctx.fillRect (pFX,(k-1)*30,28,28)
            ctx.fillStyle = "#2e8bc0"
            break;
        } 
    }
}

function ghostJ0remover () {
    for (let k =pointHY/30 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0  || array[k][pointIX/30] !==0 || array[k][pointGX/30] !==0) ) {  
            ctx.clearRect(pAX,(k-2)*30,28,28)
            ctx.clearRect (pEX,(k-1)*30,28,28)
            ctx.clearRect (pDX,(k-1)*30, 28,28)
            ctx.clearRect (pFX,(k-1)*30,28,28)
            break;
        }
    }
}

function ghostJ1 () {
    for (let k =(pointHY/30)+1 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0 || array[k-2][pointIX/30] !==0) ) {
            if (k-(pointHY/30)<2) {
                return
            }
            if (k-(pointHY/30)<3) {
                ctx.fillStyle = "#C5CDD8";           
                ctx.fillRect (pHX,(k-1)*30, 28,28)
                ctx.fillRect (pCX,(k-3)*30,28,28)
                ctx.fillStyle = "#2e8bc0"
                return
            }

            if (k-(pointHY/30)<4) {
                ctx.fillStyle = "#C5CDD8";           
                ctx.fillRect (pEX,(k-2)*30,28,28)
                ctx.fillRect (pCX,(k-3)*30,28,28)
                ctx.fillRect (pHX,(k-1)*30, 28,28)
                ctx.fillStyle = "#2e8bc0"
                return
            }

            ctx.fillStyle = "#C5CDD8";           
            ctx.fillRect(pBX,(k-3)*30,28,28)
            ctx.fillRect (pEX,(k-2)*30,28,28)
            ctx.fillRect (pCX,(k-3)*30, 28,28)
            ctx.fillRect (pHX,(k-1)*30,28,28)
            ctx.fillStyle = "#2e8bc0"
            break;
        } 
    }
}

function ghostJ1remover () {
    for (let k =(pointHY/30)+1 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0 || array[k-2][pointIX/30] !==0)  ) {  
            ctx.clearRect(pBX,(k-3)*30,28,28)
            ctx.clearRect (pEX,(k-2)*30,28,28)
            ctx.clearRect (pCX,(k-3)*30, 28,28)
            ctx.clearRect (pHX,(k-1)*30,28,28)       
            break;
        }
    }
}

function ghostJ2 () {
    for (let k =(pointHY/30)+1 ; k<21; k++) {
        if ((array[k-1][pointHX/30] !==0 || array[k][pointIX/30] !==0 || array[k-1][pointGX/30] !==0) ) {
            if (k-(pointHY/30)<2) {
                return
            }
            if (k-(pointHY/30)<3) {
                ctx.fillStyle = "#C5CDD8";           
                ctx.fillRect (pDX,(k-2)*30,28,28)
                ctx.fillRect (pEX,(k-2)*30,28,28)
                ctx.fillRect (pIX,(k-1)*30, 28,28)
                ctx.fillStyle = "#2e8bc0"
                return
            }


            ctx.fillStyle = "#C5CDD8";           
            ctx.fillRect(pDX,(k-2)*30,28,28)
            ctx.fillRect (pEX,(k-2)*30,28,28)
            ctx.fillRect (pIX,(k-1)*30, 28,28)
            ctx.fillRect (pFX,(k-2)*30,28,28)
            ctx.fillStyle = "#2e8bc0"
            break;
        } 
    }
}

function ghostJ2Remover () {
    for (let k =(pointHY/30)+1 ; k<21; k++) {
        if ((array[k-1][pointHX/30] !==0 || array[k][pointIX/30] !==0 || array[k-1][pointGX/30] !==0) ) {  
            ctx.clearRect(pDX,(k-2)*30,28,28)
            ctx.clearRect (pEX,(k-2)*30,28,28)
            ctx.clearRect (pIX,(k-1)*30, 28,28)
            ctx.clearRect (pFX,(k-2)*30,28,28)      
            break;
        }
    }
}

function ghostJ3 () {
    for (let k =(pointHY/30)+1 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0 || array[k][pointGX/30] !==0) ) {
            if (k-(pointHY/30)<2) {
                return
            }
            if (k-(pointHY/30)<3) {
                ctx.fillStyle = "#C5CDD8";           
                ctx.fillRect (pHX,(k-1)*30, 28,28)
                ctx.fillRect (pGX,(k-1)*30,28,28)
                ctx.fillStyle = "#2e8bc0"
                return
            }

            if (k-(pointHY/30)<4) {
                ctx.fillStyle = "#C5CDD8";           
                ctx.fillRect (pEX,(k-2)*30,28,28)
                ctx.fillRect (pGX,(k-1)*30,28,28)
                ctx.fillRect (pHX,(k-1)*30, 28,28)
                ctx.fillStyle = "#2e8bc0"
                return
            }

            ctx.fillStyle = "#C5CDD8";           
            ctx.fillRect(pBX,(k-3)*30,28,28)
            ctx.fillRect (pEX,(k-2)*30,28,28)
            ctx.fillRect (pHX,(k-1)*30, 28,28)
            ctx.fillRect (pGX,(k-1)*30,28,28)
            ctx.fillStyle = "#2e8bc0"
            break;
        } 
    }
}

function ghostJ3Remover () {
    for (let k =(pointHY/30)+1 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0 || array[k][pointGX/30] !==0) ) {  
            ctx.clearRect(pBX,(k-3)*30,28,28)
            ctx.clearRect (pEX,(k-2)*30,28,28)
            ctx.clearRect (pHX,(k-1)*30, 28,28)
            ctx.clearRect (pGX,(k-1)*30,28,28)        
            break;
        }
    }
}