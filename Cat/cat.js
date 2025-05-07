function addStyle(){
    var myVar = document.querySelector("#paraId");
    //myVar.style.color = "blue";
    //myVar.style.fontSize = "3rem";
    myVar.classList.add("para-style");
}

function removeStyle(){
    var myVar = document.querySelector("#paraId");
    //myVar.style.color = "blue";
    //myVar.style.fontSize = "3rem";
    myVar.classList.remove("para-style");
}