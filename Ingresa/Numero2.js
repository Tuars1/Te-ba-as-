const question = document.querySelector(".question");
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")


yesBtn.addEventListener("click", ()=> {
    question.innerHTML = "Looo sabia ";
    gif.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8P-uHbtVz_LhiwUDiSEruLNWYajBlkuwkvQ&s" /*el gif*/
})

noBtn.addEventListener("mouseover", ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)

    noBtn.style.left = randomX + "px"; /*lo mando el No a un lado ramdon*/ 
    noBtn.style.top = randomY + "px"
})