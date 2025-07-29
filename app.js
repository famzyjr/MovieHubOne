const inputs = document.getElementById('input')
const result = document.getElementById('results')
const loadingIndicator  = document.getElementById('loading-indicator')
const Moviesdetails = document.getElementById('moviesdetails')
const apiKey = '677cef6d';

inputs.addEventListener('input', async()=>{
    loadingIndicator.style.display = 'block'
    const  query = inputs.value.trim();
    if(query.length < 3){
    result.innerHTML = 'Not Enough words';
    return
    }
    try{
     const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
    const data = await response.json();
    console.log(data.Search);
    if(data.Search){
    result.innerHTML = data.Search.map((items,index)=>`<div  class="result-item" data-id="${items.imdbID}">
    <img src='${items.Poster}' />
     <span class='item'>${items.Title}</span>
     <span class='item'>${items.Year}</span>
    </div>`
    
      ).join('')
    }
    }catch(err){
    err.log
    }finally{
    loadingIndicator.style.display = 'none'
    }
})
result.addEventListener('click',async(e)=>{
  const target = e.target.closest('.result-item');
  if(!target) return;
   console.log('name');
   const MovieId = target.getAttribute('data-id')
  const response = await fetch(`https://www.omdbapi.com/?i=${MovieId}&apikey=${apiKey}`);
  const  data = await response.json();
 console.log(data);
 
 Moviesdetails.innerHTML = `
 <div class="moviesDetails">
 <div> <h2> Title: ${data.Title} (Year: ${data.Year}) </h2>
 <div class='MoviePosters'><img src='${data.Poster}/'></div>
 <p><strong>Plot:</strong> ${data.Plot}</p>
    <p><strong>Actors:</strong> ${data.Actors}</p>
    <p><strong>Released:</strong> ${data.Released}</p></div>
 </div>
 `

  
})

// Actors
// : 
// "Sylvester Stallone, Estelle Getty, JoBeth Williams"
// Awards
// : 
// "3 wins & 1 nomination total"
// BoxOffice
// : 
// "$28,411,210"
// Country
// : 
// "United States"
// DVD
// : 
// "N/A"
// Director
// : 
// "Roger Spottiswoode"
// Genre
// : 
// "Action, Comedy"
// Language
// : 
// "English"
// Metascore
// : 
// "N/A"
// Plot
// : 
// "A tough police sergeant's overbearing mother comes to visit him and begins to meddle in his life and career."
// Poster
// : 
// "https://m.media-amazon.com/images/M/MV5BZDIzMmI3MDktMDQwNy00MjhmLWI3YWItYTkzOWQ5MjA4MGI2XkEyXkFqcGc@._V1_SX300.jpg"
// Production
// : 
// "N/A"
// Rated
// : 
// "PG-13"
// Ratings
// : 
// (2) [{…}, {…}]
// Released
// : 
// "21 Feb 1992"
// Response
// : 
// "True"
// Runtime
// : 
// "87 min"
// Title
// : 
// "Stop! Or My Mom Will Shoot"
// Type
// : 
// "movie"
// Website
// : 
// "N/A"
// Writer
// : 
// "Blake Snyder, William Osborne, William Davies"
// Year
// : 
// "1992"
// imdbID
// : 
// "tt0105477"
// imdbRating
// : 
// "4.4"
// imdbVotes
// : 
// "46,229"