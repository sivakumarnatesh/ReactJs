import react from "react";
import { BrowserRouter as Router ,Route, Routes,Link } from 'react-router-dom';
import { Tabs, Layout } from 'antd';
import Products from "../Products/Products";
import './Navbar.css';

const {Content} = Layout;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
function Navbar(){
    return(
  
        <Content className="content">
        <Tabs defaultActiveKey="1" onChange={callback}>
         <TabPane tab="All" key="ALL_items">
               <Products type="ALL"/>
            </TabPane>
           <TabPane tab="Men" key="men's clothing">
                <Products  type="men's clothing"/>
            </TabPane>
           
            <TabPane tab="Women" key="women's clothing">
                <Products type="women's clothing"/>
            </TabPane>
          
            <TabPane tab="Electronics" key="electronics">
                <Products type="electronics"/>
            </TabPane>
            
             <TabPane tab="Jewelery" key="jewelery">
                <Products type="jewelery"/>
            </TabPane>
            
        </Tabs>
        </Content>
        
    )
}
export default Navbar;