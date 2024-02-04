const from=document.querySelector("#form");
const username=document.querySelector("#username");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const cpassword=document.querySelector("#cpassword");

from.addEventListener('submit',(e)=>{
    if(!validateInputs()){
        e.preventDefault();
    }
})
function validateInputs(){
    const usernameVal=username.value.trim();
    const passwordVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim();
    const emailVal=email.value.trim();
    let success = true;

    if(usernameVal==''){
        success=false;
        setError(username,"Username is required");
    }
    else
        setSuccess(username);
    
        if(passwordVal.length<8){
            success=false;
            setError(password,"password must be 8 characters");
        }
        else{
            setSuccess(password);
        }
        if(emailVal==''){
            success=false;
            setError(email,'You must enter the email');
        }
        else{
            setSuccess(email);
        }
        if(cpasswordVal==''){
            success=false;
            setError(cpassword,"Confirm password is required");
        }
        else if(cpasswordVal!=passwordVal){
            success=false;
            setError(cpassword,"password is mismatch");
        }
        else{
            success=false;
            setSuccess(cpassword);
        }


        return success;
}
function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}
function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerText='';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}
