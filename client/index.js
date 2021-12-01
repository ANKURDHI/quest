document.addEventListener('DOMContentLoaded',function (){
    fetch('http://localhost:5000/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
    // console.log(data);
    

    fetch('http://localhost:5000/getAll1')
    .then(response => response.json())
    .then(data => loadHTMLTable1(data['data']));
    // console.log(data2);

});





// insert

const addBtn = document.querySelector('#add-name-btn');

addBtn.onclick = function () {
    const nameInput = document.querySelector('#name-input');
    const question = nameInput.value;
    nameInput.value = "";

    fetch('http://localhost:5000/insert', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ question : question})
    })
    .then(response => response.json())
    // .then(data => insertRowIntoTable(data['data']));
}













//questions
function loadHTMLTable(data){
    const table = document.getElementById('questions');
//    console.log(data);
    if(data.length==0){
        table.innerHTML="<div>No data</div>";
        return;

    }
    let tableHtml="";
    data.forEach(function({ username, question}){
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
                <div class="lc">
                <i class="far fa-thumbs-up">245</i>&emsp;&emsp;&emsp;<i class="fas fa-caret-up">167</i>
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
    table.innerHTML =tableHtml;
}
//blog and posts
function loadHTMLTable1(data){

    const trend = document.getElementById('trend');
    //    console.log(data);
        if(data.length==0){
            trend.innerHTML="<div>No data</div>";
            return;
    
        }
        let trendHtml="";
        data.forEach(function({id, username, blogs}){
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
                    <div class="trenlc">
                    <i class="far fa-thumbs-up">45</i>&emsp;&emsp;&emsp;<i class="fas fa-caret-up">16</i>
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
        trend.innerHTML =trendHtml;

}





// Get the modal
var modal = document.getElementById("myModal");
    
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}