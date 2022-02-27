import React from 'react';
import 'antd/dist/antd.css';
import './login.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = (props) => {
  const {setLoggedIn} = props;
  const user = {name:'siva',password:'1234'}
  const onFinish = (values) => {
    if(values.username === user.name && values.password === user.password){
      setLoggedIn(false);
      localStorage.setItem('login',true);
    }
  };

  return (
    <div className='login-background'>
        <Form name="normal_login" className="login-form" initialValues={{ remember: true, }} onFinish={onFinish}>
          <UserOutlined className='user-logo' />
          <Form.Item name="username" rules={[{required: true,message: 'Please input your Username!',},]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{required: true,message: 'Please input your Password!',},]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password?
            </a>
          </Form.Item>

          <Form.Item className='buttons'>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Sign in
            </Button>
            <Button type="primary" htmlType="submit" className="register-form-button">
              Sign up
            </Button>
          </Form.Item>
        </Form>
    </div>
  );
};


export default Login;