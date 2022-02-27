import React, {useState, useEffect} from 'react';
import '../Content/Content.css';
import {Button, Input,Spin} from 'antd';
import {BellFilled,SearchOutlined,LeftCircleOutlined,RightCircleOutlined,ArrowRightOutlined} from '@ant-design/icons';
import Games from '../Images/Games.png'; 
import ImageData from '../Data/ImageData';

function Container() {
  return (
    <div>

<div className='middle-container'>
              <div>
                <div className='games-img'><img src={Games} alt="games"/></div>
              </div>

              <div className='middle-right'>
              {ImageData.map((e,index)=>(
                  <div className='right-img' key={index}><img src={e.img1} alt="images"/><span className='right-text'>{e.text}</span></div>
              ))}
              </div>

          </div>

          <div className='top-text'>
            <div className='text1'>Fortnite</div>
            <div className='update'>Update</div>
            <div className='description'>The hunt is on in Fortnite Chapter 2 - Season 5: Zero Point.</div>
            <div className='overflow-btn'><Button className='img-btn'>Play for free <ArrowRightOutlined /></Button></div>
          </div>
    </div>
  )
}

export default Container;