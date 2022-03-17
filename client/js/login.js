
console.log("working");
const loginBtn = document.querySelector('#login-button');
loginBtn.onclick = function () {
    console.log('clicked');
    fetch('http://localhost:5000/getAll3')
    .then(response => response.json())
    .then(data => homePage(data['data']));
    
    
}

function homePage(data){
    
    const user = document.querySelector('#userName').value;
    const password = document.querySelector('#password').value;
    
    data.forEach(function({ username, passwords}){
        
        if(user == 'admin' && password == 'admin'){
          
            location.replace("Adminst.html");
            
           


        }
        else if(user == username && password == passwords){
            localStorage.setItem('user', user);
            location.replace("index.html");
            
           


        }else{
            let message =document.getElementById('message');
            message.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Invalid Credentials!!!</strong> Try Again.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;

          setTimeout(() => {
              message.innerHTML=``;
          }, 5000);
        }
        
     
    
    });


}