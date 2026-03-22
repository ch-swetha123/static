function showMessage() {
    alert("Hello! Your website is working 🚀");
}

function greetUser() {
    let name = document.getElementById("name").value;
    
    if (name === "") {
        document.getElementById("output").innerText = "Please enter your name!";
    } else {
        document.getElementById("output").innerText = "Welcome " + name + " 😊";
    }
}