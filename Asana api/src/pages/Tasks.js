import React, {useState,useEffect} from 'react';
import { Card,Spin } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import {Link,useParams} from 'react-router-dom';
import './Tasks.css';
function Tasks(){
    const [list, setList] = useState({
        "data": {
        "gid":"",
        "assignee": {
        "gid": "",
        "resource_type": ""
        },
        "assignee_status": "",
        "created_at": "",
        "due_at": null,
        "due_on": "",
        "name": "",
        "start_on": ""
        }
        });  
    const id = useParams();
    console.log(list);
    useEffect(() => {
		var axios = require('axios');
var config = {
  method: 'get',
  url: `https://app.asana.com/api/1.0/tasks/${id.id}?opt_fields=gid,assignee,due_on,created_at,notes,assignee_status,due_at,name,start_on`,

  headers: { 
    'Authorization': 'Bearer 1/1201705799368275:b1e6599b2f99846e843ea91d150c7ec9'
  }
};
console.log(config.url);
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  setList(response.data);
})
.catch(function (error) {
  console.log(error);
});
	  },[]);
    
    return(
        <div style={{background:'#81C3D7',height:'100vh'}}>
         <div className='top-container'>
              <Link to='/' className='task-back-arrow'><ArrowLeftOutlined/></Link> 
              <div className='task-details'>TASK DETAILS</div>
            </div>
            <div  className='task-card'>
            {
                   <Card bordered={false} className='task-cards'>
                   <div className='project-task-details'>
                        <div>Task Name : {list.data.name}</div>
                        <div>Task ID : {list.data.gid}</div>
                        <div>Start_on : {list.data.start_on}</div>
                        <div>Due_on : {list.data.due_on}</div>
                        <div>Task Description : {list.data.notes}</div>
                    </div>
                     </Card>
                
                }
            </div>
        </div>
    )
}
export default Tasks;