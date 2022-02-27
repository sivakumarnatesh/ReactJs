import React from 'react';
import { Layout, Menu, Avatar, Divider } from 'antd';
import { HomeFilled ,FireFilled, AppstoreFilled,TeamOutlined,PlayCircleOutlined,DownloadOutlined,SettingOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import gamesMode from '../Images/gamesMode.png';
import './Dashboard.css';
import Contents from '../Content/Content';

const {Content, Sider } = Layout;
function Dashboard() {
  return (
    <div>
         <Layout>
    <Sider
    className='sider'
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
       <div className="logo">
          <div className='logo-img'><img src={gamesMode} alt="games mode logo"/></div>
          <div className='logo-text'>Games Mode</div>
      </div>
     <div className="menu-items">
     <div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']} className='menus'>
        <Menu.Item key="1" icon={<HomeFilled />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<FireFilled />}>
          Store
        </Menu.Item>
        <Menu.Item key="3" icon={<AppstoreFilled />}>
          Library
        </Menu.Item>
        <Menu.Item key="4" icon={<TeamOutlined />}>
          Friends
        </Menu.Item>
        <Menu.Item key="5" icon={<PlayCircleOutlined />}>
          Live
        </Menu.Item>
      </Menu>
      </div>
      <div>
      <Menu theme="dark" mode="inline" className='menu-item2'>
        <Menu.Item key="1" icon={<DownloadOutlined />}>
         Downloads
        </Menu.Item>
        <Menu.Item key="2" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
        <Menu.Item key="3" icon={ <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{
          backgroundColor: '#f56a00',
          width:'17px',
          height:'17px'
        }}/>}>
          Tung Tran
        </Menu.Item>
    
      </Menu>
      </div>
      </div>
    </Sider>
    {/* <Divider type="vertical"/> */}
    <Layout>
      <div style={{background: '#141414'}}>
         <Contents/>
      </div>
    </Layout>
  </Layout>
    </div>
  )
}

export default Dashboard;