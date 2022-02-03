

document.addEventListener('DOMContentLoaded', function () {
  fetch('http://localhost:5000/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
  // console.log(data);


  fetch('http://localhost:5000/getAll1')
    .then(response => response.json())
    .then(data => loadHTMLTable1(data['data']));
  // console.log(data2);

  fetch('http://localhost:5000/getAll3')
    .then(response => response.json())
    .then(data => profilePhoto(data['data']));




  //  user set
  let userData = document.querySelector('#uname');
  const name1 = localStorage.getItem('user');
  userData.innerHTML = ` ${name1}`;


});

// Profile Photo set
function profilePhoto(data) {
  let userBox = document.getElementById('userBox');
  const name1 = localStorage.getItem('user');
  data.forEach(function ({ username, image }) {
    
    if (name1 == username) {
      userBox.innerHTML = ` <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel9o"><B>USERBOX</B></h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true" id="crossicon">&times;</span>
      </button>
    </div>


    <div  class="modal-body">
      <!-- UserPhoto coming from database -->
      <a href="#"><img src="${image}" alt="userphoto" width="40px" height="auto"></a>

      <!-- username will come here -->
      <h3 id="uname" name="uname">${username}</h3>
      
      <div class="addac">
        <h3 id="addanother"><i class="fa fa-user-plus" aria-hidden="true"></i>&nbsp;<a href="login.html">Add
            Another Account</a></h3>
      </div>
      <div class="addac">

        <h3 id="privacytnc"><i class="fa fa-sticky-note-o"></i>&nbsp;<a href="#privacypage"> Privacy and T&C</a>
        </h3>
      </div>
      <div class="addac">

        <h3 id="signout"><button onclick="logfunc()" style="border: none; background: none;"> <i
              class="fa fa-sign-out"></i>&nbsp;<a href="#logout">SignOut</a></button></h3>
      </div>
    </div>



    <div class="modal-footer">
      <!-- class="btn btn-secondary" -->
      <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
    </div>
  </div>`
    }

  })
}

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

// insert

const addBtn = document.querySelector('#addNameBtn');
// console.log(addBtn);
addBtn.onclick = function () {
  const name1 = localStorage.getItem('user');
  const nameInput = document.querySelector('#textAreaExample');
  const question = nameInput.value;
  if(question==''){ 
  alert1();
    }else{

      nameInput.value = "";
      
      
      fetch('http://localhost:5000/insert', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name: name1, question: question })
      })
      .then(response => response.json())
      
      let message = document.getElementById('message');
      message.innerHTML = `<div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Question Added</h4>
      </div>`;
      
      setTimeout(() => {
        message.innerHTML = ``;
      }, 5000);
    }
    
  }
// post

const addBtn2 = document.querySelector('#submitPost');
const files = document.getElementById('formFileMultiple');
addBtn2.onclick = function (event) {
  event.preventDefault();
  if(files=='null'){
    console.log('null');
  }
  
    
    const name1 = localStorage.getItem('user');
  
    const formData = new FormData();
    formData.append('image', files.files[0]);
    formData.append('username',name1);

    fetch('http://localhost:5000/image', {
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








//questions
function loadHTMLTable(data) {
  const table = document.getElementById('questions');
  //    console.log(data);
  if (data.length == 0) {
    table.innerHTML = "<div>No data</div>";
    return;

  }
  let tableHtml = "";
  data.forEach(function ({ id, username, question, image }) {
    // console.log(question);
    if (id <= 5) {

      if (image != null) {

        tableHtml +=
          `
        <li class="comment">
        <div class="vcard bio">
        <img class="profilePic" src="${image}" alt="Image placeholder">
        </div>
        <div class="comment-body justify-content-center">
        <h3 class="vunro1">${username}</h3>
        <!-- <div class="meta">January 9, 2018 at 2:21pm</div> -->
        <p>${question}</p>
        <p>
        <a href="#w" class="reply" type="button" data-toggle="reply-form" data-target="comment-1-reply-form">Reply</a>&nbsp;
        <a href="seeans.html" class="reply" id="erans">See all answer</a>&nbsp;
        <button id="likebtn${id}" class="like-dislike">
        <i class="fa fa-thumbs-up"></i>
        
        
        </button>
        <button id="dislikebtn${id}" class="like-dislike">
        <i class="fa fa-thumbs-down"></i>
        
        
        </button>
        <!-- reply form input -->
        <form method="POST" class="reply-form d-none" id="comment-1-reply-form">
        <textarea placeholder="Reply to comment" rows="4"></textarea>
        <button  class="reply" type="submit" style="border: none;">Submit</button>
        <button class="reply" type="button" data-toggle="reply-form" data-target="comment-1-reply-form" style="border: none;">Cancel</button>
        </form>
        <!-- reply form end -->
        </p>
        </div>
        </li>
        `
      } else {
        tableHtml +=
          `
        <li class="comment">
        <div class="vcard bio">
        <img class="profilePic" src="images/person_1.jpg" alt="Image placeholder">
        </div>
        <div class="comment-body justify-content-center">
        <h3 class="vunro1">${username}</h3>
        <!-- <div class="meta">January 9, 2018 at 2:21pm</div> -->
        <p>${question}</p>
        <p>
        <a href="#w" class="reply" type="button" data-toggle="reply-form" data-target="comment-1-reply-form">Reply</a>&nbsp;
        <a href="seeans.html" class="reply" id="erans">See all answer</a>&nbsp;
        <button id="likebtn${id}" class="like-dislike">
        <i class="fa fa-thumbs-up"></i>
        
        
        </button>
        <button id="dislikebtn${id}" class="like-dislike">
        <i class="fa fa-thumbs-down"></i>
        
        
        </button>
        <!-- reply form input -->
        <form method="POST" class="reply-form d-none" id="comment-1-reply-form">
        <textarea placeholder="Reply to comment" rows="4"></textarea>
        <button  class="reply" type="submit" style="border: none;">Submit</button>
        <button class="reply" type="button" data-toggle="reply-form" data-target="comment-1-reply-form" style="border: none;">Cancel</button>
        </form>
        <!-- reply form end -->
        </p>
        </div>
        </li>
        `
      }

    }
  });
  table.innerHTML = tableHtml;
}
// posts
function loadHTMLTable1(data) {

  const trend = document.getElementById('postmainbox');
  //    console.log(data);
  if (data.length == 0) {
    trend.innerHTML = "<div>No data</div>";
    return;

  }

  let trendHtml = "";
  data.forEach(function ({ id, username, post, image }) {
    if(post.search("D:")==0){
      post=post.replace("D:\\New folder\\heyil2\\server\\","http://localhost:5000/");
    }
    if (id <= 16) {

      if (image != null) {
        trendHtml +=
          ` 
         
         <div class="card mb-5" >
         <div class="card-header">
         <div class="vcard bio">
         <img src="${image}" alt="Image placeholder" class="dppost">
         </div>
         <h5 class="pull-left"> ${username}</h5>
         <div class="pull-right">
         <a href="#h" class="" id="erans"><i class="fa fa-eye" aria-hidden="true" id="scndnavico"></i>
         Views </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <a href="#o" class="erans" id="likebtn${id + 100}"><i class="fa fa-thumbs-up" aria-hidden="true"
         id="scndnavico"></i> Like</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <a href="#w" class="" id="erans" type="button" data-toggle="replycm-form"
         data-target="comment-${id}-replycm-form"><i class="fa fa-comment" aria-hidden="true"
         id="scndnavico"></i> Comment</a>&nbsp;&nbsp;&nbsp;
         </div>
         <!-- comment form input -->
         <form method="POST" class="replycm-form d-none" id="comment-${id}-replycm-form">
         <textarea placeholder="Reply to comment" rows="4"></textarea>
         <button class="reply" type="submit" style="border: none;">Submit</button>
         <button class="reply" type="button" data-toggle="replycm-form"
         data-target="comment-${id}-replycm-form" style="border: none;">Cancel</button>
         </form>
         <!-- comment form end -->
         
         </div>
         <img class="card-img-top" src="..." alt="Card image cap" id="crdpost">
         <div class="card-body" id="crdpost">
         <!-- <h5 class="card-title" id="crdpost">Card title</h5> -->
         <p class="card-text" ><img src="${post}" width="50%"></p>
         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
         </div>
         
         </div>`
      } else {
        trendHtml +=
          ` 
          
          <div class="card mb-5" >
          <div class="card-header">
          <div class="vcard bio">
          <img src="images/person_1.jpg" alt="Image placeholder" class="dppost">
          </div>
          <h5 class="pull-left"> ${username}</h5>
          <div class="pull-right">
          <a href="#h" class="" id="erans"><i class="fa fa-eye" aria-hidden="true" id="scndnavico"></i>
          Views </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#o" class="erans" id="likebtn${id + 100}"><i class="fa fa-thumbs-up" aria-hidden="true"
          id="scndnavico"></i> Like</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#w" class="" id="erans" type="button" data-toggle="replycm-form"
          data-target="comment-${id}-replycm-form"><i class="fa fa-comment" aria-hidden="true"
          id="scndnavico"></i> Comment</a>&nbsp;&nbsp;&nbsp;
          </div>
          <!-- comment form input -->
          <form method="POST" class="replycm-form d-none" id="comment-${id}-replycm-form">
          <textarea placeholder="Reply to comment" rows="4"></textarea>
          <button class="reply" type="submit" style="border: none;">Submit</button>
          <button class="reply" type="button" data-toggle="replycm-form"
          data-target="comment-${id}-replycm-form" style="border: none;">Cancel</button>
          </form>
          <!-- comment form end -->
          
          </div>
          <img class="card-img-top" src="..." alt="Card image cap" id="crdpost">
          <div class="card-body" id="crdpost">
          <!-- <h5 class="card-title" id="crdpost">Card title</h5> -->
          <p class="card-text" id="crdpost"><img src="${post}"></p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
          </div>`
      }

    }
  });
  trend.innerHTML = trendHtml;

}







// like dislike js


setTimeout(() => {

  likes('likebtn1', 'dislikebtn1');
  likes('likebtn2', 'dislikebtn2');

  likes('likebtn3', 'dislikebtn3');

  likes('likebtn4', 'dislikebtn4');

  likes('likebtn5', 'dislikebtn5');

  likesBlog('likebtn101');

  likesBlog('likebtn102');

  likesBlog('likebtn103');

  likesBlog('likebtn104');

  likesBlog('likebtn105');
}, 500);

function likesBlog(likebutton) {

  let likebtn = document.querySelector(`#${likebutton}`);


  likebtn.addEventListener('click', () => {
    if (likebtn.style.color != "blue") {
      likebtn.style.color = "blue";
    }
    else {
      likebtn.style.color = "#243233"
    }
  })




}


function likes(likebutton, dislikebutton) {

  let likebtn = document.querySelector(`#${likebutton}`);
  let dislikebtn = document.querySelector(`#${dislikebutton}`);



  likebtn.addEventListener('click', () => {
    if (dislikebtn.style.color == "red") {
      dislikebtn.style.color = "grey"
    }
    if (likebtn.style.color != "green") {
      likebtn.style.color = "green";
    }
    else {
      likebtn.style.color = "grey"
    }

  })


  dislikebtn.addEventListener('click', () => {
    if (likebtn.style.color == "green") {
      likebtn.style.color = "grey"
    }
    if (dislikebtn.style.color != "red") {
      dislikebtn.style.color = "red";
    }
    else {
      dislikebtn.style.color = "grey"
    }

  })

}



//For sending Mail

const sendMail = document.getElementById('sendMail');


sendMail.onclick = function (e) {
  e.preventDefault();
  let firstName = document.getElementById('#firstName');
  let lastName = document.getElementById('#lastName');
  let subject = document.getElementById('#subject');
  let email = document.getElementById('#email');
  let contentMail = document.getElementById('#contentMail');



  fetch('http://localhost:5000/mail', {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ firstName: firstName, lastName: lastName, subject: subject, email: email, contentMail: contentMail })
  })
    .then(response => response.json())
  // .then(data => insertRowIntoTable(data['data']));
}



