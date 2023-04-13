import axios from 'axios';
import { useState, useEffect } from 'react';
import getConfig from '../utils/getConfig';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



//peticion a la api
//almacenar
const Purchases = () => {

    const [pucharses, setPurchases] = useState([])

    useEffect(()=>{
        axios
            .get('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', getConfig())
            .then(resp=>setPurchases(resp.data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h1>Purchases</h1>
            {
                purchasesSlice.map(item => (
                    <Card style={{ width: '100%', display:'flex', flexDirection: 'row' }} key={item.id}>
                        <Card.Img variant="left" src={item.images?.[0]?.url} style={{width: 150}} />
                            <Card.Body className='d-inline'>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                            {item?.description}
                            </Card.Text>
                        </Card.Body>
                  </Card>
                ))
            }
        </div>
    );
};

export default Purchases;