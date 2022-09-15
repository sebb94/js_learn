
document.addEventListener("DOMContentLoaded", function(event) { 
    fetch("https://random-data-api.com/api/v2/users")
    .then(response => response.text())
    .then(data =>{
        let user = JSON.parse(data)
        console.log(user)
        let img = user.avatar.split("?")
        let avatar = img[0]
        document.getElementById('username').innerHTML = (`<h2> ${user.username} </h2>`)
        document.getElementById('full_name').innerHTML = (`<h3> ${user.first_name} ${user.last_name}</h3>`)
        document.getElementById('birth').innerHTML = (`<h3> ${user.date_of_birth} </h3>`)
        document.getElementById('avatar').innerHTML = (`<img src="${avatar}"> `)
    })
});




