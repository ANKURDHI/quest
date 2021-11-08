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
        `<div class="space"> <i class="fas fa-user "> ${username}</i> 
        <div class="questionbox borbox"> ${question}</div>
        <a href="" class="left">See All Answers >>> </a> 
        </div>`

    });
    table.innerHTML =tableHtml;
}
function loadHTMLTable1(data){
//blog
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