// DOM = Document Object Model

/*
when page is loaded, the browser creates a dom for the page. whenever our content is visible, it is called as document. document is created once when our web page is loaded and also a documnet will be created.
Window => Document => HTML => Head and Body => Head(Title ,Meta) and Body(h1-h6, img, p, etc.)

** it is a special object for our window **

if I put script sourec of dom_manipulate in the <head> here </head>, it will result null because it will be called first.
console.log(document.getElementById("heading"));
*/
/*
if I put script sourec of dom_manipulate in the <head> here </head>, this addEventLister method first go through the 'DOMContentLoaded' and then call the getElementById method and will show the result.

window.addEventListener("DOMContentLoaded", () => {
  console.log(document.getElementById("heading"));
});
*/

var heading = document.getElementById("heading");
heading.innerText = 'JavaScript'

var para = document.querySelector('p');
para.innerHTML = 'Hi'
