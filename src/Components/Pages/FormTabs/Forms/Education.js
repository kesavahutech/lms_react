import React, { useState } from "react";

import { Row, Col, Input, Form, Collapse, Button} from "antd";
import "./form.css";

const { Panel } = Collapse;

export default function Education(props) {
  const [panels, setPanels] = useState([1]);
  const nextPageHandler = (e) => {
    props.changetab(4);
  };
  const previousHandler = (e) => {
    props.changetab(2);
  };
  return (
    <Form layout="vertical" className="formdiv">
        <Collapse accordion expandIconPosition="end" style={{ width: "80%"}}>
          {panels.map((id, ind) => {
            const header = `Education Details-${ind + 1}`;
            return (
              <Panel header={header} key={id} >
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  className="inputrowdiv"
                >
                  <Col span={7}>
                    <Form.Item label="Education Type">
                      <Input size="large" placeholder="Education Type" />
                    </Form.Item>
                  </Col>
                  <Col span={7}>
                    <Form.Item label="Year of Passing">
                      <Input size="large" placeholder="Year of Passing" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  className="inputrowdiv"
                >
                  <Col span={7}>
                    <Form.Item label="Percentage (%)">
                      <Input size="large" placeholder="Percentage (%)" />
                    </Form.Item>
                  </Col>
                  <Col span={7}>
                    <Form.Item label="University Name">
                      <Input size="large" placeholder="University Name" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  className="inputrowdiv"
                >
                  <Col span={7}>
                    <Form.Item label="Institute Name">
                      <Input size="large" placeholder="Institute Name" />
                    </Form.Item>
                  </Col>
                  <Col span={7}>
                    <Form.Item label="Specialization">
                      <Input size="large" placeholder="Specialization" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  className="inputrowdiv"
                >
                  <Col span={7} offset={4}>
                    <Form.Item label="State">
                      <Input size="large" placeholder="State" />
                    </Form.Item>
                  </Col>
                  <Col offset={10} span={1}>
                  {panels.length === 1 && (
                    <Button
                      onClick={() => {
                        setPanels((prev) => [...prev, id + 1]);
                      }}
                    >
                      + Add
                    </Button>
                  )}
                  {panels.length !== 1  && (
                    <Button
                      onClick={() =>
                        setPanels((prev) => prev.filter((ele) => ele !== id))
                      }
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
          onClick={nextPageHandler}
        >
          Next
        </Button>
      </Row>
    </Form>
  );
}
