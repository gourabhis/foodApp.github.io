import React, { useState } from 'react'
import {Card,Button} from 'react-bootstrap';
import Cardsdata from './CardsData';
import './style.css';
import { useDispatch } from 'react-redux';
import { Add } from '../redux/action/action';
import { DLT } from '../redux/action/action';

const Cards = () => {

    const [data,setData] = useState(Cardsdata)

  //  console.log(data)
  const dispatch = useDispatch()

  const send = (e) => {
   // console.log(e)
  dispatch(Add(e));


}
const dlt = (id) => {
    console.log(id)
    // alert("hello")
    dispatch(DLT(id+1))
}

  return (
     <div className='container mt-3'>
       <div className="row d-flex justify-content-ceneter align-items-center">
           {
               data.map((element,id)=>{
                   return(
                       <>
                         
                         <Card style={{ width: '22rem',border:"none"}} className="mx-2 mt-4 card_style">
                         {/* <div>{element.image}</div> */}
  <Card.Img variant="top" src={element.image} style={{height:'16rem'}} className="mt-3"/>
  <Card.Body>
    <Card.Title>{element.name}</Card.Title>
    <Card.Text>
      Price:{element.price}
    </Card.Text>
    <div className="button_div d-flex justify-content-left">
    <Button variant="primary" onClick={()=> send(element)} className="col-lg-2">+</Button>
    &nbsp;&nbsp;&nbsp;
    <Button variant="dark" onClick={()=> dlt(id)} style={{backgroundColor:"red"}}  className="col-lg-2">-</Button>
    </div>
    
  </Card.Body>
</Card>
                       </>
                   )
               })
           }
       
                
       </div>

   </div>
   
  )
}

export default Cards