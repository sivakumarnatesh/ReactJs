import React, {useState,useEffect} from 'react';
import {Card,Spin} from 'antd';
import Tasks from './Tasks.css';
import {useParams,Link} from 'react-router-dom';

function Taskforproject(props){
    const [list, setList] = useState({'data':[]});  
    const id = props.id;
    const names = props.name;
    console.log(id);
    useEffect(() => {
        var axios = require('axios');
        var config = {
          method: 'get',
          url:  `https://app.asana.com/api/1.0/projects/${id}/tasks?opt_fields=gid,due_on,name,start_on&limit=10`,
          headers: { 
            'Authorization': 'Bearer 1/1201705799368275:b1e6599b2f99846e843ea91d150c7ec9'
          }
        };
        console.log(config.url);
        if(id)
        {
          axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setList(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      },[id]);
    return(
        <div className='responsive-card'>
            {list.data.length <= 0 ? <Spin tip="Loading..."/> :
                list.data.map((e,index)=>(
            <Card type="inner" className='task-details-card'>
                    <div key={index}>
                    <Link to={`/tasks/${id}/${e.name}/${e.gid}`}>  <div style={{color:'white'}}>Task Name : {e.name}</div></Link>
                    {/* <div>Task ID : {e.gid}</div>
                    <div>Start_on : {e.start_on}</div>
                    <div>Due_on : {e.due_on}</div> */}
                    </div>
                    </Card>
              ))
              }
        </div>
    )
}
export default Taskforproject;