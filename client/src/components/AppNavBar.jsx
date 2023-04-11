import React from 'react'
import { Navbar , Container,Nav, Button } from 'react-bootstrap'
import { useDispatch , useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { toggleFalse } from '../JS/Actions/edit';
import { userLogout } from '../JS/Actions/auth';
const AppNavBar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state)=>state.authReducer.isAuth)
  const user = useSelector((state)=>state.authReducer.user)


  const handleEditFalse = ()=>{
    dispatch(toggleFalse())
  }

  const handleLogout = ()=>{
    dispatch(userLogout())
  }
  return (
    <div>
              <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand> {!user ? "" : user.name} </Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/"><Button variant="dark"> Home</Button></Link>
          <Link to="/contacts"><Button variant="dark">Contact List</Button></Link>
          {!isAuth ? "" : <Link to="/add"><Button variant="dark" onClick={handleEditFalse}>Add</Button></Link>}
          {!isAuth ? "" : <Link to="/dashboard"><Button variant="dark">Dashboard</Button></Link>}
          </Nav>
        </Container>
        {
          !isAuth ? (
            <>
            <Link to="/register">  <Button variant="dark">Register</Button></Link>
        <Link to="/login"><Button variant="dark">Login</Button></Link>
            </>
          ):

          (
            <Link to="/"><Button variant="dark" onClick={handleLogout}>Logout</Button></Link>
          )
        }

      </Navbar>
    </div>
  )
}

export default AppNavBar