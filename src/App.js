import React, { useContext, useState, useEffect } from "react";
import { Context } from "./Context/Context";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Footer from "./components/Footer/Footer";
import Movies from "./pages/Movies";
import MyList from "./pages/myList/MyList";
import SignUp from "./pages/logPages/signUp/SignUp";
import LogIn from "./pages/logPages/logIn/LogIn";
import WatchMovie from "./pages/watchMovie/WatchMovie";
import { AuthContextProvider } from "./Context/AuthContext";
import ShowMovieInformation from "./components/Titles/Categories/eachMovie/clickMovie";

function App() {
  const {isLoading, newMovieClicked} = useContext(Context)

  function showLoading(){
    return (
      <h2>Loading...</h2>
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
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/watchMovie" element={<WatchMovie />} />
          </Routes>
          { newMovieClicked && <ShowMovieInformation movie={newMovieClicked} />}
          {/* <Footer /> */}
        </AuthContextProvider> 
      </>
    )
  }
  
  // useEffect(() => {
  //   if(newMovieClicked) document.body.style.overflowY = "hidden"
  //   return function () {
  //     document.body.style.overflowY = "visible";
  //   }
  // }, [newMovieClicked])

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
