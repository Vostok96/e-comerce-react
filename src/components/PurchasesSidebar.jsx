import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPurchasesThunk } from '../store/slices/purchases.slice'


const PurchasesSidebar = ({show, handleClose}) => {

    const dispatch = useDispatch()
    


    useEffect(()=>{

    },[])
    const product = useSelector (state => state.product)
        console.log(product)
    return (
        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
            <ul>
                {
                    product?.map(item=> (
                        <li key={item.id}>
                            Producto favorito
                        </li>

                    ))
                }
            </ul>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default PurchasesSidebar;

