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
// console.log(movieData);
// console.log(movieData["Fantastic Mr. Fox"]);
// console.log(movieData["Fantastic Mr. Fox"].year);
// console.log(movieData["Fantastic Mr. Fox"]['year']);
// console.log(movieData["Fantastic Mr. Fox"].cast[1]);

// let object = document.getElementById("test").innerHTML;
// console.log(object);
// let object2 = document.getElementById("test");
// console.log(object2);

//Practising data render
// let foxYear = movieData["Fantastic Mr. Fox"]['year'];
// document.getElementById("test").innerHTML = foxYear;

// Experimenting with dynamically adding elements onto a HTML page
// let myTestTwo= document.getElementById('test-two');
// myTestTwo.innerHTML = 'This test worked';
// let myTestThree = document.createElement('input');
// document.body.appendChild(myTestThree);

//Practising object conversion
// let a = Object.keys(movieData);
// let b = Object.values(movieData);
// let c = Object.entries(movieData);
// console.log(a);
// console.log(b);
// console.log(c);

// // experimenting with an array
// movieDataArray = Object.entries(movieData);
// for (let i in movieDataArray) {
//   console.log(movieDataArray[i]);
// };





//Rendering movie names to html page
const movieListNames = Object.keys(movieData);
// console.log(movieListNames);
//Passing in an array of movie names as a parameter
function addSpaceToName(array) {
  for (let movie = 1; movie < array.length; movie++) {
    array[movie] = " " + array[movie]; 
  }
  return array;
}
addSpaceToName(movieListNames);
document.getElementById("movie-list").innerHTML = movieListNames;






//drop down list

// get movie-details div element
const movieDetailsElement = document.getElementById('movie-details');
//get movies-drop-down select element
const moviesDropDown = document.getElementById('movies-drop-down');



// for...in loop (for enumerable object)
for (let movieName in movieData) {
  //create option element
  let movieOptionElement = document.createElement("option");
  //set the value of the "*value* attribute" (of the option element) to movieName key (of object)
  movieOptionElement.setAttribute('value', movieData[movieName]);
  //text to be display in drop down list is movieName key
  let movieOptionText = document.createTextNode(movieName);
  //add to option element
  movieOptionElement.appendChild(movieOptionText);
  //add to select element
  moviesDropDown.appendChild(movieOptionElement);


// Delete movie
function deleteMoviefunc(deleteMovieParam) {
  let deleteButtonElement = document.getElementById('delete-movie');
  // click event
  deleteButtonElement.addEventListener('click', function(event) {
  movieOptionElement.setAttribute('id', deleteMovieParam['plot']);
    if (deleteMovieParam) {
      delete deleteMovieParam['plot'];
      console.log(movieData);
      return movieData;
    } else {
      console.log('This did not work' + deleteMovieParam['plot']);
    }
  })};

  deleteMoviefunc(movieData[movieName]);

   


  //render movie details

  // let castArr = Object.values(movieData[movieName]['cast']);
  // console.log(castArr);
  // let castFunc = (castParam) => {
  //   for (let individual = 0; individual < castParam.length; individual++) {
  //     castParam[individual] = ' ' + castParam[individual];
  //   };
  //   console.log(castParam);

  //   return castParam;
  // };
  // let movieDetailsVar = 'Plot: ' + movieData[movieName]["plot"]/* + ' Rating: ' + movieData[movieName]["rating"] + ' Year: ' + movieData[movieName]["rating"] + ' Runtime: ' + movieData[movieName]["runtime"] + ' Cast: ' + castFunc(castArr)*/;
  // console.log(movieDetailsVar);
  // dropDown(movieDetailsVar);
  dropDown(movieData[movieName]["cast"]);
};

// define dropdown function with one parameter
function dropDown(movieDetailsParam) {
  // Listen for change event in movies dropdown
  moviesDropDown.addEventListener('change', () => {
    movieDetailsElement.innerHTML = movieDetailsParam;
    console.log(movieDetailsParam);
  })}

// //experimenting with dynamically creating an element
// let testFour = document.getElementById('text-four');
// let movieCastElement = document.createElement('h1');
// testFour.appendChild(movieCastElement);

// const newMovie = document.getElementById('new-movie');




