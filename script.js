
var timer;
var marginTop=360;
var bottomToTop=true;
 
function jumpBall () {
    var ball=document.getElementById("balle");
    if(bottomToTop){
        marginTop -=10;
    }else{
        marginTop +=10;
    }
     
    ball.style.marginTop= marginTop+"px";
    if(marginTop==80){
        bottomToTop=false;
    }
    if(marginTop==520){
        bottomToTop=true;
    }
}
 

function Lancer(){
    var btn=document.getElementById("bouton-lancer");
    if(btn.innerHTML.trim()==='Lancer'){

        timer=setInterval(function () {
            jumpBall();         
        },100);
        btn.innerHTML='Stop';
    }else{
        
        clearInterval(timer);
        btn.innerHTML='Lancer';
    }
}