
//https://dummyjson.com/products bunu çekin
//içindeki 6 tane ürünü alın
//ekrana güzel bir html ile basın


const btn = document.querySelector('#getir');
const urunList = document.querySelector('#urunList');

let getir;
btn.addEventListener('click', () => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => {
            getir = json.products;
            urunler();
        });
});

let urunler = () => {
    btn.remove();
    getir.forEach(
        x => urunList.innerHTML += `<div class="urun"><h4 class="title">${x.title} </h4><p>${x.description}</p> <img src=${x.images[0]}></div>`);
    document.querySelectorAll('#urunList li');
}