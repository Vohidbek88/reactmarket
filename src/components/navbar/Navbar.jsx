import { useContext } from 'react'
import './navbar.css'
import { Context } from '../context'

const Navbar = () => {
const {state,dispatch}=useContext(Context)
let count=state.buyproduct.reduce((item,qual)=>{
  return  item+qual.quanity
    },0)
  return (
    <div>
      <nav className='nav'>
        <h1 className="logo"><a href="index.html">On.Shop</a></h1>
        <div className='rela'>
        <i className="fa-solid fa-cart-shopping"  style={{fontSize:'30px',color:'white',cursor:'pointer'}} onClick={()=>dispatch({type:'OP_CS'})}></i>
            <span>{count}</span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
