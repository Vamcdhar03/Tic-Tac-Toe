let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let msgcontainer=document.querySelector(".msg-container");
let newbtn=document.querySelector(".new-btn");
let msg=document.querySelector(".msg");

let turnX=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=> {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnX){
            box.innerText="X";
            turnX=false;
        }else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes =() =>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner = (winner) =>{
    msg.innerText=`Congratulations ,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
};

const checkWinner = () =>{
    for (let patterns of winPatterns){
        // console.log(patterns[0],patterns[1],patterns[2])
        // console.log(boxes[patterns[0]].innerText,boxes[patterns[1]].innerText,boxes[patterns[2]].innerText);

        let posVal1=boxes[patterns[0]].innerText;
        let posVal2=boxes[patterns[1]].innerText;
        let posVal3=boxes[patterns[2]].innerText;

        if(posVal1!="" && posVal2!="" && posVal3!=""){
            if(posVal1===posVal2 && posVal2===posVal3){
                console.log("Winner is",posVal1);
                disableBoxes();
                showWinner(posVal1);
            }
        }

    }
};

const resetgame = () =>{
    turnX=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

resetBtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);