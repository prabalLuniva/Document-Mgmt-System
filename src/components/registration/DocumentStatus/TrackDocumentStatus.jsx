import React ,{ useEffect, useState } from 'react'
import {
    Button,
    Space,
    Table,
    Tag,
    Input,
    Modal,
    Form,
    InputNumber,
    DatePicker,
    Upload,
    Switch,
    message,
  
  } from "antd";
  import styled from "styled-components"
  import TopLayout from "../../TopLayout";
import { getTrackOfDocument } from '../../../services/appServices/ProductionService';
import NavBar from '../../Navbar/Navbar';
import { Link } from 'react-router-dom';



const TrackDocumentStatus = () => {
    const [obtaindata, setObtaindata] = useState();
    const [visible, setVisible] = useState(false);
    const [record, setRecord] = useState("DocumentPath");

  const showModal = (e) => {
    setRecord(e);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

const columns = [
    {
      title: "DId",
      dataIndex: "DId",
      key: "DId",
    },
    {
      title: "SId",
      dataIndex: "SId",
      key: "SId",
    },
    {
      title: "DocumentTitle",
      dataIndex: "DocumentTitle",
      key: "DocumentTitle",
    },
    {
      title: "DepartmentName",
      dataIndex: "DepartmentName",
      key: "DepartmentName",
    },
    {
      title: "ApprovedBy",
      dataIndex: "ApprovedBy",
      key: "ApprovedBy",
    },

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
        title: "Status",
        dataIndex: "Status",
        key: "Status",
        render: (record, {tags}) => {
            // <>
            // {tags.map((tag)=>{
            //     if(tag ==='Approved'){
            //         color='green'
            //     }
            // })}
            // </>
          if (record==='Approved') {
            return <Tag color={"green"}>Approved</Tag>;
          } else if(record==='Rejected') {
            return <Tag color={"volcano"}>Rejected</Tag>;
          }
          else{
            return <Tag color={"geekblue"}>Pending</Tag>;

          }
        },
      },

      {
        title: 'Show Document',
        key: 'action',
        render: (_, record) => (
          console.log(record,'this is record of edit'),
          <Space size="middle">
            <Link to={record.DocumentPath} onClick={() => showModal(record)}>
        View Document
      </Link>
          </Space>
        ),
      },
      
  ];
  useEffect(() => {
    getTrackOfDocument((res) => {
      console.log(res, "this is res");
      if (res?.documents.length > 0) {
        console.log(
          res.documents,
          "hello im data of supportive document"
        );
        setObtaindata(res.documents);
      } else {
        console.log("out of if else");
      }
    });
  }, []);
  return (
    <>
      <TopLayout />
      <NavBar/>
      <div>
        {/* <Input
          id="input"
          type="number"
          style={{ width: 300 }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button className="btn-load" onClick={handleClick}>
          Load
        </Button> */}
      </div>
      <DoctorTableData>
        <div className="ant-card-head table-data">
          <Table dataSource={obtaindata} columns={columns} />
        </div>
      </DoctorTableData>
      <Modal open={visible} onCancel={handleCancel} footer={null} width={300}>
        
        <img src={record.DocumentPath} alt="Image" className="modal-image" />
      </Modal>
    </>
  )
}

export default TrackDocumentStatus
const DoctorTableData = styled.div`
  margin-top: 10px;
`;
