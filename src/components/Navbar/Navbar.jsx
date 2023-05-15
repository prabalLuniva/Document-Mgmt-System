import React from "react";
import styled from "styled-components";
import { Layout, Row, Space,
    Button,

    Table,
    Tag,
    Input,
    Modal,
    Form,
    InputNumber,
    DatePicker,
    Upload,
    Switch,
    message, } from "antd";
import { Link,useNavigate } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: "50px",
  // paddingInline: 50,
  backgroundColor: "#2A7DBE",
//   borderBottom: "3px solid red",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};



const NavBar = () => {
    const navigate = useNavigate();
    const handleClickSup = () => {
        navigate("/detailsupportivedoc")
       }
    const handleClickReg = () =>{
      navigate("/registration")
    }

    const handleClickDetail = () => {
      navigate("/detailregistration")
    }

    const handleClickTrk = () =>{
        navigate("/trackdocumentstatus")
    }

    const handleClickDep = () => {
        navigate("/listofdepartment")
       }
    const handleClickHome = () => {
      navigate('/')
    }
    const handleClickStat = () => {
      navigate("/documentstatus")
    }
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
          <Button className="btn-load" onClick={handleClickHome} 
          style={{margin:"13px"}}>
            Home
          </Button>
          <Button className="btn-load" onClick={handleClickReg} 
          style={{margin:"13px"}}>
            Registration
          </Button>
          <Button className="btn-load" onClick={handleClickDetail} 
          style={{margin:"13px"}}>
            Document Details
          </Button>
          <Button className="btn-load" onClick={handleClickSup} 
          style={{margin:"13px"}}>
            Supportive Document
          </Button>
          <Button className="btn-load" onClick={handleClickTrk} 
          style={{margin:"13px"}}>
           Track Document
          </Button>
          <Button className="btn-load" onClick={handleClickStat} 
          style={{margin:"13px"}}>
            Document Status
          </Button>
          <Button className="btn-load" onClick={handleClickDep} 
          style={{margin:"13px"}}>
            List OF Department
          </Button>
          </Header>
          
        </Layout>
      </Space>
      
    </>
  );
};

export default NavBar;