let sconti = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

//let buttonElement = document.getElementById("button-id");
//buttonElement.addEventListener("click", formSubmit());




function formSubmit(event){
    event.preventDefault();
    
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("inputEmail").value;
    let hoursNumber = document.getElementById("hourNumber").value;
    let workType = document.getElementById("workType").value;
    let discountCode = document.getElementById("discount").value;

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(hoursNumber);
    hoursNumber = parseInt(hoursNumber);
    console.log(workType);
    console.log(discountCode);

    let payPerHour;

    switch (workType){

        case "front" : payPerHour = 15.30;
                        break;
        case "back" : payPerHour = 20.50;
                        break;
        case "proj" : payPerHour = 33.60;
                        break;
    }

    let result = hoursNumber * payPerHour;

    if (codeControl(discountCode, sconti) == true){
        let sconto = result * 25 / 100;
        result = result - sconto;
    }


    




}








function codeControl(code , array){

}