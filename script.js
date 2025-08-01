const searchBtn = document.getElementById("search");
const  input = document.getElementById("usernameInput");
const  inputClrBtn = document.getElementById("input-clr-btn");
const  cardClrBtn = document.getElementById("card-clr-btn");
const  card = document.getElementById("card");
const img = document.getElementById("image");
const Name = document.getElementById("name");
const userName = document.getElementById("username");
const bio = document.getElementById("bio");
const follower = document.getElementById("follower");
const following = document.getElementById("following");
const repo = document.getElementById("repo");
const viewBtn = document.getElementById("viewProfile");
let url = "";

async function fetchUsername(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
        alert("User not found or invalid GitHub username.");
        return null;
    }
    const userData = await response.json();
    return userData;
    
}
 const searchUser = async () => {
    let username = input.value;
    const userData = await fetchUsername(username);
    console.log(fetchUsername(username));
   profileChange(userData);
    url = userData.html_url;
    card.classList.remove("hidden")
}
searchBtn.addEventListener("click" , searchUser);
input.addEventListener("keydown" , (e) => {
    if(e.key === "Enter"){
        searchUser();
    }
})
inputClrBtn.addEventListener("click", ()=> {
    input.value = "";
})
cardClrBtn.addEventListener("click", ()=> {
    card.classList.add("hidden")
    input.value = "";
})

const profileChange = (userData) => {
    img.src = userData.avatar_url;
    Name.innerText = userData.name; 
    userName.innerText = userData.login;
    bio.innerText = userData.bio;
    follower.innerText = userData.followers;
    following.innerText = userData.following;
    repo.innerText = userData.public_repos;
};

viewBtn.addEventListener("click" , () => {
    window.open(url , "_blank");
})