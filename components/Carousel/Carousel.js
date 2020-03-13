/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const images = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/turntable.jpeg"
];



function createCarousel() {

  let result = elementMaker('div', '', 'carousel');
  let index = elementMaker('div', '0', '');
  index.id = 'carouselIndex';
  index.hidden = true;

  let leftBtn = elementMaker('div', ' < ', 'left-button');
  result.append(leftBtn);
  leftBtn.addEventListener('click', e => {
    let target = document.querySelector('.carousel img');
    let idx = parseInt(document.querySelector('#carouselIndex').innerText);
    idx === 0 ? idx = images.length-1 : idx--;
    target.src = images[idx];
  })

  // for (let i = 0; i < images.length; i++) {
  //   let img = elementMaker('img');
  //   img.src = item;
  //   result.append(img);
  // }
  let img = elementMaker('img');
  img.src = images[0];
  result.append(img);

  let rightBtn = elementMaker('div', ' > ', 'right-button');
  result.append(rightBtn);
  rightBtn.addEventListener('click', e => {
    let target = document.querySelector('.carousel img');
    let idx = parseInt(document.querySelector('#carouselIndex').innerText);
    idx === images.length-1 ? idx = 0 : idx++;
    target.src = images[idx];
  })
  

  // images.forEach(item => {
  //   let img = elementMaker('img');
  //   img.src = item;
  //   result.append(img);
  // });


  return result;
}

document.querySelector('.carousel-container').append(createCarousel());