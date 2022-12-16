// Arrow Function
// Arrow function is an alternative to write a function but there are some differences between function declaration and arrow function.

// Arrow function uses arrow instead of the keyword function to declare a function. Let us see arrow function. Arrow function declare with const, let keyword but does not need to declare function keyword

const square = (n) => {
  return n * n;
};
console.log(square(2)); // 4

// if we have only line in the code block, it can be written as follows, explicit retrun.

const squareAgain = (n) => n * n;
console.log(squareAgain(4)); //16

const change = (arr) => {
  const newArr = [];
  for (const element of arr) {
    newArr.push(element.toUpperCase());
  }
  return newArr;
};

const countries = ["Bangladesh", "Nepal", "India", "Pakistan", "Butan"];
console.log(change(countries));

const returnFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};
console.log(returnFullName("Emran", "Hossain"));

// Arrow Functions and object-(this -> it is called 'this' object)
// The traditional JavaScript function declaration syntax (function () {}) will bind -this- in anonymous functions to the gobal object. To illustrate the confusion -this- causes, consider the following example:

/*
function printSong() {
  console.log("Oops - The Global Object");
}

const jukebox = {
  songs: [
    {
      title: "Wanna be Startin' Somethin'",
      artist: "Michael Jackson",
    },
    {
      title: "Hello emotions, hello again",
      artist: "Johan Glossner",
    },
  ],
  printSong: function (song) {
    console.log(song.title + " - " + song.artist);
  },
  printSongs: function () { // this.songs.forEach(function (song) { // this callback function is anonymous and it refers to the global function printSong(). Here sodu - this - refers to global object
      return printSong(song); // the result should be -> the function of the jukebox(printSong() method). But here -this- refers the global object function (printSong()) above the object jukebox
    });
  },
};

jukebox.printSongs();

the result is ->
Oops - The Global Object
Oops - The Global Object
*/
// this is not expected as a developer. So, arrow function can sove this -this- problem.
function printSong() {
  console.log("Oops - The Global Object");
}

const jukebox = {
  songs: [
    {
      title: "Wanna be Startin' Somethin'",
      artist: "Michael Jackson",
    },
    {
      title: "Hello emotions, hello again",
      artist: "Johan Glossner",
    },
  ],
  printSong: function (song) {
    console.log(song.title + " - " + song.artist); // this will be printed!
  },
  printSongs: function () {
    this.songs.forEach((song) => {
      // this callback function is anonymous and it is an arrow function and it refer to the jukebox object only. Here -this- is in the jukebox object.
      return this.printSong(song); // the result should be -> the function of the jukebox(printSong() method) and it does so.
      // return printSong(song) // this will indicate the global object too.
    });
  },
};

jukebox.printSongs();
/*
the expected result is ->
Wanna be Startin' Somethin' - Michael Jackson
Hello emotions, hello again - Johan Glossner
*/
