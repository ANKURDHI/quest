document.addEventListener('DOMContentLoaded', function () {


    fetch('http://localhost:5000/getAll')
        .then(response => response.json())
        .then(data => Question(data['data']));

     fetch('http://localhost:5000/getAll3')
        .then(response => response.json())
        .then(data => Profile(data['data']));    






});



function Question(data) {
    let contentBox = document.getElementById('MainContent');
    const name1 = localStorage.getItem('user');
    
    content = "";
    data.forEach(function ({ id, username, question, image }) {

        if (name1 == username) {
            if (image != null) {
                content += `
        <div class="card">
        <div class="card-header">
        <img src="${image}" class="image--cover">
   <strong> ${username}</strong>
  </div>
  <div class="card-body textColor">
    
     ${question}
  </div>
</div> `
            } else {
                content += `
        <div class="card">
        <div class="card-header">
        <img src="images/person_1.jpg" class="image--cover">
   <strong> ${username}</strong>
  </div>
  <div class="card-body textColor">
    
     ${question}
  </div>
</div> `
            }
        }
    });
    contentBox.innerHTML = content;
    if(content==""){
        console.log('nothing here');
        contentBox.innerHTML += `<p class='textMiddle'>Nothing here yet....</p>`
        }
}

// onclick for myquestion
const myQuestions = document.getElementById('myQuestions');
myQuestions.onclick = function () {
    fetch('http://localhost:5000/getAll')
        .then(response => response.json())
        .then(data => Question(data['data']));
}
// onclick for myposts
const myPosts = document.getElementById('myPosts');
myPosts.onclick = function () {
    fetch('http://localhost:5000/getAll1')
        .then(response => response.json())
        .then(data => MyPosts(data['data']));
}
// onclick for blogs
const myBlogs = document.getElementById('myBlogs');
myBlogs.onclick = function () {
    fetch('http://localhost:5000/getAllBlog')
        .then(response => response.json())
        .then(data => MyBlogs(data['data']));
}


function MyPosts(data) {
    let contentBox = document.getElementById('MainContent');
    const name1 = localStorage.getItem('user');
 
    content = "";
    data.forEach(function ({ id, username, post, image }) {
      if(post.search("D:")==0){
        post=post.replace("D:\\New folder\\heyil2\\server\\","http://localhost:5000/");
      }
        if (name1 == username) {
            if (image != null) {
                content += `
        <div class="card">
        <div class="card-header">
        <img src="${image}" class="image--cover">
   <strong> ${username}</strong>
  </div>
  <div class="card-body textColor">
    
     ${post}
  </div>
</div> `
            } else {
                content += `
        <div class="card">
        <div class="card-header">
        <img src="images/person_1.jpg" class="image--cover">
   <strong> ${username}</strong>
  </div>
  <div class="card-body textColor">
    
     <img src="${post}" width='50%'>
  </div>
</div> `
            }
        }
    });
    contentBox.innerHTML = content;
    if(content==""){
        console.log('nothing here');
        contentBox.innerHTML += `<p class='textMiddle'>Nothing here yet....</p>`
        }
}











function MyBlogs(data) {
    let contentBox = document.getElementById('MainContent');
    const name1 = localStorage.getItem('user');
  
    content = "";
    data.forEach(function ({ id, username, blog, image }) {

        if (name1 == username) {
            if (image != null) {
                content += `
        <div class="card">
        <div class="card-header">
        <img src="${image}" class="image--cover">
   <strong> ${username}</strong>
  </div>
  <div class="card-body textColor">
    
     ${blog}
  </div>
</div> `
            } else {
                content += `
        <div class="card">
        <div class="card-header">
        <img src="images/person_1.jpg" class="image--cover">
   <strong> ${username}</strong>
  </div>
  <div class="card-body textColor">
    
     ${blog}
  </div>
</div> `
            }
        }
        
    });
    contentBox.innerHTML = content;
    if(content==""){
        console.log('nothing here');
        contentBox.innerHTML += `<p class='textMiddle'>Nothing here yet....</p>`
        }
}

function Profile(data) {
    

    let profileBox = document.getElementById('profileBox');
    const name1 = localStorage.getItem('user');
   
    content = "";
    data.forEach(function ({ id, username,image,adddress }) {
      if(image.search("D:")==0){
        image=image.replace("D:New folderheyil2server","http://localhost:5000/");
      }

        if (name1 == username) {
            if (image != null) {
                content += `
                <aside class="user-info-wrapper">
                <div class="user-cover"
                  style="background-image: url(https://bootdey.com/img/Content/bg1.jpg);">
                  <div class="info-label" data-toggle="tooltip" title="" data-original-title="Your account">
                </div>
                <div class="user-info">
                  <div class="user-avatar">
                  <a class="edit-avatar" href="#" data-toggle="modal" data-target="#exampleModal2"
                  data-whatever="item 2"> </a><img
                      src="${image}" alt="User">
                  </div>
                  <div class="user-data text-black">
                    <h4>User Id</h4><span>Joined February 06, 2017</span>
                  </div>
                </div>
              </aside>
              <nav class="list-group">
                <a class="list-group-item" href="#"><i class="fa fa-user"></i>${username}</a>
                <a class="list-group-item" href="#"><i class="fa fa-map"></i>${adddress}</a>
                <!--these three option ask post blog will show on mobile screen  -->
                <a class="list-group-item" href="#" data-toggle="modal" data-target="#exampleModal1"
                  data-whatever="item 1" id="crtnvhider"><i class="fa fa-question-circle"></i>Ask</a>
                <a class="list-group-item" href="#" data-toggle="modal" data-target="#exampleModal21"
                  data-whatever="item 2" id="crtnvhider"><i class="fa fa-camera"></i>Post</a>
                <a class="list-group-item" href="#" id="crtnvhider"><i
                    class="fa fa-pencil-square"></i>Blog</a>
                <!-- ... -->
                <a class="list-group-item with-badge" href="#"><i class="fa fa-th"></i>Societies joined<span
                    class="badge badge-primary badge-pill">${id}</span></a>
                <a class="list-group-item with-badge active" onclick="logfunc()" href="#"><i class="fa fa-sign-out"></i>Log
                  Out</a>
              </nav> `
            } else {
                content += `
                <aside class="user-info-wrapper">
                <div class="user-cover"
                  style="background-image: url(https://bootdey.com/img/Content/bg1.jpg);">
                  <div class="info-label" data-toggle="tooltip" title="" data-original-title="Your account">
                </div>
                <div class="user-info">
                  <div class="user-avatar">
                  <a class="edit-avatar" href="#" data-toggle="modal" data-target="#exampleModal2"
                  data-whatever="item 2"> </a><img
                      src="images/person_1.jpg" alt="User">
                  </div>
                  <div class="user-data text-black">
                    <h4>User Id</h4><span>Joined February 06, 2017</span>
                  </div>
                </div>
              </aside>
              <nav class="list-group">
                <a class="list-group-item" href="#"><i class="fa fa-user"></i>${username}</a>
                <a class="list-group-item" href="#"><i class="fa fa-map"></i>${adddress}</a>
                <!--these three option ask post blog will show on mobile screen  -->
                <a class="list-group-item" href="#" data-toggle="modal" data-target="#exampleModal1"
                  data-whatever="item 1" id="crtnvhider"><i class="fa fa-question-circle"></i>Ask</a>
                <a class="list-group-item" href="#" data-toggle="modal" data-target="#exampleModal21"
                  data-whatever="item 2" id="crtnvhider"><i class="fa fa-camera"></i>Post</a>
                <a class="list-group-item" href="#" id="crtnvhider"><i
                    class="fa fa-pencil-square"></i>Blog</a>
                <!-- ... -->
                <a class="list-group-item with-badge" href="#"><i class="fa fa-th"></i>Societies joined<span
                    class="badge badge-primary badge-pill">${id}</span></a>
                <a class="list-group-item with-badge active" onclick="logfunc()" href="#"><i class="fa fa-sign-out"></i>Log
                  Out</a>
              </nav>  `
            }
        }
    });
    profileBox.innerHTML = content;
 
}

    

const addBtn5 = document.querySelector('#submitPostPic');
const files = document.getElementById('formFileMultiplePic');
console.log(addBtn5);
addBtn5.onclick = function (event) {
  event.preventDefault();
  console.log("clicked")
  if(files=='null'){
    console.log('null');
  }
  
    
    const name1 = localStorage.getItem('user');
  
    const formData = new FormData();
    formData.append('image', files.files[0]);
    formData.append('username',name1);

    fetch('http://localhost:5000/update', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      
      
      .catch(error => {
        console.log(error);
        let message =document.getElementById('message');
        message.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Something went wrong.</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;

      setTimeout(() => {
          message.innerHTML=``;
      }, 5000);
      });
      let message = document.getElementById('message');
  message.innerHTML = `<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Post Added</h4>
  </div>`;

  setTimeout(() => {
    message.innerHTML = ``;
  }, 5000);
  }


  