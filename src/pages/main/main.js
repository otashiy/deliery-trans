import AboutBlock from "../../components/about-block/about-block";
import AboutUs from "../../components/about-us/about-us";
import Advantage from "../../components/advantage/advantage";
import Intro from "../../components/intro/intro";
import Transport from "../../components/transport/transport";
import Type from "../../components/type/type";

const Main = () => {
    return (
        <main>
            <Intro/>
            <Type />
            <Transport />
            <AboutBlock />
            <Advantage />
            <AboutUs />
        </main>
    )
}

export default Main;