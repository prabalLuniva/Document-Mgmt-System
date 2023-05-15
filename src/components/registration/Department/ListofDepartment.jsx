import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag,Input } from "antd";
import styled from "styled-components";
import TopLayout from "../../TopLayout";
import { getListOfDepartment } from "../../../services/appServices/ProductionService";
import NavBar from "../../Navbar/Navbar";
import { useNavigate } from "react-router";



const ListofDepartment = () => {
  const navigate = useNavigate();
  const handleStatus = (e)=> {
    setTimeout(() => {
      navigate("/departmentdocstatus", {
        state: { enteredvalue: e },
      });
    })
  }

  const [obtaindata, setObtaindata] = useState();
  const columns = [
    {
      title: "DeportId",
      dataIndex: "DeportId",
      key: "DeportId",
    },
    {
      title: "OrgId",
      dataIndex: "OrgId",
      key: "OrgId",
    },
    {
      title: "DepartmentName",
      dataIndex: "DepartmentName",
      key: "DepartmentName",
    },
    {
      title: "DepartmentCode",
      dataIndex: "DepartmentCode",
      key: "DepartmentCode",
    },
    // {
    //   title: "Status Id",
    //   dataIndex: "Status Id",
    //   key: "Status Id",
    // },
   
    {
      title: "EntryDate",
      dataIndex: "EntryDate",
      key: "EntryDate",
    },
    {
      title: "UserId",
      dataIndex: "UserId",
      key: "UserId",
    },
    
    // {
    //   title: "Remarks",
    //   dataIndex: "Remarks",
    //   key: "Remarks",
    // },
    {
      title: "IsActive",
      dataIndex: "IsActive",
      key: "IsActive",
      render: (record, text) => {
        if (record) {
          return <Tag color={"green"}>Active</Tag>;
        } else {
          return <Tag color={"volcano"}>Not Active</Tag>;
        }
      },
    },
    {
      title: "Document Status",
      key: "action",
      render: (_, record) => {
        return (
          <>
            <Space size="middle">
              <Button onClick={() => handleStatus(record)}>Document Status</Button>
            </Space>
          </>
        );
      },
    },
  
  ];
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  // const handleClick = () => {
  //   if (inputValue !== "" && !isNaN(inputValue)) {
  //     setLoading(true);
  //     const data = {
  //       DId: inputValue,
  //     };
  //     getDocumentRegistrationById(data, (res) => {
  //       console.log(res?.documentRegistration, "this is resitemslist");
  //       if (res?.documentRegistration.length > 0) {
  //         console.log(res,'res from if')
  //         setObtaindata(res?.documentRegistration);
  //       } else {
  //         setObtaindata([]);
  //       }
  //       setLoading(false);
  //     });
  //   } else {
  //     //console.log("enter valid id")
  //     // Display error message or do nothing
  //   }
  // };
  useEffect(() => {
    
    getListOfDepartment((res) => {
      console.log(res,'this is res')
      if (res?.department.length > 0) {
        console.log(res.department,"hello im data of registration")
        setObtaindata(res.department);
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
    {/* <div>
              <Input
                id="input"
                type="number"
                style={{ width: 300 }}
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
              />
              <Button className="btn-load" onClick={handleClick}>
                Load
              </Button>
            </div> */}
    <DoctorTableData>
      <div className="ant-card-head table-data">
        <Table dataSource={obtaindata} columns={columns} />
      </div>
    </DoctorTableData>
    </>
  );
};

export default ListofDepartment;
const DoctorTableData = styled.div`
  margin-top: 10px;
`;

