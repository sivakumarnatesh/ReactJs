import React, {useState,useEffect} from 'react';
import {Layout,Card,Spin} from 'antd';
import { ArrowRightOutlined,ProjectOutlined } from '@ant-design/icons';
import './card1.css';
import 'antd/dist/antd.css';
import {Link, useParams} from 'react-router-dom';
import Tasks from './Tasks';


function Progress_bar(props){
	// console.log(props.id);
	var Difference_In_Time,Difference_In_Days,date1,date2;
	const [list, setList] = useState({'data':[]});  
	const [click, setClicked] = useState(false);
	useEffect(() => {
		var axios = require('axios');
		var config = {
		  method: 'get',
		  url: `https://app.asana.com/api/1.0/projects/${props.id}/tasks?opt_pretty&opt_expand=(this%7Csubtasks%2B)`,
		  headers: { 
			'Authorization': 'Bearer 1/1201705799368275:b1e6599b2f99846e843ea91d150c7ec9'
		  }
		};
		axios(config)
		.then(function (response) {
		  console.log(JSON.stringify(response.data));
		  setList(response.data);
		})
		.catch(function (error) {
		  console.log(error);
		});
	  },[]);

	  
	const listitems = 
	list.data.map((e1)=>
	{
	date1 = new Date(e1.start_on);  
	date2 = new Date(e1.due_on);
	Difference_In_Time = date2.getTime() - date1.getTime();
	Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
	return Difference_In_Days;
	}
	)
	

	return(
		<div>
			  <div className='progress-bar'>
                    {list.data.length <= 0 ? <Spin tip="Loading..."/>:
					list.data.map((e,index)=>(
						
                    
						
                       <div className='progress-area' key={index}>
                        <ProjectOutlined />
                        <progress value={listitems[index]*10} max="100"/>
					
                        <div className='outof'>{listitems[index]} / 10</div>
                       <Link to={`/tasks/${e.gid}`}><ArrowRightOutlined className='progress-arrow'/></Link> 
                        </div> 
                        
                   
                    ))}
              
              </div>
            
		</div>
	)
}
export default Progress_bar;