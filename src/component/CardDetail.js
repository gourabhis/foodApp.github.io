import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
function CardDetail() {

    const [data,setData]= useState([]);

    const {id} = useParams();
  // console.log(id);

  const getdata = useSelector((state)=> state.cartreducer.carts);
    //console.log(getdata);

    const compare = ()=>{
        let comparedata = getdata.filter((e)=>{
          return e.id == id
        });
        setData(comparedata);
      }
      useEffect(()=>{
        compare();
      },[id])
    
      // add data
      
    
      const send = (e)=>{
        console.log(e);

      }
      
  return (
      <>
    <div className="container mt-2">
      <h2 className="text-center">Order Summary</h2>
      <section className="container mt-3">
          <div className='iteamsdetails'>
              {
                  data.map((ele) =>{
                      return(
                          <>
                           <div className="items_img">
                           <img src={ele.images} style={{width:"5rem",height:"5rem"}} alt="" />
               </div>
               <div ClassName="details">
                   <Table>
                       <tr>
                           <td>
                               <p style={{marginRight:'352px'}}> <strong>Dishes</strong> :{ele.name}</p>
                             <p> <strong>Price</strong>:{ele.price}</p>
                           </td>
                       </tr>
                   </Table>
               </div>
                          </>
                      )
                  })
              }
              
          </div>

      </section>

    </div>
    </>
  )
}

export default CardDetail