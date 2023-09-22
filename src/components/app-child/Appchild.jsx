import { useContext, useEffect, useState } from "react"
import Category from "../category/Category"
import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"
import Products from "../products/Products"
import Saveproducts from "../saveproduct/Saveproducts"
import './app-child.css'
import { Context } from "../context"
import axios from "axios"

const Appchild = () => {
const {state,dispatch}=useContext(Context)
const getData=async ()=>{
    try {
        const response=await axios.get('https://fakestoreapi.com/products')
        const data=response.data.map(item=>{
            return{...item,quanity:1}
        })
       dispatch({type:'GET_DATA',payload:data})
       console.log(data);
       } catch (error) {
        console.log(error);
       }
}
    useEffect(() => {
getData()
    }, [])
    
  return (
    <div className="app">
      <Navbar/>
      <Category/>
      <Products/>
      <Saveproducts/>
      <Footer/>
    </div>
  )
}

export default Appchild
