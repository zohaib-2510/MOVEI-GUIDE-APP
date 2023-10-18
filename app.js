const searchForm = document.querySelector("form");
const movieContainer = document.querySelector(".movie-container");
const inputBox = document.querySelector(".inputBox");


const getMovieInfo = async (movie) =>{
    const myApiKey = "a67f1d5b";
    const url = `http://www.omdbapi.com/?apikey=${myApiKey}&t=${movie}`;
    const response = await  fetch(url);
    const data = await response.json();

    console.log(data);
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
const movieName = inputBox.value.trim();
if(movieName!== " "){
    getMovieInfo(movieName);
}
})