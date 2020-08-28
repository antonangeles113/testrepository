function login() {
    let user = document.getElementById("user").value;
    let pwd = document.getElementById("pwd").value;
    if (user === "admin" && pwd === "secret") {
        alert("you have successfully signed in");
    }else {
        alert("Invalid credentials");
    }
}

function changeColor() { 
    this.document.getElementById("outer").style.backgroundColor = "red"; //window.document, just the same as document because window is already outer.

}

function inputData() {
    let textbox = document.getElementsByClassName("input");
    textbox[0].value = "admin";
    textbox[1].value = "secret";
}

var temp = 5;
var temp = "dog"; //Redeclaration is allowed in var.

/* var temp = 5;
temp = "dog";
*/

function m1() {
    temp = true; //temp becomes boolean in this line.
    console.log(temp);
}

m1();
