const resultDisplay  = document.getElementById('result')
const choicesDisplay = document.getElementById('choices')
const choices =['Rock','Paper','Scissors']

const handleClick=(e)=>{
    const userChoice = e.target.innerHTML
    const computerChoice = choices[Math.floor(Math.random()*3)]
    getResults(userChoice, computerChoice)
}

choices.forEach(choice=>{
    const button = document.createElement('button')
    button.innerHTML = choice
    button.addEventListener('click',handleClick)
    choicesDisplay.appendChild(button)
})

const getResults = (userChoice,computerChoice)=>{
    switch (userChoice + computerChoice){
        case 'ScissorsPaper':
        case 'RockScissors':
        case 'PaperRock':
        resultDisplay.innerHTML= 'You chose '+ userChoice+ ' and computer chose '+computerChoice +"<br>YOU WIN!";
        break
        case 'PaperScissors':
        case 'ScissorsRock':
        case 'RockPaper':
        resultDisplay.innerHTML= 'You chose '+ userChoice+ ' and computer chose '+computerChoice +"<br>YOU LOOSE!";
        break
        case 'ScissorsScissors':
        case 'RockRock':
        case 'PaperPaper':
        resultDisplay.innerHTML= 'You and computer chose '+computerChoice +"<br>IT'S A DRAW";
        break

    }
}