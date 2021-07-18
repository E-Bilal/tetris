let database = firebase.database().ref('scoreSubmissions');
let user;
let highscre;


document.getElementById("submithighscore").addEventListener('submit', submitform)
function submitform(e) {
    e.preventDefault()

user = getInputVal('name') 
highscore = getInputVal('highscore')   
scoreSubmitter(user,highscore)
}

function getInputVal (id) {
return document.getElementById(id).value
}

function scoreSubmitter (user, score) {
    let newMessageRef = database.push()
    newMessageRef.set({

        user :user ,
        score: score

    })
}
let heyo = []
// Attach an asynchronous callback to read the data at our posts reference
// database.on('value', (snapshot) => {
//     let datas = (snapshot.val());
// for (const [key, value] of Object.entries(datas)) {
//  heyo.push([value.user,value.score])
// }
// }, (errorObject) => {
//   console.log('The read failed: ' + errorObject.name);
// })


function getData() {
    heyo = [];
    database.on('value', async (snapshot) => {
        let dataLength = snapshot.numChildren();
        let actualLength = 0;
        let datas = await (snapshot.val());
    for (const [key, value] of Object.entries(datas)) {
        let val = await value.user;
        let score = await value.score;
        actualLength += 1;
        
        heyo.push([val,score])
        
        if(dataLength === actualLength) {
            highScoreMenu();
        }
    }
    }, (errorObject) => {
      console.log('The read failed: ' + errorObject.name);
    })
}


// const dbRef = firebase.database().ref();
// dbRef.child("users").child(userId).get().then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });

// setTimeout(() => { highScoreMenu()}, 2000);

{
}

function highScoreMenu () {
    let list =  document.getElementById("whato");  
    let ul = document.createElement("ul");

    if(list.hasChildNodes()) {
        list.removeChild(list.firstElementChild);
    }

    for (let i = 0 ; i < heyo.length ; i++) {
        if(i === 10) break;
        let element = document.createElement("li");
        element.innerHTML = `${heyo[i][0]} : ${heyo[i][1]}`;
        ul.appendChild(element);
    
    // let child = list.lastElementChild;

    // while (child) {
    //     list.removeChild(child);
    //     child = list.lastElementChild;
    // }

    // let textNode = document.createTextNode(`${heyo[i][0]} : ${heyo[i][1]}`)

    //   list.setAttribute("id", i)
    //    list.appendChild(list)

    //   document.getElementById(i).innerHTML += heyo[i][0]
    //   document.getElementById(i).innerHTML += ":"
    //   document.getElementById(i).innerHTML += heyo[i][1]

    
    }
    
    list.appendChild(ul)

}

function showHighScore() {
    getData();
    // button gwn in html plaatsen 
    // let button = document.createElement("button")
    // document.getElementById("highscoremenu").appendChild(button)    
    // button.innerHTML = "RETURN"
    document.getElementById("highscoremenu").style.display ="block"
}

function closeHighScore() {
    document.getElementById("highscoremenu").style.display ="none"
}





let score = 0
let canvas = document.getElementById("canvas")
canvas.width = 300
canvas.height = 600
let ctx = canvas.getContext("2d")
let nextOne = document.getElementById("nextone")
nextOne.width = 210
nextOne.height = 120
let rotationState = 0;
let ctx1 = nextOne.getContext("2d")
let array = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
]

function drawArea () {
    for (let i =0 ; i <600; i+=30) {
        for (let j=0 ; j< 300; j+=30) {
            array[i/30][j/30] = 0
            ctx.fillStyle = "#f1f1f1"
            ctx.fillRect(j,i,30, 30);
            ctx.strokeStyle = "#FFFFFF";
            ctx.lineWidth  = 2
            ctx.strokeRect (j,i,30,30)
        }
    }
}
drawArea()

//"#f1f1f1"

let pAX = 91
let pAY = 1

let pBX = 121
let pBY = 1

let pCX = 151
let pCY = 1

let pDX = 91
let pDY = 31

let pEX = 121
let pEY = 31

let pFX = 151
let pFY = 31

let pGX = 91
let pGY = 61

let pHX = 121
let pHY = 61

let pIX = 151
let pIY = 61




let pointAX = 90
let pointAY = 0

let pointBX = 120
let pointBY = 0

let pointCX = 150
let pointCY = 0

let pointDX = 90
let pointDY = 30

let pointEX = 120
let pointEY = 30

let pointFX = 150
let pointFY = 30

let pointGX = 90
let pointGY = 60

let pointHX = 120
let pointHY = 60

let pointIX = 150
let pointIY = 60


function plusY (amount) {
    pointAY += amount
    pointBY += amount 
    pointCY += amount
    pointDY += amount
    pointEY += amount
    pointFY += amount
    pointGY += amount
    pointHY += amount
    pointIY += amount
    pAY += amount
    pBY += amount
    pCY += amount
    pDY += amount
    pEY += amount
    pFY += amount
    pGY += amount
    pHY += amount
    pIY += amount
}

function minusY (amount) {
    pointAY -= amount
    pointBY -= amount 
    pointCY -= amount
    pointDY -= amount
    pointEY -= amount
    pointFY -= amount
    pointGY -= amount
    pointHY -= amount
    pointIY -= amount
    pAY -= amount
    pBY -= amount
    pCY -= amount
    pDY -= amount
    pEY -= amount
    pFY -= amount
    pGY -= amount
    pHY -= amount
    pIY -= amount
}

function plusX (amount) {
    pointAX += amount
    pointBX += amount 
    pointCX += amount
    pointDX += amount
    pointEX += amount
    pointFX += amount
    pointGX += amount
    pointHX += amount
    pointIX += amount
    pAX += amount
    pBX += amount
    pCX += amount
    pDX += amount
    pEX += amount
    pFX += amount
    pGX += amount
    pHX += amount
    pIX += amount
}

function minusX (amount) {
    pointAX -= amount
    pointBX -= amount 
    pointCX -= amount
    pointDX -= amount
    pointEX -= amount
    pointFX -= amount
    pointGX -= amount
    pointHX -= amount
    pointIX -= amount
    pAX -= amount
    pBX -= amount
    pCX -= amount
    pDX -= amount
    pEX -= amount
    pFX -= amount
    pGX -= amount
    pHX -= amount
    pIX -= amount
}


const tetrimino = [/*"o","t","s","z",*/"i"/*,"l","j"*/];
random = tetrimino[Math.floor(Math.random() * tetrimino.length)];

function randomizerTetrimino () {

    if (random === "o") {
// O tetrimino   
        ctx.fillStyle = "#ffff00"
        ctx.fillRect (121,1,28,28)
        array[0][4] = 1
        ctx.fillRect (151,1,28,28)
        array[0][5] = 1
        ctx.fillRect (121,31,28,28)
        array[1][4] = 1
        ctx.fillRect (151,31,28,28)
        array[1][5] = 1
    } else if (random === "s") {
//S tetrimino
        ctx.fillStyle = "#00ff80"
        ctx.fillRect (121,1,28,28)
        array[0][4] = 3
        ctx.fillRect (151,1,28,28)
        array[0][5] = 3
        ctx.fillRect (121,31,28,28)
        array[1][4] = 3
        ctx.fillRect (91,31,28,28)
        array[1][3] = 3
    } else if (random === "t") {
    //T tetrimino   
        ctx.fillStyle = "#6a0dad"
        ctx.fillRect (121,1,28,28)
        array[0][4] = 4
        ctx.fillRect (121,31,28,28)
        array[1][4] = 4
        ctx.fillRect (91,31,28,28)
        array[1][3] = 4
        ctx.fillRect (151,31,28,28)
        array[1][5] = 4
    } else if (random === "z") {
//Z tetrimino
        ctx.fillStyle = "#ff0000"
        ctx.fillRect (91,1,28,28)
        array[0][3] = 5
        ctx.fillRect (121,1,28,28)
        array[0][4] = 5
        ctx.fillRect (121,31,28,28)
        array[1][4] = 5
        ctx.fillRect (151,31,28,28)
        array[1][5] = 5
    } else if (random === "l") {
//L tetrimino
        ctx.fillStyle = "#FFA500"
        ctx.fillRect (151,1,28,28)
        array[0][5] = 6
        ctx.fillRect (91,31,28,28)
        array[1][3] = 6
        ctx.fillRect (121,31,28,28)
        array[1][4] = 6
        ctx.fillRect (151,31,28,28)
        array[1][5] = 6
    }  else if (random === "j") {
//J tetrimino
        ctx.fillStyle = "#2e8bc0"
        ctx.fillRect (91,1,28,28)
        array[0][3] = 7
        ctx.fillRect (91,31,28,28)
        array[1][3] = 7
        ctx.fillRect (121,31,28,28)
        array[1][4] = 7
        ctx.fillRect (151,31,28,28)
        array[1][5] = 7
    } else if (random === "i") {
//I tetrimino
        ctx.fillStyle = "#72bcd4"
        ctx.fillRect (91,1,28,28)
        array[0][3] = 2
        ctx.fillRect (121,1,28,28)
        array[0][4] = 2
        ctx.fillRect (151,1,28,28)
        array[0][5] = 2
        ctx.fillRect (181,1,28,28)
        array[0][6] = 2
    }
}

randomizerTetrimino ()


function nextTetrimino () {
    ctx1.clearRect(0, 0, nextOne.width, nextOne.height);
    if (random2 === "o") {
// O tetrimino   
        ctx1.fillStyle = "#ffff00"
        ctx1.fillRect (76,31,28,28)
        ctx1.fillRect (106,31,28,28)
        ctx1.fillRect (76,61,28,28)
        ctx1.fillRect (106,61,28,28)
    } else if (random2 === "s") {
//S tetrimino
        ctx1.fillStyle = "#00ff80"
        ctx1.fillRect (121,31,28,28)
        ctx1.fillRect (91,31,28,28)
        ctx1.fillRect (91,61,28,28)
        ctx1.fillRect (61,61,28,28)
    } else if (random2 === "t") {
//T tetrimino   
        ctx1.fillStyle = "#6a0dad"
        ctx1.fillRect (91,31,28,28)
        ctx1.fillRect (61,61,28,28)
        ctx1.fillRect (91,61,28,28)
        ctx1.fillRect (121,61,28,28)
    } else if (random2 === "z") {
//Z tetrimino
        ctx1.fillStyle = "#ff0000"
        ctx1.fillRect (61,31,28,28)
        ctx1.fillRect (91,31,28,28)
        ctx1.fillRect (91,61,28,28)
        ctx1.fillRect (121,61,28,28)
    } else if (random2 === "l") {
//L tetrimino
        ctx1.fillStyle = "#FFA500"
        ctx1.fillRect (121,31,28,28)
        ctx1.fillRect (61,61,28,28)
        ctx1.fillRect (91,61,28,28)
        ctx1.fillRect (121,61,28,28)
    } else if (random2 === "j") {
//J tetrimino
        ctx1.fillStyle = "#2e8bc0"
        ctx1.fillRect (61,31,28,28)
        ctx1.fillRect (61,61,28,28)
        ctx1.fillRect (91,61,28,28)
        ctx1.fillRect (121,61,28,28)
    } else if (random2 === "i") {
//I tetrimino
        ctx1.fillStyle = "#72bcd4"
        ctx1.fillRect (46,46,28,28)
        ctx1.fillRect (76,46,28,28)
        ctx1.fillRect (106,46,28,28)
        ctx1.fillRect (136,46,28,28)
    }
}

let random2 = tetrimino[Math.floor(Math.random() * tetrimino.length)];
nextTetrimino()

function downChecker () {
    if(random === "o"){
        moveDownO()
    } else if(random === "t") {
        moveDownT()
    } else if (random === "s") {
        moveDownS()
    } else if (random === "z") {
        moveDownZ()
    } else if (random === "l") {
        moveDownL()
    } else if (random === "j") {
        moveDownJ()
    } else if (random === "i") {
        moveDownI()
    }
}

function leftChecker () {
    if(random === "o") {
        moveLeftO()
    } else if(random === "t") {
        moveLeftT()
    } else if (random === "s") {
        moveLeftS()
    } else if (random === "z") {
        moveLeftZ()
    } else if (random === "l") {
        moveLeftL()
    } else if (random === "j") {
        moveLeftJ()
    } else if (random === "i") {
        moveLeftI()
    }
}

function rightChecker () {
       if(random === "o"){moveRightO()}
       else if(random === "t"){moveRightT()}
       else if (random === "s") {moveRightS()}
       else if (random === "z") {moveRightZ()}
       else if (random === "l") {moveRightL()}
       else if (random === "j") {moveRightJ()}
       else if (random === "i") {moveRightI()}




}

function upChecker () {
       if(random === "o"){moveUpO()}
       else if(random === "t"){moveUpT()}
       else if (random === "s") {moveUpS()}
       else if (random === "z") {moveUpZ()}
       else if (random === "l") {moveUpL()}
       else if (random === "j") {moveUpJ()}
       else if (random === "i") {moveUpI()}




}

function zChecker () {
       if (random === "o") {moveZO()}
       else if(random === "t"){moveZT()}
       else if (random === "s") {moveZS()}
       else if (random === "z") {moveZZ()}
       else if (random === "l") {moveZL()}
       else if (random === "j") {moveZJ()}
       else if (random === "i") {moveZI()}





}


function hardDrop () {
if (random === "o")
{hardDropO()}
else if (random === "t")
{hardDropT()}
else if (random === "s")
{hardDropS()}
else if (random === "z")
{hardDropZ()}
else if (random === "l")
{hardDropL()}
else if (random === "j")
{hardDropJ()} 
else if (random === "i")
{hardDropI()}

}

/*let pauseChecker = 0
let btn = document.createElement("button")
 let menu = document.getElementById("menu");
 btn.innerHTML = "hello"
function pause () {
      if (pauseChecker=== 0) {
clearInterval(id)
pauseChecker = 1
document.getElementById("main").appendChild(menu)
document.getElementById("menu").appendChild(btn)
}
else {id = setInterval(o,1000)
pauseChecker = 0}

}
*/




// Keyboard input with customisable repeat (set to 0 for no key repeat)
//
KeyboardController({
    32: {interval:0, callback: function() { hardDrop() } },
    37: {interval:120, callback: function() { leftChecker() } },
    38: {interval:1000, callback: function() { upChecker() } },
    39: {interval:120, callback: function() { rightChecker() } },
    40: {interval:90, callback: function() { downChecker() } }
});


function KeyboardController(keyset) {
    // Lookup of key codes to timer ID, or null for no repeat
    //
    let timers= {};

    // When key is pressed and we don't already think it's pressed, call the
    // key action callback and set a timer to generate another one after a delay
    //
    document.onkeydown= function(event) {
        var key= (event || window.event).keyCode;
        if (!(key in keyset))
            return true;
        if (!(key in timers)) {
            timers[key]= null;
            keyset[key].callback();
            if (keyset[key].interval !== 0)
                timers[key]= setInterval(keyset[key].callback, keyset[key].interval);
        }
        return false;
    };

    // Cancel timeout and mark key as released on keyup
    //
    document.onkeyup= function(event) {
        var key= (event || window.event).keyCode;
        if (key in timers) {
            if (timers[key]!==null)
                clearInterval(timers[key]);
            delete timers[key];
        }
    };

    // When window is unfocused we may not get key events. To prevent this
    // causing a key to 'get stuck down', cancel all held keys
    //
    window.onblur= function() {
        for (key in timers)
            if (timers[key]!==null)
                clearInterval(timers[key]);
        timers= {};
    };
};





let counter = 1
let levelList = {
    10 : 1000,
    20 : 900,
    30 : 800,
    40 : 700,
    50 : 600,
    60 : 500,
    70 : 400,
    80 : 300,
    90 : 200,
    100 :100,
    110 : 95,
    120 : 90,
    130 : 85,
    140 : 80
}
let speed= 0
let cleared = 0
let level =  1
let ons = 11


function levelChanger () {
    level++
    if ( level > 14) {
        level =1
    }
    document.getElementById("forso").innerHTML = Number(level);
}


function levelChecker () {
    if (cleared >= ons ) {
        level++
        ons += 10
    }
    document.getElementById("levelnumber").innerHTML = Number(level)
    speed = levelList[level*10]
}


let id = null;
let id2 = null;
let id3 = null;
let id4 = null;
let id5 = null;
let id6 = null;
let id7 = null;
function startGame () {
    document.getElementById("menu").style.display = "none"
    document.getElementById("gameovermenu").style.display = "none"
    levelChecker ()
    if (random === "o") {
        id = setInterval(o,speed)
        ghostO()
    } else if (random === "t") {
        id2 = setInterval(t,speed)
        ghostT0()
    } else if (random === "s") {
        id3 = setInterval (s,speed)
        ghostS0()
    } else if (random === "z") {
        id4 = setInterval (z,speed)
        ghostZ0()
    } else if (random === "l") {
        id5 = setInterval (l,speed)
        ghostL0()
    } else if (random === "j") {
        id6 = setInterval (j,speed)
        ghostJ0()
    } else if (random === "i") {
        id7 = setInterval (i,speed)
        ghostI0()
    }
}

let m = 0
let array2 = []
function numberChecker (item) {
    if (item >0){ 
        m+=1
    }
}

function draw () {
    for (let z = 0 ; z<600 ; z+=30) {
        for (let v = 0 ; v<300 ; v+=30) {
            ctx.strokeStyle = "#FFFFFF";
            ctx.lineWidth  = 1
            ctx.strokeRect (v,z,30,30)
            if (array[z/30][v/30] === 0) {
                ctx.fillStyle = "#f1f1f1"
            } else if (array[z/30][v/30] === 1) {
                ctx.fillStyle = "#ffff00"
            } else if (array[z/30][v/30] === 2) {
                ctx.fillStyle = "#72bcd4"
            } else if (array[z/30][v/30] === 3) {
                ctx.fillStyle = "#00ff80"
            } else if (array[z/30][v/30] === 4) {
                ctx.fillStyle = "#6a0dad"
            } else if (array[z/30][v/30] === 5) {
                ctx.fillStyle = "#ff0000"
            } else if (array[z/30][v/30] === 6) {   
                ctx.fillStyle = "#FFA500"
            } else if (array[z/30][v/30] === 7) {
                ctx.fillStyle = "#2e8bc0"
                
            }
            ctx.fillRect(v+1,z+1,28,28);
        }
    }
}

let counters = 0

function lineChecker () {
    for (let i = 0 ; i< 20 ; i++) { 
        array[i].forEach(numberChecker)
        if (m === 10) {
            array2 = array.slice(0,i)
            for (let s = i+1 ; s <23 ; s++ ) {
                array2.push(array[s])
            }
            array = array2
            array.unshift([0,0,0,0,0,0,0,0,0,0])
            m=0
            counters++
            draw()
        }
        else {
            m=0
        }
    }
    
    linesCleared()
    lineClearScoring (counters)
    levelChecker()
    counters = 0
}


function linesCleared () {
    cleared += counters
    document.getElementById("linenumber").innerHTML = Number(cleared)
}

function hardDropScoring (factor) {
    score += 1*factor
    document.getElementById("scorenumber").innerHTML = Number(score)
}

function lineClearScoring (counterFactor) {
    if (counterFactor === 1) {
        score += 100 * level
    } else if (counterFactor === 2) {
        score += 300 * level
    }else if (counterFactor === 3) {
        score += 500 * level
    } else if (counterFactor === 4) {
        score += 800 * level
    }
    document.getElementById("scorenumber").innerHTML = Number(score)
}



function t () {
    //Rotation state of 0       
    if (rotationState === 0 && array[(pointGY/30)][pointGX/30]===0 && array[(pointHY/30)][pointHX/30]===0 &&array[(pointIY/30)][pointIX/30]===0) {
        clearRStateT0 ()
        plusY(30)
        fillRStateT0()

    } else if (rotationState === 1 && array[(pointGY/30)][pointGX/30]===0 && array[(pointHY/30)+1][pointHX/30]===0  ) {
        //Rotation state of 1
        clearRStateT1 ()
        plusY(30)
        fillRStateT1 ()

    } else if (rotationState === 2  && array[(pointGY/30)][pointGX/30]===0 &&array[(pointIY/30)][pointIX/30]===0 && 
    array[(pointHY/30)+1][pointHX/30]===0 ) {
        //Rotationstate of 2
        clearRStateT2 ()
        plusY(30)
        fillRStateT2 ()

    } else if ( rotationState === 3  && array[(pointIY/30)][pointIX/30]===0 && array[(pointHY/30)+1][pointHX/30]===0 ) {
        //Rotationstate of 3
        clearRStateT3 ()
        plusY(30)
        fillRStateT3 ()
    } else { 

        resetCoordinates()
        rotationState = 0
        clearInterval(id2)
        lineChecker()

        random = random2
        random2 = tetrimino[Math.floor(Math.random() * tetrimino.length)];

        if (random === "o") {
            id = setInterval(o,speed)
            ghostO()
        } else if (random === "t") {
            id2 = setInterval(t,speed)
            ghostT0()
        } else if (random === "s") {
            id3 = setInterval (s,speed)
            ghostS0()
        } else if (random === "z") {
            id4 = setInterval (z,speed)
            ghostZ0()
        } else if (random === "l") {
            id5 = setInterval (l,speed)
            ghostL0()
        } else if (random === "j") {
            id6 = setInterval (j,speed)
            ghostJ0()
        } else if (random === "i") {
            id7 = setInterval (i,speed)
            ghostI0()
        }

        if (array[1][4]!==0) {
            randomizerTetrimino ()
            nextTetrimino()
            drawArea()
            score = 0
            cleared = 0
            document.getElementById("scorenumber").innerHTML = 0
            document.getElementById("linenumber").innerHTML = 0
            document.getElementById("gameovermenu").style.display = "block"
            clearInterval(id2)
        }
        randomizerTetrimino ()
        nextTetrimino()
    }
}

function s () {
    //Rotation state of 0
    if (pointHY <800 && rotationState === 0 && array[(pointGY/30)][pointGX/30]===0 && 
    array[(pointHY/30)][pointHX/30]===0 &&array[(pointFY/30)][pointFX/30]===0) {
        clearRStateS0()
        plusY(30)
        fillRStateS0()
    } else if (pointHY <800 && rotationState === 1 && array[(pointHY/30)][pointHX/30]===0 &&
    array[(pointIY/30)+1][pointIX/30]===0) {
        //Rotation state of 1
        clearRStateS1()
        plusY(30)
        fillRStateS1()

    } else if (pointHY <800 && rotationState === 2 && array[(pointHY/30)+1][pointHX/30]===0 && 
    array[(pointGY/30)+1][pointGX/30]===0 &&array[(pointIY/30)][pointIX/30]===0) {
        //Rotation state of 2
        clearRStateS2()
        plusY(30)
        fillRStateS2()

    } else if (pointHY <800 && rotationState === 3 && array[(pointHY/30)+1][pointHX/30]===0 && array[(pointGY/30)][pointGX/30]===0) {
        //Rotation state of 3
        clearRStateS3()
        plusY(30)
        fillRStateS3()

    } else { 

        resetCoordinates()
        rotationState = 0
        clearInterval(id3)
        lineChecker ()

        random = random2
        random2 = tetrimino[Math.floor(Math.random() * tetrimino.length)];

        if (random === "o") {
            id = setInterval(o,speed)
            ghostO()
        } else if (random === "t") {
            id2 = setInterval(t,speed)
            ghostT0()
        } else if (random === "s") {
            id3 = setInterval (s,speed)
            ghostS0()
        } else if (random === "z") {
            id4 = setInterval (z,speed)
            ghostZ0()
        } else if (random === "l") {
            id5 = setInterval (l,speed)
            ghostL0()
        } else if (random === "j") {
            id6 = setInterval (j,speed)
            ghostJ0()
        } else if (random === "i") {
            id7 = setInterval (i,speed)
            ghostI0()
        }

        if (array[1][4]!==0) {
            randomizerTetrimino ()
            nextTetrimino()
            drawArea()
            score = 0
            cleared = 0
            document.getElementById("scorenumber").innerHTML = 0
            document.getElementById("linenumber").innerHTML = 0
            document.getElementById("gameovermenu").style.display = "block"
            clearInterval(id3)
        }
        randomizerTetrimino ()
        nextTetrimino()
    }
}

function z () {
    //Rotation state of 0
    if (pointHY <800 && rotationState === 0 && array[(pointDY/30)][pointDX/30]===0 && array[(pointHY/30)][pointHX/30]===0 &&
    array[(pointIY/30)][pointIX/30]===0) {
        clearRStateZ0()
        plusY(30)
        fillRStateZ0()

    } else if (pointHY <800 && rotationState === 1 && array[(pointHY/30)+1][pointHX/30]===0 && array[(pointIY/30)][pointIX/30]===0) {
        //Rotation state of 1
        clearRStateZ1()
        plusY(30)
        fillRStateZ1()

    } else if (pointHY <800 && rotationState === 2 && array[(pointHY/30)+1][pointHX/30]===0 && array[(pointGY/30)][pointGX/30]===0 &&
    array[(pointIY/30)+1][pointIX/30]===0) {
        //Rotation state of 2
        clearRStateZ2()
        plusY(30)
        fillRStateZ2()

    } else if (pointHY <800 && rotationState === 3 && array[(pointHY/30)][pointHX/30]===0 && array[(pointGY/30)+1][pointGX/30]===0) {
        //Rotation state of 3
        clearRStateZ3()
        plusY(30)
        fillRStateZ3()
    } else { 

        resetCoordinates()
        rotationState = 0
        clearInterval(id4)
        lineChecker ()

        random = random2
        random2 = tetrimino[Math.floor(Math.random() * tetrimino.length)];

        if (random === "o") {
            id = setInterval(o,speed)
            ghostO()
        } else if (random === "t") {
            id2 = setInterval(t,speed)
            ghostT0()
        } else if (random === "s") {
            id3 = setInterval (s,speed)
            ghostS0()
        } else if (random === "z") {
            id4 = setInterval (z,speed)
            ghostZ0()
        } else if (random === "l") {
            id5 = setInterval (l,speed)
            ghostL0()
        } else if (random === "j") {
            id6 = setInterval (j,speed)
            ghostJ0()
        } else if (random === "i") {
            id7 = setInterval (i,speed)
            ghostI0()
        }

        if (array[1][4]!==0) {
            randomizerTetrimino ()
            nextTetrimino()
            drawArea()
            score = 0
            cleared = 0
            document.getElementById("scorenumber").innerHTML = 0
            document.getElementById("linenumber").innerHTML = 0
            document.getElementById("gameovermenu").style.display = "block"
            clearInterval(id4)
        }
        randomizerTetrimino ()
        nextTetrimino()
    }
}

function l () {
    //Rotation state of 0
    if (pointHY <800 && rotationState === 0 && array[(pointGY/30)][pointGX/30]===0 && array[(pointHY/30)][pointHX/30]===0 &&
    array[(pointIY/30)][pointIX/30]===0) {
    clearRStateL0()
    plusY(30)
    fillRStateL0()
} else if (pointHY <800 && rotationState === 1 && array[(pointHY/30)+1][pointHX/30]===0 && 
array[(pointIY/30)+1][pointIX/30]===0) {
    //Rotation state of 1
        clearRStateL1()
        plusY(30)
        fillRStateL1()
        
    } else if (pointHY <800 && rotationState === 2 && array[(pointHY/30)][pointHX/30]===0 && 
    array[(pointGY/30)+1][pointGX/30]===0 && array[(pointIY/30)][pointIX/30]===0) {
        //Rotation state of 2
        clearRStateL2()
        plusY(30)
        fillRStateL2()
        
    } else if (pointHY <800 && rotationState === 3 && array[(pointHY/30)+1][pointHX/30]===0 && array[(pointDY/30)][pointDX/30]===0 ) {
        //Rotation state of 3
        clearRStateL3()
        plusY(30)
        fillRStateL3()
    } else { 

        resetCoordinates()
        rotationState = 0
        clearInterval(id5)
        lineChecker()

        random = random2
        random2 = tetrimino[Math.floor(Math.random() * tetrimino.length)];

        if (random === "o") {
            id = setInterval(o,speed)
            ghostO()
        } else if (random === "t") {
            id2 = setInterval(t,speed)
            ghostT0()
        } else if (random === "s") {
            id3 = setInterval (s,speed)
            ghostS0()
        } else if (random === "z") {
            id4 = setInterval (z,speed)
            ghostZ0()
        } else if (random === "l") {
            id5 = setInterval (l,speed)
            ghostL0()
        } else if (random === "j") {
            id6 = setInterval (j,speed)
            ghostJ0()
        } else if (random === "i") {
            id7 = setInterval (i,speed)
            ghostI0()
        }

        if (array[1][4]!==0) {
            randomizerTetrimino ()
            nextTetrimino()
            drawArea()
            score = 0
            cleared = 0
            document.getElementById("scorenumber").innerHTML = 0
            document.getElementById("linenumber").innerHTML = 0
            document.getElementById("gameovermenu").style.display = "block"
            clearInterval(id4)
        }
        randomizerTetrimino ()
        nextTetrimino()
    }
}

function j () {
//Rotation state of 0
    if (pointHY <800 && rotationState === 0 && array[(pointGY/30)][pointGX/30]===0 && array[(pointHY/30)][pointHX/30]===0 &&
    array[(pointIY/30)][pointIX/30]===0) {
        clearRStateJ0()
        plusY(30)
        fillRStateJ0()
    } else if (pointHY <800 && rotationState === 1 && array[(pointHY/30)+1][pointHX/30]===0 && array[(pointFY/30)][pointFX/30]===0) {
        //Rotation state of 1
        clearRStateJ1()
        plusY(30)
        fillRStateJ1()
        
    } else if (pointHY <800 && rotationState === 2 && array[(pointHY/30)][pointHX/30]===0 && array[(pointGY/30)][pointGX/30]===0 && 
    array[(pointIY/30)+1][pointIX/30]===0) {
        //Rotation state of 2
        clearRStateJ2()
        plusY(30)
        fillRStateJ2()
        
    } else if (pointHY <800 && rotationState === 3 && array[(pointHY/30)+1][pointHX/30]===0 && array[(pointGY/30)+1][pointGX/30]===0 ) {
        //Rotation state of 3
        clearRStateJ3()
        plusY(30)
        fillRStateJ3()
    } else { 

        resetCoordinates()
        rotationState = 0
        clearInterval(id6)
        lineChecker()

        random = random2
        random2 = tetrimino[Math.floor(Math.random() * tetrimino.length)];

        if (random === "o") {
            id = setInterval(o,speed)
            ghostO()
        } else if (random === "t") {
            id2 = setInterval(t,speed)
            ghostT0()
        } else if (random === "s") {
            id3 = setInterval (s,speed)
            ghostS0()
        } else if (random === "z") {
            id4 = setInterval (z,speed)
            ghostZ0()
        } else if (random === "l") {
            id5 = setInterval (l,speed)
            ghostL0()
        } else if (random === "j") {
            id6 = setInterval (j,speed)
            ghostJ0()
        } else if (random === "i") {
            id7 = setInterval (i,speed)
            ghostI0()
        }

        if (array[1][4] !== 0) {
            randomizerTetrimino ()
            nextTetrimino()
            drawArea()
            score = 0
            cleared = 0
            document.getElementById("scorenumber").innerHTML = 0
            document.getElementById("linenumber").innerHTML = 0
            document.getElementById("gameovermenu").style.display = "block"
            clearInterval(id6)
        }
        randomizerTetrimino ()
        nextTetrimino()
    }
}

function i () { 
//Rotation state of 0
    if (pontNY <630 && rotationState === 0 && array[(pontIY/30)][pontIX/30]===0 && array[(pontJY/30)][pontJX/30]===0 && 
    array[(pontKY/30)][pontKX/30]===0  && array[(pontLY/30)][pontLX/30]===0) {
        clearRStateI0 ()
        pY (30)
        fillRStateI0()

    } else if (pontNY <660 && rotationState === 1 && array[(pontOY/30)+1][pontOX/30]===0 ) {
        //Rotation state of 1
        clearRStateI1 ()
        pY (30)
        fillRStateI1()
        
    } else if (pontNY <630 && rotationState === 2 && array[(pontMY/30)][pontMX/30]===0 && array[(pontNY/30)][pontNX/30]===0 && 
    array[(pontOY/30)][pontOX/30]===0  && array[(pontPY/30)][pontPX/30]===0) {
        //Rotation state of 2
        clearRStateI2 ()
        pY (30)
        fillRStateI2()
        
    } else if (pontNY <630 && rotationState === 3 && array[(pontNY/30)+1][pontNX/30]===0 ) {
        //Rotation state of 3
        clearRStateI3 ()
        pY (30)
        fillRStateI3()
        
    } else {
        resetCoordinatesI ()
        mY(30)
        rotationState =0
        clearInterval(id7)
        lineChecker()

        random = random2
        random2 = tetrimino[Math.floor(Math.random() * tetrimino.length)];

        if (random === "o") {
            id = setInterval(o,speed)
            ghostO()
        } else if (random === "t") {
            id2 = setInterval(t,speed)
            ghostT0()
        } else if (random === "s") {
            id3 = setInterval (s,speed)
            ghostS0()
        } else if (random === "z") {
            id4 = setInterval (z,speed)
            ghostZ0()
        } else if (random === "l") {
            id5 = setInterval (l,speed)
            ghostL0()
        } else if (random === "j") {
            id6 = setInterval (j,speed)
            ghostJ0()
        } else if (random === "i") {
            id7 = setInterval (i,speed)
            ghostI0()
        }

        if (array[0][4]!==0) {
            document.getElementById('highscore').value = score
            randomizerTetrimino ()
            nextTetrimino()
            drawArea()
            score = 0
            cleared = 0
            document.getElementById("scorenumber").innerHTML = 0
            document.getElementById("linenumber").innerHTML = 0
            document.getElementById("gameovermenu").style.display = "block"
            clearInterval(id7)
        }
        randomizerTetrimino ()
        nextTetrimino()
    }
}

function o () {
//Rotation state of 0 
    if (rotationState === 0 &&  pointHY <600  && array[(pointHY/30)][pointHX/30]===0 &&array[(pointIY/30)][pointIX/30]===0 ) {
        clearRStateO0 ()
        plusY(30)
        fillRStateO0()
        
        
    } else { 

        resetCoordinates()
        rotationState = 0
        clearInterval(id)
        lineChecker()

        random = random2
        random2 = tetrimino[Math.floor(Math.random() * tetrimino.length)];

        if (random === "o") {
            id = setInterval(o,speed)
            ghostO()
        } else if (random === "t") {
            id2 = setInterval(t,speed)
            ghostT0()
        } else if (random === "s") {
            id3 = setInterval (s,speed)
            ghostS0()
        } else if (random === "z") {
            id4 = setInterval (z,speed)
            ghostZ0()
        } else if (random === "l") {
            id5 = setInterval (l,speed)
            ghostL0()
        } else if (random === "j") {
            id6 = setInterval (j,speed)
            ghostJ0()
        } else if (random === "i") {
            id7 = setInterval (i,speed)
            ghostI0()
        }

        if (array[1][4]!==0) {
            randomizerTetrimino ()
            nextTetrimino()
            drawArea()
            score = 0
            cleared = 0
            document.getElementById("scorenumber").innerHTML = 0
            document.getElementById("linenumber").innerHTML = 0
            document.getElementById("gameovermenu").style.display = "block"
            clearInterval(id)
        }
        randomizerTetrimino ()
        nextTetrimino()
    }
}
