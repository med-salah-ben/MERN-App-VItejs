import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import { useDispatch , useSelector } from 'react-redux';
import { deleteContact ,getContact } from '../JS/Actions/contact';
import { toggleTrue } from '../JS/Actions/edit';
import { Link } from 'react-router-dom';


const Contact = ({contact}) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state)=>state.authReducer.isAuth)

  const handleDelete = (id)=>{
    dispatch(deleteContact(id))
  }

  const handleContact = (id)=>{
    dispatch(getContact(id))
  }

  const handleEditTrue = ()=>{
    dispatch(toggleTrue())
  }

  return (
    <Card className='contact-card'>
    <Card.Content>
      <Image
        floated='right'
        size='mini'
        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
      />
      <Card.Header> {contact.name} </Card.Header>
      <Card.Meta> {contact.email} </Card.Meta>
      <Card.Description>
        <strong>216</strong>{contact.phone}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    {!isAuth ? "" :  <div className='ui two buttons'>
      <Link to={`/edit/${contact._id}`}> 
        <Button basic color='green' onClick={()=>{handleContact(contact._id) ; handleEditTrue()}} >
        Edit 
        </Button>
      </Link>
        <Button basic color='red' onClick={()=>handleDelete(contact._id)}>
          Delete
        </Button>
      </div>}
    </Card.Content>
  </Card>
  )
}

export default Contact