score=0;
cross=true;
cnt=0;
audioGo=new Audio("sound2.mp3.mpeg");
audioBye=new Audio("sound.mp3.mpeg");
setTimeout(()=>{
    audioGo.play();
},1000);
document.onkeydown=function(e){
    console.log("key code is:",e.key)
    if(e.key=="ArrowUp"){
naruto=document.querySelector(".naruto");
naruto.classList.add("animate");
setTimeout(()=>{
    naruto.classList.remove("animate")
},700);
    }
if(e.key=="ArrowRight"){
    naruto=document.querySelector(".naruto");
    narutox=parseInt(window.getComputedStyle(naruto,null).getPropertyValue('left'));
naruto.style.left=narutox+112+"px";       
}
if(e.key=="ArrowLeft"){
    naruto=document.querySelector(".naruto");
    narutox=parseInt(window.getComputedStyle(naruto,null).getPropertyValue('left'));
naruto.style.left=narutox-142+"px";       
}
}
setInterval(()=>{
    naruto=document.querySelector(".naruto");
    gameOver=document.querySelector(".gameover");
    replayD=document.querySelector(".repaly");
    thanos=document.querySelector(".thanos");
narutox=parseInt(window.getComputedStyle(naruto,null).getPropertyValue('left'));
narutoy=parseInt(window.getComputedStyle(naruto,null).getPropertyValue('top'));
thanosx=parseInt(window.getComputedStyle(thanos,null).getPropertyValue('left'));
thanosy=parseInt(window.getComputedStyle(thanos,null).getPropertyValue('top'));

diffX=Math.abs(narutox-thanosx);
diffY=Math.abs(narutoy-thanosy);
console.log(diffX,diffY);
if(diffX<80&&diffY<130){
    gameOver.style.visibility="visible";
    naruto.style.visibility="hidden";
    thanos.style.visibility="hidden";
    thanos.classList.remove("animateThanos");
    replayD.style.visibility="visible";

    audioBye.play();
    setTimeout(() => {
        audioBye.pause();
        // audioGo.pause();
    }, 1000);
}else if(diffX<100&&cross){
    score+=10;
    cnt++;
    scoreIncrement(score);
    cross=false;
    setTimeout(()=>{
        cross=true;
    },1000);
    setTimeout(()=>{

        aniTime=parseInt(window.getComputedStyle(thanos,null).getPropertyValue('animation.duration'));
        newTime=aniTime-.5;
        thanos.style.animationDuration=newTime+'s';
    },500)
}
},10)

function scoreIncrement(score){

    scoreCount.innerHTML="Your Score : "+score;
}
