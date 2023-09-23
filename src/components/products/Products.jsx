import { useContext } from 'react'
import './products.css'
import { Context } from '../context'
import Product from '../product/Product'


const Products = () => {
    const {state}=useContext(Context)
  return (
    <div>
      <section className="items">
{
  state.data.length>0 ? state.data.map(item=>{
        return(
            <Product key={item.id} id={item.id} url={item.image} price={item.price} description={item.description} quanity={item.quanity}/>
        )
    }):<h1>Loading...</h1>
}
      </section>
    </div>
  )
}

export default Products
