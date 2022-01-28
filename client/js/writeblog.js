console.log('writeblog');
const addBtn = document.querySelector('#subblog1');
addBtn.onclick = function (e) {
    e.preventDefault();
    const name1 = localStorage.getItem('user');
    const nameInput = document.querySelector('#inputBlog');
    const blog = nameInput.value;
    nameInput.value = "";


    fetch('http://localhost:5000/insert2', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name: name1, blog: blog })
    })
        .then(response => response.json())
    // .then(data => insertRowIntoTable(data['data']));
}