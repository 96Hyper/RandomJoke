const btnEl = document.getElementById("btn");
const animecontainerEl = document.querySelector(".anime-container");

const animeIngEl = document.querySelector(".anime-img");
const jokeEl = document.querySelector(".joke-container");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";




let getJoke =()=>{
 fetch(url)
 .then(data => data.json())
 .then(item => jokeEl.textContent =` ${item.joke}`)
}



btnEl.addEventListener("click", getJoke)