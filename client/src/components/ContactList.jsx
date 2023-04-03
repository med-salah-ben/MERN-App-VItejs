import React , {useEffect} from 'react'
import {useDispatch , useSelector} from "react-redux"
import {getContacts} from "../JS/Actions/contact"
import Contact from './Contact';


function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state)=>state.contactReducer.contacts)
  const loadContacts = useSelector((state)=>state.contactReducer.loadContacts)
  console.log("contacts : " ,contacts)

  useEffect(()=>{
    dispatch(getContacts())
  },[])
  return (
    <div className='contacts'>
      {
        loadContacts ? (<h3>Loading.....</h3>) 
        : contacts.map((el)=><Contact contact={el} key={el._id} />)
      }
    </div>
  )
}

export default ContactList