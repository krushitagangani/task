import React from 'react';
import { Routes, Route } from "react-router-dom";

//pages
import Test1 from "../pages/test1/index"
import Test2 from "../pages/test2/index"

const Index = (props : any) => {
    return (
        <Routes>
            <Route path="/test1" element={<Test1 />} />
            <Route path="/test2" element={<Test2 />} />
      </Routes>
    );
}

export default Index;