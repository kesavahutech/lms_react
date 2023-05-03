import React, { useMemo, useState } from "react";
import classes from "./Layout.module.css";
import { Breadcrumb, Layout, Menu, theme, Input, Row, Col } from "antd";
import { useLocation } from "react-router-dom";
import { Divider, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import dashboardicon from "../../Images/icons8-dashboard-layout-48.png";
import { useNavigate } from "react-router-dom";

const { Header, Content, Sider } = Layout;
const { Search } = Input;

const allbreadcrumbs = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/profile",
    title: "profile",
  },
  {
    path: "/dashboard",
    title: "dashboard",
  },
];

export default function Layout1(props) {
  const [selectedKeys, setSelectedkeys] = useState(["1"]);
  const navigate = useNavigate();
  const location = useLocation();
  const items = useMemo(
    () => [
      {
        label: <Link to="/profile">Profile</Link>,
        key: "0",
        onClick: () => setSelectedkeys([]),
      },
      {
        label: <Link to="/changepassword">Change Password</Link>,
        key: "1",
        onClick: () => setSelectedkeys([]),
      },
      {
        label: <Link to="/login">Logout</Link>,
        key: "3",
        onClick: () => setSelectedkeys([]),
      },
    ],
    [setSelectedkeys]
  );
  const breadcrumbItems = allbreadcrumbs
    .filter((item) => item.path === location.pathname || item.path === "/")
    .map((item) => {
      return { title: item.title };
    });
  const items2 = [
    {
      key: "1",
      icon: (
        <img
          style={{ width: "50px", height: "45px" }}
          src={dashboardicon}
          alt=""
        />
      ),
      label: "DashBoard",
      onClick: () => navigate("/dashboard"),
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{width: "100%", height: "100vh"}}>
      <Row>
        <Header className={classes.header}>
          <Col
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
            span={4}
          >
            <img className={classes.logo} src={logo} alt="" />
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            span={16}
            xs={6}
          >
            <Search
              size="large"
              placeholder="input search text"
              className={classes.search}
              allowClear
            />
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            span={4}
          >
            <div className={classes.avatardiv}>
              <Divider type="vertical" style={{ color: "whitesmoke" }} />
              <Avatar size="large" icon={<UserOutlined />} />
              <Dropdown menu={{ items }} trigger={["click"]}>
                <Space
                  style={{
                    color: "black",
                    fontSize: "large",
                    cursor: "pointer",
                  }}
                >
                  kesava
                  <DownOutlined />
                </Space>
              </Dropdown>
            </div>
          </Col>
        </Header>
      </Row>
      <Row style={{ width: "100%", height: "100%"}}>
        <Col span={24}>
          <Layout style={{height: "100%"}}>
            <Col span={4} style={{height: "100%"}}>
              <Sider style={{ background: colorBgContainer, height: "100%" }}>
                <Menu
                  mode="inline"
                  style={{ height: "100%", borderRight: 0, marginTop: "3rem" }}
                  onClick={(e) => setSelectedkeys([e.key])}
                  selectedKeys={selectedKeys}
                  items={items2}
                />
              </Sider>
            </Col>
            <Col span={20}>
              <Layout style={{ padding: "0 24px 24px", height: "100%" }}>
                <Breadcrumb
                  style={{ margin: "16px 0" }}
                  items={breadcrumbItems}
                />
                <Content
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    background: colorBgContainer,
                    // height: "100%",
                  }}
                >
                  {props.children}
                </Content>
              </Layout>
            </Col>
          </Layout>
        </Col>
      </Row>
    </Layout>
  );
}
