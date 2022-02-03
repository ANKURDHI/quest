console.log('This is signup page.');

const addBtn = document.querySelector('#signUp');

addBtn.onclick = function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confPassword = document.getElementById('confPassword').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const address = document.getElementById('address').value;
    
   console.log(password,confPassword);
if(password==confPassword){

    
    fetch('http://localhost:5000/insertUser', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ username: username, password: password,email:email,phoneNumber:phoneNumber,address:address })
    })
    .then(response => response.json())
    
    let message =document.getElementById('message');
    message.innerHTML=`<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">You will be redirected to login page in some time.</h4>
  </div>`;
    

    setTimeout(() => {
        window.location.replace("login2.html");
        
    }, 5000);
}
else{
    let message =document.getElementById('message');
    message.innerHTML=`<div class="alert alert-danger d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
    <div>
     Check Your Password
    </div>
  </div>`;
    
    setTimeout(() => {
        message.innerHTML=``;
    }, 5000);

}

}