import React, { useState} from 'react';
import './Origin.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import House from '../img/house.png';

function Origin() {
  const [Index, setIndex] = useState(0);
  const [amount, setAmount] = useState(25000);
  const monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  function datePlus() {
      if(monthArray[Index] !== 'December'){
        setIndex(Index + 1);
      }
  }
  function dateMinus() {
      if(monthArray[Index] !== 'January'){
        setIndex(Index - 1);
       
      }
  }

//   console.log(Index+1);
//   console.log(amount);
//   console.log(amount/(Index+1));
  return (
    <div>
      <div className="heading">Origin</div>
      <div className="total-color">
        <div className="title">
          Let&apos;s plan your
          <div className="inside-title">saving goal</div>
        </div>
        <div className="desktop-card">
          <div className="house">
            <div className="house-img">
              <img src={House} alt="Buy a house" />
            </div>
            <div className="house1">
              <div className="house-text">Buy a house</div>
              <div className="goal-text">Saving goal</div>
            </div>
          </div>
          <div>
            <form className="form1">
              <div>
                <div className="total-amt-text">Total amount</div>
                <div className="amount1">
                    <div className='dollar'>$</div><input type="text" onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} onChange={e => setAmount(e.target.value)} placeholder='25,000' className="amount1 border" />
                </div>
               
              </div>
              <div className="input2">
                <div className="goal-text1">Reach goal by</div>
                <div className="amount">
                  <LeftOutlined onClick={() => { dateMinus(); }} style={{color: monthArray[Index] === 'January' && "lightgray"}} className="left-icon" />
                  <div>
                  <div>{monthArray[Index]}</div>
                    <div className='year'>2022</div>
                  </div>
                 
                  <RightOutlined onClick={() => { datePlus(); }} style={{color: monthArray[Index] === 'December' && "lightgray"}} className="right-icon" />
                  
                </div>
              </div>
            </form>
          </div>
          <div className="monthly-card">
            <div className="monthly-text">
              <div className="monthly-text1">Monthly amount</div>
              <div className="monthly-text2">${Number(amount/(Index+1)).toFixed(2)}</div>
            </div>
            <div className="para">
              You&apos;re planning
              <span className="text-css"> {Index+1} monthly deposits </span>
              to reach
              your
              <span className="text-css"> ${amount} </span>
              goal by
              <span className="text-css"> {monthArray[Index]} 2022</span>
              .
            </div>
          </div>
          <div>
            <button className="confirm-btn">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Origin;
