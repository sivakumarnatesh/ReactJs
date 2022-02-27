import React, {useState, useEffect} from 'react';
import '../Content/Content.css';
import {Button, Input,Spin} from 'antd';
import {BellFilled,SearchOutlined,LeftCircleOutlined,RightCircleOutlined,ArrowRightOutlined} from '@ant-design/icons';
import Games from '../Images/Games.png'; 
import ImageData from '../Data/ImageData';

function topContainer() {
  return (
    <div>
 <div className='top-container'>

<div className='top-left'>
    <div className='btn'><Button type='primary'>Discover</Button></div>
    <div className='btn1'><Button type='primary'>Browse</Button></div>
    <div className='btn1'><Button type='primary'>Wishlist</Button></div>
</div>

<div className='top-right'>
    <div className='bell'><BellFilled style={{color: 'rgba(235, 235, 245, 0.6)',fontSize:'20px',marginTop:'5px',marginRight:'30px'}}/></div>
    <div className='search'><Input placeholder='  Search' prefix={<SearchOutlined />}/></div>
</div>

</div>
    </div>
  )
}

export default topContainer