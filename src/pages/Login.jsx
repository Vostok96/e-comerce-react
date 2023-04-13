import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const submit = data => {
        //Ejecutar el endpoint de login y enviar la data que se obtuvo del form
        //Console.log de la respuesta
        axios
            .post('https://e-commerce-api-v2.academlo.tech/api/v1/users/login', data)
            .then(resp=>{
                localStorage.setItem('token', resp.data.token)
                navigate('/')
            }) 
            .catch(error=> {
                if(error.response?.status === 401){
                    alert('Credenciales incorrectas')
                }else{
                    console.error(error)
                }
                
            })
            
            }
    const token = localStorage.getItem('token')
    const logout = () => {
        localStorage.clear()
        navigate('/login')
    }
    return (
          <>
        {
            token 
            ?
            <div style={{maxWidth500, margin: '1rem auto', border: '1px solid black', padding: '1rem'}}>
                <Button onClick={logout}>Cerrar sesión</Button>
            </div>
            :
        <Form 
        style={{
            maxWidth: 500,
            margin: '1rem auto',
            backgroundColor: '#222',
            color: '#fff',
            border: '1px solid #ccc',
            padding: '1rem',
            fontFamily: 'Roboto Mono, monospace',
          }}
          onSubmit={handleSubmit(submit)}
        >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontWeight: 'bold' }}>Email address:</Form.Label>
                    <Form.Control 
                    {...register('email')}
                    type="email" 
                    placeholder="Enter email" 
                    style={{ backgroundColor: '#333', color: '#fff', border: 'none' }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ fontWeight: 'bold' }}>Password:</Form.Label>
                    <Form.Control 
                    {...register('password')}
                    type="password" 
                    placeholder="Password" 
                    style={{ backgroundColor: '#333', color: '#fff', border: 'none' }} />
                </Form.Group>

                <Button variant="primary" type="submit" style={{ backgroundColor: '#ff6c00', borderColor: '#ff6c00', fontWeight: 'bold' }}>
                    Iniciar sesión
                </Button>
            </Form>
            }
         </>
    );
};

export default Login;