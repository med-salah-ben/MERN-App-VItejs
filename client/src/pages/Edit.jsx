import React , {useState  , useEffect} from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useSelector , useDispatch } from 'react-redux';
import { postContact , editContact } from '../JS/Actions/contact';
import { useNavigate } from 'react-router-dom';



const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user , setUser] = useState({name:"" , email:"" , phone:""})
  const userReducer = useSelector((state)=>state.contactReducer.user)
  const edit = useSelector((state)=>state.editReducer.edit)

  useEffect(()=>{
    edit ? setUser(userReducer) : setUser({name:"" , email:"" , phone:""})
  },[userReducer , edit])

  const handleContactAction = () =>{
    !edit ? dispatch(postContact(user)) : dispatch(editContact(userReducer._id , user))
    navigate(-1)
  }

  const handleChange = (e)=>{
    e.preventDefault();
    setUser({...user, [e.target.name] : e.target.value})
  }

  return (
    <Form className='Edit' onSubmit={handleContactAction}>
    <Form.Field>
      <label>Enter Name</label>
      <input placeholder='Name...' name="name" value={user.name} onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Enter Email</label>
      <input placeholder='Enter Email...' name="email" value={user.email} onChange={handleChange}  />
    </Form.Field>
    <Form.Field>
      <label>Enter Phone</label>
      <input placeholder='Enter Phone...' name="phone" value={user.phone} onChange={handleChange}  />
    </Form.Field>
    <Button type='submit'>{edit ? "Edit" : "Add"} </Button>
  </Form>
  )
}

export default Edit