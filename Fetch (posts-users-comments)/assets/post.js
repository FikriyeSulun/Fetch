const btn = document.querySelector('#postGetir');
const postList = document.querySelector('#postList');

let postGetir;
btn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => {
            postGetir = json;
            posts();
        });
});

let posts = () => {
    btn.remove();
    postGetir.forEach(
        x => {
            const postDiv = document.createElement('div');
            postDiv.className = 'post';
            postDiv.innerHTML = `<h4 class="title">${x.title}</h4><p>${x.body}</p>`;
            postList.appendChild(postDiv);
        }
    );
}