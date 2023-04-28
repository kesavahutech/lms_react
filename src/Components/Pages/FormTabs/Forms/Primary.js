import React from "react";
import moment from "moment";

import { Row, Col, Input, Form, DatePicker, Button, Select } from "antd";

import "./form.css";

const { Option } = Select;

export default function Primary(props) {
  const nextPageHandler = (values) => {
    props.changetab(2);
    // console.log(values)
    props.getdata(values);
  };

  function disabledDate(current) {
    // Disable all dates after the current date
    return current && current > moment().endOf("day");
  }
  return (
    <Form className="formdiv" layout="vertical" onFinish={nextPageHandler}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
        <Col span={7}>
          <Form.Item
            label="Employee ID"
            name="empid"
            rules={[{ required: true, message: "Please input Employee ID!" }]}
          >
            <Input size="large" placeholder="Employee ID" />
          </Form.Item>
        </Col>
        <Col span={7}>
          <Form.Item
            label="Employee Name"
            name="empname"
            rules={[{ required: true, message: "Please input Employee Name!" }]}
          >
            <Input size="large" placeholder="Employee Name" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
        <Col span={7}>
          <Form.Item
            label="Date of Joining"
            name="empjoindate"
            rules={[{ required: true, message: "Please input date!" }]}
          >
            <DatePicker
              size="large"
              format="DD/MM/YYYY"
              style={{ width: "100%" }}
              disabledDate={disabledDate}
            />
          </Form.Item>
        </Col>
        <Col span={7}>
          <Form.Item
            label="Date of Birth"
            name="empbirthdate"
            rules={[{ required: true, message: "Please input date!" }]}
          >
            <DatePicker
              size="large"
              format="DD/MM/YYYY"
              style={{ width: "100%" }}
              disabledDate={disabledDate}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
        <Col span={7}>
          <Form.Item
            label="Email ID"
            name="empemail"
            rules={[{ required: true, message: "Please input Email!" }]}
          >
            <Input size="large" type="email" placeholder="Email ID" />
          </Form.Item>
        </Col>
        <Col span={7}>
          <Form.Item
            label="Blood Group"
            name="empblood"
            rules={[{ required: true, message: "Please input blood group!" }]}
          >
            <Input size="large" placeholder="Blood group" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
        <Col span={7}>
          <Form.Item
            label="Designation"
            name="empdesig"
            rules={[{ required: true, message: "Please input designation!" }]}
          >
            <Input size="large" placeholder="Designation" />
          </Form.Item>
        </Col>
        <Col span={7}>
          <Form.Item
            label="Gender"
            name="empgender"
            rules={[{ required: true, message: "Please input Gender!" }]}
          >
            <Select
              placeholder="Select a option"
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="inputrowdiv">
        <Col span={7}>
          <Form.Item
            label="Nationality"
            name="empnation"
            rules={[{ required: true, message: "Please input Nationality!" }]}
          >
            <Input size="large" placeholder="Nationality" />
          </Form.Item>
        </Col>
        <Col span={7}>
          <Form.Item
            label="Employee Status"
            name="empstatus"
            rules={[{ required: true, message: "Please input Status!" }]}
          >
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
