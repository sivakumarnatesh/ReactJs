import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useParams,Link } from 'react-router-dom';
import './ProductDetails.css';
import { Card,Spin,Rate} from 'antd';

function ProductDetails(){
    const id = useParams();
    // console.log(id.id);
    // const ID = parseInt(id.id);
    // console.log(ID-1);
    const [list, setList] = useState({
    category: "",
    description: "",
    id: 2,
    image: "",
    price: 22.3,
    rating: {rate: 4.1, count: 259},
    title: ""
    });  
    useEffect(()=>{
     function go(){
       axios.get(`https://fakestoreapi.com/products/${id.id}`)
     .then(res => {
         console.log(res.data)
         setList(res.data)
     })
     .catch(err => {
         console.log(err)
     })
     } go();
 },[])  
  console.log(list.rating);
    return(
        <div className='product-data'>
            <div className='details-arrow'>
                <Link to='/'><ArrowLeftOutlined style={{color:'black'}}/></Link>
                <div className='details-content'>PRODUCT DETAILS</div>
            </div>
            {
            <div className='static-card'>
            <div className='large-view'>
                <div className='container1'>
                    <div className='title'>{list.title}</div>
                    <div className='description'>{list.description}</div>
                </div>
                <div className='details-image'>
                    <img src={list.image} alt="product_image"/>

                </div>
            </div>
                <div className='feedback'>
                <div className='rating'>Ratings : <Rate allowHalf value={list.rating.rate} disabled/></div>
                <div className='reviews'>Reviews : {list.rating.count}</div>
                </div>
                <div className='price-tag'>M.R.P. : <span>&#8377;</span>{list.price}</div>
               
            </div>
            }
        </div>
    )
}
export default ProductDetails;