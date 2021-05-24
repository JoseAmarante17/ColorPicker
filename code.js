// ARRAY CONTAIN DIFFERENT COLORS
const colors = ["White", "#2E86C1", "#CB4335", "#8C5AA3", "#DC7633", '#0E6655','#F1C40F',"#873600",'#424949','#FA8072'];
let counter = colors.length;
let colorLength = colors.length;
//CHANGES BACKGROUND COLOR
function random(num) {
    //VARIABLE DECLARATION
    let backgroundColor = document.getElementById("color");
    let p = document.getElementById("title");
    let missing = document.getElementById("missing");
    let bold = document.getElementById("bold");
    color = colors[num]
    //CHANGES VALUES
    backgroundColor.style.backgroundColor = color;
   
    p.innerHTML = ("BACKGROUND COLOR IS: " + color);
    console.log(backgroundColor.style.color = color);
    missing.innerHTML = ("Missing " + counter);
    //CHECKS IF ALL COLOR HAVE BEEN FOUND
    colors.splice(num, 1);

    //COUNTER AND LETS USER KNOW THAT THERE ARE NO MORE COLORS
    if (counter == 1) {
        alert("You have found every color");
        p.style.fontSize ="25pt";
        p.innerHTML = "You have found every color congrats. Refreash to do it all again";
        missing.innerHTML = ("Missing 0");
    }
    counter--;
    missing.innerHTML = ("Missing " + counter);

    if (counter <= 0) {
        p.innerHTML = "You have found every color congrats. Refreash to do it all again";
        missing.innerHTML = ("Missing 0");
    }
}

//RUNS EVERYTHING
function change() {
    //VARIABLE DECLARATION
    let randomNum = Math.floor(Math.random() * colors.length);
    random(randomNum);
}
