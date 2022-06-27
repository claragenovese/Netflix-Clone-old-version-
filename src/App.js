import React, { useContext } from "react";
import { Context } from "./Context/Context";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import MyList from "./pages/myList/MyList";
import Log from "./pages/logPages/Log";
import WatchMovie from "./pages/watchMovie/WatchMovie";
import { AuthContextProvider } from "./Context/AuthContext";
import ShowMovieInformation from "./components/Titles/Categories/eachMovie/clickMovie";
import {netflixLogo} from './assets/netflixLogos'
import { motion } from "framer-motion"
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const {isLoading, newMovieClicked} = useContext(Context)

  function showLoading(){
    return (
      <div className="loading-container">
        <motion.div 
          className="netflix-load"
          initial={{scale: 0.5, opacity: 0}}
          animate={{scale: 1.1, opacity: 1}}
          transition={{ ease: "easeOut", duration: 1.6}}
        >
          {netflixLogo}
        </motion.div>
        <motion.div  
          className="loader"
          initial={{opacity: 0}}
          animate={{opacity: 1, scale: 2}}
          transition={{ ease: "easeOut", duration: 0.2, delay: 1.6 }}
        >
          <ClipLoader color="rgb(219, 38, 38)" size={20}/>
        </motion.div>
      </div>
    )
  }

  function showAppCharged(){
    return (
      <>
        <AuthContextProvider>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shows" element={<Series />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/my_list" element={<MyList />} />
            <Route path="/signUp" element={<Log type={"signUp"}/>} />
            <Route path="/login" element={<Log type={"logIn"} />} />
            <Route path="/watchMovie" element={<WatchMovie />} />
          </Routes>
          { newMovieClicked && <ShowMovieInformation movie={newMovieClicked} />}
          {/* <Footer /> */}
        </AuthContextProvider> 
      </>
    )
  }
  
  return (
    <div className="app">
      { isLoading ? 
        showLoading() :
        showAppCharged()
      }
    </div>
  );
}

export default App;
