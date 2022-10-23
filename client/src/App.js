import React from 'react';
import {Route, Routes} from "react-router-dom";
import Slider from "./components/Slider";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Pay from "./components/Pay";

import Success from "./components/Success";

const App = () => {
    return (
        <>
          {/*<Slider/>*/}
          {/*  <Product/>*/}
          {/*  <Register/>*/}
            <Routes>
                <Route path={"/"} element={<Pay/>}/>
                <Route path={"/success"} element={<Success/>}/>
            </Routes>

        </>

    );
};

export default App;