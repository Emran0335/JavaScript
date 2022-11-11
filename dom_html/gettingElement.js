// HTML document is structured as a JavaScript Object. Every HTML has a different properties which can help to manipulate it. It is possible to get, create, append or remove HTML elements using JavaScript. Check the examples below. Selecting HTML element using JavaScript is similar to selecting CSS using JavaScript. To select an HTML element we use tag name, id, class name or other arributes.

// Getting Element
// We can access already created element or elements using JavaScript. To acess to get elements we use different methods. The code below has four h1 elements. Let us see the different methods to access the h1 elements
/*
  <html lang="en">
    <head>
      <title>Document Object Model</title>
    </head>
    <body>

     <h1 class='title' id='first-title'>First Title</h1>
     <h1 class='title' id='second-title'>Second Title</h1>
     <h1 class='title' id='third-title'>Third Title</h1>
     <h1></h1>

    </body>
  </html>
*/
// getting elements by tag name wiht dom methods:

//1. getElementsByTagName(): takes a tag name as a string paramenter and this method returns an HTMLCollection object. An HTMLCollection is an array like object of HTML elements. The length property provides the size of the collection. Whenever we use this method we access the individual element using index or after loop through each individual items(tags). An HTMLCollection does not support all array methods therefore, we should use regular (for loop) instead of (forEach).

// Syntex
//document.getElementsByTagName("tagname")

const allTitles = document.getElementsByTagName("h1")
console.log(allTitles) // HTMLCollection(4)
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]) // prints each elements in the HTMLCollection
}



// Getting elements by className

// getElementsByClassName(): takes a className and returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements. The length property provides the size of the collection. It is possible to loop through all the HTMLCollection elements. See the example below.

// Syntax
// document.getElementsByClassName("ClassName")

const allTitlesOfClass = document.getElementsByClassName("title")
console.log(allTitlesOfClass) // HTMLCollection(3). class='title' is only 3 here.
console.log(allTitlesOfClass.length) // 3

for (let i = 0; i < allTitlesOfClass.length; i++) {
    console.log(allTitlesOfClass[i]); // prints three elements of class in the HTMLCollection
}


// Getting  an element by idName

// getElementById(): This method takes only one idName as parameter and returns the exact idName HTMLelement. We pass the idName without (#) as an argument.

// Syntax
// document.getElementById("id")

let firstTitle = document.getElementById("first-title")
console.log(firstTitle) // <h1>First Title</h1>


// Getting elements by using querySelector methods
// The document.querySelector method can select an HTML or HTML elements by tagName, Id, className.

// querySelector(): can be used to selec HTML element by its tagName, id or claaName. If the tagName is used it selects only the first element.

let firstTitleWithQuerSelector = document.querySelector("h1") // select the first available h1 element
let firstTitleWithQuerSelectorAgain = document.querySelector("#first-title") // select id with first-title
let firstTitleWithQuerSelectorOnceAgain = document.querySelector(".title") // select the first available element with class title


// querySelectorAll(): can be used to select html elements by its tagName or class. It returns a nodeList which is an array like object and it supports array methods. We can use (for loop or forEach) to loop through each nodeList elements.

const allTitlesWithQuerSelectorAll = document.querySelectorAll("h1") // selects all teh available h1 elements in the page.
console.log(allTitlesWithQuerSelectorAll.length) // 4

for (let i= 0; i < allTitlesWithQuerSelectorAll.length; i++) {
    console.log(allTitlesWithQuerSelectorAll[i]); // the same goes for selecting using class
}

allTitlesWithQuerSelectorAll.forEach(tagName => console.log(tagName));  // the same goes for selecting using class


// Adding attribute
// An attribute is added in the opening tag of HTML which gives additional information about the element. Common HTML attributes are (id, class, src, style, href, disabled, title, alt). Let us add id and class for the fourth title.
const titlesOfAll = document.querySelectorAll("h1")
titlesOfAll[3].className = 'title'
titlesOfAll[3].id = 'fourth-title' //4th(h1), <h1 class="title" id="fourth-title"></h1>



// Adding attrubute using setAttribute():
// setAttribute(): this method sets any html attribute. It takes two parameters the type of the attribute and the name of the attribute. Let us add class and id attribute for the fourth title.
const allTitlesOfH1 = document.querySelectorAll("h1")
allTitlesOfH1[3].setAttribute("class", "titleSet")
allTitlesOfH1[3].setAttribute("id", "setFourth-title") //4th(h1), <h1 class="titleSet" id="setFourth-title"></h1>



// Adding class using classList
// The classList propery is a good propertyt to append additional class. It does not override the original class if a class exists. Rather it adds additional class for the element. It has many methods but the two are add() and remove() methods.
// another way to setting an attribute: append the class, but does not override the existing one.
//add(): classList-> add() adds class without overriding.
titlesOfAll[3].classList.add("title", "header-title") // adding 'title' and 'header-title'

// Removing class using remove
// Similar to adding, we can also removes class from an element. We can remove a specific class from an element
titlesOfAll[3].classList.remove('title', 'header-title')


// Adding Text to HTML element
// An HTML is a bulid block of an opening tag and a closing tag containing a text content. We can add a text content using the property textContent or innerHTML.

// Adding text content using textContent property.
const addText = document.querySelectorAll("h1")
addText[3].textContent = "Fourth Title"

// Adding Text Content using innerHTML
// Most of the people get confused between textContent and innerHTML. Actually textContent is meant to add text to an HTML element, whereas innerHTML can add a text or HTML element or elements as a child.

// Inner HTML
// We use innerHTML property when we like to replace or a completely new children content to a parent element. It value we assign is going to be a string of HTML elements.
/*
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul></ul> // here list will be added........
    </div>
    <script>
    const lists = `
    <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`
  const ul = document.querySelector('ul')
  ul.innerHTML = lists
    </script>
  </body>
</html>
*/

// The innerHTML property can allow us also to remove all the children of a parent element. Instead of using removeChild(), we would recommend the following method.

/*
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul>
            <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>
        </ul>
    </div>
    <script>
  const ul = document.querySelector('ul')
  ul.innerHTML = '' // It will remove the ul list(li) and ul list will be empty...
    </script>
  </body>
</html>
*/

// Adding Style Color
// Let us add some style to our titles. If the element has even index, we give it green color or red.
const StyleTitlesTextColor = document.querySelectorAll('h1')
StyleTitlesTextColor.forEach((title, i) => {
  title.style.fontSize = "24px"; // all titles will have 24px font size...
  if (i % 2 === 0 ) { // i = 0, 1, 2, 3
    title.style.color = "black"; //0, 2, 4 or mudulus = 0,(even number) is black
  } else {
    title.style.color = "white"; // 1,3 or remainder = 1, (odd number) is white
  }
});

// Adding Style Background Color
// Let us add some style to our titles. If the element has even index, we give it green or red.
const StyleTitlesBackgroundColor = document.querySelectorAll('h1')
StyleTitlesBackgroundColor.forEach((titleBackground, i) => {
  titleBackground.style.fontSize = "24px"; // all titles will have 24px font size....
  if (i % 2 === 0) {
    titleBackground.style.backgroundColor = "green"; //0, 2, 4 or mudulus = 0,(even number) is green
  } else {
    titleBackground.style.backgroundColor = "red"; // 1,3 or remainder = 1, (odd number) is red
  }
});

// As we have noticed, the properties of CSS when we use it in JavaScript is going to be a camelCase. The following CSS properties change from background-color to backgroundColor, font-size to fontSize, font-family to fontFamily, margin-bottom to marginBottom.
