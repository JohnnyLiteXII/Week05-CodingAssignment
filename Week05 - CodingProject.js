/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Juan Mejia
   FE Week 05 - Coding Assignment
*/

/*
Creating a Menu App that contains the following:
- Use at least one array.
- Use at least two classes.
- Your menu should have the options to create, view, and delete elements.
*/

//Menu App for listing movies at a movie theather. 

//Menu App using prompts that allows to manage movies titles 

//Declared the Movie Class to represent the movie object

  class Movie {
    //Gave the movie classs a constructor with the arguments of title, genre, rating
    constructor(title, genre, rating) {
      this.title = title;
      this.genre = genre;
      this.rating = rating;
    }
  //Created a method "getInfo" to return some info about the movie like title, genre and rating
    getInfo() {
      return `${this.title} (${this.genre}) - Rating: ${this.rating}`;
    }
  }
 // Defined a TheaterMenu class for managing the movie menu
  class TheaterMenu {
    constructor() {
      this.movies = [];
    }
  // Method to create a new movie and add it to the menu
    createMovie() {
      const title = prompt("Enter the movie title:");
      const genre = prompt("Enter the movie genre:");
      const rating = prompt("Enter the movie rating:");

  // Create a new Movie object using user input
      const movie = new Movie(title, genre, rating);
      this.movies.push(movie);
      alert("The Movie has been added successfully!");
    }
   // Method to view the list of movies
    viewMovies() {
      if (this.movies.length === 0) {
        alert("No movies available.");
      } else {
         // Create a movie list using map function that lists the movies and joins to the displayed list
        const movieList = this.movies.map((movie, index) => `${index + 1}. ${movie.getInfo()}`).join("\n");
        alert("Movie List:\n" + movieList);
      }
    }
  // Method to delete a movie from the menu listed by numbers
    deleteMovie() {
      const index = parseInt(prompt("Enter the index of the movie you want to delete:")) - 1;

   // Remove the movie at the specified index listed
      if (index >= 0 && index < this.movies.length) {
        this.movies.splice(index, 1);
        alert("The movie has been deleted successfully!");
      } else {
        alert("Invalid selection.");
      }
    }
  }
  // Create an instance of the TheaterMenu class
  const menu = new TheaterMenu();
  

  // Main menu options listed using a loop
  while (true) {
    const choice = prompt('Movie Theater Menu:\n1. Create New Movie\n2. View available movies\n3. Delete a movie\n4. Exit Movie Menu App'
    
    );
  
    switch (choice) {
      case "1":
        menu.createMovie();
        break;
      case "2":
        menu.viewMovies();
        break;
      case "3":
        menu.deleteMovie();
        break;
      case "4":
        alert("Thank you for using the Movie Theather Menu App. GoodBye! :-)");
        exit(0); // Exiting the program
      default:
        alert("Invalid choice. Please choose a valid option.");
    }
  }