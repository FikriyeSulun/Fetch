const btn = document.querySelector('#ozluSozGetiriciButon');
const loaddingInd = document.querySelector('#loadingIndicator');
// const qouteAuther = document.querySelector('#qouteAuther');
const quoteList = document.querySelector('#quoteList');
let quotes;
btn.addEventListener('click', () => {
    loaddingInd.style.display = 'block';
    console.log('fetch öncesi mesajı');

    fetch('https://dummyjson.com/quotes')
        // .then(res => {
        //     return res.json();
        // })
        .then(res => res.json())
        .then(json => {
            quotes = json.quotes;
            loaddingInd.style.display = 'none';
            // console.log('fetch içindeki then kısmına yazdığım mesaj');
            // console.table(quotes.quotes);
            // qouteGoster()
            listQuotes();
        });

    // console.log(qoutes.qoutes[0].quote);
    // console.log('fetch sonrası mesajı');
});

let listQuotes = () => {
    btn.remove();
    quotes.forEach(
        x => quoteList.innerHTML += `<li><strong>${x.author} diyor ki: </strong>${x.quote}</li>`);
    document.querySelectorAll(`#quoteList li`).forEach(x => x.addEventListener('click', function () {
        this.classList.toggle('showAuthor');
    }));
           
}


//x => quotesList.innerHTML += `<details><summary>${xqoute}</summary>${x.author}`

//bir method çağırıp
//qoute listesini ekrana yazdırın
// function qouteGoster() {
//     for (const x of quotes.quotes) {
//         qouteAuther.innerHTML += `<p>${x.quote}</p>`;
//     }
// }


//2.aşama
//qoute listesinde author bilgisi gizli olsun tıklanınca görünsün