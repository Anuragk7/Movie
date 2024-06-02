import React, { useContext, useState } from 'react';
import MovieList from './MovieList';
import { Usercontext } from './Usercontext';

function SearchBar({ onSearch }) {
    const [searchTerm,setSearchTerm] = useState("");
    const [movie, setMovie] = useState([]);
    const {userId} = useContext(Usercontext)
      async function getDesc(id) {
        try {
          const response = await fetch('https://www.omdbapi.com/?apikey=5d01f461&plot=long&i=' + id);
          const data = await response.json();
          return {
            plot: data.Plot,
            genres: data.Genre ? data.Genre.split(', ') : []
          };
        } catch (error) {
          console.error('Error fetching data:', error);
          return {
            plot: 'No description available',
            genres: []
          };
        }
      }
    
       const handleSearch = async () => {

        let arr =[]
        try {
          const response = await fetch(`https://www.omdbapi.com/?apikey=5d01f461&s=${searchTerm}`);
          const data = await response.json();
          
          console.log("got",data.Search)
          for (let i=0; i<data.Search.length; i++){
            if (data.Search && data.Search.length > 0) {
                const { plot, genres } = await getDesc(data.Search[i].imdbID);
               
                   
                    arr.push({
                        title: data.Search[i].Title,
                        description: plot,
                        imageUrl: data.Search[i].Poster,
                        genres: genres,
                        imdb: data.Search[i].imdbID
                      })
                     
               
               
            }
             
            }
            const isUnique = (arr, obj) => {
                return !arr.some(item => item.title === obj.title); // Change 'id' to the property you want to check for uniqueness
              };
              
              // Filter the array to keep only unique objects
              arr = arr.filter((item, index, self) => {
                return isUnique(self.slice(0, index), item);
              });
            setMovie(arr);
    }
    catch(error){

    }
}
          
      
    
  

  return (
    <div className='bg-black'>
    <div className="flex items-center justify-between bg-black p-4 mb-4 rounded-lg">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e)=>{e.preventDefault();
            setSearchTerm(e.target.value)
        }}
        className="bg-gray-800 text-white px-4 py-2 rounded-md w-full mr-4"
      />
      <button
        
        onClick={handleSearch}
        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
      >
        Search
      </button>
     
    </div>
     <div>
     {movie.map( (m,index) => {
         
         return (
            <MovieList m = {m} key = {index}/>
           )
     })
     }
   </div>
   </div>

  );
}

export default SearchBar;
