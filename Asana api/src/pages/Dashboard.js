import React from 'react';
import 'antd/dist/antd.css';
import favicon from '../img/favicon.png'
import './Dashboard.css';
import { Layout, Menu, Avatar} from 'antd';
import { ProjectTwoTone } from '@ant-design/icons';
import Projects from './Projects';
import Tasks from './Tasks';
import ProjectDetails from './ProjectDetails';
import './Projects.css';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';


const { Header, Content, Sider } = Layout;

function Dashboard() {
  return( 

  <div>  
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      className='sider'
    >
      <div className="logo"><img src={favicon} alt="dashboard"></img></div>
      <Menu mode="inline" defaultSelectedKeys={['4']} className='menu-items'>
        <Menu.Item key="1" icon={<ProjectTwoTone />}>
          Projects
        </Menu.Item>
      </Menu>
    
    </Sider>
    <Layout>
    <Header className='header'>
    <div style={{display:'flex',justifyContent:'flex-end'}}>
    <Avatar style={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
        cursor: 'pointer',
      }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    </div>
    </Header>
      <Routes>
            {/* <Route exact path='/' element={<Card1/>}/> */}
            <Route path='/' element={<Projects/>}/>
            <Route path='/tasks/:id' element={<Tasks/>}/>
            <Route path='/:name/:id' element={<ProjectDetails/>}/>
            <Route path='/tasks/:id/:name/:id' element={<Tasks/>}/>
            {/* <Route path='/' element={<Projects/>}/> */}
      </Routes>
    </Layout>
  </Layout>
  </div>


  );
}

export default Dashboard;
