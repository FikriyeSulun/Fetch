/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function () {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if (currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})




const urlPrefix = 'https://jsonplaceholder.org/';
const requestPostsUrl = urlPrefix + 'posts';
let posts = [];

const btn = document.querySelector('.older-posts');

btn.addEventListener('click', () => {
    fetch(requestPostsUrl)
        .then(response => response.json())
        .then(json => {
            posts = json;
            render();
        })

});

const colmd10 = document.querySelector('.posts .row .col-md-10');

function render() {

    for (let i = 0; i < 20; i++) {
        const currPost = posts[i];
        colmd10.innerHTML += `
            <div class="post-preview">
                <a data-postId="${currPost.id}" href="post.html/${currPost.id}">
                    <h2 class="post-title">${currPost.slug}</h2>
                    <h3 class="post-subtitle">${currPost.title}</h3>
                    <h4 class="content">${currPost.content}</h4>
                </a>
                <p class="post-meta">
                    " Posted by "
                    <a href="#!">Start Bootstrap</a>
                    " on ${currPost.publishedAt}"
                </p>
            </div>
            <hr>
        `;

    }
    bindPostsClicks();
}


// const postheading = document.querySelector('.post-heading');
// postheading.innerHTML = `
//                 <h1>${currPost.slug}</h1>
//                 <h2 class="subheading">${currPost.title}</h2>
//                 <span class="meta">
//                     Posted by
//                     <a href="#!">Start Bootstrap</a>
//                     on ${currPost.publishedAt}
//                 </span>
//                 `;
// const detail = document.querySelector('.detail');
// detail.innerHTML = `
//                 <p>${currPost.content}</p>
//                 `;


const postheading = document.querySelector('.post-heading');

function renderDetailPage(postDetail) {
    postheading.innerHTML = `
        <h1>${postDetail.slug}</h1>
        <h2 class="subheading">${postDetail.title}</h2>
        <span class="meta">
            Posted by
            <a href="#!">Start Bootstrap</a>
            on ${postDetail.publishedAt}
        </span>
    `;
    const detail = document.querySelector('.detail');
    detail.innerHTML = `
            <p>${postDetail.content}</p>
    `;
}

async function loadDetailPage(id) {
    const postDetail = await fetch(urlPrefix + 'posts/' + id).then(x => x.json());
    renderDetailPage(postDetail);
}

function handleHomePageClicks(e) {
    e.preventDefault();
    loadDetailPage(this.dataset.postid);
}

// function bindPostsClicks() {
//     document.querySelectorAll('.posts .row .col-md-10 .post-preview')
//         .forEach(x => x.addEventListener('click', handleHomePageClicks));
// }

function bindPostsClicks() {
    for(const btn of document.querySelectorAll(".subheading")){
        btn.addEventListener("click", (e) => {
            e.target.pare
        })
    }
}