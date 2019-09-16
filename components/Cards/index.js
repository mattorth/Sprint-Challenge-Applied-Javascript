// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((results) => {
        console.log(results);
    })

    .catch(err => {
        console.log(err);
    });

function CardCreator(article) {
    // elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImage = document.createElement('img');
    const byName = document.createElement('span');

    // structure
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImage);
    author.appendChild(byName);

    // content
    headline.textContent = article.headline;
    authorImage.src = article.authorPhoto;
    byName.textContent = article.authorName;

    // style
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    authorImage.classList.add('img');
    byName.classList.add('span');

    return card
}
const cardsContainer = document.querySelector('.cards-container');
cardsContainer.classList.add('cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((results) => {
        // let articlesArray = [];
        console.log(results);
        const bootstrapArray = Array.from(results.data.articles.bootstrap);
        const javascriptArray = Array.from(results.data.articles.javascript);
        const jqueryArray = Array.from(results.data.articles.jquery);
        const nodeArray = Array.from(results.data.articles.node);
        const technologyArray = Array.from(results.data.articles.technology);
        const articlesArray = bootstrapArray.concat(javascriptArray, jqueryArray, nodeArray, technologyArray);
        console.log(articlesArray);
        // results.data.articles.map(articles => {
        //     articlesArray.push(articles);
        //     return articlesArray;
        // })
        return articlesArray;
    })
    
    .then(articles => {
        articles.forEach(article => {
            const newArticle = CardCreator(article);
            cardsContainer.appendChild(newArticle);
        })
    
    })

    .catch(err => {
        console.log(err);
    });