import Container from 'react-bootstrap/Container'
import ClockRow from './clockrow'
import TitleRow from './titlerow'


const ClockContainer = () => {
    return(
        <Container className="container-box" fluid>
            <TitleRow></TitleRow>
            <ClockRow classname="clockrow" city_name="Anadyr" date={new Date()} lat={64.73} long={177.50}></ClockRow>
            <ClockRow classname="clockrow" city_name="Melbourne" date={new Date()} lat={-37.81} long={144.96}></ClockRow>
            <ClockRow classname="clockrow" city_name="Brisbane" date={new Date()} lat={-27.46} long={153.02}></ClockRow>
            <ClockRow classname="clockrow" city_name="Tokyo" date={new Date()} lat={35.68} long={139.69}></ClockRow>
            <ClockRow classname="clockrow" city_name="Beijing" date={new Date()} lat={39.90} long={116.39}></ClockRow>
            <ClockRow classname="clockrow" city_name="Jakarta" date={new Date()} lat={-6.17} long={106.82}></ClockRow>
            <ClockRow classname="clockrow" city_name="Dhaka" date={new Date()} lat={23.76} long={90.38}></ClockRow>
            <ClockRow classname="clockrow" city_name="Tashkent" date={new Date()} lat={41.31} long={69.27}></ClockRow>
            <ClockRow classname="clockrow" city_name="Dubai" date={new Date()} lat={25.07} long={55.18}></ClockRow>
            <ClockRow classname="clockrow" city_name="Moscow" date={new Date()} lat={55.75} long={37.61}></ClockRow>
            <ClockRow classname="clockrow" city_name="Cairo" date={new Date()} lat={30.04} long={31.23}></ClockRow>
            <ClockRow classname="clockrow" city_name="Brussels" date={new Date()} lat={50.84} long={4.35}></ClockRow>
            <ClockRow classname="clockrow" city_name="London" date={new Date()} lat={51} long={-0.12}></ClockRow>
            <ClockRow classname="clockrow" city_name="Praia" date={new Date()} lat={14.91} long={-23.50}></ClockRow>
            <ClockRow classname="clockrow" city_name="King Edward Point" date={new Date()} lat={-54.28} long={-36.49}></ClockRow>
            <ClockRow classname="clockrow" city_name="Buenos Aires" date={new Date()} lat={-34.60} long={-58.43}></ClockRow>
            <ClockRow classname="clockrow" city_name="Carcas" date={new Date()} lat={-10.11} long={-77.16}></ClockRow>
            <ClockRow classname="clockrow" city_name="New York" date={new Date()} lat={40.71} long={-74}></ClockRow>
            <ClockRow classname="clockrow" city_name="Mexico City" date={new Date()} lat={19.43} long={-99.13}></ClockRow>
            <ClockRow classname="clockrow" city_name="Calgary" date={new Date()} lat={51.04} long={-114.06}></ClockRow>
            <ClockRow classname="clockrow" city_name="Los Angeles" date={new Date()} lat={34.07} long={-118.24}></ClockRow>
            <ClockRow classname="clockrow" city_name="Anchorage" date={new Date()} lat={61.21} long={-149.89}></ClockRow>
            <ClockRow classname="clockrow" city_name="Honolulu" date={new Date()} lat={21.30} long={-157.85}></ClockRow>
            <ClockRow classname="clockrow" city_name="Alofi" date={new Date()} lat={-19.05} long={-169.91}></ClockRow>
            <ClockRow classname="clockrow" city_name="Baker Island" date={new Date()} lat={0.19} long={-176.47}></ClockRow>
        </Container>       
    )
}

export default ClockContainer;