import { useContext, useState } from "react";
import SignupAndLogin from "./SignupAndLogin";
import { Usercontext } from "./Usercontext";
import SearchBar from "./Searchbar";
import Playlist from "./Playlist";

function Routes() {
  const { id } = useContext(Usercontext);
  const [play, setPlay] = useState(false);
  const [signup, setSignup] = useState(false);

  function showPlaylist() {
    if (!id) {
      alert('Please login first');
      return;
    } 
      setPlay(!play);
    
  }

  if (!id && signup) {
    console.log(id, signup);
    return (<SignupAndLogin />);
  } else {
    return (
      <>
        <div className="bg-black py-4 px-6 flex items-center justify-between flex-wrap">
          <h1 className="text-white text-xl font-bold">Netflix</h1>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <button 
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md w-full md:w-auto" 
              onClick={showPlaylist}
            >
              {play ? 'Search' : 'My Playlist'}
            </button>
            {!id && (
              <button 
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md w-full md:w-auto" 
                onClick={() => setSignup(true)}
              >
                Signup/Login
              </button>
            )}
          </div>
        </div>
        {play ? <Playlist /> : <SearchBar />}
      </>
    );
  }
}

export default Routes;
