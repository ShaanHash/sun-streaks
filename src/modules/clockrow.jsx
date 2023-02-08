import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import { useEffect, useState } from "react";
import { generateRow } from "./utilfunctions";


const ClockRow = (props) => {

    const [rowData, setRowData] = useState({})

    useEffect(()=>{
        setRowData(
            generateRow(props.date, props.lat, props.long)
        )
    },[props.date, props.lat, props.long])

    return(
        <Row className="container-row">
            <Col className="city_name">
                {props.city_name}
            </Col>
            {Object.values(rowData).map((value) => {

                let classDetermined = "int-0"

                if (0 < value && value <= 0.10) {classDetermined = "int-10"}
                if (0.10 < value && value <= 0.20) {classDetermined = "int-20"}
                if (0.20 < value && value <= 0.30) {classDetermined = "int-30"}
                if (0.30 < value && value <= 0.40) {classDetermined = "int-40"}
                if (0.40 < value && value <= 0.50) {classDetermined = "int-50"}
                if (0.50 < value && value <= 0.60) {classDetermined = "int-60"}
                if (0.60 < value && value <= 0.70) {classDetermined = "int-70"}
                if (0.70 < value && value <= 0.80) {classDetermined = "int-80"}
                if (0.80 < value && value <= 0.90) {classDetermined = "int-90"}
                if (0.90 < value) {classDetermined = "int-100"}

                return  <Col className={"data-cell " + classDetermined}>
                    
                </Col>
            })}
        </Row>
    )


}

export default ClockRow