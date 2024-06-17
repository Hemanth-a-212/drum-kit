var noOfButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",clicked);
}
function clicked(){
    var btnClicked=this.innerHTML;
    sound(btnClicked);
    ani(btnClicked);
    
}

document.addEventListener("keydown",keyClicked);
 function keyClicked(event){
    keycl=(event.key).toUpperCase();
    sound(keycl);
    ani(keycl);
 }
 
function ani(aniAlpha){
    document.querySelector("."+aniAlpha).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+aniAlpha).classList.remove("pressed");
    },100)
}
function sound(alpha){
    switch(alpha){
        case "W" :
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;
        case "A" :
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;
        case "S" :
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;
        case "D" :
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;
        case "J" :
            var snare=new Audio("./sounds/snare.mp3");
            snare.play();
        break;
        case "K" :
            var kick=new Audio("./sounds/kick-bass.mp3");
            kick.play();
        break;
        case "L" :
            var crash=new Audio("./sounds/crash.mp3");
            crash.play();
        break;
        default:console.log(alpha);
    }
}
