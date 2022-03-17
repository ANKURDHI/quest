document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5000/getAll3')
      .then(response => response.json())
      .then(data => loadUsers(data['data']));
    // console.log(data);
  
  

  
  
  });

  function loadUsers(data) {
    const table = document.getElementById('tableUsers');
    //    console.log(data);
    if (data.length == 0) {
      table.innerHTML = "<div>No data</div>";
      return;
  
    }
    let tableHtml = "";
    data.forEach(function ({ id, username,passwords,  image,adddress,phoneNumber,email }) {
    //   console.log(adddress);
     
   
        if (image != null) {
          if(image.search("D:")==0){
            image=image.replace("D:New folderheyil2server","http://localhost:5000/");
          }
          tableHtml +=
            `
            <tr>
            <td>
                <!-- profile pic and name -->
                <div class="vcard bio">
                    <img src="${image}" alt="Image placeholder"
                    class="dppost">
                  </div>
                  ${username}
              </td>
              <td>${email}</td>
              <td>${phoneNumber}</td>
              <td>${adddress}</td>
              <td>${passwords}</td>
              <td>31/jan/22</td>
              <td>${id}</td>
              <td>
                  <a class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-black">
                      <i class="fa fa-eye"></i></a>
                      <a class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-black">
                          <i class="fa fa-edit" data-toggle="modal"
                          data-target="#exampleModal1" data-whatever="item12"></i></a>
                          <a class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-black">
                              <i class="fa fa-trash" data-toggle="modal"
                              data-target="#exampleModal2" data-whatever="item 21"></i>
                          </a>
          </td>
      </tr>
          `
        } else {
          tableHtml +=
            `
            <tr>
            <td>
                <!-- profile pic and name -->
                <div class="vcard bio">
                    <img src="images/person_1.jpg" alt="Image placeholder"
                    class="dppost">
                  </div>
                  ${username}
              </td>
              <td>${email}</td>
              <td>${phoneNumber}</td>
              <td>${adddress}</td>
              <td>${passwords}</td>
              <td>31/jan/22</td>
              <td>${id}</td>
              <td>
                  <a class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-black">
                      <i class="fa fa-eye"></i></a>
                      <a class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-black">
                          <i class="fa fa-edit" data-toggle="modal"
                          data-target="#exampleModal1" data-whatever="item12"></i></a>
                          <a class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-black">
                              <i class="fa fa-trash" data-toggle="modal"
                              data-target="#exampleModal2" data-whatever="item 21"></i>
                          </a>
          </td>
      </tr>
          `
        }
  
      
    });
    table.innerHTML = tableHtml;
  }






  const deleteBtn = document.querySelector('#deleteBtn');

  deleteBtn.onclick = function()  {
    let id = document.getElementById('UserId').value;
    
        
        

    fetch('http://localhost:5000/delete/' + id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        }
    });
}

// update 

const updateBtn = document.querySelector('#updateBtn');
// console.log(addBtn);
updateBtn.onclick = function () {
  
  const id = document.querySelector('#exampleInputUserID').value;
  
  const name = document.querySelector('#exampleInputUserName').value;
  
  const address = document.querySelector('#exampleAddress').value;
  
  const email = document.querySelector('#exampleEmail').value;
  
  const phoneNumber = document.querySelector('#examplePhn').value;
  
  const password = document.querySelector('#exampleInputPassword').value;
  
  
//   console.log(id,name,address,email,phoneNumber,password);

   
      
      
      fetch('http://localhost:5000/updateUser', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ id:id,name: name, email: email,address:address,phoneNumber:phoneNumber,password:password })
      })
      .then(response => response.json())
      
      
      
      setTimeout(() => {
        
        location.reload();
        
      }, 1000);
    }
    
  