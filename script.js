let age = 0
let day = 0

document.getElementById('submit').addEventListener('click', compare)
// will activate function compare when button is clicked

function compare () {
  age = document.getElementById('age').value
  day = document.getElementById('day').value
  if (day === 'sunday' || day === 'saturday') {
    document.getElementById('relax').style.display = 'block'
  } else if (age >= '18') {
    document.getElementById('work').style.display = 'block'
  } else if (age < 18 ) {
    document.getElementById('school').style.display = 'block'
  }
}
// This is to determine the category the age belongs in and will reveal the message corresponding to it
