import{
  DeleteDocumentRegistrationByDId,
    DeleteSupportingDoc,
    EditDocumentRegistrationByDId,
    GetDocStatusByDepartId,
    GetDocumentRegistration, GetDocumentRegistrationById,
    GetDocumentStatusForAllDeparments,
GetListOfDepartment,GetListOfDocumentStatus,GetSupportingDocumentById,InsertDocumentRegistration, InsertDocumentStatus, InsertSupportingDocument, InsertUpdateDocumentStatus, InsertUpdateRegistration, InsertUpdateSupportingDocument, ListOfSuppoertingDocument, TrackOfDocument, UpdateDcumentStatusForDepartment
    
} from "../constant/url"
import { destroy, fetch, seperateStoreJson, store,update } from "../../utils/httputil";

export const getDocumentRegistration = async (successCallback) => {

    try {
      const response = await fetch(
        `${GetDocumentRegistration}`
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback([]);
      }
    } catch (errror) {
      successCallback([]);
    }
  };

  export const getDocumentRegistrationById = async (
    data,
    successCallback
  ) => {
    try {
      const response = await fetch(
        `${GetDocumentRegistrationById}?DId=${data.DId}`
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback([]);
      }
    } catch (errror) {
      successCallback([]);
    }
  };

  export const insertDocumentRegistration = async (
    data,
    successCallback
  ) => {
    try {
      const response = await store(
        `${InsertDocumentRegistration}`,data
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback([]);
      }
    } catch (errror) {
      successCallback([]);
    }
  };
  export const deleteDocumentRegistrationByDId = async (
    data,
    successCallback
  ) => {
    try {
      const response = await update(
        `${DeleteDocumentRegistrationByDId}?DId=${data.DId}`
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback([]);
      }
    } catch (errror) {
      successCallback([]);
    }
  };
  
  export const editDocumentRegistrationByDId = async (
    data,
    successCallback
  ) => {
    try {
      const response = await update(
        `${EditDocumentRegistrationByDId}?DId=${data.DId}`
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback([]);
      }
    } catch (errror) {
      successCallback([]);
    }
  };
  
  export const insertUpdateRegistration = async (
    data,
    successCallback
  ) => {
    try {
      const response = await store(
        `${InsertUpdateRegistration}`,data
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback([]);
      }
    } catch (errror) {
      successCallback([]);
    }
  };

  //for supportive document
  export const getSupportiveDocument = async (
    successCallback
  ) => {
    try {
      const response = await fetch(
        `${ListOfSuppoertingDocument}`
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback([]);
      }
    } catch (errror) {
      successCallback([]);
    }
  };

  export const getSupportingDocumentById = async (
    data,
    successCallback
  ) => {
    try {
      const response = await fetch(
        `${GetSupportingDocumentById}?SDId=${data.SDId}`
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback([]);
      }
    } catch (errror) {
      successCallback([]);
    }
  };
  export const insertSupportingDocument = async (
    data,
    successCallback
  ) => {
    try {
      const response = await store(
        `${InsertSupportingDocument}`,data
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback([]);
      }
    } catch (errror) {
      successCallback([]);
    }
  };
  export const insertUpdateSupportingDocument = async (
    data,
    successCallback
  ) => {
    try {
      const response = await store(
        `${InsertUpdateSupportingDocument}`,data
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback([]);
      }
    } catch (errror) {
      successCallback([]);
    }
  };
  export const deleteSupportingDoc = async (
    data,
    successCallback
  ) => {
    try {
      const response = await store(
        `${DeleteSupportingDoc}?SDId=${data.SDId}`
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback([]);
      }
    } catch (errror) {
      successCallback([]);
    }
  };


  //track department
  export const getTrackOfDocument = async (
    successCallback
  ) => {
    try {
      const response = await fetch(
        `${TrackOfDocument}`
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback([]);
      }
    } catch (errror) {
      successCallback([]);
    }
  };

  //for department
  export const getListOfDepartment = async (
    successCallback
  ) => {
    try {
      const response = await fetch(
        `${GetListOfDepartment}`
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback([]);
      }
    } catch (errror) {
      successCallback([]);
    }
  };

  export const getListOfDocumentStatus = async(
    successCallback
  ) => {
    try{
      const response = await fetch(
        `${GetListOfDocumentStatus}`
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      }
      else{
        successCallback([]);
      }
    }
    catch(error) {
      successCallback([])
    }
  }

  export const getDocumentStatusBySId = async (
    data,
    successCallback
  ) => {
    try {
      const response = await fetch(
        `${GetDocumentStatusBySId}?SId=${data.SId}`
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback([]);
      }
    } catch (errror) {
      successCallback([]);
    }
  };

  export const insertDocumentStatus= async (
    data,
    successCallback
  ) => {
    try {
      const response = await store(
        `${InsertDocumentStatus}`,data
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback([]);
      }
    } catch (errror) {
      successCallback([]);
    }
  };

  export const insertUpdateDocumentStatus = async (
    data,
    successCallback
  ) => {
    try {
      const response = await store(
        `${  InsertUpdateDocumentStatus}`,data
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback([]);
      }
    } catch (errror) {
      successCallback([]);
    }
  };

  export const getDocumentStatusByDepartmentId = async (
    data,
    successCallback
  ) => {
    try {
      const response = await fetch(
        `${GetDocStatusByDepartId}?DepartmentId=${data.DepartmentId}`
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback([]);
      }
    } catch (errror) {
      successCallback([]);
    }
  };


  //Approve reject document status
  export const updateDcumentStatusForDepartment = async (
    data,
    successCallback
  ) => {
    try {
      const response = await store(
        `${UpdateDcumentStatusForDepartment}`,data
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback([]);
      }
    } catch (errror) {
      successCallback([]);
    }
  };

  export const getDocumentStatusForAllDeparments
  = async(
    successCallback
  ) => {
    try{
      const response = await fetch(
        `${GetDocumentStatusForAllDeparments
        }`
      );
      if (response?.status === 200) {
        successCallback(response?.data);
      }
      else{
        successCallback([]);
      }
    }
    catch(error) {
      successCallback([])
    }
  }

  
  


  

  
  
  

  
  
  
  
  
  