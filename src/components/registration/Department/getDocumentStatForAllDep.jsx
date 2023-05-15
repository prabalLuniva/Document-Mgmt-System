import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag,Input } from "antd";
import styled from "styled-components";
import TopLayout from "../../TopLayout";
import { getDocumentStatusForAllDeparments, getListOfDepartment } from "../../../services/appServices/ProductionService";
import NavBar from "../../Navbar/Navbar";
import { useNavigate } from "react-router";



const GetDocumentStatForAllDep = () => {
//   const navigate = useNavigate();
//   const handleStatus = (e)=> {
//     setTimeout(() => {
//       navigate("/departmentdocstatus", {
//         state: { enteredvalue: e },
//       });
//     })
//   }

  const [obtaindata, setObtaindata] = useState();
  const columns = [
    {
      title: "DocumentId",
      dataIndex: "DocumentId",
      key: "DocumentId",
    },
    {
        title: "Collector",
        dataIndex: "Department1",
        key: "Department1",
        render: (record, { tags }) => {
          // <>
          // {tags.map((tag)=>{
          //     if(tag ==='Approved'){
          //         color='green'
          //     }
          // })}
          // </>
          if (record === "Approved") {
            return <Tag color={"green"}>Approved</Tag>;
          } else if (record === "Rejected") {
            return <Tag color={"volcano"}>Rejected</Tag>;
          } else {
            return <Tag color={"geekblue"}>Pending</Tag>;
          }
        },
      },
    {
      title: "Malpot",
      dataIndex: "Department2",
      key: "Department2",
      render: (record, { tags }) => {
        // <>
        // {tags.map((tag)=>{
        //     if(tag ==='Approved'){
        //         color='green'
        //     }
        // })}
        // </>
        if (record === "Approved") {
          return <Tag color={"green"}>Approved</Tag>;
        } else if (record === "Rejected") {
          return <Tag color={"volcano"}>Rejected</Tag>;
        } else {
          return <Tag color={"geekblue"}>Pending</Tag>;
        }
      },
    },
    {
      title: "Lekha Bivag",
      dataIndex: "Department3",
      key: "Department3",
      render: (record, { tags }) => {
        // <>
        // {tags.map((tag)=>{
        //     if(tag ==='Approved'){
        //         color='green'
        //     }
        // })}
        // </>
        if (record === "Approved") {
          return <Tag color={"green"}>Approved</Tag>;
        } else if (record === "Rejected") {
          return <Tag color={"volcano"}>Rejected</Tag>;
        } else {
          return <Tag color={"geekblue"}>Pending</Tag>;
        }
      },
    },
    // {
    //   title: "Status Id",
    //   dataIndex: "Status Id",
    //   key: "Status Id",
    // },
   
    {
      title: "Sawari Bivag",
      dataIndex: "Department4",
      key: "Department4",
      render: (record, { tags }) => {
        // <>
        // {tags.map((tag)=>{
        //     if(tag ==='Approved'){
        //         color='green'
        //     }
        // })}
        // </>
        if (record === "Approved") {
          return <Tag color={"green"}>Approved</Tag>;
        } else if (record === "Rejected") {
          return <Tag color={"volcano"}>Rejected</Tag>;
        } else {
          return <Tag color={"geekblue"}>Pending</Tag>;
        }
      },
    },  
  ];
  useEffect(() => {
    
    getDocumentStatusForAllDeparments((res) => {
      console.log(res,'this is res')
      if (res?.statusData.length > 0) {
        console.log(res.statusData,"hello im data of registration")
        setObtaindata(res.statusData);
      } else {
        console.log("out of if else");
      }
    });
  }, []);
  return (
    <>
    <TopLayout/>
    <NavBar/>
    <h3>List of Department</h3>
    <DoctorTableData>
      <div className="ant-card-head table-data">
        <Table dataSource={obtaindata} columns={columns} />
      </div>
    </DoctorTableData>
    </>
  );
};

export default GetDocumentStatForAllDep;
const DoctorTableData = styled.div`
  margin-top: 10px;
`;

