import React from 'react';
import 'antd/dist/antd.css';
import './Dashboard.css';
import { Button, Layout, Menu,  Avatar } from 'antd';
import {UserOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import cart_logo from '../img/cart_logo.png';
import Products from '../Products/Products';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router ,Route, Routes,Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import ProductDetails from '../ProductDetails/ProductDetails';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const { Header, Content, Footer, Sider } = Layout;

function Dashboard()
{
    function logout(){
        window.localStorage.setItem('login','False');
        window.location.reload(); 
    }
    return(
    <div>
        <Layout>
            <Sider breakpoint="lg" className='sider' collapsedWidth="0" onBreakpoint={broken => {console.log(broken);}}>
                <div className="logo">
                <div className='title1'>CART APP</div>
                <img src={cart_logo} alt="cart_logo"/>
               
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                    My Accounts
                    </Menu.Item>
                    <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
                    My products
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ paddingRight: '20px' }}>
               
                <div className='avatar'>
         
                <Button  style={{float:'right',marginRight:20,background:'#fadb14',border:'none'}}  shape="round" onClick={logout}>Logout</Button>
                    <Avatar style={{
                        color: '#f56a00',
                        backgroundColor: '#fde3cf',
                        cursor: 'pointer',
                    //    padding:'50px'
                    }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </div>
                </Header>
                <Routes>
                    <Route path='/' element={<Navbar/>}/>
                    <Route path='/ProductDetails/:id/:title' element={<ProductDetails/>}/>
                </Routes>
             
            </Layout>
        </Layout>
    </div>
);
}
export default Dashboard;