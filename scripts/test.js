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

  // Make use of .join method to display list nicely  
  document.getElementById("movie-list").innerHTML = Object.keys(movieData).join(", ");
  
  function dropDown() { // No parameter
    moviesDropDownElement.addEventListener('change', () => {
      // Look up selected value, and use it to retrieve the corresponding movie data 
      let movieNameValue = moviesDropDownElement.value;
      movieDetailsElement.innerHTML = movieData[movieNameValue].cast.join(", ");
      console.log(moviesDropDownElement);
      console.log(movieNameValue);
    })
  }
  
  const movieDetailsElement = document.getElementById('movie-details');
  
  const moviesDropDownElement = document.getElementById('movies-drop-down');
  for (let movieName in movieData) {
    let movieOptionElement = document.createElement("option");
    movieOptionElement.setAttribute('value', movieName); // Should not be object
    let movieOptionText = document.createTextNode(movieName);
    movieOptionElement.appendChild(movieOptionText);
    moviesDropDownElement.appendChild(movieOptionElement);
  };
  dropDown(); // Only one call -- no argument