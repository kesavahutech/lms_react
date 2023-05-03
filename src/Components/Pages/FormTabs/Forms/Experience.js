import React, { useState } from "react";

import { Row, Col, Input, Form, Collapse, Button, DatePicker } from "antd";
import "./form.css";
import moment from "moment";
const { Panel } = Collapse;

export default function Experience(props) {
  const [panels, setPanels] = useState([1]);
  const [activeKey, setactiveKey] = useState(1);
  function disabledDate(current) {
    // Disable all dates after the current date
    return current && current > moment().endOf('day');
  }
  const nextPageHandler = (values) => {
    props.changetab(8);
    props.getdata(values);
  };
  const previousHandler = (e) => {
    props.changetab(6);
  };
  return (
    <Form layout="vertical" className="formdiv" style={{ height: "60vh" }} onFinish={nextPageHandler}>
      <Collapse
        accordion
        expandIconPosition="end"
        style={{ width: "80%" }}
        activeKey={activeKey}
        onChange={(key) => setactiveKey(Number(key)) }
      >
        {panels.map((id, ind) => {
          const header = `Experience Details-${ind + 1}`;
          return (
            <Panel header={header} key={id}>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                className="inputrowdiv"
              >
                <Col span={7}>
                  <Form.Item label="Company Name" name={`expcompanyname-${ind+1}`} rules={[{ required: true, message: 'Please input name!' }]}>
                    <Input size="large" placeholder="Company Name" />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item label="Years of Experience" name={`expinyears-${ind+1}`} rules={[{ required: true, message: 'Please input years!' }]}>
                    <Input size="large" placeholder="Years of Experience" />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                className="inputrowdiv"
              >
                <Col span={7}>
                  <Form.Item label="Date of Joining" name={`expdoj-${ind+1}`} rules={[{ required: true, message: 'Please input DOJ!' }]}>
                    <DatePicker
                      size="large"
                      format="DD/MM/YYYY"
                      style={{ width: "100%" }}
                      disabledDate={disabledDate}
                    />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item label="Date of Relieving" name={`expdor-${ind+1}`} rules={[{ required: true, message: 'Please input DOR!' }]}>
                    <DatePicker
                      size="large"
                      format="DD/MM/YYYY"
                      style={{ width: "100%" }}
                      disabledDate={disabledDate}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                className="inputrowdiv"
              >
                <Col offset={4} span={7}>
                  <Form.Item label="Designation" name={`expdesig-${ind+1}`} rules={[{ required: true, message: 'Please input Designation!' }]}>
                    <Input size="large" placeholder="Designation" />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item label="Location" name={`explocation-${ind+1}`} rules={[{ required: true, message: 'Please input Location!' }]}>
                    <Input size="large" placeholder="Location" />
                  </Form.Item>
                </Col>
                <Col offset={3} span={1}>
                  {panels[panels.length - 1] === id && (
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
                  {panels.length > 1 && (
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
          Next
        </Button>
      </Row>
    </Form>
  );
}
