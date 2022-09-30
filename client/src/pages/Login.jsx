import React, { useContext } from "react";
import AppContext from '../context/AppContext';
import axios from "axios";
import LoginLayout from '@components/LoginLayout';
import { Button, Form, Input, Divider, message } from 'antd';
import { Redirect } from "react-router-dom";

const URL = 'http://localhost:3000/api/auth/login';

export default function Login() {
    const { state, login } = useContext(AppContext);

    if (state.user.token) {
        return <Redirect to="/contracts" />;
    }

    const onFinish = async (values) => {
        try {
            const { data } = await axios.post(URL, values);
            login(data.data);
            return <Redirect to="/contracts" />;
        } catch (e) {
            let msj = 'Unexpected error';
            if (e.response.status == 401) {
                msj = 'Incorrect Credentials';
            }
            message.error(msj, 5)
        }
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    return (
        <LoginLayout>
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            <Divider></Divider>
            <Form
                name="login"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Please input your username!' },
                        { type: 'email', message: 'Please input a valid e-mail!' },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 10, span: 2 }}>
                    <Button type="primary" htmlType="submit">
                    Login
                    </Button>
                </Form.Item>
            </Form>
        </LoginLayout>
      );
}
