import { Container, Row } from "react-bootstrap"
import ClockContainer from "./clockcontainer"
import Footer from "./footer"
import Header from "./Header"


const PageContainer = () => {
    return(

        <Container>
            <Header/>
            <ClockContainer></ClockContainer>
            <Footer/>
        </Container>

    )
}

export default PageContainer