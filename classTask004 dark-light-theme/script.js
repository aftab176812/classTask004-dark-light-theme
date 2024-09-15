var button = document.getElementById("btn");
var body = document.getElementsByTagName("body")[0];

function toggleTheme(){
    if(button.textContent === "Night"){
        body.style.backgroundColor = "black";
        button.style.backgroundColor = "white";
        button.style.color = "black";
        button.textContent = "Day";
    }
    else{
        body.style.backgroundColor = "white";
        button.style.backgroundColor ="black";
        button.style.color = "white";
        button.textContent = "Night";
    }
}