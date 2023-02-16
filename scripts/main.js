let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};
//Practising data retrieval
console.log(movieData);
console.log(movieData["Fantastic Mr. Fox"]);
console.log(movieData["Fantastic Mr. Fox"].year);
console.log(movieData["Fantastic Mr. Fox"]['year']);
console.log(movieData["Fantastic Mr. Fox"].cast[1]);

// let object = document.getElementById("test").innerHTML;
// console.log(object);
// let object2 = document.getElementById("test");
// console.log(object2);

//Practising data render
// let foxYear = movieData["Fantastic Mr. Fox"]['year'];

// document.getElementById("test").innerHTML = foxYear;

//Practising object conversion
let a = Object.keys(movieData);
let b = Object.values(movieData);
let c = Object.entries(movieData);
console.log(a);
console.log(b);
console.log(c);

//Rendering movie names to html page
const movieListNames = Object.keys(movieData);
console.log(movieListNames);
//Passing in an array of movie names as a parameter
function addSpaceToName(array) {
  for (let movie = 1; movie < array.length; movie++) {
    array[movie] = " " + array[movie]; 
  }
  return array;
}
addSpaceToName(movieListNames);
document.getElementById("movie-list").innerHTML = movieListNames;