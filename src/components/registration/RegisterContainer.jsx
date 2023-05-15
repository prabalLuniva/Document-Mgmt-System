import React from "react";
import styled from "styled-components";
import { Layout, Space } from "antd";
import { Link } from "react-router-dom";
const { Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 300,
  lineHeight: "120px",
  color: "black",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  margin: "2%",
  background: "url(Background.jpeg) no-repeat center center fixed",
  backgroundSize: "cover",
};

const ResgisterContainer = () => {
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
          <Content style={contentStyle}>
            <Link className="hoverBtn" to="/uploaddocument">
              <Image>
                <img
                  style={{ height: "200px", width: "200px" }}
                  src="Home.png"
                  alt="Upload Documents"
                />
              </Image>
              Upload Documents
            </Link>
            <Link className="hoverBtn" to="/detailregistration">
              <Image>
                <img
                  style={{ height: "200px", width: "200px" }}
                  src="Home.png"
                  alt="Status Of Documents"
                />
              </Image>
              Ragistration Details
            </Link>
            <Link className="hoverBtn" to="/documentstatus">
              <Image>
                <img
                  style={{ height: "200px", width: "200px" }}
                  src="Home.png"
                  alt="Status Of Documents"
                />
              </Image>
              Document Status
            </Link>
            
            
          </Content>
          <Content style={contentStyle}>
          <Link className="hoverBtn" to="/detailsupportivedoc">
              <Image>
                <img
                  style={{ height: "200px", width: "200px" }}
                  src="Home.png"
                  alt="Status Of Documents"
                />
              </Image>
              Supportive Document
            </Link>
            <Link className="hoverBtn" to="/insertsupportivedoc">
              <Image>
                <img
                  style={{ height: "200px", width: "200px" }}
                  src="Home.png"
                  alt="Status Of Documents"
                />
              </Image>
              Insert Supportive Document
            </Link>
            </Content>
        </Layout>
      </Space>
    </>
  );
};

export default ResgisterContainer;
const Image = styled.div`
  background: none;
  border-bottom: 5px solid yellow;
  padding: 20px;
`;
