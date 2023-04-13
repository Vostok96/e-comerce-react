import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { createProductThunk } from "../store/slices/product.slice";
import { useDispatch } from "react-redux";

const ProductDetail = () => {
    const{id} = useParams()
    const [detail, setDetail] = useState({})
    const [counter, setCounter] = useState(1)
    const dispatch = useDispatch ()

    useEffect(()=>{
        axios
            .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then(resp => setDetail(resp.data))
            .catch(error=>console.error(error))
            

    }, [])

    const addProduct = () => {
        const data ={
            quantity : counter,
            productId : id,
        }
        dispatch (createProductThunk(data))
    }
    return (
        <div className="product-container">
            <div className="product-title">
                <h1>{detail?.title}</h1>
                <h2>{detail?.brand}</h2>
                <h3>$ {detail?.price}</h3>
            </div>
            <Container>
            <Row className='mb-3'>
                <Col>
                    <Button onClick={() => {
                            if (counter > 1) {
                                setCounter(counter - 1)}}}>-</Button>
                    {counter}
                    <Button onClick={()=> setCounter(counter+1)}>+</Button>
                </Col>
                <Col>
                    <Button onClick={addProduct}>
                        Añadir a favoritos
                    </Button>
                </Col>
            </Row>
            </Container>
            <div className="product-images">
                <img src={detail?.images?.[0]?.url} alt="" />
                <img src={detail?.images?.[1]?.url} alt="" />
                <img src={detail?.images?.[2]?.url} alt="" />
            </div>
            <div className="product-description">
                <p>{detail?.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;