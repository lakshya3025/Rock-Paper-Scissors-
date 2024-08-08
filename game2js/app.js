let userScore=0;
let comScore=0;;
let choices=document.querySelectorAll(".choice");

 const playGame= (userChoice)=>{
    let msg = document.querySelector("#msg");
    let userpara=document.querySelector("#user-score")
    let compara=document.querySelector("#com-score")
    console.log("userChoice-",userChoice)
    const comChoice=genComChoice();
    console.log("com-Choice",comChoice);
    
          if(userChoice===comChoice){
        console.log("draw a game");
        msg.innerText="draw!"
        msg.style.backgroundColor="black"
    }
    else{
        if(userChoice==="rock"&& comChoice==="paper" || userChoice==="paper"&&comChoice==="scissor"||userChoice==="scissor"&& comChoice==="rock"){
            
            msg.innerText = 'you lose ' +  comChoice  +"  beats  "+  userChoice;
            msg.style.backgroundColor="red";
            comScore++;
            compara.innerText=comScore;
            
        } else {
            msg.innerText = "you win  "+ userChoice  +"  beats  "+  comChoice;
            msg.style.backgroundColor="green";
            userScore++;
            userpara.innerText=userScore;
           
        
    }
 }
}


 const genComChoice = ()=>{
     const option=["rock","paper","scissor"];
     rndInx=Math.floor(Math.random()*3)
     return option[rndInx];
 }
choices.forEach((choice) => {
    const userChoice= choice.getAttribute("id");
    choice.addEventListener("click",()=> {
        playGame(userChoice);
    } )
});
