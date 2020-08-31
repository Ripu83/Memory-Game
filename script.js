const cards =document.querySelectorAll('.card');

let hasFlippedCard =false;
let freeze =false;
let firstCard, secondCard;
var count =0;
var noOfFlips=0;
function start(){
    setTimeout( "JavaScript Statements", milliseconds );
}
function flipCard(){
    if(freeze) return
    if(this ===firstCard) return

    this.classList.add('flip');

    if(!hasFlippedCard){
        hasFlippedCard=true;
        firstCard=this;
        noOfFlips+=1;
    }
    else{
        
        secondCard=this;

        if(firstCard.dataset.backface ===secondCard.dataset.backface){
            //if both cards are same remove all events to block that card
            firstCard.removeEventListener('click',flipCard)
            secondCard.removeEventListener('click',flipCard)
            count +=1; 
            noOfFlips+=1; 
            
            // setTimeout(() =>{alert(count)},400) ;
            if(count ==8){
                setTimeout(() =>{alert('Game Over,You Won')},500);
                setTimeout(() =>location.reload(true),1500);

            }
            reset();
            
        }
        else{
            freeze=true;
            //both card different
            setTimeout(()=>{
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            
            reset();
            },1000);
            
            noOfFlips+=1;
        }
        document.getElementById("flips").value=noOfFlips;
        
    }
}

function reset(){
    hasFlippedCard=false;
    freeze=false;
    firstCard = null;
    secondCard =null;
}

(function shuffleCard(){
    cards.forEach(card =>{
        let position =Math.floor(Math.random()*16)
        card.style.order = position;
    });
})();
function restart(){
    location.reload(true);}
cards.forEach(card => card.addEventListener('click',flipCard))


