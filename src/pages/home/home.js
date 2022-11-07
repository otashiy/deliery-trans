import Container from "../../components/container/container";
import Header from "../../components/header/header";


const Home = ({children}) => {
    return (
      <>
       <Header />
       <Container>{children}</Container>
      </>
    )
}

export default Home;