import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag,Input,Modal,Form,InputNumber, message,Select } from "antd";
import styled from "styled-components";

import { getDocumentRegistration,getDocumentRegistrationById, getDocumentStatusBySId, getListOfDocumentStatus, insertUpdateDocumentStatus } from "../../services/appServices/ProductionService";
import TopLayout from "../TopLayout";
import NavBar from "../Navbar/Navbar";
const { Option } = Select;


const DocumetnStatus = () => {

  const [obtaindata, setObtaindata] = useState();
  const [editModalVisibility, setEditModalVisibility] = useState(false);
  const [editingForm, setEditingForm] = useState({
    SId: "",
    DepartmentId: "",
    ApprovedBy: "",
    StatusId: "",
    EntryDate: "",
    UserId: "",
    Remarks: "",
  });
  const handleUpdate = (e) => {
    console.log(e,'this is data of status')
    setEditingForm(e);
    setEditModalVisibility(!editModalVisibility);
  }

  const onEditSave = (values) => {
    const data = { ...editingForm,ApprovedBy: editingForm?.ApprovedBy, DepartmentId: editingForm?.DepartmentId,StatusId: editingForm?.StatusId };

    insertUpdateDocumentStatus(data, (res) => {
      console.log(data,'this is edited in services')
        if (res.SuccessMsg === true) {
          message.info("Product edited successfully");
          setEditModalVisibility(!editModalVisibility);
          // setReloadModalTableOnCRUD(!reloadModalTableOnCRUD);
          
        } else {
          message.warning("Error, saving data!");
          // setReloadModalTableOnCRUD(!reloadModalTableOnCRUD);
        }
      });
      setTimeout(function () {
          window.location.reload();
         }, 1000);
    }
  const columns = [
    {
      title: "DocumentId",
      dataIndex: "DocumentId",
      key: "DocumentId",
    },
    {
      title: "SId",
      dataIndex: "SId",
      key: "SId",
    },
    {
      title: "DepartmentId",
      dataIndex: "DepartmentId",
      key: "DepartmentId",
    },
    {
      title: "Approved By",
      dataIndex: "ApprovedBy",
      key: "ApprovedBy",
    },
    {
      title: "Status Id",
      dataIndex: "StatusId",
      key: "StatusId",
    },
   
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
    
    {
      title: "Remarks",
      dataIndex: "Remarks",
      key: "Remarks",
    },

  
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button type="primary" ghost onClick={() => handleUpdate(record)}>
              Update Status
            </Button>
          </Space>
        );
      },
    },
  ];
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    if (inputValue !== "" && !isNaN(inputValue)) {
      setLoading(true);
      const data = {
        SId: inputValue,
      };
      getDocumentStatusBySId(data, (res) => {
        console.log(res?.documentStatus, "this is resitemslist");
        if (res?.documentStatus.length > 0) {
          console.log(res,'res from if')
          setObtaindata(res?.documentStatus);
        } else {
          setObtaindata([]);
        }
        setLoading(false);
      });
    } else {
      //console.log("enter valid id")
      // Display error message or do nothing
    }
  };

  const handleClickAll = () => {
    getListOfDocumentStatus((res) => {
      if (res?.documentStatus.length > 0) {
        setObtaindata(res.documentStatus);
      } else {
        console.log("out of if else");
      }
    });
  }
  useEffect(() => {
    
    getListOfDocumentStatus((res) => {
      if (res?.documentStatus.length > 0) {
        setObtaindata(res.documentStatus);
      } else {
        console.log("out of if else");
      }
    });
  }, []);
  console.log(editingForm,'this is upadaetd editing form')
  return (
    <>
    <TopLayout/>
    <NavBar/>
    <div 
    style={{padding:'7px'}}>
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
              <Button className="btn-load" onClick={handleClickAll}>
                Show All
              </Button>
            </div>
    <DoctorTableData>
      <div className="ant-card-head table-data">
        <Table dataSource={obtaindata} columns={columns} />
      </div>
    </DoctorTableData>
    <Modal
        title="Edit Document"
        open={editModalVisibility}
        destroyOnClose
        onOk={() => {
          onEditSave();
        }}
        width={500}
        //onCancel={hideModal}
        onCancel={() => {
          setEditModalVisibility(false);
        }}
        okText="Update"
        cancelText="Cancel"
      >
        <Form
          // initialValues={getInitialValues}

          // onFinish={handleSubmit}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          layout="horizontal"
          style={{
            // maxWidth: 500,
            marginTop: 10,
          }}
        >
          
          <Form.Item label="DepartmentId" name="DepartmentId" initialValue={editingForm.DepartmentId}
          rules={[
            {
              required: true,
             
            },
          ]}>
            <Select
            disabled

          placeholder="Select a option and change input text above"
          onChange={(e) => {
            setEditingForm((prev) => {
              return { ...prev, DepartmentId: e };
            });
          }}
          allowClear
        >
          <Option value="1">Collector</Option>
          <Option value="2">Malpot</Option>
          <Option value="3">Lekha Bivag</Option>
          <Option value="4">Sawari Bivag</Option>
        </Select>
            {/* <InputNumber
            onChange={(e) => {
              setEditingForm((prev) => {
                return { ...prev, DepartmentId: e };
              });
            }} /> */}
          </Form.Item>

          <Form.Item
            label="ApprovedBy"
            name="ApprovedBy"
            initialValue={editingForm.ApprovedBy}
            rules={[
              {
                required: true,
              },
            ]}
          >
             <Select
         
          onChange={(e) => {
            setEditingForm((prev) => {
              return { ...prev, ApprovedBy: e};
            });
          }}
          allowClear
        >
          <Option value="Utsav">Utsav</Option>
          <Option value="Sachiv">Sachiv</Option>
          <Option value="Mayor">Mayor</Option>
          <Option value="CDO">CDO</Option>
        </Select>           
          </Form.Item>
          <Form.Item label="StatusId" name="StatusId" initialValue={editingForm.StatusId}
          rules={[
            {
              required: true,
             
            },
          ]}>
            <Select
          placeholder="Select a option and change input text above"
          onChange={(e) => {
            setEditingForm((prev) => {
              return { ...prev, StatusId: e };
            });
          }}
          allowClear
        >
          <Option value="1">Pending</Option>
          <Option value="2">Approved</Option>
          <Option value="3">Rejected</Option>
          
        </Select>
            {/* <InputNumber 
            onChange={(e) => {
              setEditingForm((prev) => {
                return { ...prev, StatusId: e };
              });
            }}/> */}
          </Form.Item>
          
         
        </Form>
      </Modal>
    </>
  );
};

export default DocumetnStatus;
const DoctorTableData = styled.div`
  margin-top: 10px;
`;
