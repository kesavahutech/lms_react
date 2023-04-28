import React, { useState } from "react";

import { Row, Col, Input, Form, Collapse, Button } from "antd";
import "./form.css";

const { Panel } = Collapse;

export default function Skills(props) {
  const [panels, setPanels] = useState([1]);
  const [activeKey, setactiveKey] = useState(1);
  const nextPageHandler = (values) => {
    props.changetab(7);
    props.getdata(values);
  };
  const previousHandler = (e) => {
    props.changetab(5);
  };
  return (
    <Form layout="vertical" className="formdiv" style={{ height: "60vh" }} onFinish={nextPageHandler}>
      <Collapse
        accordion
        expandIconPosition="end"
        style={{ width: "80%" }}
        activeKey={activeKey}
        onChange={(key) => setactiveKey(Number(key))}
      >
        {panels.map((id, ind) => {
          const header = `Skill Details-${ind + 1}`;
          return (
            <Panel header={header} key={id}>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                className="inputrowdiv"
              >
                <Col span={7}>
                  <Form.Item label="Skill Type" name={`skilltype-${ind+1}`} rules={[{ required: true, message: 'Please input skill Type!' }]}>
                    <Input size="large" placeholder="Skill Type" />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item label="Skill Rating (Out of 10)" name={`skillrating-${ind+1}`} rules={[{ required: true, message: 'Please input skill Rating!' }]}>
                    <Input size="large" placeholder="Skill Rating" />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                className="inputrowdiv"
              >
                <Col span={7} offset={5}>
                  <Form.Item label="Year of Experience (over skill)" name={`skillexp-${ind+1}`} rules={[{ required: true, message: 'Please input skill Experiance!' }]}>
                    <Input
                      size="large"
                      placeholder="Year of Experience (over skill)"
                    />
                  </Form.Item>
                </Col>
                <Col
                  offset={7}
                  span={5}
                  style={{ display: "flex", justifyContent: "right" }}
                >
                  {panels[panels.length - 1] === id && (
                    <Button
                      onClick={() => {
                        setPanels((prev) => [...prev, id + 1]);
                        setactiveKey((prev) => prev + 1);
                      }}
                    >
                      + Add
                    </Button>
                  )}
                  {panels.length > 1 && (
                    <Button
                      onClick={() => {
                        setPanels((prev) => prev.filter((ele) => ele !== id));
                        setactiveKey((prev) => prev - 1);
                      }}
                      style={{ marginLeft: "0.5rem" }}
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
