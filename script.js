const colors = [
  '#FEA47F',
  '#82589F',
  '#ffb8b8',
  '#32ff7e',
  '#25CCF7',
  '#3B3B98',
  '#9AECDB',
  '#4a69bd',
  '#f8c291',
  "#A3CB38"
]

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
  const randomNumber = getRandomNumber()
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}
