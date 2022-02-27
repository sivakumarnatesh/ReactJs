import axios from 'axios';
import { Card,Spin } from 'antd';
import React, {useState, useEffect} from 'react';
import './Products.css';
import { BrowserRouter as Router ,Route, Routes,Link } from 'react-router-dom';

function Products(props){
  console.log(props.type);
     const [list, setList] = useState([]);  
     useEffect(()=>{
      function go(){
        axios.get((props.type === "ALL")? 'https://fakestoreapi.com/products' : `https://fakestoreapi.com/products/category/${props.type}`)
      .then(res => {
          console.log(res)
          setList(res.data)
      })
      .catch(err => {
          console.log(err)
      })
      } go();
  },[])  
  // console.log(list);
 return ( 
    <div className='card-container'>       

               {list.length <= 0 ? <Spin tip="Loading..." style={{marginTop:'15%',marginLeft:'45%'}}/> :
                 list.map((e,index) => (     
               
                  <div className="card" key={index}>
                  <Link to={`/ProductDetails/${e.id}/${e.title.replace(/\s+/g, '')}`}>
                    <div><img src={e.image} alt="products" className='product-image'/></div>
                    <div className="container">
                      <div><b>{e.title.slice(0,22)}...</b></div> 
                      <div className='price'>${e.price}</div> 
                    </div>
                    </Link>
                  </div>
               
           ))
           }
    </div>
  );
}
  export default Products;
  