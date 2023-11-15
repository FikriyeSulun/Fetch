const btn = document.querySelector('#commentGetir');
const commentList = document.querySelector('#commentList');

let commentGetir;
btn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(json => {
            commentGetir = json;
            comments();
        });
});

let comments = () => {
    btn.remove();
    commentGetir.forEach(
        x => {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            commentDiv.innerHTML = `<h4 class="name">${x.name}</h4><p>${x.body}</p><p>Email: ${x.email}</p>`;
            commentList.appendChild(commentDiv);
        }
    );
}