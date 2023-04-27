import React from "react";
import { useState } from "react";
import classes from "./Login.module.css";
import { Button, Form, Input } from "antd";
import bimage from "../../../Images/mimi-thian-vdXMSiX-n6M-unsplash.jpg";
import logo from "../../../Images/logo.png";
import { Col, Row } from "antd";

export default function Login() {
  const[isLogin, setisLogin] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Row className={classes.logindiv}>
        <Col
          xs={0}
          sm={8}
          md={8}
          lg={10}
          xl={16}
          className={classes.leftbackground}
        >
          <img src={bimage} alt="" />
        </Col>
        <Col xs={24} sm={16} md={16} lg={14} xl={8} className={classes.form}>
          <img className={classes.logo} src={logo} alt="" />
          <Form
            name="basic"
            layout="vertical"
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <h1 style={{marginBottom : "-1rem"}}>{isLogin ? "Login" : "Signup"}</h1>
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
              <Button block type="primary" htmlType="submit">
                {isLogin ? "Login" : "Signup"}
              </Button>
            </Form.Item>
          </Form>
          <Button type="text" onClick={() => setisLogin(prev => !prev)}>{isLogin ? "Don't have an account? Signup" : "Already had an account? Signin"}</Button>
        </Col>
      </Row>
    </>
  );
}
