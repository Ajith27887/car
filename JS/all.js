//Slide Image Start
i = 0;

image = ["car1.jpg", "car2.jpg", "car4.jpg"];

function imgSlide() {
    document.slide.src = image[i];
    if (i < image.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("imgSlide()", 3000);
}
imgSlide();


//Slide Image End
//===================================================================================================//



//side nav start

function navOpen() {
    document.getElementById("mysidenav").style.width = "50%";
}

function navClose() {
    document.getElementById("mysidenav").style.width = "0%";
}

//side nav end
//===================================================================================================//


//feild start

function myFeild() {
    let text = document.getElementById("id1");

    if (!text.checkValidity()) {
        document.getElementById("demo").innerHTML = text.validationMessage;
    }
}

function myFeild2() {
    let text = document.getElementById("id1");

    if (!text.checkValidity()) {
        document.getElementById("demo2").innerHTML = text.validationMessage;
    }
}

function myFeild3() {
    let text = document.getElementById("id3");

    if (!text.checkValidity()) {
        document.getElementById("demo3").innerHTML = text.validationMessage;
    }
}




//feild end
//===================================================================================================//

// comment icon start
function comment() {
    let div = document.createElement("div");

    div.style.position = "fixed";
    div.style.left = "80px";
    div.style.bottom = "80px";
    div.style.width = "300px";
    div.style.height = "500px";
    div.style.backgroundColor = "white";
    div.style.color = "black";
    div.style.padding = "20px";
    div.style.borderRadius = "10px";

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Name");
    input.style.width = "100%";
    div.appendChild(input);


    let email = document.createElement("input");
    email.setAttribute("type", "email");
    email.setAttribute("placeholder", "Email");
    email.style.width = "100%";
    email.style.marginTop = "15px";
    div.appendChild(email);

    let textArea = document.createElement("textarea");
    textArea.setAttribute("placeholder", "Message");
    textArea.style.marginTop = "15px";
    textArea.style.width = "100%";
    textArea.style.height = "300px";
    div.appendChild(textArea);

    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("placeholder", "Email");
    button.style.textAlign = "center";
    button.style.width = "150px";
    button.style.height = "50px";
    button.style.color = "white";
    button.style.backgroundColor = "#73b711";
    button.style.border = "none";
    button.style.float = "right";
    button.style.marginTop = "15px";
    button.style.flex = "justify-content-center";
    div.appendChild(button);


    document.getElementById("main").appendChild(div);
}

function doubleClick() {
    let on = document.getElementById("main");
    if (on.style.display === "none") {
        on.style.display = "block";
    } else {
        on.style.display = "none";
    }
}

// comment icon End
//===================================================================================================//

//clear the input valuer 
function dNone() {
    document.getElementById("id1").value = "";
}

function dNone2() {
    document.getElementById("id2").value = "";
}

function dNone3() {
    document.getElementById("id3").value = "";
}

function dNone4() {
    document.getElementById("id4").value = "";
}
//===================================================================================================//