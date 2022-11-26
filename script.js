let password= document.getElementById('pswrd');
let toggleButton = document.getElementById('toggleBtn');
let emaiL = document.getElementById('@');
let dot = document.getElementById('.');
let lowerCase= document.getElementById('lower');
let upperCase= document.getElementById('upper');
let digit= document.getElementById('number');
let specialChar= document.getElementById('special');
let minLength= document.getElementById('length');

function checkEmail(mail){
    // mail format expression patter
const mailFormat1 = new RegExp(/^[^]+@/);
const mailFormat2 = new RegExp(/[^]+\.[a-z]{2,3}$/);

//@ char validation check
if(mailFormat1.test(mail)){
    emaiL.classList.add('valid');

}else{
    emaiL.classList.remove('valid');
}
 // .char validation check
if(mailFormat2.test(mail)){
    dot.classList.add('valid');

}else{
    dot.classList.remove('valid');
}
}

function checkPassword(data){
   // js regular expression pattern
const lower = new RegExp('(?=.*[a-z])');
const upper = new RegExp('(?=.*[A-Z])');
const number = new RegExp('(?=.*[0-9])');
const special = new RegExp('(?=.*[!@#\$%\^&\*])');
const length = new RegExp('(?=.{8,})');

// lower case validation check
if(lower.test(data)){
    lowerCase.classList.add('valid');
}else{
    lowerCase.classList.remove('valid');
}

// upper case validation check
if(upper.test(data)){
    upperCase.classList.add('valid');
}else{
    upperCase.classList.remove('valid');
}
// number validation check
if(number.test(data)){
    digit.classList.add('valid');
}else{
    digit.classList.remove('valid');
}
// special char validation check
if(special.test(data)){
    specialChar.classList.add('valid');
}else{
    specialChar.classList.remove('valid');
}
// length char validation check
if(length.test(data)){
    minLength.classList.add('valid');
}else{
    minLength.classList.remove('valid');
}
}

//show and hide the password
toggleButton.onclick =function(){
    if(password.type=== 'password'){
        pswrd.setAttribute('type','text');
        toggleButton.classList.add('hide');
    }else{
        pswrd.setAttribute('type','password');
        toggleButton.classList.remove('hide');
    }
} 
