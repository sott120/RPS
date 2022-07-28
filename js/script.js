let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let waitingPark = document.querySelector("#waitPark");
let waitingRobot = document.querySelector("#waitRodot");
let resultBox = document.querySelector(".resultBox");
let result = document.querySelector(".result");
let closeBtn = document.querySelector(".closeBtn");
let btnBox = document.querySelector(".btnBox");


closeBtn.addEventListener('click',function(){
    resultBox.style.display = "none";
    waitingPark.src ="img/성현대기.jpg";
    waitingRobot.src = "img/로봇대기.jpg";
    btnBox.style.pointerEvents = "auto";
   
});





btn1.addEventListener('click',function(e){
    waitingPark.src = "img/성현가위.jpg";
    resultBox.style.display = "block";
    btnBox.style.pointerEvents = "none";


    let robot = Math.floor(Math.random()*10/4);
    console.log(robot);
    if(robot == 0 ){
        waitingRobot.src = "img/로봇가위.jpg";
        result.innerHTML = "무승부!";
    } if(robot == 1){
        waitingRobot.src = "img/로봇묵.jpg";
        result.innerHTML = "패배!";
    } if(robot == 2){
        waitingRobot.src = "img/로봇빠.jpg";
        result.innerHTML = "승리!";
    }
});

btn2.addEventListener('click',function(e){
    waitingPark.src = "img/성현묵.jpg";
    resultBox.style.display = "block";
    btnBox.style.pointerEvents = "none";


    let robot = Math.floor(Math.random()*10/4);
    console.log(robot);
    if(robot == 0 ){
        waitingRobot.src = "img/로봇가위.jpg";
        result.innerHTML = "승리!";
    } if(robot == 1){
        waitingRobot.src = "img/로봇묵.jpg";
        result.innerHTML = "무승부!";
    } if(robot == 2){
        waitingRobot.src = "img/로봇빠.jpg";
        result.innerHTML = "패배!";
    }
});

btn3.addEventListener('click',function(e){
    waitingPark.src = "img/성현빠.jpg";
    resultBox.style.display = "block";
    btnBox.style.pointerEvents = "none";


    let robot = Math.floor(Math.random()*10/4);
    console.log(robot);
    if(robot == 0 ){
        waitingRobot.src = "img/로봇가위.jpg";
        result.innerHTML = "패배!";
    } if(robot == 1){
        waitingRobot.src = "img/로봇묵.jpg";
        result.innerHTML = "승리!";
    } if(robot == 2){
        waitingRobot.src = "img/로봇빠.jpg";
        result.innerHTML = "무승부!";
    }
});


document.addEventListener('keypress',(e) => {
         if(e.keyCode == 13){
            console.log("엔터키 누르셨네요");
            closeBtn.click();
            e.preventDefault();
         }
        })