// REUSABLES
// 1. generic html element maker
function elementMaker(elementType, elementText = '', elementClass = '') {
  if (!elementType) throw "Missing element type parameter!";
  try {
    let element = document.createElement(elementType);
    if (elementText) element.textContent = elementText;
    if (elementClass) element.classList.add(elementClass);
    // if (attrs) {
    //   for (let property in attrs) {
    //     element.setAttribute(property, attrs[property]);
    //   }
      // Object.entries(attrs).forEach((key, value) => {
      //   element.setAttribute(key, value)
      // });
    // }
    return element;
  }
  catch(e) {
    throw "Invalid element type! : " + e;
  } 
}


// GLOBAL OBJECTS
// 1. API client: create a new axios HTTP client instance and configure default request url
const lambdaApi = axios.create({
  baseURL: 'https://lambda-times-backend.herokuapp.com'
});

