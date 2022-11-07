import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculate from "./pages/calculate/calculate";
import Home from "./pages/home/home";
import Main from "./pages/main/main";



const App = () => {
    return (
        <BrowserRouter>
            <Home>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/calculate" element={<Calculate />} />
                </Routes>
            </Home>
        </BrowserRouter>
    )
}

export default App;