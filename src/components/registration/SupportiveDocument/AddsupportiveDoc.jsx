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
import TopLayout from "../../TopLayout";
import { insertSupportingDocument } from "../../../services/appServices/ProductionService";

const UploadSupDoc = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedId, setSelectedId] = useState(id);
  const [bannerurl, setbannerurl] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [buttondisable, setButtondisable] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  const SFormData = location.state.enteredvalue;
      console.log(SFormData,'this is the values of state')

//   const bannerprops = {
//     name: "file",
//     action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
//     headers: {
//       authorization: "authorization-text",
//     },
//     onChange(info) {
//       if (info.file.status !== "uploading") {
//         console.log(info.file, info.fileList, "infodata");
//         console.log(info.fileList.name, "infofilename");
//         setbannerurl(info.file);
//       }
//       if (info.file.status === "done") {
//         message.success(`${info.file.name} file uploaded successfully`);
//       } else if (info.file.status === "error") {
//         message.error(`${info.file} file upload failed.`);
//       }
//     },
//   };
  const [file, setFile] = useState(null);

  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0]);
  // };
  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    const filesArray = [];
  
    for (let i = 0; i < selectedFiles.length; i++) {
      filesArray.push(selectedFiles[i]);
    }
  
    setFile(filesArray);
  };

  // const SFormData = JSON.parse(localStorage.getItem("documentData"));
  // console.log(SFormData,"this is loacal storage")

//   const props = {
//     name: "file",
//     action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
//     headers: {
//       authorization: "authorization-text",
//     },
//     onChange(info) {
//       if (info.file.status !== "uploading") {
//         console.log(info.file, info.fileList, "infodata");
//         console.log(info.fileList.name, "infofilename");
//         setImageUrl(info.file);
//       }
//       if (info.file.status === "done") {
//         message.success(`${info.file.name} file uploaded successfully`);
//       } else if (info.file.status === "error") {
//         message.error(`${info.file.name} file upload failed.`);
//       }
//     },
//   };
  useEffect(() => {
    console.log(selectedId, "sekectednbsdnasb");
  }, [id]);

  const handleSubmit = () => {
    console.log(file,"this is supportive files")
    const formData = new FormData();
    formData.append("DocId", SFormData?.DId);
    formData.append("DocumentTitle", SFormData?.DocumentTitle);
    formData.append("UploadedDate", SFormData?.EntryDate);
    formData.append("UserId", SFormData?.UserId);
    // formData.append("MobileNo", values?.MobileNo);
    for (let i = 0; i < file.length; i++) {
      formData.append('DocumentPath', file[i]);
    }
   // formData.append("DocumentPath", file);
    formData.append("IsActive", SFormData?.IsActive || true);


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
    console.log(formData, "this formdata");
    insertSupportingDocument(formData, (res) => {
      console.log(res, "i am response");
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
        }, 4000);
      } else {
        notification.warning("Error!");
      }
      navigate("/detailregistration");
    });
  };

  return (
    <ClientComponents>
      <TopLayout />
      <div className="">
        <Card
          title="Supporting Document Details"
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
              {/* <Form.Item label="DocId:" name="DocId" value="DocId">
                <InputNumber />
              </Form.Item>
              <Form.Item
                label="DocumentTitle"
                name="DocumentTitle"
                value="DocumentTItle"
              >
                <Input />
              </Form.Item> */}
              
               <Form.Item>
                <div style={{
            marginLeft:'90%',
          }}>
                  <label htmlFor="file">Supporting File:</label>
                  <input
                    type="file"
                    multiple
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                  />
                </div>
              </Form.Item>
             
              {/* <Form.Item label="UserId" name="UserId" value="UserId">
                <Input />
              </Form.Item>
              <Form.Item label="EntryDate" name="EntryDate" value="EntryDate">
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
              <Form.Item label="is Active" valuePropName="checked">
                <Switch />
              </Form.Item>
              */}


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
              
{/* 
              <Form.Item label="Remarks" name="Remarks" value="Remarks">
                <Input />
              </Form.Item> */}
              <Form.Item>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    disabled={buttondisable}
                    htmlType="submit"
                    // disabled={butDis}
                    type="primary"
                    className="sumit-button"
                  >
                    Submit
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

export default UploadSupDoc;
const ClientComponents = styled.div``;
