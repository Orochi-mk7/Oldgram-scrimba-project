const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        isLikeCliked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLikeCliked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLikeCliked: false
    }
]

const main = document.getElementById("main")

function renderPosts() {
    main.innerHTML=""
    for (i=0; i<posts.length; i++) {
        main.innerHTML+=`
        <section class="post-container" id="${i}">
            <section>
                <div class="post-info-img">
                    <div>
                    <img class="pfp-img" src="${posts[i].avatar}" alt="poster's avatar">
                    </div>

                    <div class="post-info-container">
                    <h1>${posts[i].name}</h1>
                    <p>${posts[i].location}</p>
                    </div>
                </div>

                <div>
                    <img class="post-img" src="${posts[i].post}" alt="selfie taken by an artist years ago">
                </div>
                </section>

                <section>
                <ul>
                    <li> <button> <img class="interaction-icon" src="images/icon-heart.png"> </button> </li>
                    <li> <button> <img class="interaction-icon" src="images/icon-comment.png"> </button> </li>
                    <li> <button> <img class="interaction-icon" src="images/icon-dm.png"> </button> </li>
                </ul>

                <div class="like-comment-container">
                    <h2>${posts[i].likes} likes</h2>
                    <p><span>${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
            </section>
        </section>
        `
    }
}


