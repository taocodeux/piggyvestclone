//changing the nav color
let navbar = document.getElementById("navbar")

function updateNavbarBackground() {
  if (window.scrollY > 0) {
    navbar.classList.remove("bg-white")
    navbar.classList.add("scrolled-color")
  } else {
    navbar.classList.add("bg-white")
    navbar.classList.remove("scrolled-color")
  }
}
updateNavbarBackground()
window.addEventListener("scroll", updateNavbarBackground)

//showing the hamburger
// let navToggle = document.getElementsByClassName("nav-toggle")
// let navbarNav = document.getElementById("navbarNav")

// navToggle.addEventListener("click", ()=>{
//   navbarNav.classList.toggle("active")
// })

//the card colors
// let iphoneImg = document.getElementById("iphone14").innerHTML
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
  // iphoneImg.style.visibility = "visible"
  
  if(currentIndex == colors.length -1){
    currentIndex = 0
  }else{
    currentIndex++
  }
  
}
setInterval(cardsColorChange,2000)