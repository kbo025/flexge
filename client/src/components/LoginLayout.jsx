import React from 'react';
import { Layout, Row, Col, Card } from 'antd';
const { Content } = Layout;

const LoginLayout = ({children}) => (
  <Layout  style={{ height: "100vh" }}>
    <Content
      className="site-layout"
      style={{ padding: '0 50px', height: "100%" }} >
        <Row justify="center"  align="middle" style={{ height: "100%" }}>
            <Col span={8}>
                <Card>{children}</Card>
            </Col>
        </Row>
    </Content>
  </Layout>
);

export default LoginLayout;
