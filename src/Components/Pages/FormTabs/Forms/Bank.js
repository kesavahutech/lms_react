import React from "react";

import { Row, Col, Input, Form, Button } from "antd";

import "./form.css";

export default function Bank(props) {
  const nextPageHandler = (values) => {
    props.changetab(6);
    props.getdata(values);
  };
  const previousHandler = (e) => {
    props.changetab(4);
  };
  const validateAccountNumber = (rule, value) => {
    const accountNumberRegex = /^\d{14}$/; // Regular expression to match a 10-digit phone number
    return new Promise((resolve, reject) => {
      if (value && !accountNumberRegex.test(value)) {
        reject('Please enter a valid phone number'); // If the phone number is not valid, reject the promise with an error message
      } else {
        resolve(); // If the phone number is valid, resolve the promise
      }
    });
  };
  return (
    <Form className="formdiv" layout="vertical" onFinish={nextPageHandler}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
          <Col span={7}>
            <Form.Item label="Account No." name="bankaccountno" rules={[{ required: true, message: 'Please input Account no!' }, { validator: validateAccountNumber}]}>
              <Input size="large" placeholder="Account No." />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label="Bank Name" name="bankname" rules={[{ required: true, message: 'Please input Bank Name!' }]}>
              <Input size="large" placeholder="Bank Name" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
          <Col span={7}>
            <Form.Item label="Account Type" name="bankacctype" rules={[{ required: true, message: 'Please input Type!' }]}>
              <Input size="large" placeholder="Account Type" />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label="IFSC Code" name="bankifsc" rules={[{ required: true, message: 'Please input IFSC code!' }]}>
              <Input size="large" placeholder="IFSC Code" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
          <Col span={7}>
            <Form.Item label="Branch" name="bankbrnch" rules={[{ required: true, message: 'Please input Branch Name!' }]}>
              <Input size="large" placeholder="Branch" />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label="State" name="bankstate" rules={[{ required: true, message: 'Please input Bank state!' }]}>
              <Input size="large" placeholder="State" />
            </Form.Item>
          </Col>
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
