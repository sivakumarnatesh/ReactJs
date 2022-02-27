import React, {useState, useEffect} from 'react';
import './Content.css';
import {Button, Input,Spin} from 'antd';
import {BellFilled,SearchOutlined,LeftCircleOutlined,RightCircleOutlined,ArrowRightOutlined} from '@ant-design/icons';
import Games from '../Images/Games.png'; 
import ImageData from '../Data/ImageData';
import Container from '../Container/Container';
import Topcontainer from '../Container/topContainer';


const { Search } = Input;


function Content() {
  
  const [Index, setIndex] = useState(0);
    const [list, setList] = useState([]);

    useEffect(
      async ()=>{
        const axios = require('axios');

        let config = {
          method: 'get',
          url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
          headers: { 
            'x-rapidapi-key': '95582720afmsh853e0c6c16ab5b8p180738jsnc3c92ebb159f'
          }
        };
        
        axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setList(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },[])


    function rightBtn() {
      const conent = document.querySelector('#content');
      conent.scrollLeft += 1200;
      setIndex(Index+5);
    }
    
    function leftBtn() {
      const conent = document.querySelector('#content');
      conent.scrollLeft -= 1200;
      (Index <= 0)? 
      setIndex(0):setIndex(Index-5);
    }


  return (
    <div className='full-container'>

       <Topcontainer/>

      {list.length <= 0 ?<Spin tip="loading..." style={{height:'100vh',marginTop:'15%'}}/>:
            
        <div>
            <Container/>

          <div className="bottom-container">

              <div className='games-head'>
                <div>Games On Sale</div>
                <div style={{fontSize:'10px',marginTop:'20px'}}>

                  <button id='left-button' onClick={leftBtn} style={{background:'#141414',marginRight:'20px',borderRadius:'10px',cursor:'pointer'
                  ,color: Index <= 0 ? "rgba(235, 235, 245, 0.6)":"white",border: Index <= 0 ?' 2px solid rgba(235, 235, 245, 0.6)':'2px solid white'}}>❮</button>

                  <button id='right-button' onClick={rightBtn} style={{background:'#141414',borderRadius:'10px',cursor:'pointer'
                  ,color: Index === 368? "rgba(235, 235, 245, 0.6)":"white",border: Index === 368 ? ' 2px solid rgba(235, 235, 245, 0.6)':"2px solid white"}}>❯</button>

                </div>
              </div>
              <div className='carousel' id='content'>
                {list?.data?.map((e,index)=>( 
                  <div className='carousel-container' id='myDIV' key={index}>
                    <div className='carousel-img'><img src={e.thumbnail} alt={e.title}/></div>
                    <div className='card-text'>
                      <div>{e.title}</div>
                      <div className='action'>{e.genre}</div>
                      <div>{e.release_date}</div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      }
    </div>
  ) 
}

export default Content;