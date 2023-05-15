import React from "react";
import styled from "styled-components";
import { Layout, Space } from "antd";
import { Link } from "react-router-dom";
import DetailRegistration from "./registration/DetailRegistration";
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

const MainContainer = () => {
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
            <Link className="hoverBtn" to="/registration">
              <Image>
                <img
                  style={{ height: "200px", width: "200px" }}
                  src="Home.png"
                  alt="New Document Registration"
                />
              </Image>
              New Document Registration
            </Link>
            <Link className="hoverBtn" to="/chalanidocument">
              <Image>
                <img
                  style={{ height: "200px", width: "200px" }}
                  src="Home.png"
                  alt="Create Chalani Document"
                />
              </Image>
              Create Chalani Document
            </Link>
          </Content>
        </Layout>
      </Space>
    </>
  );
};

export default MainContainer;
const Image = styled.div`
  background: none;
  border-bottom: 5px solid yellow;
  padding: 20px;
`;
