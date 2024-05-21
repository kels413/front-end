let secret = Math.floor(Math.random() * 20 + 1)
const guess = document.querySelector('.guess-value')
const check =  document.querySelector('.cta')
const inputElement = document.querySelector('#number')
score = document.querySelector('.score-value').innerHTML
scoreValue = document.querySelector('.score-value')
highScore = document.querySelector('.highscore-value')
const restart = document.querySelector('.again')

function validateInput(e){
    const value = parseInt(e.target.value, 10)
    console.log(value)
        if (value > 20 || value < 1) {
            inputElement.classList.add('input-max');
            document.querySelector('.title').innerHTML = 'Guess Must be between 1 and 20'
            check.classList.remove('cta')
            check.classList.remove('cta-hover')
            check.classList.add('disabled')
            check.disabled = true
        } else {
            inputElement.classList.remove('input-max');
            document.querySelector('.title').innerHTML = 'Guess The Secret Number!'
            check.disabled = false
            check.classList.remove('disabled')
            check.classList.add('cta')            
        }
}


function startGame(){
    check.addEventListener('click', (e) => {
        inputValue = inputElement.value
        if (inputValue > secret){
            if (inputValue > 20){
                inputElement.classList.add('inputElement-max')
            }
            document.querySelector('.guess-range').innerHTML = '📈 Too High'
            score -= 1
            scoreValue.innerHTML = score
        }else if(inputValue < secret)
        {
            document.querySelector('.guess-range').innerHTML = '📉 Too Low'
            score -= 1
            scoreValue.innerHTML = score
        }else{
            guess.innerHTML = secret;
            document.querySelector('.container').style.background = 'green';
            highScore.innerHTML = score;
            check.classList.remove('cta')
            check.classList.remove('cta-hover')
            check.classList.add('disabled')
            inputElement.disabled = true
            check.removeEventListener('click', (e) => {})
            
        }
    })
}


function restartGame(){
        secret = Math.floor(Math.random() * 20 + 1)
        highScore.innerHTML = 0;
        check.classList.remove('disabled')
        check.classList.add('cta')
        inputElement.disabled = false
        inputElement.value = 1
        guess.innerHTML = '?'
        scoreValue.innerHTML = 20
        document.querySelector('.container').style.background = 'rgb(124, 103, 103)'
        document.querySelector('.guess-range').innerHTML = 'start guessing...'

    }

inputElement.addEventListener('input', function(e) {
    validateInput(e)
})

restart.addEventListener('click', (e) => {
    restartGame()
})

// function calls
startGame()