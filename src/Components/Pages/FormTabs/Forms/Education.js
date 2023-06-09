import React, { useState } from "react";

import { Row, Col, Input, Form, Collapse, Button, DatePicker } from "antd";
import moment from 'moment';
import "./form.css";

const { Panel } = Collapse;

export default function Education(props) {
  const [panels, setPanels] = useState([1]);
  const [activeKey, setactiveKey] = useState(1);

  function disabledDate(current) {
    // Disable all dates after the current year
    return current && current.year() > moment().year();
  }
  const nextPageHandler = (values) => {
    props.changetab(4);
    props.getdata(values);
  };
  const previousHandler = (e) => {
    props.changetab(2);
  };
  return (
    <Form layout="vertical" className="formdiv" onFinish={nextPageHandler}>
      <Collapse
        accordion
        expandIconPosition="end"
        style={{ width: "80%" }}
        activeKey={activeKey}
        onChange={(key) => setactiveKey(Number(key))}
      >
        {panels.map((id, ind) => {
          const header = `Education Details-${ind + 1}`;
          return (
            <Panel header={header} key={id}>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                className="inputrowdiv"
              >
                <Col span={7}>
                  <Form.Item label="Education Type" name={`edutype-${ind+1}`} rules={[{ required: true, message: 'Please input Education Type!' }]}>
                    <Input size="large" placeholder="Education Type" />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item label="Year of Passing" name={`yopassing-${ind+1}`} rules={[{ required: true, message: 'Please input Year of passing!' }]}>
                    {/* <Input size="large" placeholder="Year of Passing" /> */}
                    <DatePicker picker="year" style={{ width: "100%" }} disabledDate={disabledDate} />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                className="inputrowdiv"
              >
                <Col span={7}>
                  <Form.Item label="Percentage (%)" name={`edupercent-${ind+1}`} rules={[{ required: true, message: 'Please input Percentage!' }]}>
                    <Input size="large" placeholder="Percentage (%)" />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item label="University Name" name={`uniname-${ind+1}`} rules={[{ required: true, message: 'Please input University name!' }]}>
                    <Input size="large" placeholder="University Name" />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                className="inputrowdiv"
              >
                <Col span={7}>
                  <Form.Item label="Institute Name" name={`instname-${ind+1}`} rules={[{ required: true, message: 'Please input Institute name' }]}>
                    <Input size="large" placeholder="Institute Name" />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item label="Specialization" name={`specialization-${ind+1}`} rules={[{ required: true, message: 'Please input specialization!' }]}>
                    <Input size="large" placeholder="Specialization" />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                className="inputrowdiv"
              >
                <Col span={7} offset={4}>
                  <Form.Item label="State" name={`collegestate-${ind+1}`} rules={[{ required: true, message: 'Please input State!' }]}>
                    <Input size="large" placeholder="State" />
                  </Form.Item>
                </Col>
                <Col offset={10} span={1}>
                  {panels.length === 1 && (
                    <Button
                      onClick={() => {
                        setPanels((prev) => [...prev, id + 1]);
                        setactiveKey((prev) => prev + 1);
                      }}
                    >
                      + Add
                    </Button>
                  )}
                  {panels.length !== 1 && (
                    <Button
                      onClick={() => {
                        setPanels((prev) => prev.filter((ele) => ele !== id));
                        setactiveKey((prev) => prev - 1);
                      }}
                    >
                      Delete
                    </Button>
                  )}
                </Col>
              </Row>
            </Panel>
          );
        })}
      </Collapse>
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
