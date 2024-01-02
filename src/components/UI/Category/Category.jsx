import React from "react";
import { Container,Row,Col } from "reactstrap";
import categoryImg01 from "../../../assets/images/cake-slice_992754.png";
import categoryImg02 from "../../../assets/images/cupcake (1).png";
import categoryImg03 from "../../../assets/images/wedding-cake_5877070.png";
import categoryImg04 from "../../../assets/images/gluten-free (1).png";
import '../../../styles/category.css';
const categoryData = [
    {
        display:"Cake",
        imgUrl:categoryImg01
    },
    {
        display:"Cupcake",
        imgUrl:categoryImg02
    },
    {
        display:"wedding",
        imgUrl:categoryImg03
    },
    {
        display:"No Gluten",
        imgUrl:categoryImg04
    }
]
const category =()=>{
    return <Container>
        <Row>
            {
               categoryData.map((item,index) => (
                <Col lg='3' md='4' sm='6' xs='6' className="mb-4">
                 <div className="category__item d-flex align-items-center gap-3">
                    <div className="category__img">
                        <img src={item.imgUrl} alt="category__item" />
                    </div>
                    <h6>{item.display}</h6>
                 </div>
                </Col>
               ))
            }
            <Col lg='3' md='4'></Col>
        </Row>
    </Container>
}
export default category;