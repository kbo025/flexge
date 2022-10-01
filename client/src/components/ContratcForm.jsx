import React,  { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../redux/actions/countries';
import { getCompanies } from '../redux/actions/companies';
import { UploadOutlined } from '@ant-design/icons';
import { 
    Col,
    Row,
    Button,
    Form,
    Input,
    Select,
    Upload,
    DatePicker
} from 'antd';

const { Option } = Select;

const ContractForm = ({  }) => {

    const { state } = useContext(AppContext);

    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries.countries);
    const companies = useSelector(state => state.companies.companies);
    const loadingCountries = useSelector(state => state.countries.loading);
    const loadingCompanies = useSelector(state => state.companies.loading);
    const errorCompanies = useSelector(state => state.companies.error);
    const errorCountries = useSelector(state => state.countries.error);

    if (errorCompanies) {
        message.error(errorCompanies, 5);
    }

    if (errorCountries) {
        message.error(errorCountries, 5);
    }

    useEffect(() => {
        dispatch(getCompanies(state.user.token));
        dispatch(getCountries(state.user.token));
    }, []);

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (<Form
        name="saveContract"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
        autoComplete="off">
        <Row>
            <Col span={8}>
                <Form.Item
                    label="Country"
                    name="country"
                    rules={[
                        { required: true, message: 'Required' }
                    ]}>
                    <Select allowClear>
                        {loadingCountries ? '' : countries.map( e => <Option value={e._id}>{e.name}</Option>)}
                    </Select>
                </Form.Item>
            </Col>
            <Col span={8} >
                <Form.Item
                    label="State"
                    name="state"
                    rules={[
                        { required: true, message: 'Required' }
                    ]}>
                    <Select allowClear>
                        {loadingCompanies ? '' : companies.map( e => <Option value={e._id}>{e.name}</Option>)}
                    </Select>
                </Form.Item>
            </Col>
            <Col span={8} >
                <Form.Item
                    label="City"
                    name="city"
                    rules={[
                        
                    ]}>
                    <Input />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Document Number"
                    name="documentNumber"
                    rules={[
                        { required: true, message: 'Required' }
                    ]}>
                    <Input />
                </Form.Item>
            </Col>
            <Col span={16} >
                <Form.Item
                    label="Social Reason"
                    name="socialReason"
                    rules={[
                        { required: true, message: 'Required' }
                    ]}>
                    <Input />
                </Form.Item>
            </Col>
            <Col span={8} >
                <Form.Item
                    label="Adress"
                    name="adress"
                    rules={[
                        { required: true, message: 'Required' }
                    ]}>
                    <Input />
                </Form.Item>
            </Col>
            <Col span={8} >
                <Form.Item
                    label="District"
                    name="district"
                    rules={[
                        { required: true, message: 'Required' }
                    ]}>
                    <Input />
                </Form.Item>
            </Col>
            <Col span={8} >
                <Form.Item
                    label="Number"
                    name="number"
                    rules={[
                        { required: true, message: 'Required' }
                    ]}>
                    <Input />
                </Form.Item>
            </Col>
            <Col span={8} >
                <Form.Item
                    label="Zip code"
                    name="zipCode"
                    rules={[
                        { required: true, message: 'Required' }
                    ]}>
                    <Input />
                </Form.Item>
            </Col>
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
                label="Phone"
                name="phone"
                rules={[

                ]}>
                <Input />
            </Form.Item>
            <Col span={6} >
                <Form.Item
                    label="Contract starts in"
                    name="startsIn"
                    rules={[
                        { required: true, message: 'Required' }
                    ]}>
                    <DatePicker />
                </Form.Item>
            </Col>
            <Col span={6} >
                <Form.Item
                    label="Contract ends in"
                    name="endsIn"
                    rules={[
                        { required: true, message: 'Required' }
                    ]}>
                    <DatePicker />
                </Form.Item>
            </Col>
            <Col span={6} >
                <Form.Item
                    label="Due Day"
                    name="dueDay"
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
            <Col span={6} >
                <Form.Item
                    name="contractFile"
                    rules={[ ]}>
                    <Upload >
                        <Button icon={<UploadOutlined />}>Upload the contract</Button>
                    </Upload>
                </Form.Item>
            </Col>
            <Col span={8} >
                <Form.Item
                    label="Select a company"
                    name="company"
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
        </Row>
    </Form>);
};

export default ContractForm;