// let i;
// let contador = 0;

// for(i = 1; i <=6; i++){

//     let n = prompt();
//     if(n > 0){
//         contador++;
//     }

// }
// console.log(contador + " valores positivos")



// function soma(n1,n2){
//     return n1 + n2;

// }

// function dividir(n1,n2){
//     return n1 / n2;

// }

// function multi(n1,n2){

//     return n1 * n2;
// }

// function subtrair(n1,n2){

//     return n1 - n2;
// }

// function calculadora(n1,n2,operador){
//     return operador(n1,n2);
// }

// console.log(calculadora(2,9,subtrair))







let btn = document.querySelectorAll("button");

btn.forEach(index =>{
    index.addEventListener("click",teste);

})


function teste(){
   
    var number = this.innerHTML;
  
    musica(number)
    buttonAnimation(number)




}


document.addEventListener("keypress",function(event){


    musica(event.key)
    buttonAnimation(event.key)


})

function musica(key){

    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;
        case "s":
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
        case "j":
            var tom1 = new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
        case "k":
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
            break;
        case "l":
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;
        default: console.log(number);


    }




}


function buttonAnimation(currentkey){

    var activButton = document.querySelector("."+currentkey);


        activButton.classList.toggle("pressed")
        setTimeout(function(){
            activButton.classList.remove("pressed");
        },100)
    




}