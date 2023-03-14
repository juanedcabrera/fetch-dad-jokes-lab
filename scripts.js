// DOM collector
const jokeButton = document.getElementById("joke-btn")
const jokeText = document.getElementById("joke")
const jokeImage = document.getElementById("joke-image")
const dadJokeUrl = "https://icanhazdadjoke.com/"

// when button is clicked initiate the fetch
jokeButton.addEventListener("click", () => {
// fetch starts with adding to the header in the API documentation
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// this has the example methods
    fetch(dadJokeUrl, {
      headers: {
        "Accept": "application/json"
      }
    })
// first response converts json with an implicit arrow
      .then(response => response.json())
      // transfers the joke to the jokeText variable
      .then(jsonData => {
        jokeText.innerText = jsonData.joke
        let jokeID = jsonData.id
        // https://www.w3schools.com/JSREF/prop_script_src.asp
        // adding .src to the jokeImage variable adds src property to the "<img> tag in html"
        jokeImage.src = `https://icanhazdadjoke.com/j/${jokeID}.png`
      })
      .catch(console.warn)
  })