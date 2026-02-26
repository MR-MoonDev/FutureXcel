const API_KEY = "3042aafe"
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`

const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")
const resultsGrid = document.getElementById("results-grid")
const loader = document.getElementById("loader")
const message = document.getElementById("message")
const pagination = document.getElementById("pagination")
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const pageNumberLabel = document.getElementById("page-number")

let currentPage = 1
let currentSearch = "Marvel"

window.addEventListener("DOMContentLoaded",()=>{
fetchMovies(currentSearch,currentPage)
})

async function fetchMovies(query,page=1){

loader.classList.remove("hidden")
resultsGrid.innerHTML=""
message.innerText=""

try{

let res = await fetch(`${BASE_URL}&s=${query}&page=${page}`)
let data = await res.json()

loader.classList.add("hidden")

if(data.Response==="True"){

renderMovies(data.Search)
setupPagination(data.totalResults)

}else{

message.innerText="No movies found"
pagination.classList.add("hidden")

}

}catch(err){

loader.classList.add("hidden")
message.innerText="Error loading movies"

}

}

function renderMovies(movies){

resultsGrid.innerHTML = movies.map(movie=>{

let poster = movie.Poster!=="N/A"
?movie.Poster
:"https://via.placeholder.com/300x450?text=No+Poster"

return`

<div class="movie-card">

<img src="${poster}" 
alt="${movie.Title}"
onerror="this.onerror=null;this.src='https://via.placeholder.com/300x450?text=No+Poster';">

<div class="movie-info">
<h3>${movie.Title}</h3>
<p>${movie.Year} | ${movie.Type.toUpperCase()}</p>
</div>

</div>

`

}).join("")

}

function setupPagination(totalResults){

let totalPages = Math.ceil(totalResults/10)

pagination.classList.remove("hidden")

pageNumberLabel.innerText=`Page ${currentPage} of ${totalPages}`

prevBtn.disabled=currentPage===1
nextBtn.disabled=currentPage===totalPages

}

searchBtn.addEventListener("click",()=>{

let query = searchInput.value.trim()

if(query){

currentSearch=query
currentPage=1
fetchMovies(currentSearch,currentPage)

}

})

searchInput.addEventListener("keypress",(e)=>{

if(e.key==="Enter") searchBtn.click()

})

prevBtn.addEventListener("click",()=>{

if(currentPage>1){

currentPage--
fetchMovies(currentSearch,currentPage)
window.scrollTo({top:0,behavior:"smooth"})

}

})

nextBtn.addEventListener("click",()=>{

currentPage++
fetchMovies(currentSearch,currentPage)
window.scrollTo({top:0,behavior:"smooth"})

})