import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col ,ListGroup ,ListGroupItem} from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/home.css';
import hero from "../assets/images/cake1.png";
import "../styles/hero-section.css";
import Category from "../components/UI/Category/Category.jsx";
import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';
import products from '../assets/fake-data/products.js';
import foodCategoryImg01 from '../assets/images/cake-slice_992754.png';
import foodCategoryImg02 from '../assets/images/cupcake (1).png';
import foodCategoryImg03 from '../assets/images/box.png';
import ProductCard from '../components/UI/product-card/ProductCard.jsx';
import whyImg from '../assets/images/why.jpg'
import networkImg from '../assets/images/cake3.png'
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";
import { auth } from "../firebase"; // Import the Firebase app instance 

const featureData =[
  {
    titel:'Quick Delivery',
    imgUrl:featureImg01,
    desc: "Quick Delivery is central to our service, recognizing the significance of your time. Our unwavering commitment to swift, efficient delivery sets us apart. Once you order, anticipate your favorites at your doorstep promptly. Our dedication ensures you savor without delay, for a convenient, satisfying experience"
  },
  {
    titel:'Super Dine In',
    imgUrl:featureImg02,
    desc: "Embark on a superb dining adventure with our Super Dine In service. Elevate your mealtime enjoyment with a dining experience like no other. From a welcoming ambiance to delectable dishes, we strive to create a dining haven that exceeds expectations. Immerse yourself in culinary delight as you relish the flavors of our carefully crafted menu.Super Dine In – where exceptional cuisine meets an inviting atmosphere for an unforgettable dining experience."
    
  },
  {
    titel:'Easy Pick Up',
    imgUrl:featureImg03,
    desc: "Our service emphasizes easy pick-up, streamlining the process for your convenience. Simplifying the way you retrieve your orders, we ensure a hassle-free experience. With user-friendly features, you can effortlessly collect your items, making the entire process smooth and efficient. Enjoy the convenience of easy pick-up, designed with you in mind"
  }
]
const Home = () => {
  const [category,setCategory] = useState('ALL')
  const [allProducts,setAllProducts] =useState(products)
  const [hotPizza,setHotPizza]=useState([])
  useEffect(() => {
    const filterdPizza = products.filter((item) => item.category === "Cupcake");
    const slicePizza = filterdPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, [products]);
  useEffect(()=>{
    if(category === 'ALL')
    {setAllProducts(products)} 
    if(category === 'CAKE')
    {const filteredProducts=products.filter(item=>item.category=== 'Cake')
    setAllProducts(filteredProducts)
    }
    if(category === 'CUPCAKE')
    {const filteredProducts=products.filter(item=>item.category=== 'Cupcake')
    setAllProducts(filteredProducts)
    }
    if(category === 'BOX')
    {const filteredProducts=products.filter(item=>item.category=== 'Box')
    setAllProducts(filteredProducts)
    }  
  },[category]
  )

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        console.log(user);
      } else {
        // User is signed out
        console.log("user is logged out");
      }
    });
  
    // Cleanup function to unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Cake Easy Order & Fast Delivery</h5>
                <h1 className="mb-4 hero__title"><span>Hungry?</span>just wait for your scrumptious cakes<span> at your door</span></h1>
                <p>Experience the ease of placing orders with our intuitive app, streamlining each step for your convenience. Revel in the joy of choosing from our varied menu of delightful cakes with just a few taps, all from the comfort of your home. Committed to swift delivery, your favorite treats will arrive promptly at your door. Understanding the importance of convenience and speed, we strive to provide a cake-ordering experience that is not only pleasurable but also hassle-free, guaranteeing prompt delivery to satisfy your sweet cravings.</p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                <button className="order__btn d-flex align-items-center justify-content-between ">
                  
                    order now <i className="ri-arrow-right-s-line"></i>
                  
                </button>
                <button className="all__foods-btn">
                  <Link to="/cakes">
                    see all cakes 
                  </Link>
                </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <i className="ri-car-line"></i>
                  </span>{""}
                  No Shipping
                </p>
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <i className="ri-shield-check-line"></i>
                  </span>{""}
                  100% secure checkout
                </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={hero} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category/>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h5 className="feature__subtitle mb-4">What do we offer?</h5>
              <h2 className="feature__title">Simply relax at home</h2>
              <h1 className="feature__title">we'll <span>handle everything for your cake needs</span></h1>
              <p className="mb-1 mt-4 feature__text">Discover the ease with which we take care of all your cake-related needs. What do we offer? Just sit back at home and let us handle everything.
               From ordering to delivery, our dedicated pastry app streamlines every step,
                allowing you to enjoy delicious cakes hassle-free. Trust us to make your sweet experience as delightful as possible while you relax and savor the comfort of your home.</p>
              

            </Col>
            {
              featureData.map((item,index)=>(
              <Col lg='4' md='6' sm='6' key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3" >
                  <img src={item.imgUrl} alt="feature__item" className="w-25 mb-3"/>
                  <h5 className="fw-bold mb-3">{item.titel}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>

              
                ))


            }
            
            
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2>Popular cakes</h2>
            </Col>
            <Col lg='12'>
              <div className="food__category d-flex align-items-center justify-content-center gap-4 foodgab">
                <button className={`all__btn ${category === "ALL" ? "foodBtnActive" : ""}`} onClick={()=>setCategory('ALL')}>All</button>
                <button className={`d-flex align-items-center gap-2 ${category === "CAKE" ? "foodBtnActive" : "" }`} onClick={()=>setCategory('CAKE')}><img src={foodCategoryImg01} alt="" />Cake</button>
                <button className={`d-flex align-items-center gap-2 ${category === "CUPCAKE" ? "foodBtnActive" : "" }`} onClick={()=>setCategory('CUPCAKE')}><img src={foodCategoryImg02} alt="" />Cupcake</button>
                
                <button className={`d-flex align-items-center gap-2 ${category === "BOX" ? "foodBtnActive" : "" }`} onClick={()=>setCategory('BOX')}><img src={foodCategoryImg03} alt="" />Box</button>

              </div>
            </Col>
            {
            allProducts.map(item=>(
              <Col lg='3' md='4' key={item.id} className="mt-5">
              <ProductCard item={item}/>
            </Col>
            ))
            
           }
          </Row>
        </Container>
      </section>
      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>
            <Col lg='6' md='6'>
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">Why <span>choose us?</span></h2>
                <p className="tasty__treat-desc">R.F embodies excellence in every cake—crafted with precision, personalized service, and an unwavering commitment to satisfaction.</p>
                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-item d-flex align-items-center gap-2"><i className="ri-checkbox-line"></i> 
                    Exceptional Quality:</p>
                    <p className="choose__us-desc">
"At R.F, our unwavering commitment to quality is unmistakable. Each cake is a culinary masterpiece, meticulously crafted with the finest ingredients. We firmly believe that every bite should be a memorable experience, and it's this meticulous attention to detail that distinguishes R.F."
                     </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                   <p className="choose__us-item d-flex align-items-center gap-2"><i className="ri-checkbox-line"></i>
                   Personalized Service:</p> 
                    <p className="choose__us-desc">"At R.F, we go beyond mere pastry. We provide personalized service to ensure each cake perfectly meets your expectations. Whether you have a specific idea in mind or are seeking inspiration, our dedicated team is here to create the dessert of your dreams."
                       </p>
                    
                    
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                   <p className="choose__us-item d-flex align-items-center gap-2"><i className="ri-checkbox-line"></i>Commitment to Customer Satisfaction:
                   {" "}
                    </p> 
                    <p className="choose__us-desc">"Your satisfaction is our priority at R.F. If you have special preferences, custom requests, or simply questions, our team is here for you. We strive to make every experience with R.F as delightful as our cakes themselves."
                      </p>
                    
                    
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg='12' className="text-center mb-5">
              <h2>Our Cupcakes</h2>

            </Col>
            {
              hotPizza.map(item=>(
                <Col lg='3' md='4' key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
          <Col lg='6' md='6'>
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">what our <span>customers</span> are saying</h2>
                <p className="testimonial__desc">Dear R.F customers,

We want to express our sincere gratitude for your ongoing choice to be a part of the R.F family. Your trust in our sweet creations means the world to us. At R.F, we consistently strive to craft exceptional taste experiences, and it's through your support and valuable feedback that we continue to grow and improve. Thank you for being a part of our sweet journey.

</p>
                    <TestimonialSlider  />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <img src={networkImg} alt="image" className="w-100"/>

            </Col>
            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
