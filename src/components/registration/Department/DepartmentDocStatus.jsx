import React, { useEffect, useState } from "react";
import {
  Button,
  Space,
  Table,
  Tag,
  Input,
  Modal,
  Form,
  Select,
  message,
} from "antd";
import styled from "styled-components";
import TopLayout from "../../TopLayout";
import {
  getDocumentStatusByDepartmentId,
  getListOfDepartment,
  insertUpdateDocumentStatus,
  updateDcumentStatusForDepartment,
} from "../../../services/appServices/ProductionService";
import NavBar from "../../Navbar/Navbar";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const DepartmentDocStatus = () => {
  //   const navigate = useNavigate
  const location = useLocation();

  const DeportId = location.state.enteredvalue.DeportId;

  const [editModalVisibility, setEditModalVisibility] = useState(false);
  const [editModalVisibilityRej, setEditModalVisibilityRej] = useState(false);
  const [editingForm, setEditingForm] = useState({
    SId: "",
    DepartmentId: "",
    ApprovedBy: "",
    StatusId: "",
    EntryDate: "",
    UserId: "",
    Remarks: "",
  });
  const [visible, setVisible] = useState(false);
  const [record, setRecord] = useState("DocumentPath");

  const showModal = (e) => {
    setRecord(e);
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const [obtaindata, setObtaindata] = useState();

  const handleStatus = (e) => {
    setEditingForm(e);
    setEditModalVisibility(!editModalVisibility);
  };
  const handleStatusRej = (e) => {
    setEditingForm(e);
    setEditModalVisibilityRej(!editModalVisibilityRej);
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
      title: "DepartmentName",
      dataIndex: "DepartmentName",
      key: "DepartmentName",
    },
    // {
    //   title: "DeportId",
    //   dataIndex: "DeportId",
    //   key: "DeportId",
    // },
    {
      title: "DocumentTitle",
      dataIndex: "DocumentTitle",
      key: "DocumentTitle",
    },

    {
      title: "ApprovedBy",
      dataIndex: "ApprovedBy",
      key: "ApprovedBy",
    },

    {
      title: "Show Document",
      key: "action",
      render: (_, record) => (
        console.log(record, "this is record of edit"),
        (
          <Space size="middle">
            <Link to={record.DocumentPath} onClick={() => showModal(record)}>
              View Document
            </Link>
          </Space>
        )
      ),
    },
    {
      title: "EntryDate",
      dataIndex: "EntryDate",
      key: "EntryDate",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
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
              <Button
                type="primary"
                disabled={record.Status === "Approved" || !record.IsActive}
                onClick={() => handleStatus(record)}
              >
                Approve
              </Button>
              <Button
                type="primary"
                disabled={record.Status === "Rejected" || !record.IsActive}
                danger
                onClick={() => handleStatusRej(record)}
              >
                Reject
              </Button>
            </Space>
          </>
        );
      },
    },
  ];
  const onEditSave = (values) => {
    const data = {
      ...editingForm,
      ApprovedBy: editingForm?.ApprovedBy,
      StatusId: 2,
      Remarks: editingForm?.Remarks,
    };

    updateDcumentStatusForDepartment(data, (res) => {
      console.log(data, "this is edited in services");
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
  };
  const onEditSaveRej = (values) => {
    const data = {
      ...editingForm,
      ApprovedBy: editingForm?.ApprovedBy,
      StatusId: 3,
      Remarks: editingForm?.Remarks,
    };

    updateDcumentStatusForDepartment(data, (res) => {
      console.log(data, "this is edited in services");
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
    }, 500);
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const data = {
      DepartmentId: DeportId,
    };
    getDocumentStatusByDepartmentId(data, (res) => {
      console.log(res?.documents, "this is resitemslist");
      if (res?.documents.length > 0) {
        console.log(res, "res from if");
        setObtaindata(res?.documents);
      } else {
        setObtaindata([]);
      }
      setLoading(false);
    });
  }, []);
  //   useEffect(() => {

  //     getListOfDepartment((res) => {
  //       console.log(res,'this is res')
  //       if (res?.department.length > 0) {
  //         console.log(res.department,"hello im data of registration")
  //         setObtaindata(res.department);
  //       } else {
  //         console.log("out of if else");
  //       }
  //     });
  //   }, []);
  return (
    <>
      <TopLayout />
      <NavBar />
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
          <Form.Item
            label="Remarks"
            name="Remarks"
            initialValue={editingForm.Remarks}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              onChange={(e) => {
                setEditingForm((prev) => {
                  return { ...prev, Remarks: e.target.value };
                });
              }}
            />

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
                  return { ...prev, ApprovedBy: e };
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
        </Form>
      </Modal>
      <Modal
        title="Reject Document"
        open={editModalVisibilityRej}
        destroyOnClose
        onOk={() => {
          onEditSaveRej();
        }}
        width={500}
        //onCancel={hideModal}
        onCancel={() => {
          setEditModalVisibilityRej(false);
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
            label="Remarks"
            name="Remarks"
            initialValue={editingForm.Remarks}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              onChange={(e) => {
                setEditingForm((prev) => {
                  return { ...prev, Remarks: e.target.value };
                });
              }}
            />

            {/* <InputNumber
            onChange={(e) => {
              setEditingForm((prev) => {
                return { ...prev, DepartmentId: e };
              });
            }} /> */}
          </Form.Item>

          <Form.Item
            label="RejectedBy"
            name="RejectedBy"
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
                  return { ...prev, ApprovedBy: e };
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
        </Form>
      </Modal>
      <Modal open={visible} onCancel={handleCancel} footer={null} width={300}>
        <img src={record.DocumentPath} alt="Image" className="modal-image" />
      </Modal>
    </>
  );
};

export default DepartmentDocStatus;
const DoctorTableData = styled.div`
  margin-top: 10px;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
`;
