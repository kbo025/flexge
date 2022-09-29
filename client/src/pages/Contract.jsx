import React, { useContext } from "react";
import AppContext from '../context/AppContext';
import { LeftOutlined, PlusOutlined } from '@ant-design/icons';
import MainLayout from '@components/MainLayout';
import ProductList from '@components/ProductList';
import ContractForm from '@components/ContratcForm';
import ProductForm from '@components/ProductForm';
import { redirect } from "react-router-dom";
import { 
    Col,
    Row,
    Button,
    Card,
    Divider
} from 'antd';

export default function Contract() {

    const { state } = useContext(AppContext);

    if (!state.use.token) {
        return redirect("/");
    }

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
