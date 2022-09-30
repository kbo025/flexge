import React, { useContext } from "react";
import AppContext from '../context/AppContext';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import MainLayout from '@components/MainLayout';
import { Redirect, NavLink } from "react-router-dom";
import {
    Card,
    Divider,
    Row,
    Col,
    Button,
    Form,
    Input,
    Select
} from 'antd';
import ContractList from '@components/ContractList';

const { Option } = Select;

const CONTRACTS = [
    {key: 1, documentNumber: 'documentNumber 1', socialReason: 'socialReason 1', company: 'company 1'},
    {key: 2, documentNumber: 'documentNumber 2', socialReason: 'socialReason 2', company: 'company 2'},
    {key: 3, documentNumber: 'documentNumber 3', socialReason: 'socialReason 3', company: 'company 3'},
];

export default function Contracts() {

    const { state } = useContext(AppContext);

    if (!state.user.token) {
        return <Redirect to="/" />;
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    return (
        <MainLayout>
            <Row justify="end">
                <NavLink to="/contract">
                    <Button icon={<PlusOutlined />} type="primary" size="small">New Contract</Button>
                </NavLink>
            </Row>
            <Divider orientation="left"><h2>CONTRACTS</h2></Divider>
            <Form
                name="searchContract"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                onFinishFailed={onFinishFailed}
                onFinish={onFinish}>
                <Row justify="space-between" align="middle">
                    <Col span={7}>
                        <Form.Item
                            label="Document Number"
                            name="documentNumber">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={7}>
                        <Form.Item
                            label="Social Reason"
                            name="socialReason">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={7}>
                        <Form.Item
                            label="Company"
                            name="company">
                            <Select allowClear>
                                <Option value="1">company 1</Option>
                                <Option value="2">company 2</Option>
                                <Option value="3">company 3</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={1}>
                        <Button  icon={<SearchOutlined />} type="primary" htmlType="submit">
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Col span={24}>
                    <Card>
                        <ContractList onDelete={id => console.log(`delete ${id}`)} contracts={CONTRACTS}></ContractList>
                    </Card>
                </Col>
            </Row>
        </MainLayout>
    );
}
