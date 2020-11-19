const form = document.getElementById("support-form");
const inputfullname = document.getElementById('input-fullname');
const number = document.getElementById('input-number');
const email = document.getElementById('input-email');
const textboxform = document.getElementById('input-message');
const errorElement = document.getElementById('error');
const checkbox = document.getElementById('input-privacy');

form.addEventListener('submit', function submitForm(event){
    event.preventDefault();
    let messages = []

    if (checkbox.checked === false) {
         messages.push('Checkbox must be checked')
     }

    if (inputfullname.value === "" || inputfullname.value == null) {
        messages.push('Name is required');
        inputfullname.className += " border-red-500";  
    }else{
        inputfullname.className = inputfullname.className.replace(/\bborder-red-500\b/g, "border-blue-500");
    }
    if (number.value === "" || number.value == null) {
        messages.push('Number is required');
        number.className += " border-red-500";
    }
    if (email.value === "" || email.value == null) {
        messages.push('Email field cannot be blank');
        email.className += " border-red-500";
    }
    if (textboxform.value === "" || textboxform.value == null) {
        messages.push('Message is required');
        textboxform.className += " border-red-500";
    }
    if (messages.length > 0) {
        errorElement.innerText = messages[0] //.join(', ')       
    }else{
        document.getElementById('support-form').addEventListener('submit', function submitForm(event){
            event.preventDefault();
            const formData = new FormData(this);
            const request = new XMLHttpRequest();
            console.log(request);
            request.open("POST", "https://hsh.blnq.dev/javascript-basics/form-fetch.php");
            request.onreadystatechange = function (){
                if (request.readyState == XMLHttpRequest.DONE){
                    console.log(request.responseText);
                }
            }
            request.send(formData);
            console.log('status ok')
        });

    }
});