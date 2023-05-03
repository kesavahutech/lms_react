import React, { useState } from "react";

import { Row, Col, Input, Form, Collapse, Button } from "antd";
import "./form.css";

const { Panel } = Collapse;

export default function Contact(props) {
  const [panels, setPanels] = useState([1]);
  const [activeKey, setactiveKey] = useState(1);
  const submitHandler = (values) => {
    props.getdata(values)
  };
  const previousHandler = (e) => {
    props.changetab(7);
  };
  const validatePhoneNumber = (rule, value) => {
    const phoneNumberRegex = /^\d{10}$/; // Regular expression to match a 10-digit phone number
    return new Promise((resolve, reject) => {
      if (value && !phoneNumberRegex.test(value)) {
        reject('Please enter a valid phone number'); // If the phone number is not valid, reject the promise with an error message
      } else {
        resolve(); // If the phone number is valid, resolve the promise
      }
    });
  };
  return (
    <Form layout="vertical" className="formdiv" style={{ height: "60vh" }} onFinish={submitHandler}>
      <Collapse
        accordion
        expandIconPosition="end"
        style={{ width: "80%" }}
        activeKey={activeKey}
        onChange={(key) => setactiveKey(Number(key)) }
      >
        {panels.map((id, ind) => {
          const header = `Contact Details-${ind + 1}`;
          return (
            <Panel header={header} key={id}>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                className="inputrowdiv"
              >
                <Col offset={4} span={7}>
                  <Form.Item label="Contact Type" name={`contacttype-${ind+1}`} rules={[{ required: true, message: 'Please input contact type!' }]}>
                    <Input size="large" placeholder="Contact Type" />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item label="Contact Number" name={`contactnumber-${ind+1}`} rules={[{ required: true, message: 'Please input contact Number!' }, { validator: validatePhoneNumber }]}>
                    <Input size="large" placeholder="Contact Number" prefix="+91" />
                  </Form.Item>
                </Col>
                <Col offset={3} span={1}>
                  {panels.length === 1 && (
                    <Button
                      onClick={() => {
                        setPanels((prev) => [...prev, id + 1]);
                        setactiveKey((prev) => prev + 1);
                      }}
                      style={{marginBottom: "0.5rem"}}
                    >
                      + Add
                    </Button>
                  )}
                  {panels.length !== 1 && (
                    <Button
                      onClick={() => {
                        setPanels((prev) => prev.filter((ele) => ele !== id));
                        setactiveKey((prev) => prev-1);
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
        <Button
          size="large"
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Row>
    </Form>
  );
}
