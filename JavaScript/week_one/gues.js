let guessCount = 0;
function guess() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    
    let guessLimit = 5;
    console.log(randomNumber)
    let input = document.getElementById("guess-number");
    console.log('innerText' + input.value)
    if (guessCount != guessLimit) {
        guessCount++
        console.log('Guess count' + guessCount)
        if(input.value == ''){
            alert('Enter a value')
        } else{
            //guessCount+=1
            if (randomNumber == parseInt(input.value)) {
                document.getElementById('result').innerText = 'You Guess Right🥳'
                document.getElementById('display').style.background = 'green'
                alert('You Guess Right🥳')
               // window.location.reload()
            } else {
                document.getElementById('result').innerText = 'You Guess Wrong 😞'
                document.getElementById('display').style.background = 'red'
                document.getElementById('result').style.color = 'white'
                if(guessCount >= 1 || guessCount < guessLimit){
                    alert('Wrong guess, ' + (guessLimit - guessCount) + ' more attempts 😞')
            
                }

            }
        }
             
    }

    else {
        alert('Too Many Attempt, Try again letter')
        window.location.reload()
        document.getElementById('result').style.color = 'white'
        document.getElementById('display').style.background = 'blue'
    }



}