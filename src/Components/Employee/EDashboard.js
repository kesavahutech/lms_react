import React from "react";
import BarChart from "./charts/BarChart";
import { Card, Col, Row } from "antd";
import classes from "./Edashboard.module.css";

export default function EDashboard() {
  return (
    <Row className={classes.outerdiv} gutter={{ xs: 2, sm: 4, md: 6, lg: 8 }}>
      <Col span={8} xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
        <Card
          bordered
          headStyle={{ border: "none", marginBottom: 0 }}
          style={{ width: "100%" }}
        >
          <div
            style={{
              position: "absolute",
              top: -10,
              left: 16,
              background: "#fff",
              padding: "0 8px",
            }}
          >
            Attendance
          </div>
          <Row
            style={{
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Col
              span={16}
              style={{
                color: "blue",
                fontSize: "6rem",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "right",
              }}
            >
              25
            </Col>
            <Col
              span={8}
              style={{
                marginTop: "2rem",
                color: "black",
                fontSize: "3rem",
                display: "flex",
                justifyContent: "right",
                flexDirection: "column",
              }}
            >
              /40
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <span>Morning : 25/40</span>
            <span style={{ marginLeft: "1.2rem" }}>Noon : 25/40</span>
          </Row>
        </Card>
      </Col>
      <Col xs={24} sm={24} md={24} lg={16} span={16} xl={16}>
        <Card
          bordered
          headStyle={{ border: "none", marginBottom: 0 }}
          style={{ width: "100%", minHeight: "300px" }}
        >
          <div
            style={{
              position: "absolute",
              top: -10,
              left: 16,
              background: "#fff",
              padding: "0 8px",
            }}
          >
            Mock Ratings
          </div>
          <BarChart />
        </Card>
      </Col>
    </Row>
  );
}
