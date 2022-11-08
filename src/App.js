import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/about";
import Biznes from "./pages/biznes/biznes";
import Calculate from "./pages/calculate/calculate";
import Contact from "./pages/contact/contact";
import Delivery from "./pages/delivery/delivery";
import Home from "./pages/home/home";
import Main from "./pages/main/main";
import NotFound from "./pages/not-found/not-found";
import Persons from "./pages/persons/persons";
import Services from "./pages/services/services";



const App = () => {
    return (
        <BrowserRouter>
            <Home>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/calculate" element={<Calculate />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/delivery" element={<Delivery />} />
                    <Route path="/biznes" element={<Biznes />} />
                    <Route path="/persons" element={<Persons />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Home>
        </BrowserRouter>
    )
}

export default App;