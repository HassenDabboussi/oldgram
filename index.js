const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "img/avatar-vangogh.jpg",
        post: "img/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "img/avatar-courbet.jpg",
        post: "img/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "img/avatar-ducreux.jpg",
        post: "img/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postSectionEl = document.getElementById("post-section")
const avatarEl = document.getElementById("avatar");
const nameEl = document.getElementById("name");
const locationEl = document.getElementById("location");
const postEl = document.getElementById("post");
const likesEl = document.getElementById("likes");
const usernameEl = document.getElementById("username");
const commentEl = document.getElementById("comment");

function renderPost() {
    for(let i = 0; i < posts.length; i++){
        postSectionEl.innerHTML += `
        <div class="post-owner-section">
            <div class="post-owner-details">
                <img src="${posts[i].avatar}" alt="" class="user-avatar" id="avatar">
                <div>
                        <p class="text-accent" id="name">${posts[i].name}</p>
                        <p id="location">${posts[i].location}</p>
                    </div>
                </div>
            </div>
            <div class="post-content">
                <img src="${posts[i].post}" alt="famous van gogh tableau" class="post" data-index="${i}">
            </div>
            <div class="post-interactions">
                <div>
                    <img src="img/icon-heart.png" alt="" class="icon">
                    <img src="img/icon-comment.png" alt="" class="icon">
                    <img src="img/icon-dm.png" alt="" class="icon">
                </div>
                <p class="text-accent likes" data-index="${i}">${posts[i].likes} likes</p>
                <p><span class="text-accent" id="username">${posts[i].username}</span> <span id="comment">${posts[i].comment}</span></p>
            </div>
        `
    }
}

postSectionEl.addEventListener("dblclick", function(event){
    if(event.target.classList.contains('post')){
        const index = event.target.dataset.index;
        posts[index].likes++;
        const likesEl = document.querySelector(`.likes[data-index="${index}"]`);
        likesEl.textContent = `${posts[index].likes} likes`;
    }
})

renderPost();