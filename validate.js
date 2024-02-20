function validateInput(input) {
    console.log(input);
    let inputValue = input.value;
    let errorField = input.nextElementSibling;

    if (inputValue === "") {
        input.classList.add("is-invalid");
        errorField.innerText = "This field is required";
    } else {
        input.classList.remove("is-invalid");
        errorField.innerHTML= "";
    }


    let minlength = input.getAttribute("minlength");

    if (minlength && inputValue.length < minlength) {
        errorField.innerText = `Minimum length for ${input.name} is ${minlength}`;
        // validations.input.name = false;

        return;
    } else {
        errorField.innerText = "";
        input.classList.add("is-valid");
    }

    let maxlength = input.getAttribute("maxlength");

    if (maxlength && inputValue.length > maxlength) {
        errorField.innerText = `Maximum length for ${input.name} is ${maxlength}`;
        // validations.input.name = false;
    }
};

let validations = {};

function validateInput(input) {

    let inputValue = input.value;

    let errorField = input.nextElementSibling;

    if(inputValue == "" && input.required) {
        errorField.innerText = `Please fill ${input.name}`;
        validations[input.name] = false;

        return;
    }

    let minLength = input.getAttribute('minlength');

    if(minLength && inputValue.length < minLength) {
        errorField.innerText = `Minimum length for ${input.name} is ${minLength}`;
        validations[input.name] = false;

        return;
    }

    let maxLength = input.getAttribute("maxlength");

    if(maxLength && inputValue.length > maxLength) {
        errorField.innerText = `Maximum length for ${input.name} is ${maxLength}`;
        validations[input.name] = false;

        return;
    }

    let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/

    if(input.type === "email" && !emailRegex.test(inputValue) ) {

        errorField.innerText = `Email is not in valid format`;
        validations[input.name] = false;

        return;
    }

    let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;

    if(input.type === "password" && !passwordRegex.test(inputValue)) {

        errorField.innerText = `Password has to have 1 uppercase letter, 1 number and 1 special char`;
        validations[input.name] = false;        
     
        return;
    }
    errorField.innerText = '';
    validations[input.name] = true;   

}