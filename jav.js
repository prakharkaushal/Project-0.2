function comp(){
    let a = Math.random();
    if(a<=0.333){return "Rock";}
    if(a>=0.666){return "Paper";}
    return "Scissor";
}



let human = 0;
let compuer = 0;
let x=5;
while(x--){
    let inp = prompt("Your choice goes here:");
    let a = inp.toLowerCase();
    console.log(a);
    let b = comp();
    console.log("Computer brings:"+b);
    if(b==="Rock"){
        if(a==="scissor"){compuer++;console.log("YOU LOSE!");}
        else if(a==="paper"){human++;console.log("YOU WIN!");}
        else{console.log("DRAW...");}
    }
    if(b==="Paper"){
        if(a==="scissor"){human++;console.log("YOU WIN!");}
        else if(a==="paper"){console.log("DRAW...");}
        else{compuer++;console.log("YOU LOSE!");}
    }
    if(b==="Scissor"){
        if(a==="scissor"){console.log("DRAW...");}
        else if(a==="paper"){compuer++;console.log("YOU LOSE!");}
        else{human++;console.log("YOU WIN!");}
    }
    console.log("Your Score: "+human);
    console.log("Computer Score: "+compuer);
}
