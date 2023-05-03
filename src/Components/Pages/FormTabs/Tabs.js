import React, { useState } from "react";
import { Row, Tabs, Col} from "antd";
import classes from "./Tabs.module.css";
import Primary from "./Forms/Primary";
import Secondary from "./Forms/Secondary";
import Education from "./Forms/Education";
import Address from "./Forms/Address";
import Bank from "./Forms/Bank";
import Skills from "./Forms/Skills";
import Experience from "./Forms/Experience";
import Contact from "./Forms/Contact";

export default function Tabforms() {
  const [activeKey, setactiveKey] = useState(1)
  const [formData , setFormData] = useState({});

  const transferFormdataToDatabase = (data) => {
      console.log({...formData, ...data})
  }
  const onKeyChange = (key) => setactiveKey(key)
  return (
    <Row className={classes.rowdiv}>
      <Col span={24} style={{display : "flex", flexDirection: "column", alignItems: "center"}}>
        <Row style={{width: "90%", height: "90vh"}}>
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
                children: <Primary changetab={(key) => { setactiveKey(key)}} getdata={(data) => {setFormData(prev => {return { ...prev, ...data }})}} />,
                disabled: activeKey < 1 ? true : false 
              },
              {
                label: "Secondary Info",
                key: 2,
                children: <Secondary changetab={(key) => { setactiveKey(key)}} getdata={(data) => {setFormData(prev => {return { ...prev, ...data }})}} />,
                disabled: activeKey < 2 ? true : false 
              },
              {
                label: "Educational Details",
                key: 3,
                children: <Education changetab={(key) => { setactiveKey(key)}} getdata={(data) => {setFormData(prev => {return { ...prev, ...data }})}} />,
                disabled: activeKey < 3 ? true : false 
              },
              {
                label: "Address Details",
                key: 4,
                children: <Address changetab={(key) => { setactiveKey(key)}} getdata={(data) => {setFormData(prev => {return { ...prev, ...data }})}} />,
                disabled: activeKey < 4 ? true : false 
              },
              {
                label: "Bank Details",
                key: 5,
                children: <Bank changetab={(key) => { setactiveKey(key)}} getdata={(data) => {setFormData(prev => {return { ...prev, ...data }})}} />,
                disabled: activeKey < 5 ? true : false 
              },
              {
                label: "Technical Skills",
                key: 6,
                children: <Skills changetab={(key) => { setactiveKey(key)}} getdata={(data) => {setFormData(prev => {return { ...prev, ...data }})}} />,
                disabled: activeKey < 6 ? true : false 
              },
              {
                label: "Experience",
                key: 7,
                children: <Experience changetab={(key) => {setactiveKey(key)}} getdata={(data) => {setFormData(prev => {return { ...prev, ...data }})}} />,
                disabled: activeKey < 7 ? true : false 
              },
              {
                label: "Contact",
                key: 8,
                children: <Contact changetab={(key) => {setactiveKey(key)}} getdata={transferFormdataToDatabase} />,
                disabled: activeKey < 8 ? true : false 
              },
            ]}
          />
        </Row>
      </Col>
    </Row>
  );
}
