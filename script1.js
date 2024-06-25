//- Write JavaScript code to display an alert with the message "Button clicked!" when the button is clicked.
var x = document.createElement("BUTTON");
x.innerText='click me';
// Add click event listener to the button
x.addEventListener('click', () => {
 alert('Button clicked!');
  });
  
  document.body.appendChild(x);
  // Create a paragraph with the text "Original text".
  //- Write JavaScript to change the paragraph's text to "Text changed!" when you click on it.
  var para = document.createElement("p");
  para.innerText='"Original text"';
  para.addEventListener('click', () => {
para.textContent= "Text changed!" });
document.body.appendChild(para);
3.// **Mouse Over Event**:
  // - Create a div with some text inside it.
   //- Write JavaScript to change the background color of the div to yellow when the mouse hovers over it, and change it back to white when the mouse leaves.

   var div = document.createElement("div");
   div.innerText='"Something"';
   div.addEventListener('click', () => {
    div.style.backgroundColor= "yellow" });
    document.body.appendChild(div);
 //4. **Form Event**:
 // Create a form with an input field and a submit button.
//Write JavaScript to prevent the form from submitting if the input field is empty and display an alert saying "Please fill out the field".
const fname=document.getElementById("FN").value
console.log(fname)

form1.addEventListener('submit',validateForm=() => {if (fname == "") {
    alert("Name must be filled out");
    return false;}})

