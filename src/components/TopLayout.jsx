import React from "react";
import styled from "styled-components";
import { Layout, Row, Space } from "antd";
import { Link } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: "20vh",
  paddingInline: 50,
  backgroundColor: "#1b5693",
  borderBottom: "3px solid red",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};



const TopLayout = () => {
  return (
    <>
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
        size={[0, 48]}
      >
        <Layout>
          <Header style={headerStyle}>
            <img src="nepal-govt.png" alt="Logo" width="100vw" height="100vh" />
            <h6 style={{ fontWeight: "bold", fontSize: "4vh" }}>
              Organization Document Management System
            </h6>
            <img src="WavingFlag.gif" alt="Logo" width="100vw" height="100vh" />
          </Header>
          
        </Layout>
      </Space>
      
    </>
  );
};

export default TopLayout;

