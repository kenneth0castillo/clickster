// const url = "https://randomuser.me/api?results=50";
// fetch(url).then(function(response){
//    return response.json();
// }).then(function(json) {
//    const data = json;
//    const usersDiv = document.querySelector("#users");
   
//    for(let i=0;i<data.results.length; i++){
//        const userObj = data.results[i];
//        const userDiv = document.createElement("div");

//        const nameDiv = document.createElement("h2");
//        nameDiv.innerText = userObj.name.first + userObj.name.last;

//        const emailDiv = document.createElement("p");
//        emailDiv.innerText = userObj.email;

//     //    const fillerDiv = document.createElement("p");
//     //    fillerDiv.innerText = userObj;
       
//        userDiv.appendChild(emailDiv);
//        userDiv.appendChild(nameDiv);
//        usersDiv.appendChild(userDiv);
//     //    usersDiv.appendChild(fillerDiv);

//    }

// });
const url = "https://randomuser.me/api?results=1";
const usersDiv = document.querySelector("#users");

setInterval(displayUsers, 3000);

function displayUsers() {
   fetch(url).then(function(response){
       return response.json();
   }).then(function(json) {
       const data = json;
       const userObj = data.results[0];

       const userDiv = document.createElement("div");
       const nameDiv = document.createElement("h2");
       nameDiv.innerText = userObj.name.first + userObj.name.last;

       const emailDiv = document.createElement("p");
       emailDiv.innerText = userObj.email;
       
       userDiv.appendChild(emailDiv);
       userDiv.appendChild(nameDiv);
       usersDiv.appendChild(userDiv);
   });
}