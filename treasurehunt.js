alert("Find the treasure")
// const rainbowTreasure = () => {
// var randomNum = Math.floor(Math.random() * 8)
//   return Math.floor(Math.random() * 8)
// }
// rainbowTreasure()
// const bomb = ()=> {
//   var randomNum=Math.floor(Math.random()* 8)
//     return Math.floor(Math.random()*8)
// }
// bomb();
var treasureLocation = Math.floor(Math.random()*8)
var bombLocation = Math.floor(Math.random()*8)
if(treasureLocation === bombLocation){
  bombLocation = Math.floor(Math.random()*8)
}
console.log(treasureLocation, bombLocation)
//set the initial counter value
var counter = 7
const treasure = (location) => {
  if(treasureLocation === location){
    alert("You win!")
    document.getElementById(location).innerHTML = "&#127942"
  } else if(bombLocation === location){
    alert("You lose!!");
    document.getElementById(location).innerHTML = "&#x2620"
    // document.getElementById(location).clearResult();
  } else if(bombLocation !== location) {
    document.getElementById(location).innerHTML = "&#10006"
    // document.getElementById(location).clearResult();
  }
}
// function clearResult(){
//   document.getElementById(“reset”).reset();
// }
// const treasure = (location) => {
//   counter = counter - 1
//   document.getElementById(“counter”).innerHTML = `Counter: ${counter}`
//   if(treasureLocation === location){
//     console.log(“You win!“)
//     document.getElementById(“outcome”).innerHTML = “You WIN! &#x1f308"
//     document.getElementById(“gameboard”).innerHTML = “W”
//   }
//   else if(bombLocation === location){
//     console.log(“You lose!“)
//     document.getElementById(“outcome”).innerHTML = “Sorry, you lose &#x2620"
//     document.getElementById(“gameboard”).innerHTML = “L”
//   }
//   else if(treasureLocation !== location && bombLocation !== location){
//     document.getElementById(location).innerHTML = “:heart:”
//   }
//   else if(counter === 0){
//     document.getElementById(“outcome”).innerHTML = “Sorry, you lose &#x2620”
//     document.getElementById(“gameboard”).innerHTML = “”
//   }
//   document.getElementById(location).disabled = true
// }
