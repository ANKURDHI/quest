

document.addEventListener('DOMContentLoaded', function () {
  


    fetch('http://localhost:5000/getAllBlog')
        .then(response => response.json())
        .then(data => loadBlog(data['data']));
   



});

function loadBlog(data) {
    console.log(data);
    const table = document.getElementById('blogs');
    //    console.log(data);
    if (data.length == 0) {
        table.innerHTML = "<div>No data</div>";
        return;

    }
  
    let tableHtml = "";
    data.forEach(function ({ id, username, blog, image }) {
        if(image!=null){

            tableHtml +=
            `
            <li class="comment">
            <div class="vcard bio">
            <img class="profilePic" src="${image}" alt="Image placeholder">
            </div>
            <div class="comment-body justify-content-center">
            <h3 class="vunro1">${username}</h3>
            <!-- <div class="meta">January 9, 2018 at 2:21pm</div> -->
            <p>${blog}</p>
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
          }else{
            tableHtml +=
            `
            <li class="comment">
            <div class="vcard bio">
            <img class="profilePic" src="images/person_1.jpg" alt="Image placeholder">
            </div>
            <div class="comment-body justify-content-center">
            <h3 class="vunro1">${username}</h3>
            <!-- <div class="meta">January 9, 2018 at 2:21pm</div> -->
            <p>${blog}</p>
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
  
      });
      table.innerHTML = tableHtml;
  }