import { useContext, useState } from "react";
import axios from "axios";
import {Usercontext} from "./Usercontext"


export default function SignupAndLogin() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isOldUser, setIsOldUser] = useState(false);

  const {username,setUsername, setid} = useContext(Usercontext);
 axios.defaults.withCredentials = true;
  async function handleSubmit(ev) {
    ev.preventDefault();
    const url = isOldUser ? 'https://movie-git-main-anurags-projects-d3f15b11.vercel.app/login' : 'https://movie-git-main-anurags-projects-d3f15b11.vercel.app/register';
    if (!isOldUser) {
     
      const { data } = await axios.post(url, {username: user, password: password });
     
      setUsername(user);
      setid(data.user);
      console.log(data);
      
     
    } else {
      const { data } = await axios.post(url, {username: user, password: password });
      setUsername(data[0].username)
      setid(data[0]._id)
      console.log(data);
      
    }
  }

  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 h-screen flex items-center">
      <form className="w-64 mx-auto mb-10" onSubmit={handleSubmit}>
        <h1 className="text-white m-5 text-center font-bold text-xl">Welcome To MERN Chat</h1>
        <input
          type="text"
          placeholder="Username"
          className="block w-full border p-2 mb-2 rounded-xl"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full border p-2 mb-2 rounded-xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-white w-full p-2 rounded-lg"
        >
          {isOldUser ? "Login" : "Signup"}
        </button>
        <div className="text-center mt-2">
          <button
            type="button"
            className="text-black"
            onClick={() => setIsOldUser((prev) => !prev)}
          >
            {isOldUser ? "Don't have an account? Signup" : "Already a member? Login Here"}
          </button>
        </div>
      </form>
    </div>
  );
}
