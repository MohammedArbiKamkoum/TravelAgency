import React,{useState} from 'react'
import { Container,Row,Col,Form,FormGroup,Button} from 'reactstrap'
import{Link} from 'react-router-dom'
import '../styles/login.css'
import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'

 
function Signup() {
  const [credent,setCredent]=useState({
    UserName: undefined,
    email:undefined,
    password:undefined
 })
  const handleChange=e=>{
    setCredent(prev=>({...prev,[e.target.id]:e.target.value}))
}

const handle =e=>{
  e.preventDefault()
  
}
  return (
    <section>
    <Container>
      <Row>
        <Col lg='8' className='m-auto'>
          <div className='login-container d-flex  justify-content-between'>
            <div className='login-img'>
              <img src={registerImg} alt=""/>
            </div>
            <div className='login-form'>
              <div className='user'>
              <img src={userIcon} alt=""/>
              </div>
              <h2>Signup</h2>
              <Form onSubmit={handle}>
              <FormGroup>
                  <input type="text" placeholder='Username' required id='username' onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type="email" placeholder='Email' required id='email' onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='Password' required id='password' onChange={handleChange}/>
                </FormGroup>
                <Button className='btn secondary__btn auth-btn' type='submit'>Create Account</Button>
              </Form>
              <p>Already have an account ? <Link to='/login'>Login</Link></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
   </section>

  )
}

export default Signup