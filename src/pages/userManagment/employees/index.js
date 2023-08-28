import React, { useState } from 'react'
import AppsContainer from '@crema/core/AppsContainer';
import {  putDataApi, useGetDataApi } from '@crema/utility/APIHooks';
import Employees from './Employees';
import { useInfoViewActionsContext } from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import { baseURL } from '@crema/services/ApiConfig';
import { useJWTAuth } from '@crema/services/auth/jwt-auth/JWTAuthProvider';

export default function employee() {
  const [isAddEmployeeOpen, setAddEmployeeOpen] = React.useState(false);
  const [{apiData:EmployeeData},{reCallAPI}] = useGetDataApi(`${baseURL}/api/employee`);
  const [employeeSlected, setEmployeeSlected] = useState(null);
    const role=useJWTAuth().user.role;
    console.log("role",role);
  const infoViewActionsContext = useInfoViewActionsContext();

  const onOpenAddEmployee = () => {
    setAddEmployeeOpen(true);
  };
  const onOpenEditEmployee = (row)=>{
    setAddEmployeeOpen(true);
    setEmployeeSlected(row)
  }

  const onChangeStatus = (status, contact) => {
    const selectedIdList = [contact.id];
    
    putDataApi(`${baseURL}/api/employee/update/accountStatus/${selectedIdList}`,infoViewActionsContext, {
      accountStatus:status,
    }).then(() => {
      reCallAPI();
      infoViewActionsContext.showMessage(
          'status updated Successfully'
      );
    })
    .catch((error) => {
      infoViewActionsContext.fetchError(error.message);
    });
  }
  

  const onCloseAddEmployee = () => {
    setAddEmployeeOpen(false);
  };
  
  
  return (
     <AppsContainer> 
    <Employees 
    onChangeStatus={onChangeStatus}
    employeeSlected={employeeSlected}
    onCloseAddEmployee={onCloseAddEmployee} 
    onOpenAddEmployee={onOpenAddEmployee}
    onOpenEditEmployee={onOpenEditEmployee}
    isAddEmployeeOpen={isAddEmployeeOpen} 
    employeesTableData={EmployeeData}
    reCallAPI={reCallAPI}
    />
    </AppsContainer>

  )
}
