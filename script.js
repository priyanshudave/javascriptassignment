function changeColor(element, color){

  element.style.backgroundColor = color;
  element.style.color = "white";

}
function greetUser(){

  let name = document.getElementById("nameInput").value;

  if(name.trim() === ""){
    document.getElementById("greetingText").innerText = "Hello";
  }
  else{
    document.getElementById("greetingText").innerText = "Hello, " + name;
  }

}