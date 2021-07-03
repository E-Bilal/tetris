

function test () {
if (rotationState === 2) {
    console.log("hello")
}

}


function t () {
       
//Rotation state of 0       
if (/*counter < array.length-1*/ pointHY <1000 && array[(pointGY/50)][pointGX/50]===0 && array[(pointHY/50)][pointHX/50]===0 &&array[(pointIY/50)][pointIX/50]===0 && rotationState === 0) {


clearRStateT0 ()
plusY(50)
fillRStateT0()
counter++
}
//Rotation state of 1
else if (/*counter < array.length-2*/ pointHY <950 && array[(pointGY/50)][pointGX/50]===0 &&/*array[(pointIY/50)][pointIX/50]===0 && */ array[(pointHY/50)+1][pointHX/50]===0 && rotationState === 1 )

{

clearRState1 ()
plusY(50)
fillRState1 ()
counter++
}

//Rotationstate of 2
else if (/*counter < array.length-2*/ pointHY <950 && array[(pointGY/50)][pointGX/50]===0 &&array[(pointIY/50)][pointIX/50]===0 && array[(pointHY/50)+1][pointHX/50]===0 && rotationState === 2 )

{
clearRState2 ()
plusY(50)
fillRState2 ()
counter++
test ()

}

//Rotationstate of 3
else if (/*counter < array.length-2*/ rotationState === 3 && pointHY <950  && array[(pointIY/50)][pointIX/50]===0 && array[(pointHY/50)+1][pointHX/50]===0 )

{
clearRState3 ()
plusY(50)
fillRState3 ()
counter++
}

else { 
      
pAX = 151
pAY = 1

pBX = 201
pBY = 1

pCX = 251
pCY = 1

pDX = 151
pDY = 51

pEX = 201
pEY = 51

pFX = 251
pFY = 51

pGX = 151
pGY = 101

pHX = 201
pHY = 101

pIX = 251
pIY = 101

counter = 1
pointAX = 150
 pointAY =0
 pointBX = 200
 pointBY = 0

 pointCX = 250
 pointCY = 0

 pointDX = 150
 pointDY = 50

 pointEX = 200
 pointEY = 50

 pointFX = 250
 pointFY = 50

 pointGX = 150
 pointGY = 100

 pointHX = 200
 pointHY = 100

 pointIX = 250
 pointIY = 100

rotationState = 0
clearInterval(id2)

random = tetrimino[Math.floor(Math.random() * tetrimino.length)];
randomizerTetrimino ()
if (random === "t")
{id2 = setInterval(t,1000)}
else if (random === "s")
{id3 = setInterval (s,1000)} 
}


}


