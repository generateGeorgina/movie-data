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

// //experimenting with dynamically creating an element
// let testFour = document.getElementById('text-four');
// let movieCastElement = document.createElement('h1');
// testFour.appendChild(movieCastElement);

// const newMovie = document.getElementById('new-movie');



//Rendering movie names to html page
let movieListNames = Object.keys(movieData);
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





// define dropdown function with one parameter
function dropDown() {
  // Listen for change event in movies dropdown
  moviesDropDown.addEventListener('change', () => {
    let cast = function(array) {
      for (let cast = 1; cast < array.length; cast++) {
        array[cast] = " " + array[cast];
      }
      return array;
    }
    movieDetailsVariable = `Plot: ${movieData[moviesDropDown.value].plot} Cast: ${cast(movieData[moviesDropDown.value].cast)}. Runtime: ${movieData[moviesDropDown.value].runtime}. Year: ${movieData[moviesDropDown.value].year}. Rating: ${movieData[moviesDropDown.value].rating}.`;
    movieDetailsElement.innerHTML = movieDetailsVariable;
    console.log(movieData[moviesDropDown.value]);

    let movieImageElement = document.getElementById('movieImage');
    if (movieData[moviesDropDown.value] === movieData["Fantastic Mr. Fox"]) {
      movieImageElement.src = './images/fantastic-mr.-fox-poster.jpeg';
    } else if (movieData[moviesDropDown.value] === movieData['The Grand Budapest Hotel']){
      movieImageElement.src = './images/the-grand-budapest-hotel-poster.jpeg';
    } else if (movieData[moviesDropDown.value] === movieData['The Royal Tenenbaums']) {
      movieImageElement.src = './images/the-royal-tenenbaums-poster.jpeg'
    } else {
      movieImageElement.src = './images/the-darjeeling-limited-poster.jpeg'
    };
  })}

// Delete movie
function deleteMovieFunc() {

  // click event
  deleteButtonElement.addEventListener('click', function() {
    alert('Deleting this movie is irreversible');
    console.log(movieData[moviesDropDown.value])
    delete movieData[moviesDropDown.value];
    console.log(movieData);
    newMovieListNames = addSpaceToName(Object.keys(movieData));
    document.getElementById('movie-list').innerHTML = newMovieListNames;
    return movieData;
  }
  )};



//drop down list

// get movie-details div element
const movieDetailsElement = document.getElementById('movie-details');
//get movies-drop-down select element
const moviesDropDown = document.getElementById('movies-drop-down');

const deleteButtonElement = document.getElementById('delete-movie');

function moviesDropDownFunc() {
  // for...in loop (for enumerable object)
  for (let movieName in movieData) {
    //create option element
    let movieOptionElement = document.createElement("option");
    //set the value of the "*value* attribute" (of the option element) to movieName key (of object)
    movieOptionElement.setAttribute('value', movieName);
    movieOptionElement.id = movieName;
    //text to be display in drop down list is movieName key
    let movieOptionText = document.createTextNode(movieName);
    //add to option element
    movieOptionElement.appendChild(movieOptionText);
    //add to select element
    moviesDropDown.appendChild(movieOptionElement);

  };
};


moviesDropDownFunc();
dropDown();
deleteMovieFunc();







