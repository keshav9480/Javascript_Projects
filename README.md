# Javascript_Projects
Basic Javascript

Document-Object-Model Properties

Modify/Update innerHTML using javascript
1. document.querySelector -- to modify selectors from css file
2. document.queryClassElements
3. document.firstElementChild
4. document.getElementsByTagName("<tag-name>")
5. document.querySelectorAll

etc...



*Higher Order Function*

These are the function which takes other functions as input parameter.

Eg:
function add(num1, num2) {
return num1 + num2;
}
 
function subtract(num1, num2) {
return num1 - num2;
}
 
function multiply(num1, num2) {
return num1 * num2;
}
 
function divide(num1, num2) {
return num1 / num2;
}
 
function calculator(num1, num2, operator) {
return operator(num1, num2);
}


/*Callback Function*/
A function which is passed as parameter to another function