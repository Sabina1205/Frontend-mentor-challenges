let form_desktop = document.querySelector(".form-desktop");
let container_desktop = document.querySelector('.container-desktop');
let container_success = document.querySelector('.container-success-desktop');
let input_desktop = document.getElementById("email");
let submit_desktop = document.getElementById("submit");

form_desktop.addEventListener('submit', (e) => {
    e.preventDefault();
   
    if (input_desktop.value === "" || input_desktop.value == null) {
        document.getElementById("error_message").innerHTML = "Valid Email Required";
        input_desktop.style.border = "1px solid red";
        input_desktop.style.backgroundColor = "rgb(253, 201, 209)";
        input_desktop.value = "";
    } else {
        container_desktop.style.display = "none";
        container_success.style.display = "flex";
    }
})

let dismissBtn = document.getElementById("dismiss-btn"); 

dismissBtn.addEventListener('click', (e) => {
    e.preventDefault();
    container_success.style.display = "none";
    container_desktop.style.display = "flex";
    input_desktop.value = "";
})


