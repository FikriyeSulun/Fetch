const btn = document.querySelector('#userGetir');
const userList = document.querySelector('#userList');

let userGetir;
btn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
            userGetir = json;
            users();
        });
});

let users = () => {
    btn.remove();
    userGetir.forEach(
        x => {
            const userDiv = document.createElement('div');
            userDiv.className = 'user';
            userDiv.innerHTML = `<h4 class="username">${x.username}</h4><p>Name: ${x.name}</p><p>Email: ${x.email}</p><p>Address: ${x.address.street} street ${x.address.suite} ${x.address.city} Zipcode: ${x.address.zipcode}</p><p>Phone: ${x.phone}</p><p>Website: ${x.website}</p>`;
            userList.appendChild(userDiv);
        }
    );
}