let navbar = document.getElementById("navbar")

function updateNavbarBackground() {
  if (window.scrollY > 0) {
    navbar.classList.remove("bg-transparent")
    navbar.classList.add("scrolled-color")
  } else {
    navbar.classList.add("bg-transparent")
    navbar.classList.remove("scrolled-color")
  }
}
updateNavbarBackground()
window.addEventListener("scroll", updateNavbarBackground)


let cards = document.getElementsByClassName("cards")
let colors = ["rgb(15,96,214)", "rgb(35,148,242)", "rgb(57,194,119)", "rgb(229,72,155)", "rgb(106, 107, 109)"]
let currentIndex = 0
let initialColors = []

for (let i = 0; i < cards.length; i++) {
  initialColors.push({
    backgroundColor: cards[i].style.backgroundColor, 
    color: cards[i].style.color
  })
}

function cardsColorChange(){
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = initialColors[i].backgroundColor
    cards[i].style.color = initialColors[i].color
  }

  cards[currentIndex].style.backgroundColor = colors[currentIndex]
  cards[currentIndex].style.color = "white"
  
  if(currentIndex == colors.length -1){
    currentIndex = 0
  }else{
    currentIndex++
  }
  
}
setInterval(cardsColorChange,2000)