let sconti = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

let buttonElement = document.getElementById("button-id");
buttonElement.addEventListener("click", formSubmit());




function formSubmit(event){
    event.preventDefault();
    
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("inputEmail").value;
    let hoursNumber = document.getElementById("hourNumber").value;
    let workType = document.getElementById("workType").value;
    let dicountCode = document.getElementById("discount").value;

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(hoursNumber);
    console.log(workType);
    console.log(dicountCode);
}