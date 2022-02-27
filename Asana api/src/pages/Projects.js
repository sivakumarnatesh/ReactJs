import React, {useState,useEffect} from 'react';
import {Card,Spin} from 'antd';
import './Projects.css';
import { ArrowLeftOutlined,ArrowRightOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import Progress_bar from './Progress_bar';
import ProjectDetails from './ProjectDetails';
import './Tasks.css';

function Projects(){
    const [list, setList] = useState({'data':[]});  
    useEffect(() => {
        var axios = require('axios');
        var config = {
          method: 'get',
          url: 'https://app.asana.com/api/1.0/projects?opt_fields=gid,name,due_on,start_on,team,current_status,created_at,modified_at&limit=10&workspace=1201705681883518',
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
    return(
        <div className='projects'>
              <div className='project-details1'>LIST OF PROJECTS</div>
             <div className='project-cards-container'>
              {list.data.length <= 0 ? <Spin tip="Loading..."></Spin>:
                list.data.map((e,index)=>(
                <Card bordered={true} key={index} className='project-cards'>
                    <div className='project-details'>
                      <div>{e.name}</div>
                     <Link to={`/${e.name}/${e.gid}`}><ArrowRightOutlined style={{marginTop:8,color:'white'}}/></Link> 
                    </div>
                    <Progress_bar id={e.gid}/>
                </Card>
                
              ))
              }
              </div>
        </div>
    );
}
export default Projects;