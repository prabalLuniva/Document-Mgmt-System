import React, { useEffect, useState } from "react";
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
import { UploadOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Link, useNavigate} from "react-router-dom";

import {
  deleteDocumentRegistrationByDId,
  editDocumentRegistrationByDId,
  getDocumentRegistration,
  getDocumentRegistrationById,
  insertDocumentRegistration,
  insertUpdateRegistration,
} from "../../services/appServices/ProductionService";
import TopLayout from "../TopLayout";
import NavBar from "../Navbar/Navbar";

const DetailRegistration = () => {
  const [editingForm, setEditingForm] = useState({
    DartaNo: "",
    DocumentTitle: "",
    Organization: "",
    StateId: "",
    DistrictId: "",
    VDCMUNId: "",
    WardNo: "",
    Tole: "",
    Email: "",
    Phone: "",
    MobileNo: "",
    EntryDate: "",
    UserId: "",
    DocumentPath: "",
    IsActive: true,
    Remarks: "",
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [file, setFile] = useState(null);
  const [deleteModalVisibility, setDeleteModalVisibility] = useState(false);
  const [reloadModalTableOnCRUD, setReloadModalTableOnCRUD] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const [editModalVisibilityFile, setEditModalVisibilityFile] = useState(false);
  const [editModalVisibility, setEditModalVisibility] = useState(false);
  const handleDelete = (e) => {
    console.log(e, "this is e");
    setEditingForm(e);
    setDeleteModalVisibility(!deleteModalVisibility);
    // const data = {
    // DId: e?.DId,
    //};
    //deleteDocumentRegistrationByDId(data, (res) => {
    //console.log(res, "this is DId");
    //});
  };

  const handleEdit = (e) => {
    setEditingForm(e);
    setEditModalVisibility(!editModalVisibility);
    console.log(editingForm?.DartaNo, "this is editing");
  };

  const handleEditFile = (e) => {
    setEditingForm(e);
    setEditModalVisibilityFile(!editModalVisibilityFile);
  }
  const onEditSave = (values) => {

    console.log(values,"this is the values")
    const formData = new FormData();
    formData.append("DId", editingForm? editingForm.DId:0);
    formData.append("DartaNo", editingForm?.DartaNo);
    formData.append("DocumentTitle", editingForm?.DocumentTitle);
    formData.append("Organization", editingForm?.Organization);
    formData.append("StateId", editingForm?.StateId);
    formData.append("DistrictId", editingForm?.DistrictId);
    formData.append("VDCMUNId", editingForm?.WardNo);
    formData.append("Tole", editingForm?.Tole);
    formData.append("Email", editingForm?.Email);
    formData.append("Phone", editingForm?.Phone);
    formData.append("MobileNo", editingForm?.MobileNo);
    formData.append("EntryDate", editingForm?.EntryDate);
    formData.append("UserId", editingForm?.UserId);
    formData.append("MobileNo", editingForm?.MobileNo);
    formData.append("DocumentPath", editingForm?.DocumentPath);
    formData.append("IsActive", true);
    formData.append("Remarks", editingForm?.Remarks);

    insertUpdateRegistration(formData, (res) => {
      console.log(formData,'this is edited in services')
        if (res.SuccessMsg === true) {
          message.info("Product edited successfully");
          setEditModalVisibility(!editModalVisibility);
          setReloadModalTableOnCRUD(!reloadModalTableOnCRUD);
          
        } else {
          message.warning("Error, saving data!");
          setReloadModalTableOnCRUD(!reloadModalTableOnCRUD);
        }
      });
      // setTimeout(function () {
      //     window.location.reload();
      //    }, 1000);
    }
   
  const onEditFile = () => {
    const formData = new FormData();
    formData.append("DId", editingForm? editingForm.DId:0);
    formData.append("DartaNo", editingForm?.DartaNo);
    formData.append("DocumentTitle", editingForm?.DocumentTitle);
    formData.append("Organization", editingForm?.Organization);
    formData.append("StateId", editingForm?.StateId);
    formData.append("DistrictId", editingForm?.DistrictId);
    formData.append("VDCMUNId", editingForm?.WardNo);
    formData.append("Tole", editingForm?.Tole);
    formData.append("Email", editingForm?.Email);
    formData.append("Phone", editingForm?.Phone);
    formData.append("MobileNo", editingForm?.MobileNo);
    formData.append("EntryDate", editingForm?.EntryDate);
    formData.append("UserId", editingForm?.UserId);
    formData.append("MobileNo", editingForm?.MobileNo);
    formData.append("DocumentPath", file);
    formData.append("IsActive", true);
    formData.append("Remarks", editingForm?.Remarks);
    insertUpdateRegistration(formData, (res) => {
      console.log(formData,'this is deleting data')
      if (res.SuccessMsg === true) {
        message.info("Form deleted successfully");
        setReloadModalTableOnCRUD(!reloadModalTableOnCRUD);
      } else {
        message.warning("Error, saving data!");
        setReloadModalTableOnCRUD(!reloadModalTableOnCRUD);
      }
    });
    setTimeout(function () {
      window.location.reload();
     }, 1000);

  }
  

  const onDelete = () => {
    const data = { ...editingForm, IsActive: false };
    

    insertUpdateRegistration(data, (res) => {
      console.log(data,'this is deleting data')
      if (res.SuccessMsg === true) {
        message.info("Form deleted successfully");
        setReloadModalTableOnCRUD(!reloadModalTableOnCRUD);
      } else {
        message.warning("Error, saving data!");
        setReloadModalTableOnCRUD(!reloadModalTableOnCRUD);
      }
    });
    setTimeout(function () {
      window.location.reload();
     }, 1000);
  };

  const [obtaindata, setObtaindata] = useState();
  const columns = [
    {
      title: "DId",
      dataIndex: "DId",
      key: "DId",
    },
    {
      title: "DartaNo",
      dataIndex: "DartaNo",
      key: "DartaNo",
    },
    {
      title: "DocumentTitle",
      dataIndex: "DocumentTitle",
      key: "DocumentTitle",
    },
    {
      title: "Organization",
      dataIndex: "Organization",
      key: "Organization",
    },
    {
      title: "StateId",
      dataIndex: "StateId",
      key: "StateId",
    },
    {
      title: "DistrictId",
      dataIndex: "DistrictId",
      key: "DistrictId",
    },

    {
      title: "VDCMUNId",
      dataIndex: "VDCMUNId",
      key: "VDCMUNId",
    },
    {
      title: "WardNo",
      dataIndex: "WardNo",
      key: "WardNo",
    },
    {
      title: "Tole",
      dataIndex: "Tole",
      key: "Tole",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      key: "Phone",
    },

    {
      title: "MobileNo",
      dataIndex: "MobileNo",
      key: "MobileNo",
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
      title: "DocumentPath",
      dataIndex: "DocumentPath",
      key: "DocumentPath",
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
      title: "Remarks",
      dataIndex: "Remarks",
      key: "Remarks",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <>
            <Space size="middle">
              <Button onClick={() => handleDelete(record)}disabled={!record.IsActive}>Delete</Button>
              <Button onClick={() => handleEdit(record)} disabled={!record.IsActive}>Edit</Button>
              <Button onClick={() => handleEditFile(record)} disabled={!record.IsActive}>Edit File</Button>
            </Space>
          </>
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
        DId: inputValue,
      };
      getDocumentRegistrationById(data, (res) => {
        console.log(res?.documentRegistration, "this is resitemslist");
        if (res?.documentRegistration.length > 0) {
          console.log(res, "res from if");
          setObtaindata(res?.documentRegistration);
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
 const handleClickSup = () => {
  navigate("/detailsupportivedoc")
 }

 const handleClickAll = () => {
 
    getDocumentRegistration((res) => {
      console.log(res, "this is res");
      if (res?.DocumentRegistration.length > 0) {
        console.log(res.DocumentRegistration, "hello im data of registration");
        setObtaindata(res.DocumentRegistration);
      } else {
        console.log("out of if else");
      }
    });

 }

  useEffect(() => {
    getDocumentRegistration((res) => {
      console.log(res, "this is res");
      if (res?.DocumentRegistration.length > 0) {
        console.log(res.DocumentRegistration, "hello im data of registration");
        setObtaindata(res.DocumentRegistration);
      } else {
        console.log("out of if else");
      }
    });
  }, []);
  console.log(editingForm, "this is editing form");
  return (
    <>
      <div>
        <TopLayout />
        <NavBar/>
        <div 
        style={{padding:'10px'}}
        >
          <h4>Registration Details</h4>
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
          <Button className="btn-load" onClick={handleClickAll}
          style={{marginLeft:'10px'}}>
            Show all
          </Button>

          
          {/* 
          <Button className="btn-load" onClick={handleClickSup} 
          style={{margin:"30px"}}>
            Supportive Document
          </Button>
          <Link to="/trackdocumentstatus">Track Document</Link>
          <Link to="/listofdepartment">List of Department</Link> */}
        </div>
        <DoctorTableData>
          <div className="ant-card-head table-data">
            <Table dataSource={obtaindata} columns={columns} />
          </div>
        </DoctorTableData>
      </div>
      <Modal
        title="Edit Document"
        open={editModalVisibility}
        onOk={() => {
          onEditSave();
        }}
        width={500}
        destroyOnClose
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
         
          <Form.Item
            label="DocumentTitle"
            name="DocumentTitle"
            initialValue={editingForm.DocumentTitle}
            rules={[
              {
                required: true,
                message: "Document Title is required!",
              },
            ]}
          >
            <Input 
            onChange={(e) => {
              setEditingForm((prev) => {
                return { ...prev, DocumentTitle: e.target.value };
              });
            }}/>
          </Form.Item>
          <Form.Item
            label="Organization"
            name="Organization"
            initialValue={editingForm.Organization}
            rules={[
              {
                required: true,
               
              },
            ]}
          >
            <Input
            onChange={(e) => {
              setEditingForm((prev) => {
                return { ...prev, Organization: e.target.value };
              });
            }} />
          </Form.Item>
          <Form.Item label="StateId" name="StateId" initialValue={editingForm.StateId}
          rules={[
            {
              required: true,
             
            },
          ]}>
            <InputNumber
            onChange={(e) => {
              setEditingForm((prev) => {
                return { ...prev, StateId: e };
              });
            }} />
          </Form.Item>
          <Form.Item label="DistrictId" name="DistrictId" initialValue={editingForm.DistrictId}
          rules={[
            {
              required: true,
             
            },
          ]}>
            <InputNumber
            onChange={(e) => {
              setEditingForm((prev) => {
                return { ...prev, DistrictId: e };
              });
            }} />
          </Form.Item>
          <Form.Item label="VDCMUNId" name="VDCMUNId" initialValue={editingForm.VDCMUNId}
          rules={[
            {
              required: true,
             
            },
          ]}>
            <InputNumber 
            onChange={(e) => {
              setEditingForm((prev) => {
                return { ...prev, VDCMUNId: e };
              });
            }}/>
          </Form.Item>
          <Form.Item label="WardNo" name="WardNo" initialValue={editingForm.WardNo}
          rules={[
            {
              required: true,
             
            },
          ]}>
            <InputNumber 
            onChange={(e) => {
              setEditingForm((prev) => {
                return { ...prev, WardNo: e };
              });
            }}/>
          </Form.Item>
          <Form.Item label="Tole" name="Tole" initialValue={editingForm.Tole}>
            <Input 
            onChange={(e) => {
              setEditingForm((prev) => {
                return { ...prev, Tole: e.target.value };
              });
            }}/>
          </Form.Item>
          <Form.Item label="Email" name="Email" initialValue={editingForm.Email}
           rules={[
            {type: 'email',}]}>
            <Input 
            onChange={(e) => {
              setEditingForm((prev) => {
                return { ...prev, Email: e.target.value };
              });
            }}/>
          </Form.Item>
          <Form.Item label="Phone" name="Phone" initialValue={editingForm.Phone}>
            <InputNumber 
            onChange={(e) => {
              setEditingForm((prev) => {
                return { ...prev, Phone: e };
              });
            }}/>
          </Form.Item>
          <Form.Item label="MobileNo" name="MobileNo" initialValue={editingForm.MobileNo}>
            <InputNumber 
            onChange={(e) => {
              setEditingForm((prev) => {
                return { ...prev, MobileNo: e };
              });
            }}/>
          </Form.Item>
          <Form.Item label="EntryDate" name="EntryDate" initialValue={editingForm.EntryDate}
          rules={[
            {
              required: true,
             
            },
          ]}>
           <Input
           onChange={(e) => {
            setEditingForm((prev) => {
              return { ...prev, EntryDate: e };
            });
          }}/>
          </Form.Item>
          {/* <Form.Item initialValue={editingForm.DocumentPath}
          rules={[
            {
              required: true,
             
            },
          ]}
          >
            <div style={{
            marginLeft:'40%',
          }}>
              <label htmlFor="file">Choose a file:</label>
              
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                //onChange={(e) => {
                //   handleFileChange,
                //   setEditingForm((prev) => {
                //     return { ...prev, DocumentPath: e.target.value };
                //   });
                // }}
              />
            </div>
          </Form.Item> */}

          <Form.Item label="UserId" name="UserId" initialValue={editingForm.UserId}
          rules={[
            {
              required: true,
             
            },
          ]}>
            <Input 
            onChange={(e) => {
              setEditingForm((prev) => {
                return { ...prev, UserId: e.target.value };
              });
            }}/>
          </Form.Item>

          {/* <Form.Item label="is Active" valuePropName="checked" initialValue={editingForm.IsActive}>
            <Switch />
          </Form.Item> */}

          <Form.Item label="Remarks" name="Remarks" initialValue={editingForm.Remarks}>
            <Input 
            onChange={(e) => {
              setEditingForm((prev) => {
                return { ...prev, Remarks: e.target.value };
              });
            }}/>
          </Form.Item>
         
        </Form>
      </Modal>
      <Modal
        okText="Yes"
        onOk={() => {
          onDelete();
          setDeleteModalVisibility(!deleteModalVisibility);
        }}
        width={300}
        visible={deleteModalVisibility}
        onCancel={() => {
          setDeleteModalVisibility(false);
        }}
      >
        Are you sure you want to delete the product?
      </Modal>
      <Modal
        okText="Yes"
        onOk={() => {
          onEditFile();
          setEditModalVisibilityFile(!editModalVisibilityFile);
        }}
        destroyOnClose
        width={500}
        visible={editModalVisibilityFile}
        onCancel={() => {
          setDeleteModalVisibility(false);
        }}
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
        <Form.Item initialValue={editingForm.DocumentPath}
          rules={[
            {
              required: true,
             
            },
          ]}
          >
            <div style={{
            marginLeft:'40%',
          }}>
              <label htmlFor="file">Choose a file:</label>
              
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                //onChange={(e) => {
                //   handleFileChange,
                //   setEditingForm((prev) => {
                //     return { ...prev, DocumentPath: e.target.value };
                //   });
                // }}
              />
            </div>
          </Form.Item>
          </Form>
      </Modal>
    </>
  );
};

export default DetailRegistration;
const DoctorTableData = styled.div`
  margin-top: 10px;
  width: 100%; 
  overflow-x: auto; 
  white-space: nowrap; 
`;
