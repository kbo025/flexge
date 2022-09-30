import React, { useContext } from "react";
import AppContext from '../context/AppContext';
import { Layout, Row, Col, Card, Menu, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { Content, Header, Footer } = Layout;
import { Redirect } from "react-router-dom";

const MainLayout = ({children}) => {

    const { logout } = useContext(AppContext);

    const menu = (
        <Menu
            items={[
                {
                    key: '0',
                    label: (<a onClick={(e) => {
                        e.preventDefault();
                        logout();
                        return <Redirect to="/" />;
                    }} href="">Logout</a>),
                },
            ]}/>
    );

    return (
        <Layout  style={{ height: "100vh" }}>
            <Header>
                <Row justify="space-between">
                    <Col>
                        <div className="logo" >
                            <h2 style={{ color: '#FFF',  }}>i'm a Logo :)</h2>
                        </div>
                    </Col>
                    <Col>
                        <Dropdown overlay={menu}>
                            <a onClick={(e) => e.preventDefault()} style={{ color: '#FFF' }}>
                                <Space>
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </Col>
                </Row>
            </Header>
            <Content
                className="site-layout"
                style={{ padding: 20, height: "100%" }} >
                <Row justify="center" style={{ height: "100%" }}>
                    <Col span={24}>
                        <Card style={{ padding: 20 }}>{children}</Card>
                    </Col>
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Created by: <b>kbo025@gmail.com</b> - <b>(41) 988 463595</b></Footer>
        </Layout>
    );
};

export default MainLayout;
