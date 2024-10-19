function Play(){
  // const homeScreen=document.getElementById('home_screen')
  //  homeScreen.classList.add('hidden')
  AddElementById('home_screen')
  AddElementById('final_score')

  // const playGround=document.getElementById('play_ground')
  // playGround.classList.remove('hidden')
  removeElementById('play_ground')
  setTextElementValueById('current_life',5)
  setTextElementValueById('current_score',0)
  



  const alphabetString='abcdefghijklmnopqrstuvwxyz/'
  const alphabet =alphabetString.split('')
  console.log(alphabet)



  const randomNo =Math.random() * 25
  const index =Math.round(randomNo)
  console.log(index)


  const randomIndex =alphabet[index]
  console.log(randomIndex)

  const currentRandomText=document.getElementById('current_alphabet')
currentRandomText.innerText=randomIndex

const addBackgroundColor=document.getElementById(randomIndex)
addBackgroundColor.classList.add('bg-orange-400')




  
}
function handleKeyboardButtonPress(event){
  // console.log(event.key);

  const playerPressed =event.key;
console.log('Player Pressed :', playerPressed)

const currentAlphabetElements=document.getElementById('current_alphabet')
 const current_alphabet=currentAlphabetElements.innerText;
 const expectedAlphabet=current_alphabet.toLowerCase()
console.log('My current Alphabet', playerPressed,current_alphabet)




if(playerPressed===expectedAlphabet){
  console.log('You will win the game')


  const alphabetString='abcdefghijklmnopqrstuvwxyz/'
  const alphabet =alphabetString.split('')
  console.log(alphabet)



  const randomNo =Math.random() * 25
  const index =Math.round(randomNo)
  console.log(index)


  const randomIndex =alphabet[index]
  console.log(randomIndex)

  const currentRandomText=document.getElementById('current_alphabet')
currentRandomText.innerText=randomIndex

const addBackgroundColor=document.getElementById(randomIndex)
addBackgroundColor.classList.add('bg-orange-400')

const removeAlphabet=document.getElementById(expectedAlphabet)
removeAlphabet.classList.remove('bg-orange-400')


// Get the current score
// const currentScoreElements=document.getElementById('current_score')
// const currentScoreText =currentScoreElements.innerText;
// const currentScore = parseInt(currentScoreText);
// console.log(typeof(currentScore))

// increase by score 1
const currentScore=getTextElementValueById('current_score')
const updateScore =currentScore + 1
// currentScoreElements.innerText=updateScore

setTextElementValueById('current_score',updateScore)


}
else{
  console.log('You cannot win the game')

// Get the current life
// const currentLifeElements= document.getElementById('current_life')
// const currentlifeText=currentLifeElements.innerText
// const currentLife=parseInt(currentlifeText)

// console.log(typeof(currentLife))

// decrease by score 1
const currentLife =getTextElementValueById('current_life')
const updateLife = currentLife - 1;
// currentLifeElements.innerText= updateLife
setTextElementValueById('current_life',updateLife)


if(updateLife===0){
  console.log('Game Over')


//   const playGround=document.getElementById('play_ground')
// playGround.classList.add('hidden')
AddElementById('play_ground')

// const finalSection =document.getElementById('final_score')
// finalSection.classList.remove('hidden')
removeElementById('final_score')

const lastScore =getTextElementValueById('current_score')
console.log('Last score',lastScore)
setTextElementValueById('last_score',lastScore)

// Clear the last selected alphabet  highlight
// const currentAlphabet =getElementById('current_alphabet')
const removeAlphabet=document.getElementById(expectedAlphabet)
removeAlphabet.classList.remove('bg-orange-400')


}



}
// console.log(currentAlphabetElements.innerText)


  // console.log(event.key)

}
document.addEventListener('keyup',handleKeyboardButtonPress);