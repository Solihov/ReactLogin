import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './style.scss'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserLogin } from '../../store/Features/UserSlice';

const LoginPage = () => {
    const dispatch = useDispatch()
    const onFinish = (values) => {
        dispatch(UserLogin(values))
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }
    return (
        <div className="login">
            <h1>Log In</h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Eamil!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" style={{ color: '#1677ff' }} />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" style={{ color: '#1677ff' }} />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button> <br /> <br />
                    Don't have an account? <Link to={'/register'}>Register now!</Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginPage;