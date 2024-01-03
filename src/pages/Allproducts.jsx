import React from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container,Col,Row } from "reactstrap";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import '../styles/all-products.css'
import { useState } from "react";
import ReactPaginate from 'react-paginate';
import "../styles/pagination.css";
const Allproducts = () =>{
    
    const [searchTerm,setSearchTerm]=useState('');
    const searchedProduct = products.filter(item=>
        {
            if(searchTerm.value === '') return item ;
            if(item.title.toLowerCase().includes(searchTerm.toLowerCase()))  return item ;
        })
    const [pageNumber, setPageNumber] = useState(0);

  

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

    return <Helmet title="All Products" >
        <CommonSection title="All Cakes" />
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='6' xs='12'>
                        <div className="search__widget d-flex align-items-center justify-content-between w-50">
                            <input type="text" placeholder="I'am looking for...?" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                            <span><i className="ri-search-line"></i></span>
                        </div>
                    </Col>
                    <Col lg='6' md='6' sm='6' xs='12' className="mb-5">
                        <div className="sorting__widget text-end">
                            <select className="w-50">
                                <option value="">Default</option>
                                <option value="ascending">Alphabeticall,A-Z</option>
                                <option value="descending">Alphabeticall,Z-A</option>
                                <option value="high-price">High Price</option>
                                <option value="low-price">Low Price</option>
                                
                            </select>
                        </div>
                    </Col>
                {
                    displayPage.map((item)=>(
                        <Col lg='3' md='4' sm='6' xs='6' key={item.id} className="mt-5">{" "}
                            <ProductCard item={item} key={item.id}/></Col>
                    ))
                }
            <div className="d-flex justify-content-center mt-4 mb-4">
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={"Prev"}
              nextLabel={"Next"}
              containerClassName="paginationBttns"
            />
          </div>
                </Row>
            </Container>
        </section>
    </Helmet>
 }
 export default Allproducts;