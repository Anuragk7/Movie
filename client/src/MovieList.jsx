import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Usercontext } from './Usercontext';

function MovieList(props) {
    const {id} = useContext(Usercontext);
  
    const m  = props.m;
    async function handleAddToPlaylist () { 
    if (!id){
        alert('please login first')
        console.log('noo')
        return;
    }
    else {
        const st = await axios.post("https://movie-rosy-kappa.vercel.app/save", {imdb:m.imdb,userId:id  });
        console.log(m.imdb)
        add(true)
    }
   
    
  };
  const [added, add] = useState(false);

  

  return (
    <div className="bg-gray-900 m-2 w-full">
      {/* <SearchBar onSearch={handleSearch} /> */}
      {/* Movie card and genre display */}
      <div className="flex flex-col md:flex-row bg-gray-900 shadow-lg rounded-lg overflow-hidden my-4 mx-2 mt-0">
        <div className="md:flex-shrink-0">
          <img className="w-full md:w-48 h-48 object-cover" src={m.imageUrl} alt={m.title} />
        </div>
        <div className="p-4 text-white flex flex-col justify-between w-full">
          <div>
            <h2 className="text-xl font-semibold">{m.title}</h2>
            <p className="mt-2 text-gray-400">{m.description}</p>
          </div>
          <div className="mt-4">
            {m.genres.map((genre, index) => (
              <span key={index} className="bg-red-600 text-white px-2 py-1 rounded-full text-sm mr-2">{genre}</span>
            ))}
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full hover:bg-blue-600"
            onClick={handleAddToPlaylist}
            
          >
            {added?'Added':'Add to Playlist'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieList;
