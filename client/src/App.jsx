import  Routes  from "./Routes";

import { UserContextProvider } from "./Usercontext";

function App() {
  

  return (
    <>
    
    <UserContextProvider>
       <Routes/>
    </UserContextProvider>
     
    
    </>
  )
}

export default App
