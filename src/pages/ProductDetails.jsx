import React, { useState, useEffect } from "react";

import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/store/shopping-cart/cartSlice";
import { useSelector } from "react-redux";

import "../styles/product-details.css";
import "../styles/product-card.css";

import ProductCard from "../components/UI/product-card/ProductCard";



const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isUpdateNotificationDisplayed, setIsUpdateNotificationDisplayed] = useState(false);
  const product = products.find((product) => product.id === id);
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;
  const relatedProduct = products.filter((item) => category === item.category);

  
  

  
  const addItem = () => {
    setIsUpdateNotificationDisplayed(true);
      setTimeout(function(){
        setIsUpdateNotificationDisplayed(false);
      },3000)
    
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
       
      })
      );

    };
    
    useEffect(() => {
      setPreviewImg(product.image01);
      window.scrollTo(0, 0);
    }, [product]);

   

  return (
    <Helmet title="Product-details">
      {isUpdateNotificationDisplayed && (
        <div className="updateCartNotifiation">
          <span>You successfully updated your cart!</span>
        </div>
      )
      }

      <CommonSection title={title} />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="" className="w-50" />
                </div>

                <div
                  className="img__item"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  {" "}
                  Price: <span>${price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>

                <button onClick={addItem} className="addTOCART__btn">
                  {cartProducts.find(item => item.id === id) ? 'Update Cart' : 'Add to Cart'}
                </button>
              </div>
            </Col>

            

            <Col lg="12">
              <h6 className="description">Description</h6>
              <div className="description__content">
                <p>{desc}</p>
              </div>
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">You might also like</h2>
            </Col>

            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
            <Col lg='12' >
             <div className="tabs d-flex align-items-center gap-5 py-3">
              
              <h6 className="tab__active">Review</h6>
             </div>
             
             <div className="tab__form">
             <div className="review">
  <p className="user__name mb-0">
    John Doe
  </p>
  <p className="user__email">john.doe@email.com</p>
  <p className="feedback__text">Excellent service!</p>
</div>

<div className="review">
  <p className="user__name mb-0">
    Jane Smith
  </p>
  <p className="user__email">jane.smith@email.com</p>
  <p className="feedback__text">Fast shipping and quality product.</p>
</div>

<div className="review">
  <p className="user__name mb-0">
    Alex Johnson
  </p>
  <p className="user__email">alex.johnson@email.com</p>
  <p className="feedback__text">Satisfied with the purchase.</p>
</div>

              <form className="form">
                <div className="form__group"> 
                  <input type="text" placeholder="Entrer your name"/>
                </div>
                <div className="form__group"> 
                  <input type="email" placeholder="Entrer your email"/>
                </div>
                <div className="form__group"> 
                  <textarea type="text" placeholder="your opinion?"/>
                </div>
                <button type="submit" className="addTOCart__btn">Submit</button>
              </form>
             </div>

            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;

