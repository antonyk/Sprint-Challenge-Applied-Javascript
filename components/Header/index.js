// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

  let date = 'SMARCH 28, 2019';
  let title = 'Lambda Times';
  let temp = '98°';

  let masterEl = elementMaker('div', '', 'header');
  let dateEl = elementMaker('span', date, 'date');
  let titleEl = elementMaker('h1', title);
  let tempEl = elementMaker('span', temp, 'temp');

  masterEl.append(dateEl, titleEl, tempEl);

  return masterEl;

}

document.querySelector('.header-container').append(Header());
