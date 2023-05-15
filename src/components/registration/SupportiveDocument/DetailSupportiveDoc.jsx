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
import styled from "styled-components";

//import { getDocumentRegistration,getDocumentRegistrationById } from "../../services/appServices/ProductionService";
import TopLayout from "../../TopLayout";
import {
  deleteSupportingDoc,
  getSupportingDocumentById,
  getSupportiveDocument,
  insertUpdateSupportingDocument,
} from "../../../services/appServices/ProductionService";
import NavBar from "../../Navbar/Navbar";

const DetailSupportiveDoc = () => {
  const [obtaindata, setObtaindata] = useState();
  const [editingForm, setEditingForm] = useState({
    SDId: "",
    DocId: "",
    DocumentTitle: "",
    UploadedDate: "",
    UserId: "",
    DocumentPath: "",
    IsActive: true,
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [file, setFile] = useState(null);
  const [deleteModalVisibility, setDeleteModalVisibility] = useState(false);
  const [reloadModalTableOnCRUD, setReloadModalTableOnCRUD] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const [editModalVisibility, setEditModalVisibility] = useState(false);
  const handleDelete = (e) => {
    console.log(e, "this is e");
    setEditingForm(e);
    setDeleteModalVisibility(!deleteModalVisibility);
  
  };

  const handleEdit = (e) => {
    setEditingForm(e);
    setEditModalVisibility(!editModalVisibility);
    console.log(editingForm, "this is editing");
  };

  const onEditSave = () => {
    const formData = new FormData();
    formData.append("SDId", editingForm ? editingForm.SDId : 0);
    formData.append("DocId", editingForm?.DocId);
    formData.append("DocumentTitle", editingForm?.DocumentTitle);
    formData.append("UserId", editingForm?.UserId);
    // for (let i = 0; i < file.length; i++) {
    //   formData.append('DocumentPath', file[i]);
    // }
    formData.append("DocumentPath", file);
    formData.append("UploadedDate", editingForm?.UploadedDate);
    formData.append("IsActive", true);
    console.log(formData, "this is updated data");

    insertUpdateSupportingDocument(formData, (res) => {
      console.log(formData, "this is edited in services");
      if (res.SuccessMsg === true) {
        message.info("Product edited successfully");
        setEditModalVisibility(!editModalVisibility);
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

  const onDelete = () => {
    const data = {
      SDId: editingForm?.SDId,
    };
    deleteSupportingDoc(data, (res) => {
      console.log(data, "this is edited in services");
      if (res.SuccessMsg === true) {
        message.info("Product deleted successfully");
        setEditModalVisibility(!editModalVisibility);
        setReloadModalTableOnCRUD(!reloadModalTableOnCRUD);
      } else {
        message.warning("Error, deleting data!");
        setReloadModalTableOnCRUD(!reloadModalTableOnCRUD);
      }
    });
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  };
  //   deleteSupportiveDoc(data, (res) => {
  //     console.log(data, "this id is deleting");

  //     if (res.SuccessMsg === true) {
  //       message.info("Form deleted successfully");
  //       setReloadModalTableOnCRUD(!reloadModalTableOnCRUD);
  //     } else {
  //       message.warning("Error, saving data!");
  //       setReloadModalTableOnCRUD(!reloadModalTableOnCRUD);
  //     }
  //     setLoading(false);
  //   });
  // };

    // console.log(editingForm,'this is edititng form for detele')
    // const data = {
    //   ...editingForm,
    //   IsActive: false,
    // };

    // insertUpdateSupportingDocument(data, (res) => {
    //   console.log(data, "this is deleting data");
    //   if (res.SuccessMsg === true) {
    //     message.info("Form deleted successfully");
    //     setReloadModalTableOnCRUD(!reloadModalTableOnCRUD);
    //   } else {
    //     message.warning("Error, saving data!");
    //     setReloadModalTableOnCRUD(!reloadModalTableOnCRUD);
    //   }
    // });
    // setTimeout(function () {
    //   window.location.reload();
    //  }, 1000);
 
  //   console.log(editingForm,'this is edititng form for delete')
  //   const formData = new FormData();
  //   formData.append("SDId", editingForm ? editingForm.SDId : 0);
  //   formData.append("DocId", editingForm?.DocId);
  //   formData.append("DocumentTitle", editingForm?.DocumentTitle);
  //   formData.append("UserId", editingForm?.UserId);
  //   // for (let i = 0; i < file.length; i++) {
  //   //   formData.append('DocumentPath', file[i]);
  //   // }
  //   formData.append("DocumentPath", editingForm?.DocumentPath);
  //   formData.append("UploadedDate", editingForm?.UploadedDate);
  //   // values?.DocIsActive === undefined || values?.DocIsActive === true
  //   //       ? true
  //   //       : false,
  //   formData.append("IsActive", false);
  //   console.log(formData, "this is updated data");

  //   insertUpdateSupportingDocument(formData, (res) => {
  //     console.log(formData, "this is edited in services");
  //     if (res.SuccessMsg === true) {
  //       message.info("Product edited successfully");
  //       setEditModalVisibility(!editModalVisibility);
  //       setReloadModalTableOnCRUD(!reloadModalTableOnCRUD);
  //     } else {
  //       message.warning("Error, saving data!");
  //       setReloadModalTableOnCRUD(!reloadModalTableOnCRUD);
  //     }
  //   });
  //   // setTimeout(function () {
  //   //     window.location.reload();
  //   //    }, 1000);
  // };

  const columns = [
    {
      title: "SDId",
      dataIndex: "SDId",
      key: "SDId",
    },
    {
      title: "DocId",
      dataIndex: "DocId",
      key: "DocId",
    },
    {
      title: "DocumentTitle",
      dataIndex: "DocumentTitle",
      key: "DocumentTitle",
    },
    {
      title: "DocumentPath",
      dataIndex: "DocumentPath",
      key: "DocumentPath",
    },
    // {
    //   title: "Status Id",
    //   dataIndex: "Status Id",
    //   key: "Status Id",
    // },
    {
      title: "UserId",
      dataIndex: "UserId",
      key: "UserId",
    },
    {
      title: "UploadedDate",
      dataIndex: "UploadedDate",
      key: "UploadedDate",
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
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <>
            <Space size="middle">
              <Button onClick={() => handleDelete(record)}>Delete</Button>
              <Button onClick={() => handleEdit(record)}>Edit</Button>
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
        SDId: inputValue,
      };
      getSupportingDocumentById(data, (res) => {
        console.log(res?.SupportingDocument, "this is resitemslist");
        if (res?.SupportingDocument.length > 0) {
          console.log(res, "res from if");
          setObtaindata(res?.SupportingDocument);
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

  const handleClickAll = () =>{
    getSupportiveDocument((res) => {
      console.log(res, "this is res");
      if (res?.supportingDocuments.length > 0) {
        console.log(
          res.supportingDocuments,
          "hello im data of supportive document"
        );
        setObtaindata(res.supportingDocuments);
      } else {
        console.log("out of if else");
      }
    });
  }
  useEffect(() => {
    getSupportiveDocument((res) => {
      console.log(res, "this is res");
      if (res?.supportingDocuments.length > 0) {
        console.log(
          res.supportingDocuments,
          "hello im data of supportive document"
        );
        setObtaindata(res.supportingDocuments);
      } else {
        console.log("out of if else");
      }
    });
  }, []);
  return (
    <>
      <TopLayout />
      <NavBar/>
      <div style={{padding:'7px'}}>
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
      </div>
      <DoctorTableData>
        <div className="ant-card-head table-data">
          <Table dataSource={obtaindata} columns={columns} />
        </div>
      </DoctorTableData>
      <Modal
        title="Edit Supportive Document"
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
          <Form.Item
            label="DocId:"
            name="DocId"
            initialValue={editingForm.DocId}
          >
            <InputNumber
              onChange={(e) => {
                setEditingForm((prev) => {
                  return { ...prev, DocId: e };
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="DocumentTitle"
            name="DocumentTitle"
            initialValue={editingForm.DocumentTitle}
          >
            <Input
              onChange={(e) => {
                setEditingForm((prev) => {
                  return { ...prev, DocumentTitle: e.target.value };
                });
              }}
            />
          </Form.Item>
          <Form.Item>
            <div
              style={{
                marginLeft: "40%",
              }}
            >
              <label htmlFor="file">Supporting File:</label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
              />
            </div>
          </Form.Item>
          {/* <Form.Item initialValue={editingForm.DocumentPath}
          >
            <div style={{
            marginLeft:'40%',
          }}>
              <label htmlFor="file">Choose a file:</label>
              
              <input
                type="file"
                multiple
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

          <Form.Item
            label="UserId"
            name="UserId"
            initialValue={editingForm.UserId}
          >
            <InputNumber
              onChange={(e) => {
                setEditingForm((prev) => {
                  return { ...prev, UserId: e };
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="EntryDate"
            name="EntryDate"
            initialValue={editingForm.UploadedDate}
          >
            <Input
              onChange={(e) => {
                setEditingForm((prev) => {
                  return { ...prev, UploadedDate: e };
                });
              }}
            />
          </Form.Item>

          {/* <Form.Item label="is Active" valuePropName="checked" initialValue={editingForm.IsActive}>
            <Switch />
          </Form.Item>

          <Form.Item label="Remarks" name="Remarks" initialValue={editingForm.Remarks}>
            <Input 
            onChange={(e) => {
              setEditingForm((prev) => {
                return { ...prev, Remarks: e.target.value };
              });
            }}/>
          </Form.Item> */}
        </Form>
      </Modal>
      <Modal
        okText="Yes"
        onOk={() => {
          onDelete();
          setDeleteModalVisibility(!deleteModalVisibility);
        }}
        width={300}
        open={deleteModalVisibility}
        onCancel={() => {
          setDeleteModalVisibility(false);
        }}
      >
        Are you sure you want to delete the product?
      </Modal>
    </>
  );
};

export default DetailSupportiveDoc;
const DoctorTableData = styled.div`
  margin-top: 10px;
`;
