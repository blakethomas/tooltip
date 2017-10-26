const $btnTopLeft = document.querySelector('.top-left')
const $btnTopRight = document.querySelector('.top-right')
const $btnBottomRight = document.querySelector('.bottom-right')
const $btnBottomLeft = document.querySelector('.bottom-left')
const $buttons = [
$btnTopRight,
$btnTopLeft,
$btnBottomRight,
$btnBottomLeft
]


const locationData = []

$buttons.forEach(button => {
  const {top, right, left, bottom} = button.getBoundingClientRect()
  locationData.push({top, right, left, bottom})
})

for(let i = 0; i < locationData.length; i++){
  const distanceTop = window.innerHeight - locationData[i].top
  const distanceRight = window.innerWidth - locationData[i].right
  const distanceLeft = window.innerWidth - locationData[i].left
  const distanceBottom = window.innerHeight - locationData[i].bottom
  if(distanceRight >= 100){
    $buttons[i].classList.add('right')
    $buttons[i].classList.remove('top', 'bottom', 'left')
  }
  else if(distanceBottom >= 20){
    $buttons[i].classList.add('bottom')
    $buttons[i].classList.remove('top', 'right', 'left')
  }
  else if(distanceTop >= 20){
    $buttons[i].classList.add('top')
    $buttons[i].classList.remove('bottom', 'right', 'left')
  }
  else {
    $buttons[i].classList.add('left')
    $buttons[i].classList.remove('top', 'right', 'bottom')
  }
}
