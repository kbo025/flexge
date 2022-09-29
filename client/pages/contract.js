import React from 'react';
import MainLayout from '../components/MainLayout';
import { LeftOutlined, PlusOutlined } from '@ant-design/icons';
import ProductList from '../components/ProductList';
import ContractForm from '../components/ContratcForm';
import ProductForm from '../components/ProductForm';
import { 
    Col,
    Row,
    Button,
    Card,
    Divider
} from 'antd';

export default function contract() {

    return (
        <MainLayout>
            <Row justify="end">
                <Button icon={<LeftOutlined />} type="primary" size="small">Back</Button>
            </Row>
            <Divider orientation="left"><h2>SAVE CONTRACT</h2></Divider>
            <Card>
                <ContractForm />
            </Card>
            <Card>
                <Divider orientation="left"><h3>Contract's Products</h3></Divider>
                <ProductForm />
                <Row>
                    <Col span={24}>
                        <ProductList onEdit={id => console.log(`edit ${id}`)} onDelete={id => console.log(`delete ${id}`)} products={[]}></ProductList>
                    </Col>
                </Row>
                <Row justify="end">
                    <Button icon={<PlusOutlined />} type="primary" size="small">Create</Button>
                </Row>
            </Card>
        </MainLayout>
    );
}
