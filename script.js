//select first input
let one__input = document.querySelector("#one__input")

//select first submit button
let one__btn = document.querySelector(".one__text-btn")

//select second input
let three__input = document.querySelector("#three__input")

//select second submit button
let three__btn = document.querySelector(".three__btn")

//select divs where will be error 
const error = document.querySelector(".error")
const second__error = document.querySelector(".second__error")

//create new paragraph 
let newParagraph = document.createElement("p")

//set value to the paragraph
newParagraph.textContent = "Please check your email" 


//mail submit on top input
one__btn.addEventListener("click", function (event){

    //check if email address is valid
    if(one__input.value.includes('@') === false || one__input.value.includes(".") === false) {  
      
        event.preventDefault()

        error.appendChild(newParagraph)
        error.style.display = 'block'
        newParagraph.style.color = "#ff4242"
        newParagraph.style.fontSize = "0.8rem"
        one__input.style.border = "1px solid #ff4242"
        one__input.style.cursor = "pointer"

        
    } 
form.reset() 
})

//mail submit on bottom
three__btn.addEventListener("click", function (event){
    
    if(three__input.value.includes('@') === false || three__input.value.includes(".") === false) {
      
        event.preventDefault()

        second__error.appendChild(newParagraph)
        second__error.style.display = 'block'
        three__input.style.marginTop = "0.7em"
        second__error.style.marginTop = "-1em"
        second__error.style.marginBottom = "1em"
        newParagraph.style.color = "#ff4242"
        newParagraph.style.fontSize = "0.8rem"
        three__input.style.border = "1px solid #ff4242"
        three__input.style.cursor = "pointer"

        
    } 
form.reset() 
})
