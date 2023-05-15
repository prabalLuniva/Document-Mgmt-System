import React, { useEffect } from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Switch,
  Upload,
  message,
  notification,
} from "antd";
import { useState } from "react";
import styled from "styled-components";
//import { InsertUpdateClientDetailsluniva } from "../../services/appServices/ProductionServices";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import TopLayout from "../TopLayout";
import { insertDocumentRegistration } from "../../services/appServices/ProductionService";


const UploadDoc = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedId, setSelectedId] = useState(id);
  const [bannerurl, setbannerurl] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [buttondisable, setButtondisable] = useState(false);
  const navigate = useNavigate();
  

  const bannerprops = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList, "infodata");
        console.log(info.fileList.name, "infofilename");
        setbannerurl(info.file);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file} file upload failed.`);
      }
    },
  };
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList, "infodata");
        console.log(info.fileList.name, "infofilename");
        setImageUrl(info.file);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  useEffect(() => {
    console.log(selectedId, "sekectednbsdnasb");
  }, [id]);

  const handleSubmit = (values) => {
    console.log(values,"this is a values")
    const formData = new FormData();
    // formData.append("DartaNo", values?.DartaNo);
    formData.append("DocumentTitle", values?.DocumentTitle);
    formData.append("Organization", values?.Organization);
    formData.append("StateId", values?.StateId);
    formData.append("DistrictId", values?.DistrictId);
    formData.append("VDCMUNId", values?.WardNo);
    formData.append("Tole", values?.Tole);
    formData.append("Email", values?.Email);
    formData.append("Phone", values?.Phone);
    formData.append("MobileNo", values?.MobileNo);
    formData.append("EntryDate", values?.EntryDate);
    formData.append("UserId", values?.UserId);
    formData.append("MobileNo", values?.MobileNo);
    formData.append("DocumentPath", file);
    formData.append("IsActive", values?.IsActive || true);
    formData.append("Remarks", values?.Remarks);

    //  formData.append("file", file);
    //let data = {
    //  DId: e?.DId,
    // DartaNo: e?.DartaNo,
    //DocumentTitle: e?.DocumentTitle,
    // Organization: e?.Organization,
    //  StateId: e?.StateId,
    //  DistrictId: e?.DistrictId,
    //  VDCMUNId: e?.VDCMUNId,
    // WardNo: e?.WardNo,
    //  Tole: e?.Tole,
    //  Email: e?.Email,
    //  Phone: e?.Phone,
    //  EntryDate: e?.EntryDate?.format("YYYY-MM-DD"),
    //  MobileNo: e?.MobileNo,
    //  UserId: e?.UserId,
    //  DocumentPath: file.files,
    //  Remarks: e?.Remarks,
    //  IsActive: e?.IsActive || true,
    // localStorage.setItem("documentData", JSON.stringify(values));
    // console.log(formData, "this formdata");
    insertDocumentRegistration(formData, (res) => {
      // localStorage.setItem("documentData", JSON.stringify(res));
      // const SFormData = JSON.parse(localStorage.getItem("documentData"));
  // console.log(SFormData,"this is loacal storage")
      // console.log(res, "i am response");
      if (res?.SuccessMsg == true) {
        notification.success(
          "DOcument registration details Added Successfully"
        );
        notification.config({
          placement: "topRight",
          duration: 3,
          style: {
            backgroundColor: "#f6ffed",
            border: "1px solid #b7eb8f",
          },
        });
        setButtondisable(true);
        setTimeout(function () {
          window.location.reload();
        }, 1000);

      } else {
        notification.warning("Error!");
      }
      setTimeout(() => {
        navigate("/insertsupportivedoc", {
          state: { enteredvalue: res },
        });
      })
  
      // navigate("/insertsupportivedoc");
    });
  };


  return (
    <ClientComponents>
      <TopLayout />
      <div className="">
        <Card
          title="Upload New Document Registration"
          bordered={false}
          style={
            {
              // width: 1240,
            }
          }
        >
          <Col span={24}>
            <Form
              // initialValues={getInitialValues}

              onFinish={handleSubmit}
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
              {/* <Form.Item label="Darta No:" name="DartaNo" value="DartaNo">
                <InputNumber />
              </Form.Item> */}
              <Form.Item
                label="DocumentTitle"
                name="DocumentTitle"
                value="DocumentTItle"
                rules={[
                  {
                    required: true,
                    message: "Document Title is required!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Organization"
                name="Organization"
                value="Organization"
                rules={[
                  {
                    required: true,
                    
                  },
                ]}
              >
                <Input 
               />
              </Form.Item>
              <Form.Item label="StateId" name="StateId" value="StateId"
               rules={[
                {
                  required: true,
                  
                },
              ]}>
                <InputNumber 
                />
              </Form.Item>
              <Form.Item
                label="DistrictId"
                name="DistrictId"
                value="DistrictId"
                rules={[
                  {
                    required: true,
                    
                  },
                ]}
              >
                <InputNumber 
                />
              </Form.Item>
              <Form.Item label="VDCMUNId" name="VDCMUNId" value="VDCMUNId"
               rules={[
                {
                  required: true,
                  
                },
              ]}>
                <InputNumber 
                />
              </Form.Item>
              <Form.Item label="WardNo" name="WardNo" value="WardNo"
               rules={[
                {
                  required: true,
                  
                },
              ]}>
                <InputNumber />
              </Form.Item>
              <Form.Item label="Tole" name="Tole" value="Tole"
               rules={[
                {
                  required: true,
                  
                },
              ]}>
                <Input />
              </Form.Item>
              <Form.Item label="Email" name="Email" value="Email"
              rules={[
                {type: 'email',}]}>
              
                <Input />
              </Form.Item>
              <Form.Item label="Phone" name="Phone" value="Phone">
                <InputNumber />
              </Form.Item>
              <Form.Item label="MobileNo" name="MobileNo" value="MobileNo"
               rules={[
                {
                  required: true,
                  
                },
              ]}>
                <InputNumber />
              </Form.Item>
              <Form.Item label="EntryDate" name="EntryDate" value="EntryDate"
               rules={[
                {
                  required: true,
                  
                },
              ]}>
                <DatePicker
                  rules={[
                    {
                      required: true,
                      message: "Date is required!",
                    },
                  ]}
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Form.Item
               rules={[
                {
                  required: true,
                  
                },
              ]}>
                <div style={{
            marginLeft:'84%',
          }}>
                  <label htmlFor="file">Main File:</label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                  />
                </div>
              </Form.Item>

              <Form.Item label="UserId" name="UserId" value="UserId"
               rules={[
                {
                  required: true,
                  
                },
              ]}>
                <Input 
                />
              </Form.Item>

              {/* <Form.Item label="Main File" name="MainFile" value="MainFile">
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="text"
                  maxCount={1}
                >
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item label="Supportive FIle" name="ClientLogo">
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item> */}
              {/* <Form.Item label="is Active" valuePropName="checked">
                <Switch />
              </Form.Item> */}

              <Form.Item label="Remarks" name="Remarks" value="Remarks">
                <Input />
              </Form.Item>
              <Form.Item>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    disabled={buttondisable}
                    htmlType="submit"
                    // disabled={butDis}
                    type="primary"
                    className="sumit-button"
                  >
                    Submit and Next
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Col>
        </Card>
      </div>
    </ClientComponents>
  );
};

export default UploadDoc;
const ClientComponents = styled.div``;
