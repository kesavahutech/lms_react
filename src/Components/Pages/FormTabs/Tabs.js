import React, { useState } from "react";
import { Row, Tabs, Col} from "antd";
import classes from "./Tabs.module.css";
import Primary from "./Forms/Primary";
import Secondary from "./Forms/Secondary";
import Education from "./Forms/Education";

export default function Tabforms() {
  const [activeKey, setactiveKey] = useState(1)
  const onKeyChange = (key) => setactiveKey(key)
  return (
    <Row className={classes.rowdiv}>
      <Col span={24} style={{display : "flex", flexDirection: "column", alignItems: "center"}}>
        <Row style={{width: "90%"}}>
          <Tabs
            defaultActiveKey="1"
            activeKey={activeKey}
            centered
            className={classes.tabdiv}
            onChange={onKeyChange}
            size="large"
            items={[
              {
                label: "Primary Info",
                key: 1,
                children: <Primary changetab={(key) => {console.log(key); setactiveKey(key)}} />,
                disabled: activeKey < 1 ? true : false 
              },
              {
                label: "Secondary Info",
                key: 2,
                children: <Secondary changetab={(key) => {console.log(key); setactiveKey(key)}} />,
                disabled: activeKey < 2 ? true : false 
              },
              {
                label: "Educational Details",
                key: 3,
                children: <Education changetab={(key) => {console.log(key); setactiveKey(key)}} />,
                disabled: activeKey < 3 ? true : false 
              },
              {
                label: "Address Details",
                key: 4,
                children: "Tab 3",
                disabled: activeKey !== 4 ? true : false 
              },
              {
                label: "Bank Details",
                key: 5,
                children: "Tab 3",
                disabled: activeKey !== 5 ? true : false 
              },
              {
                label: "Technical Skills",
                key: 6,
                children: "Tab 3",
                disabled: activeKey !== 6 ? true : false 
              },
              {
                label: "Experience",
                key: 7,
                children: "Tab 3",
                disabled: activeKey !== 7 ? true : false 
              },
              {
                label: "Contact",
                key: 8,
                children: "Tab 3",
                disabled: activeKey !== 8 ? true : false 
              },
            ]}
          />
        </Row>
      </Col>
    </Row>
  );
}
