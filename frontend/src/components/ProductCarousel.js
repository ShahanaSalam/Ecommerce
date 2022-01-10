import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";
import Carousel1 from "../Carousel-1.png";
import Carousel2 from "../Carousel-2.png";
// import Carousel3 from "../Carousel-3.png";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    // <Carousel pause="hover" className="bg-dark">
    //   {products.map((product) => (
    //     <Carousel.Item key={product._id}>
    //       <Link to={`/product/${product._id}`}>
    //         <Image src={product.image} alt={product.name} fluid />
    //         <Carousel.Caption className="carousel-caption">
    //           <h2>
    //             {product.name} (${product.price})
    //           </h2>
    //         </Carousel.Caption>
    //       </Link>
    //     </Carousel.Item>
    //   ))}
    // </Carousel>
    <Carousel fade classname="carousel">
      <Carousel.Item>
        <img src={Carousel1} alt="First slide" />
        <Carousel.Caption>
          {/* <h3>Wedding Gowns</h3> */}
          {/* <p>Customise in your size</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={Carousel2} alt="Second slide" />
        <Carousel.Caption>{/* <h3>Wedding Gowns</h3> */}</Carousel.Caption>
      </Carousel.Item>

      {/* <Carousel.Item className="carousel-item">
        <img id="clip" src={Carousel1} alt="Third slide" />
        <Carousel.Caption>
          <h3>Wedding Gowns</h3>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default ProductCarousel;
