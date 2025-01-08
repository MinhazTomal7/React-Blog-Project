import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ByCategoryPage from "./Pages/ByCategoryPage.jsx";
import DetailsPage from "./Pages/DetailsPage.jsx";

const App = () => {
    return (
   <BrowserRouter>
       <Routes>

           <Route path="/" element={<HomePage/>}></Route>
           <Route path="/byCategory/:categoryId" element={<ByCategoryPage/>}></Route>
           <Route path="/details/:postID" element={<DetailsPage/>}></Route>



       </Routes>

   </BrowserRouter>
    );
};

export default App;