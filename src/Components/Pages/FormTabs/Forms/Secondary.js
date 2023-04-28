import React from "react";

import { Row, Col, Input, Form, Button } from "antd";

import "./form.css";

export default function Secondary(props) {
  const nextPageHandler = (e) => {
    props.changetab(3);
  };
  const previousHandler = (e) => {
    props.changetab(1);
  };
  return (
    <Form className="formdiv" layout="vertical" onFinish={nextPageHandler}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
          <Col span={7}>
            <Form.Item label="PAN No">
              <Input size="large" placeholder="PAN No" />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label="Aadhar No">
              <Input size="large" placeholder="Aadhar No" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
          <Col span={7}>
            <Form.Item label="Father Name">
              <Input size="large" placeholder="Father Name" />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label="Mother name">
              <Input size="large" placeholder="Mother name" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
          <Col span={7}>
            <Form.Item label="Spouse Name">
              <Input size="large" placeholder="Spouse Name" />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label="Passport No">
              <Input size="large" placeholder="Passport No" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
          <Col span={7}>
            <Form.Item label="Martial Status">
              <Input size="large" placeholder="Martial Status" />
            </Form.Item>
          </Col>
          <Col span={7}></Col>
        </Row>
      <Row className="buttondiv">
        <Button size="large" type="primary" onClick={previousHandler}>
          Previous
        </Button>
        <Button size="large" type="primary" htmlType="submit">
          Next
        </Button>
      </Row>
    </Form>
  );
}
