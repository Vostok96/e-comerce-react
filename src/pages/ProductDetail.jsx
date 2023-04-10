import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const{id} = useParams()
    const [detail, setDetail] = useState({})

    useEffect(()=>{
        axios
            .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then(resp => setDetail(resp.data))
            .catch(error=>console.error(error))
            

    }, [])
    return (
        <div className="product-container">
            <div className="product-title">
                <h1>{detail?.title}</h1>
                <h2>{detail?.brand}</h2>
                <h3>$ {detail?.price}</h3>
            </div>
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