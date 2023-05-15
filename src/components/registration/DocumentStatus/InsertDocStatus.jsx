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
import { useNavigate, useParams } from "react-router-dom";
import TopLayout from "../../TopLayout";
import { insertSupportingDocument } from "../../../services/appServices/ProductionService";

const InsertDocStatus = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedId, setSelectedId] = useState(id);
  const [bannerurl, setbannerurl] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [buttondisable, setButtondisable] = useState(false);
  const navigate = useNavigate();


//   const [file, setFile] = useState(null);

  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0]);
  // };
//   const handleFileChange = (event) => {
//     const selectedFiles = event.target.files;
//     const filesArray = [];
  
//     for (let i = 0; i < selectedFiles.length; i++) {
//       filesArray.push(selectedFiles[i]);
//     }
  
//     setFile(filesArray);
//   };

//   const SFormData = JSON.parse(localStorage.getItem("documentData"));
//   console.log(SFormData,"this is loacal storage")



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

export default InsertDocStatus;
const ClientComponents = styled.div``;
