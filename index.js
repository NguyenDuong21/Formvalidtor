input_username= document.getElementById('username');
input_email = document.getElementById('email');
input_password = document.getElementById('password');
input_password2 = document.getElementById('confirm');
submit = document.getElementById('submit');
function showError(mess,input){
    input.classList.add('warning');
    small_tag = document.querySelector(`#${input.id}+small`);
    small_tag.innerHTML = mess;
}
function checkClass(className,input){
    if(input.classList.contains(className)){
        input.classList.remove(className);
    }
}
function firstUpper(str){
    let first = str[0].toUpperCase()
    let newstr = str.substr(1);
    return first+newstr;
}
function checkLength(input){
    if(input.value.length <=3 ){
        checkClass('success',input);
        showError(`${firstUpper(input.id)} need legth more than 3 `,input);
    } else {
        checkClass('warning',input);
        input.classList.add('success');
    }
}
function checkEmail(email){
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (filter.test(email)){
        checkClass('warning',input_email);
        input_email.classList.add('success');
    } else {
        checkClass('success',input_email);
        showError('Email not exactly',input_email);
    }
}
function checkPassWord(value1, value2){
    if (value2==''){
        checkLength(input_password2);
    }
    else if(value1==value2){
        checkClass('warning',input_password2);
        input_password2.classList.add('success');
    } else {
        checkClass('success',input_password2);
        showError("Confirm password don't match",input_password2);
    }
}
submit.addEventListener('click', (e) => {
    e.preventDefault();
    checkLength(input_username);
    checkLength(input_password);
    checkEmail(input_email.value);
    checkPassWord(input_password.value,input_password2.value)
});