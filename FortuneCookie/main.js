const boxOne = document.querySelector('.box-1')
const boxTwo = document.querySelector('.box-2')
const openOther = document.querySelector('#openOther')

boxOne.querySelector('img').addEventListener('click', openCookie)
openOther.addEventListener('click', openOtherCookie)
document.addEventListener('keydown', keyEnter)


function changeParagraph() {
  const texts = [
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
    'Procure acender uma vela em vez de amaldiçoar a escuridão.',
    'Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.'
  ]

  boxTwo.querySelector('p').innerHTML = texts[Math.floor(Math.random() * texts.length)]

}

function openCookie() {
  toggleBox()
  changeParagraph()
}

function openOtherCookie(e) {
  e.preventDefault()
  toggleBox()

}

function toggleBox() {
  boxOne.classList.toggle('hide')
  boxTwo.classList.toggle('hide')

}

function keyEnter(e) {
  if (e.key == 'Enter') {
    if (boxOne.classList.contains('hide')) {
      openCookie()

    } else if (boxTwo.classList.contains('hide')) {
      openOtherCookie(e)
    }

  }
}