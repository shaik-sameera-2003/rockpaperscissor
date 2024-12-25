const  img=document.querySelectorAll(".image");
img.forEach((choice)=>{
    choice.addEventListener("click",()=>{
         let userid=choice.getAttribute("id");//id of user's choice
         check(userid);
    });
})
let userscore=0;
let comscore=0;
let msg=document.querySelector(".msg");
let user=document.querySelector("#userscore");
let comp=document.querySelector("#comscore");
function comchoice(){   //this function generates computer choice 
    const arr=["rock","paper","scissor"];
    let a=Math.floor(Math.random()*3); //generating random number between 0 to 2
    return arr[a];
}
function draw(){    //checks if user and computer choosed same choice
    msg.innerText="It's a draw.Play Again!!!!";
}
let body=document.querySelector("body");
function showwinner(userwin,userid,comid){ //changes the interface according to the winner
 if(userwin){
    userscore+=1;
    user.innerText=userscore;
    msg.innerText=`You win!!!!you(${userid}),computer(${comid})`;
    body.style.backgroundColor="#05f150";
    setTimeout(()=>{
        body.style.backgroundColor="white";
    },250);
 }else{
    comscore+=1;
    comp.innerText=comscore;
    msg.innerText=`You loose!!!!you(${userid}),computer(${comid})`;
    body.style.backgroundColor="#c52020";
    setTimeout(()=>{
        body.style.backgroundColor="white";
    },250);
 }
}
function check(userid){   //this function checks who wins the game
    let comid=comchoice();
    if(userid===comid){
        draw();
    }else{
        let userwin=true;
        if(userid==="rock"){
            userwin=comid==="paper"?false:true;//terenary operator
        }else if(userid==="paper"){
            userwin=comid==="scissor"?false:true;
        }else{
            userwin=comid==="rock"?false:true;
        }
        showwinner(userwin,userid,comid);
    }
    
}



