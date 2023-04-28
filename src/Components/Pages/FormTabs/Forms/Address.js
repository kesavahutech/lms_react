import React, { useState } from "react";

import { Row, Col, Input, Form, Collapse, Button } from "antd";
import "./form.css";

const { Panel } = Collapse;

export default function Address(props) {
  const [panels, setPanels] = useState([1]);
  const [activeKey, setactiveKey] = useState(1);
  const nextPageHandler = (values) => {
    props.changetab(5);
    props.getdata(values);
  };
  const previousHandler = (e) => {
    props.changetab(3);
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
          const header = `Address Details-${ind + 1}`;
          return (
            <Panel header={header} key={id}>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                className="inputrowdiv"
              >
                <Col span={7}>
                  <Form.Item label="Address Type" name={`addtype-${ind+1}`} rules={[{ required: true, message: 'Please input Address Type!' }]}>
                    <Input size="large" placeholder="Address Type" />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item label="Door No." name={`adddoorno-${ind+1}`} rules={[{ required: true, message: 'Please input Door no!' }]}>
                    <Input size="large" placeholder="Door No." />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                className="inputrowdiv"
              >
                <Col span={7}>
                  <Form.Item label="Street" name={`addstreet-${ind+1}`} rules={[{ required: true, message: 'Please input Street!' }]}>
                    <Input size="large" placeholder="Street" />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item label="Locality" name={`addlocality-${ind+1}`} rules={[{ required: true, message: 'Please input Locality!' }]}>
                    <Input size="large" placeholder="Locality" />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                className="inputrowdiv"
              >
                <Col span={7}>
                  <Form.Item label="City" name={`addcity-${ind+1}`} rules={[{ required: true, message: 'Please input City!' }]}>
                    <Input size="large" placeholder="City" />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item label="State" name={`addstate-${ind+1}`} rules={[{ required: true, message: 'Please input State!' }]} >
                    <Input size="large" placeholder="State" />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                className="inputrowdiv"
              >
                <Col offset={4} span={7}>
                  <Form.Item label="PIN Code" name={`addpincode-${ind+1}`} rules={[{ required: true, message: 'Please input Pincode!' }]}>
                    <Input size="large" placeholder="PIN Code" />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item label="Land Mark" name={`addlandmark-${ind+1}`} rules={[{ required: true, message: 'Please input Landmark!' }]}>
                    <Input size="large" placeholder="Land Mark" />
                  </Form.Item>
                </Col>
                <Col offset={3} span={1}>
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
        <Button
          size="large"
          type="primary"
          htmlType="submit"
        >
          Next
        </Button>
      </Row>
    </Form>
  );
}
