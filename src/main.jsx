import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Registration from "./pages/Registration";
import ChalaniDocument from "./pages/ChalaniDocument";
import UploadDoc from "./components/registration/UploadNewReg";
import DetailRegistration from "./components/registration/DetailRegistration";
import DocumetnStatus from "./components/registration/DocumentStatus";
import CreateChalani from "./components/CreateDocument/CreateChalaniDocument";
import DetailSupportiveDoc from "./components/registration/SupportiveDocument/DetailSupportiveDoc";
import UploadSupDoc from "./components/registration/SupportiveDocument/AddsupportiveDoc";
import TrackDocumentStatus from "./components/registration/DocumentStatus/TrackDocumentStatus";
import ListofDepartment from "./components/registration/Department/ListofDepartment";
import DepartmentDocStatus from "./components/registration/Department/DepartmentDocStatus";
import GetDocumentStatForAllDep from "./components/registration/Department/getDocumentStatForAllDep";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    
  },

  //route for main registration
  {
    path: "/registration",
    element: <Registration/>,
    
  },
  {
    path: "/uploaddocument",
    element: <UploadDoc/>,
    
  },
  {
    path: "/detailregistration",
    element: <DetailRegistration/>,
    
  },
  

  //route for supportive document
  {
    path: "/detailsupportivedoc",
    element: <DetailSupportiveDoc/>
    
  },
  {
    path: "/insertsupportivedoc",
    element: <UploadSupDoc/>
    
  },

  //route for track document
  {
    path:"/trackdocumentstatus",
    element:<TrackDocumentStatus/>
  },

  //route for document status
  {
    path: "/documentstatus",
    element: <GetDocumentStatForAllDep/>
    
  },

  //route for department
  {
    path:"/listofdepartment",
    element:<ListofDepartment/>
  },

  //route for chalani
  {
    path: "/chalanidocument",
    element: <ChalaniDocument/>,
    
  },
  
 
  {
    path: "/createchalani",
    element: <CreateChalani/>
    
  },
  {
    path: "/departmentdocstatus",
    element: <DepartmentDocStatus/>
    
  },


  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
