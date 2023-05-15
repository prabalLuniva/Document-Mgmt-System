export const API_URL = `http://192.168.100.83/odms/api/`;
export const BASE_URL = `${API_URL}`;


export const GetDocumentRegistration = "GetListOfDocumentRegistration";
export const GetDocumentRegistrationById="GetDocumentRegistrationByDId";
export const InsertDocumentRegistration="InsertDocumentRegistration";
export const DeleteDocumentRegistrationByDId ="DeleteDocumentRegistrationByDId";
export const EditDocumentRegistrationByDId ="EditDocumentRegistrationByDId";
export const InsertUpdateRegistration ="insertupdate";

//Department section
export const GetListOfDepartment="GetListOfDepartment"
export const GetDocStatusByDepartId = "getDocumentStatusByDepartmentId"

//supporting document section
export const ListOfSuppoertingDocument= "GetListOfSupportingDocument";
export const GetSupportingDocumentById="GetSupportingDocumentBySDId";
export const InsertSupportingDocument="InsertSupportingDocument";
export const InsertUpdateSupportingDocument="insertUpdateSupportingDocument";
export const DeleteSupportingDoc="DeleteSupportingDocumentBySDId";

//Document status section
export const TrackOfDocument="trackOfDocument";
export const GetListOfDocumentStatus = "GetListOfDocumentStatus";
export const GetDocumentStatusBySId = "GetDocumentStatusBySId";
export const InsertDocumentStatus = "InsertDocumentStatus";
export const InsertUpdateDocumentStatus="insertUpdateDocumentStatus"
export const UpdateDcumentStatusForDepartment="updateDcumentStatusForDepartment" 

//department wise Document status 
export const GetDocumentStatusForAllDeparments= "getDocumentStatusForAllDeparments"