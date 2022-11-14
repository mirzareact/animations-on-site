let textTag = document.querySelector(".section1 h1")
let text = textTag.textContent

let splittedText = text.split("")
textTag.innerHTML = ""

for(let i = 0; i < splittedText.length; i++){
    if(splittedText[i] == " "){
        splittedText[i] = "&nbsp;"
    }

     textTag.innerHTML += `<span>${splittedText[i]}</span>`
}
let k = 0
let spans = textTag.querySelectorAll("span")
let interval = setInterval(() => {
    let singleSpan = spans[k]
    
    singleSpan.className = "fadeMove"

    k++

    if(k === spans.length){
        clearInterval(interval)
    }
}, 75)

let border = document.querySelector(".border-line") 
let animationWidth = 0

window.onscroll = () => {

    if(this.oldScrol > this.scrollY){
        animationWidth -= 2.7
    } else {
        animationWidth += 2.7
    }

    if(animationWidth >= 100){
        animationWidth = 100
    }

    if(animationWidth <= 0 ){
        animationWidth = 0
    }

    border.style.width = animationWidth + "%"

    this.oldScrol = this.scrollY

    imageAnimation()
    

}

const imageAnimation = () => {
    let sectionForAnimation = document.querySelector(".section2 .images")
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top
    let screenPosition = window.innerHeight / 1.4


    let leftImg = document.querySelector(".slideFromLeft")
    let rightImg = document.querySelector(".slideFromRight")

    if(sectionPosition < screenPosition){
        leftImg.classList.add("animated")
        rightImg.classList.add("animated")
    }
}