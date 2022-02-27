import React, {useState,useEffect} from 'react';
import {Card,Spin} from 'antd';
import Taskforproject from './Taskforproject';
import {useParams,Link} from 'react-router-dom';
import './ProjectDetails.css';
import { ArrowLeftOutlined } from '@ant-design/icons';


function ProjectDetails(){
    const [list, setList] = useState({"data": {
      "gid": "",
      "due_on": "",
      "name": "",
      "start_on": ""
      }});  
    const id = useParams();
   
    useEffect(() => {
        var axios = require('axios');
        var config = {
          method: 'get',
          url: `https://app.asana.com/api/1.0/projects/${id.id}?opt_fields=start_on,due_on,name,gid`,
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
      // console.log(list.data.name);
    return(
       
       <div className='project-details-body'>
                    <div className='details-arrow'>
                      <Link to='/'><ArrowLeftOutlined style={{color:'#463F3A'}}/></Link>
                      <div className='details-content'>PROJECT DETAILS</div>
                    </div>        
                   {
                      <Card bordered={true} className='details-card'>
                        <div className='projects-content'>
                     
                          <div>Project Name : {list.data.name}</div>
                          <div>Project ID : {list.data.gid}</div>
                          <div>Start_on : {list.data.start_on}</div>
                          <div>Due_on : {list.data.due_on}</div>
                      
                       
                        <Taskforproject id={list.data.gid} name={list.data.name}/>
                        
                        </div>
                    </Card>}
        </div>
       
    )
}
export default ProjectDetails;