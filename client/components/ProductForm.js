import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { 
    Col,
    Row,
    Button,
    Form,
    Input,
    Select,
    DatePicker
} from 'antd';

const { Option } = Select;

const ProductForm = ({ }) => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (<Form
        name="searchContract"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}>
        <Row justify="space-between" align="middle">
            <Col span={4}>
                <Form.Item
                    label="Product"
                    name="description"
                    rules={[
                        { required: true, message: 'Required' }
                    ]}>
                    <Select allowClear>
                        <Option value="1">company 1</Option>
                        <Option value="2">company 2</Option>
                        <Option value="3">company 3</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col span={3}>
                <Form.Item
                    label="Amount"
                    name="amount"
                    rules={[
                        { type: 'number', min: 0 }
                    ]}>
                    <Input />
                </Form.Item>
            </Col>
            <Col span={3}>
                <Form.Item
                    label="Final Unit Price (R$)"
                    name="finalUnitPrince"
                    rules={[
                        { required: true, message: 'Required' },
                        { type: 'number', min: 0 }
                    ]}>
                    <Input />
                </Form.Item>
            </Col>
            <Col span={3}>
                <Form.Item
                    label="Installments"
                    name="intsallments"
                    rules={[
                        { type: 'number', min: 0 }
                    ]}>
                    <Input />
                </Form.Item>
            </Col>
            <Col span={3}>
                <Form.Item
                    label="Paid Installments"
                    name="paidInstallments"
                    rules={[
                        { type: 'number', min: 0 }
                    ]}>
                    <Input />
                </Form.Item>
            </Col>
            <Col span={3}>
                <Form.Item
                    label="Beginning Term"
                    name="beginningTerm"
                    rules={[
                        
                    ]}>
                    <DatePicker />
                </Form.Item>
            </Col>
            <Col span={1}>
                <Button  icon={<PlusOutlined />} type="primary">
                    Add
                </Button>
            </Col>
        </Row>
    </Form>);
};

export default ProductForm;