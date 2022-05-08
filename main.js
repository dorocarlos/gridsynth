const buttons = document.querySelectorAll(".col")
function randomplay ()
{
  const player = new Tone.Player("webicesample3.mp3", ()=> {
    const t = Math.random()*5
    player.start(t)
  }).toDestination();
  console.log("hi")
}
window.addEventListener("click", randomplay)
console.log(buttons)
buttons.forEach((button)=>{
  button.addEventListener("mouseover", randomplay)
})
