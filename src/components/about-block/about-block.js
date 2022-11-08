import Container from "../container/container";
import "./about-block.scss";

const AboutBlock = () => {
    return (
        <section className="about">
            <Container className="about__container">
                <h2 className="about__title">О компании</h2>
                
                <div className="about__wrapper">
                    <div className="about__content">
                        <h3 className="about__content-title">Lorem ipsum dolor sit amet</h3>
                        <p className="about__content-desc">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate <br />

                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditii
                        Sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt <br />

                        Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.  <br />

                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                    </div>

                    <div className="about__img"></div>
                </div>
            </Container>
        </section>
    )
}

export default AboutBlock;