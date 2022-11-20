
let randomNum = Math.floor(Math.random()*100);
let atempts = 0;
const btnGuess = document.querySelector('.btnGuess');
const btnReset = document.querySelector('.playAgain');
console.log(randomNum);


function guessNumber(){
    const playGuess = parseInt(document.querySelector('.numGuess').value);
    const node = document.createElement("li");
    const textnode = document.createTextNode(playGuess);
    node.appendChild(textnode);

    if (playGuess !== randomNum && atempts <=4){
        atempts++
        if (playGuess < randomNum && atempts <=4){
            document.querySelector('h2').innerHTML = 'Your guess is too Low'
           
        }

       else if (atempts > 4){
        document.querySelector('h2').innerHTML = 'that was your last guess, you lost!';
        btnReset.classList.toggle('hideme');
        console.log('that was your last guess, you lost!')
        
        
       }
       else{
        document.querySelector('h2').innerHTML = 'Your guess is too high'
       }
       document.querySelector(".mylist").appendChild(node);
       /* console.log('guess is incorrect =',randomNum);
       console.log(playGuess); 
       ---------
       dubbel kolla att randomNum och PlayGuess är olika
       */
    }
   
    else if(playGuess === randomNum){
        console.log('You won')
        document.querySelector('h2').innerHTML = 'YOU WON!'
        btnReset.classList.toggle('hideme');
        document.querySelector(".mylist").appendChild(node);

    }
   
    
}
function reset(){
atempts = 0;
randomNum = Math.floor(Math.random()*100);
document.querySelector('.numGuess').textContent=''
const collection = document.querySelectorAll('li');
for (i=0; i<=collection.length; i++){
collection[i].remove();
}
btnReset.classList.toggle('hideme');
document.querySelector('h2').innerHTML = 'You need to guess a number between 1-100'
}
btnGuess.addEventListener('click',guessNumber);
 btnReset.addEventListener('click',reset);


