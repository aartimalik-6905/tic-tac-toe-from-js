let boxes=document.querySelectorAll("#button");
let resetbtn=document.querySelector("#reset");
let newGamebtn=document.querySelector("#new");

let turnO=true;

const winningPatterns = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6]  
];

boxes.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            button.innerText="O";
            turnO=false;
            button.style.color="#1a8571";

        } else{
            button.innerText="X";
            turnO=true;

        }
        button.disabled=true;
        checkwinner();

    });
});

    
const winnermsg=document.querySelector("#winner-pop");
const disableBoxes=()=>{
    for(let i of boxes){
        i.disabled=true;

    }
}
const resetGame=()=>{
    turnO=true;
    for(i of boxes){
        i.innerText="";
        i.disabled=false;

    }
    winnermsg.classList.add("hidden");
    winnermsg.innerText="";


}


const checkwinner=()=>{
    for(let i of winningPatterns){
        let pos1=boxes[i[0]].innerText;
        let pos2=boxes[i[1]].innerText;
        let pos3=boxes[i[2]].innerText;

        if(pos1 !=="" && pos2 !=="" && pos3 !==""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner");
                disableBoxes();
                winnermsg.innerText=`winner is ${pos1}`;
                winnermsg.classList.remove("hidden");
              
                
                 
                setTimeout(()=>{
                    winnermsg.classList.add("hidden");
                    resetGame();
                },3000);
                return;

            }
        }
    } 
    checkdraw();

    

};
const checkdraw=()=>{
    let allFilled=true;
    for(let i of boxes){
        if(i.innerText===""){
            allFilled=false;
            break;
        }
    }
    if(allFilled){
        winnermsg.innerText="this is a draw";
        winnermsg.classList.remove("hidden");

    }
};



resetbtn.addEventListener("click",resetGame);




