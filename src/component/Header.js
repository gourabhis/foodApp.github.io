import React,{useState,useEffect} from 'react';
import {Navbar,Container,Nav,NavDropdown,Table} from 'react-bootstrap';
import Badge from '@mui/material/Badge';
import imagbg2 from "../asstes/logo.svg";
import imagbg3 from "../asstes/empty.gif";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import  {NavLink} from 'react-router-dom';
import { DLT } from '../redux/action/action';

import {useDispatch, useSelector} from 'react-redux';

const Header= () => {
    const [price,setPrice] = useState(0);
    //console.log(price)
    const getdata = useSelector((state)=> state.cartreducer.carts)
    console.log("getdata", getdata);
    const dispatch= useDispatch();
    const [anchorEl, setAnchorEl] =useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
     const dlt= (id) => {
         dispatch(DLT(id))
     }


     const total = () =>
   {
    let price=0;
    getdata.map((ele,k)=>{
        price= ele.price + price;
    })
   setPrice(price);
}
useEffect(()=>{
    total();
},[total])
  return (
    <>
    {/* <div>
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'blue',width:'100%',height:'5rem'}} variant="dark">
           
       <div> 
           <img
          alt=""
          src={imagbg2}
          className="img"
        />
         <div className='heading'>
            <p>Food's Restaurant</p>
            </div>
            <i class="fa-solid fa-cart-shopping"></i>
        </div> */}
       
{/* </Navbar> */}

        {/* </div> */}
        <Navbar bg="primary" variant="dark">
    <Container>
    <NavLink to='/'>
    <img
          alt=""
          src={imagbg2}
          className="img"
        />
    </NavLink>
    <Nav className="me-auto">
      <NavLink to="/" className='text-decoration-none' style={{color:'white',fontSize:'29px',fontWeight:600}}>Food's Restaurant</NavLink>
    </Nav>
    <Badge badgeContent={getdata.length} color='primary' style={{color:'white'}}
    id="basic-button"
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
    >
    <i class="fa-solid fa-cart-shopping" style={{fontSize:'25px',cursor:'pointer',color:'black'}}></i>
    </Badge>
    
    </Container>
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
          {
              getdata.length ?
              <div className='card_details' style={{width:'24rem', padding:10}}>
                  <Table>
                  <thead>
                      <tr>
                          <th>Photo</th>
                          <th>Detail</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                      getdata.map((e)=>{
                          return(
                              <>
                              <tr>
                                  <td>
                                  <NavLink to={`/cart/${e.id}`}  onClose={handleClose}>
                                  {/* <div>{e.image}</div> */}
                                                        <img src={e.image} style={{width:"5rem",height:"5rem"}} alt="" />
                                                        </NavLink>    
                                  </td>
                                  <td>
                                      <p>{e.name}</p>
                                      <p>Price:{e.price}</p>
                                      <p>Quantity:{e.qunt}</p>
                                  </td>
                                  <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}} onclick={()=>dlt(e.id)} >
                                                        <i className='fas fa-trash largetrash'></i>
                                                        </td>
                              </tr>
                              </>
                          )
                    
                      })
                    }
                    <p className='text-center'>Total:{price}</p>
                  </tbody>
                  </Table>
              </div>:
               <div className='card_details d-flex justify-content-center align-items-center' style={{width:'24rem', padding:'10px',position:'relative'}}>
               <i className='fas fa-close smallclose '
               onClick={handleClose}
                style={{position:'absolute', top:'2px',right:'20px',fontsize:23,cursor:'pointer'}}></i>
               <p style={{fontSize:23}}> Your Cart Is Empty</p>
               <img src={imagbg3} className='emptycart_img' style={{width:'5rem',padding:10}}/>
           </div>
          }
       
      </Menu>
  </Navbar>
    </>
  )
}

export default Header