import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPurchasesThunk } from '../store/slices/purchases.slice'
import { getProductThunk, cartCheckoutThunk } from '../store/slices/product.slice';


const PurchasesSidebar = ({show, handleClose}) => {

    const dispatch = useDispatch()

    const token = localStorage.getItem('token')

    useEffect (()=>{
        if(token) dispatch(getProductThunk())
    },[token]);
    


    useEffect(()=>{

    },[])
    const product = useSelector (state => state.product)
        
    return (
        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
            <ul>
                {
                    product?.map(item=> (
                        <li key={item.id} style={{border: '1px solid black', marginBottom:'1rem'}}>
                            <h5>{item.title}</h5>
                            <img style={{width: 90, objectFit: 'contain'}} src={item.images?.[0]?.url} alt="" />
                        </li>

                    ))
                }
            </ul>
            <Button onClick={()=> dispatch(cartCheckoutThunk())}>Checkout</Button>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default PurchasesSidebar;

