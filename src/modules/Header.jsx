import { Row } from "react-bootstrap"

const Header = ()=> {
    return(
        <Row className="header">
            <Row>Sun-Streaks</Row>
            <Row className="sub-header">Created by Shaan Hashmi</Row>
            <Row className="sub-header">
                <a href="https://github.com/ShaanHash/">GitHub</a>
            </Row>
        </Row>
    )

}


export default Header