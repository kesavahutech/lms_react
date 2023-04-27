import React from "react";

import { Row, Col, Input, Form, DatePicker, Button } from "antd";

import "./form.css";

export default function Primary(props) {
  const nextPageHandler = (e) => {
    props.changetab(2);
  };
  return (
    <Form className="formdiv" layout="vertical" onFinish={nextPageHandler}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
          <Col span={7}>
            <Form.Item label="Employee ID">
              <Input size="large" placeholder="Employee ID" />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label="Employee Name">
              <Input size="large" placeholder="Employee Name" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
          <Col span={7}>
            <Form.Item label="Date of Joining">
              <DatePicker
                size="large"
                format="DD/MM/YYYY"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label="Date of Birth">
              <DatePicker
                size="large"
                format="DD/MM/YYYY"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
          <Col span={7}>
            <Form.Item label="Email ID">
              <Input size="large" type="email" placeholder="Email ID" />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label="Blood Group">
              <Input size="large" placeholder="Blood group" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
          <Col span={7}>
            <Form.Item label="Designation">
              <Input size="large" placeholder="Designation" />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label="Gender">
              <Input size="large" placeholder="M/F/T" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
          <Col span={7}>
            <Form.Item label="Nationality">
              <Input size="large" placeholder="Nationality" />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label="Employee Status">
              <Input size="large" placeholder="Employee status" />
            </Form.Item>
          </Col>
        </Row>
      <Row className="buttondiv">
        <Button size="large" type="primary" disabled>
          Previous
        </Button>
        <Button size="large" type="primary" htmlType="submit">
          Next
        </Button>
      </Row>
    </Form>
  );
}
