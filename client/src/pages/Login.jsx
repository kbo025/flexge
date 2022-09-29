import { useEffect, useState } from "react";
import LoginLayout from '@components/LoginLayout';
import useLogin from '../hooks/useLogin';
import { Button, Form, Input, Divider } from 'antd';

export default function Login() {

    const [user, setUser] = useState({});

	useEffect(async () => {
		const response = await axios.post(URL, data);
		setUser(response.data);
	}, []);

    const onFinish = (values) => {
        console.log(values);
        const user = useLogin(values);
        console.log(user);
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
