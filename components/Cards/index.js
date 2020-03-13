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


function createCard(data) {

  console.log(data);
  let card = elementMaker('div', '', 'card');
  let headlineEl= elementMaker('div', data['headline'], 'headline');
  let authorEl = elementMaker('div', '', 'author');
  let imgContEl = elementMaker('div', '', 'img-container');
  let imgEl = elementMaker('img', '', '', {'src': data['authorPhoto']});
  let authNameEl = elementMaker('span', `By ${data['authorName']}`);


  // return elementMaker('div', '', 'card').append(
  //   elementMaker('div', data.headline, 'headline'),
  //   elementMaker('div', '', 'author').append(
  //     elementMaker('div', '', 'img-container').append('',
  //       // elementMaker('img', '', '', {src: data.authorPhoto})
  //     ),
  //     elementMaker('span', `By ${data.authorName}`)
  //   )
  // );

  return card;
}

let test = null;

function Cards() {

  lambdaApi.get('/articles')
  .then(res => {
    let target = document.querySelector('.cards-container');

    console.log(res);
    test = res;
    Object.values(res.data.articles).forEach(item => {

      item.forEach(item => {
        target.append(createCard(item))
      });

    });

  });


  

}


let target = document.querySelector('.cards-container');

let data1 = {
  "headline": "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
  "authorPhoto": "./assets/sir.jpg",
  "authorName": "SIR RUFF'N'STUFF"
}

// console.log(data1);

// target.append(createCard(data1));

Cards();