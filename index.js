var numberOfDrumButten = document.querySelectorAll(".drum").length;

for(var i = 0 ; i < numberOfDrumButten ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" ,  function(){
        
        // this.style.color = "white";
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        addAnimation(buttonInnerHtml);
        // document.addEventListener("keydown",);
        
    });
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    addAnimation(event.key);
});
function makeSound(key) {
    if(key === "w" ){
        var audio = new Audio("tom-1.mp3");
        audio.play();
    }else if(key === "a"){
        var audio = new Audio("tom-2.mp3");
        audio.play();
    }else if(key === "s"){
        var audio = new Audio("tom-3.mp3");
        audio.play();
    }else if(key === "d"){
        var audio = new Audio("tom-4.mp3");
        audio.play();
    }else if(key === "j"){
        var audio = new Audio("snare.mp3");
        audio.play();
    }else if(key === "k"){
        var audio = new Audio("crash.mp3");
        audio.play();
    }else if(key ==="l"){
        var audio = new Audio("kick-bass.mp3");
        audio.play();
    }else{
        console.log(key);
    }
}

function addAnimation(currntKey){
    var pressedKey = document.querySelector("."+currntKey);
    // document.querySelector("."+currntKey).classList.remove("pressed");
    pressedKey.classList.add("pressed")
    
    setTimeout(function() {
        pressedKey.classList.remove("pressed");
    }, 100);
}


