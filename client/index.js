document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5000/getAll')
        .then(response => response.json())
        .then(data => loadHTMLTable(data['data']));
    // console.log(data);


    fetch('http://localhost:5000/getAll1')
        .then(response => response.json())
        .then(data => loadHTMLTable1(data['data']));
    // console.log(data2);



    // user set
    const userData = document.querySelector('.subask0');
    const name1 = localStorage.getItem('user');
    userData.innerHTML = ` <div class="askicon">
                   <i class="fas fa-portrait"></i> 
                     </div>
                     <div class="askpara">
               <p id="user">${name1}</p>
                         </div>`;


});





// insert

const addBtn = document.querySelector('#add-name-btn');

addBtn.onclick = function () {
    const name1 = localStorage.getItem('user');
    const nameInput = document.querySelector('#name-input');
    const question = nameInput.value;
    nameInput.value = "";


    fetch('http://localhost:5000/insert', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name: name1, question: question })
    })
        .then(response => response.json())
    // .then(data => insertRowIntoTable(data['data']));
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
    data.forEach(function ({ id,username, question }) {
        // console.log(question);
        tableHtml +=
            `

        <div class="post1">

            <div class="subpost0">
                <div class="uicon">
                    <i class="fas fa-portrait"></i> 
                </div>
                <div class="para">
                    <p>${username}</p>
                </div>
                <div id="voting">


                        <button id="likebtn${id}" class="like-dislike">
                          <i class="fa fa-thumbs-up"></i>
                      
                      
                        </button>
                        <input type="number" id="input${id}" class="input-like-dislike" value="${Math.floor(Math.random() * 6) + 100}" name="">
                      
                      
                        <button id="dislikebtn${id}" class="like-dislike">
                          <i class="fa fa-thumbs-down"></i>
                      
                      
                        </button>
                        <input type="number" id="input${id + 100}" class="input-like-dislike" value="${Math.floor(Math.random() * 6) + 10}" name="">
                      
                      </div>
            </div>

            <div class="subpost1">
            ${question}
            </div>

        </div>

        <div class="seeall">
            <a href="#">SEE ALL ANSWERS &nbsp;>></a>
        </div>
`

    });
    table.innerHTML = tableHtml;
}
//blog and posts
function loadHTMLTable1(data) {

    const trend = document.getElementById('trend');
    //    console.log(data);
    if (data.length == 0) {
        trend.innerHTML = "<div>No data</div>";
        return;

    }
  
    let trendHtml = "";
    data.forEach(function ({ id, username, blogs }) {
        trendHtml +=
            ` 


            <div class="toptrendpost1">

                <div class="trenpost0">
                    <div class="trenuicon">
                        <i class="fas fa-portrait"></i> 
                    </div>
                    <div class="trenpara">
                        <p>${username}</p>
                    </div>
                    <div id="voting">


                    <button id="likebtn${id + 100}" class="like-dislike">
                      <i class="fa fa-thumbs-up"></i>
                  
                  
                    </button>
                    <input type="number" id="input${id + 200}" class="input-like-dislike" value="${Math.floor(Math.random() * 6) + 100}" name="">
                  
                  
                    <button id="dislikebtn${id + 100}" class="like-dislike">
                      <i class="fa fa-thumbs-down"></i>
                  
                  
                    </button>
                    <input type="number" id="input${id + 300}" class="input-like-dislike" value="${Math.floor(Math.random() * 6) + 50}" name="">
                  
                  </div>
                </div>

                <div class="trenpost1">
                ${blogs}
                </div>

            </div>

            <div class="viewcomm">
                <a href="#"><i class="fas fa-eye"></i>&nbsp; views</a>
                <a href="#"><i class="far fa-comment-dots"></i>&nbsp; Comments</a>
            </div>`

    });
    trend.innerHTML = trendHtml;

}





// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// post modal

// Get the modal
var modal2 = document.getElementById("myModal-2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn-2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close-2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function () {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}



// like dislike js




function likes(likebutton,dislikebutton,input01,input02) {
  
  console.log(likebutton);
let likebtn = document.querySelector(`#${likebutton}`);
let dislikebtn = document.querySelector(`#${dislikebutton}`);
let input1 = document.querySelector(`#${input01}`);
let input2 = document.querySelector(`#${input02}`);


likebtn.addEventListener('click',()=>{
  input1.value = parseInt(input1.value) + 1;
  input1.style.color ="#12ff00";
})


dislikebtn.addEventListener('click',()=>{
  input2.value = parseInt(input2.value) + 1;
  input2.style.color ="#ff0000";
})

}
setTimeout(() => {
  
  likes('likebtn1','dislikebtn1','input1','input101');  
  likes('likebtn2','dislikebtn2','input2','input102');  
  
  likes('likebtn3','dislikebtn3','input3','input103');  
  
  likes('likebtn4','dislikebtn4','input4','input104');  
  
  likes('likebtn5','dislikebtn5','input5','input105');  
  
  likes('likebtn101','dislikebtn101','input201','input301');
  
  likes('likebtn102','dislikebtn102','input202','input302');
  
  likes('likebtn103','dislikebtn103','input203','input303');
  
  likes('likebtn104','dislikebtn104','input204','input304');
  
  likes('likebtn105','dislikebtn105','input205','input305');          
}, 500);


//Upload Image
