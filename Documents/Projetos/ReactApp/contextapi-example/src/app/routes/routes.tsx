import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SignUp } from "../pages/SignUp";
import { ShowData } from "../pages/ShowData";

import Header from "../pages/Header";


const App = () => {

    return (
        <BrowserRouter>
        <div className="container">
            <Header/>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/exibir" element={<ShowData />} />
            </Routes>
        </div>
      </BrowserRouter>

    )
}

export default App;