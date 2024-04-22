const target = document.getElementById("target")
let yes = document.getElementById("yes")
let msg = document.querySelector(".msg-container")
let close = document.getElementById("Close")
yes.addEventListener("click", () => {
    msg.classList.add("show")

})
close.addEventListener("click", () => {
    msg.classList.remove("show")

})
function moveTarget() {
    const maxWidth = 350;
    const maxHeight = 400;

    const ranomX = Math.floor(Math.random() * maxWidth)
    const ranomY = Math.floor(Math.random() * maxHeight)
    target.style.left = ranomX + "px"
    target.style.top = ranomY + "px"
}
target.addEventListener("mouseenter",()=>{
moveTarget()
})