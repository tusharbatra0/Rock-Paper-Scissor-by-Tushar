let computer = document.getElementById("computer");
let yourchoice = document.getElementById("yourchoice");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let win = document.getElementById("win");
let answer = document.getElementById("answer");

let choice = [`<img width="60px" src="rock.png" alt="" srcset="">` , `<img width="60px"  src="paper (2).png" alt="">` , `<img width="60px"  src="scissor.png" alt="" srcset="">`];
// o = rock 
// 1= paper
// 2 = scissor



rock.addEventListener("click", function(){
    yourchoice.innerHTML = `<img width="60px" src="rock.png" alt="" srcset="">`
    const randomnum = Math.floor(Math.random() * 3)
    computer.innerHTML = choice[randomnum]
   if(choice[0] == choice[randomnum]){
       answer.innerHTML = "DRAW"
       document.body.style.backgroundColor = "aqua"
   }
   else if(choice[0] != choice[randomnum] && choice[randomnum] === choice[1]){
    answer.innerHTML = "YOU LOSE"
    document.body.style.backgroundColor = "red"
   }
    else{
        document.body.style.backgroundColor = "aqua"
        answer.innerHTML = "YOU WON"
    }
})


paper.addEventListener("click", function(){
    yourchoice.innerHTML = `<img width="60px"  src="paper (2).png" alt="">`
    const randomnum = Math.floor(Math.random() * 3 )
    computer.innerHTML = choice[randomnum]
    if(choice[1] == choice[randomnum]){
        answer.innerHTML = "DRAW"
        document.body.style.backgroundColor = "aqua"
    }
    else if(choice[1] != choice[randomnum] && choice[randomnum] === choice[2] ){
        answer.innerHTML = "YOU LOSE"
        document.body.style.backgroundColor = "red"
    }
    else{
        answer.innerHTML = "YOU WON"
        document.body.style.backgroundColor = "aqua"
    }
})


scissor.addEventListener("click", function(){
    yourchoice.innerHTML = `<img width="60px"  src="scissor.png" alt="" srcset="">`
    const randomnum = Math.floor(Math.random() * 3)
    computer.innerHTML = choice[randomnum]
    if(choice[2] == choice[randomnum]){
        answer.innerHTML = "DRAW"
        document.body.style.backgroundColor = "aqua"
    }
    else if(choice[2] != choice[randomnum] && choice[randomnum] === choice[0]){
     answer.innerHTML = "YOU LOSE"
     document.body.style.backgroundColor = "red"
    }
    else{
        answer.innerHTML = "YOU WON"
        document.body.style.backgroundColor = "aqua"
    }
     
})
