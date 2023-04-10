import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { filterCategoriresThunk, getProductThunk, filterHeadlineThunk } from '../store/slices/product.slice';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';

const Home = () => {
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();
    const [categories, setCategorties] = useState([])
    const [inputSearch, setInputSearch] = useState('')
   

    useEffect( ()=>{
        dispatch(getProductThunk())
        axios
            .get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
            .then(resp => setCategorties (resp.data))
            .catch( error => console.error(error))

    }, [])

    return (
        <div>

            <Container>
                <Row className='py-3'>
                    {
                        categories.map(category => (
                            <Col key={category.id}>
                                <Button className='w-100' onClick={()=> dispatch(filterCategoriresThunk(category.id) )}>{category.name}</Button>
                            </Col>
                        ))
                    }
                    <Col>
                        <Button 
                        onClick={()=>dispatch(getProductThunk())}
                        className='w-100'>VIEW ALL</Button>
                    </Col>
                </Row>
                <Row className='py-3'>
                    <Col>
                    <InputGroup className="mb-3">
                        <Form.Control
                        placeholder="Buscar producto por titulo"
                        aria-label="Nombre del producto"
                        aria-describedby="basic-addon2"
                        value={inputSearch}
                        onChange={e => setInputSearch(e.target.value)}
                        />
                        <Button
                        variant = 'outline-primary'
                        onClick={()=> dispatch(filterHeadlineThunk(inputSearch))}
                        >
                            Search
                        </Button>
                    </InputGroup>
                    </Col>
                </Row>
                <Row xs={1} md={2} lg={3} xl={4} className='py-3'>
                    {
                        product.map( item  => (
                            <Col className='mb-3' key={item.id}>
                                <Card>
                                    <Card.Img variant="top" src={item.images[0].url}/>

                                    <Card.Body>
                                        <Card.Title>{item.title} <br /> Marca: {item.brand} <br /> Precio: ${item.price} </Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                        <Button 
                                        variant="primary"
                                        as={Link}
                                        to={`/product/${item.id}`}
                                        >Ver detalle</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ) )
                    }                   
                    
                    
                </Row>
            </Container>

        </div>
    );
};

export default Home;