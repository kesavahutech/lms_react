import React from "react";

import { Row, Col, Input, Form, Button,Select } from "antd";
import "./form.css";

const { Option } = Select;

export default function Secondary(props) {
  const nextPageHandler = (values) => {
    props.changetab(3);
    props.getdata(values);
  };
  const previousHandler = (e) => {
    props.changetab(1);
  };
  return (
    <Form className="formdiv" layout="vertical" onFinish={nextPageHandler}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
        <Col span={7}>
          <Form.Item
            label="PAN No"
            name="pan"
            rules={[{ required: true, message: "Please input Pan!" }]}
          >
            <Input size="large" placeholder="PAN No" />
          </Form.Item>
        </Col>
        <Col span={7}>
          <Form.Item
            label="Aadhar No"
            name="aadhar"
            rules={[{ required: true, message: "Please input Aadhar no!" }]}
          >
            <Input size="large" placeholder="Aadhar No" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
        <Col span={7}>
          <Form.Item
            label="Father Name"
            name="fathername"
            rules={[{ required: true, message: "Please input Father name!" }]}
          >
            <Input size="large" placeholder="Father Name" />
          </Form.Item>
        </Col>
        <Col span={7}>
          <Form.Item
            label="Mother name"
            name="mothername"
            rules={[{ required: true, message: "Please input Mother Name!" }]}
          >
            <Input size="large" placeholder="Mother name" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
        <Col span={7}>
          <Form.Item label="Spouse Name" name="spousename">
            <Input size="large" placeholder="Spouse Name" />
          </Form.Item>
        </Col>
        <Col span={7}>
          <Form.Item label="Passport No" name="passport">
            <Input size="large" placeholder="Passport No" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
        <Col span={7}>
          <Form.Item
            label="Martial Status"
            name="martial"
            rules={[
              { required: true, message: "Please input Martial status!" },
            ]}
          >
            <Select
              placeholder="Select a option"
              allowClear
            >
              <Option value="unmarried">unmarried</Option>
              <Option value="married">married</Option>
              <Option value="devorced">devorced</Option>
            </Select>
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
