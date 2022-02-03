const addBtn = document.querySelector('#subblog1');
addBtn.onclick = function (e) {
    e.preventDefault();
    const name1 = localStorage.getItem('user');
    const nameInput = document.querySelector('#inputBlog');
    const blog = nameInput.value;
    if(blog==''){ 
        alert1();
          }else{
    nameInput.value = "";


    fetch('http://localhost:5000/insert2', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name: name1, blog: blog })
    })
        .then(response => response.json())
        
     let message =document.getElementById('message');
     message.innerHTML=`<div class="alert alert-success" role="alert">
   <h4 class="alert-heading">Blog Added</h4>
      </div>`;
    
      setTimeout(() => {
          message.innerHTML=``;
      }, 5000);
}}


function alert1() {
    let message =document.getElementById('message');
    message.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Something went wrong</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  
  setTimeout(() => {
      message.innerHTML=``;
  }, 5000);
  }