import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import './category.css'
const Category = () => {
    const {dispatch}=useContext(Context)
  useEffect(() => {
    getCatgery();
  }, []);
  const [btns, setBtns] = useState([]);
  const getCatgery = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setBtns(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getItem= async(val)=>{
 try {
    const response=await axios.get(`https://fakestoreapi.com/products/category/${val}`)
    const data=response.data.map(item=>{
      return{...item,quanity:1}})
    dispatch({type:'GET_DATA',payload:data})
 } catch (error) {
    console.log(error.message);
 }


  }
  return (
    <div className="ctg">
      {btns.length>0 ? btns.map((item) => {
        return <button key={item} onClick={()=>getItem(item)} className="ctgbtn">{item}</button>;
      }):<h1>Loading...</h1>}
    </div>
  );
};

export default Category;
