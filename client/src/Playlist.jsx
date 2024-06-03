import { useContext, useEffect, useState } from "react";
import { Usercontext } from "./Usercontext";
import axios from "axios";

export default function Playlist() {
  const { id } = useContext(Usercontext);
  const [movies, setMovies] = useState([]);
  async function getDesc(id) {
    try {
      const response = await fetch('https://www.omdbapi.com/?apikey=5d01f461&plot=long&i=' + id);
      const data = await response.json();
      return {
        plot: data.Plot,
        genres: data.Genre ? data.Genre.split(', ') : [],
        title: data.Title,
        imageUrl:data.Poster
        
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        plot: 'No description available',
        genres: []
      };
    }
  }
  const handleSearch = async (imdb) => {

    let arr = movies
   
            const { plot, genres,title, imageUrl } = await getDesc(imdb);
           
               
                arr.push({
                    title:title,
                    description: plot,
                    imageUrl: imageUrl,
                    genres: genres,
                    imdb: imdb
                  })
                 
           
            
        
        const isUnique = (arr, obj) => {
            return !arr.some(item => item.title === obj.title); // Change 'id' to the property you want to check for uniqueness
          };
          
          // Filter the array to keep only unique objects
          arr = arr.filter((item, index, self) => {
            return isUnique(self.slice(0, index), item);
          });
        setMovies(arr);
  }



  async function getMovie() {
    try {
      const { data } = await axios.post('https://movie-rosy-kappa.vercel.app/movies', { id: id });
      console.log("req movie")
      console.log(data)
      for (let i=0; i<data.length; i++){
        if(data[i].imdb){
            handleSearch(data[i].imdb)
          }
      }
     
     
      
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  useEffect(() => {
    if (id) {
      getMovie();
    }
  }, [id]); // Only re-run the effect if id changes

  return (
    <div className="bg-black min-h-screen p-4">
      <h2 className="text-white text-xl font-bold mb-4">My Playlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <div key={index} className="bg-gray-900 shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={movie.imageUrl}
                alt={movie.title}
              />
              <div className="p-4 text-white">
                <h3 className="text-lg font-semibold">{movie.title}</h3>
                <p className="mt-2 text-gray-400">{movie.description}</p>
                <div className="mt-4">
                  {movie.genres.map((genre, index) => (
                    <span
                      key={index}
                      className="bg-red-600 text-white px-2 py-1 rounded-full text-sm mr-2"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No movies in your playlist.</p>
        )}
      </div>
    </div>
  );
}
