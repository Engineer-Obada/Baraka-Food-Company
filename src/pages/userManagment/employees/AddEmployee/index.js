import React  from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppDialog from '@crema/core/AppDialog';
// import {useAuthUser} from '@crema/utility/AuthHooks';/**/***************** */ */
import {postDataApi, putDataApi} from '@crema/utility/APIHooks';
import {useInfoViewActionsContext} from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import AddEmplyeeForm from './AddEmplyeeForm';
import { baseURL } from '@crema/services/ApiConfig';


const validationSchema = yup.object({
  firstName: yup.string().required(<IntlMessages id='Please enter Name!' />),
  middleName: yup.string().required(<IntlMessages id='Please enter Name!' />),
  lastName: yup.string().required(<IntlMessages id='Please enter Name!' />),
  email: yup.string().required(<IntlMessages id='Please enter Name!' />),
  password: yup.string().required(<IntlMessages id='Please enter Name!' />),
  phoneNum: yup.string().required(<IntlMessages id='Please enter Name!' />),
  role: yup.string().required(<IntlMessages id='Please enter Name!' />),
});

const AddNewEmployee = ({
  isAddEmployeeOpen,
  onCloseAddEmployee,
  reCallAPI,
  employeeSlected,
}) => {
  // const {user} = useAuthUser();
  const infoViewActionsContext = useInfoViewActionsContext();

  

  return (
    <AppDialog
      dividers
      maxWidth='md'
      open={isAddEmployeeOpen}
      onClose={() => onCloseAddEmployee()}
      title={<IntlMessages id='Add New Employee' />}
    >
      <Formik
        validateOnChange={true}
        initialValues={{
          firstName: employeeSlected ? employeeSlected.firstName :'',
          lastName:employeeSlected ? employeeSlected.lastName : '',
          email: employeeSlected ? employeeSlected.email :'',
          password:employeeSlected ? employeeSlected.password : '',
          phoneNum: employeeSlected ? employeeSlected.phoneNum: '',
          middleName: employeeSlected ? employeeSlected.middleName: '',
          role: employeeSlected ? employeeSlected.role: 'admin',
        
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          setSubmitting(true);
          if(employeeSlected){
            const NewEmployee = {
              ...data
            }
            putDataApi(`${baseURL}/api/employee/update/${employeeSlected.id}`,infoViewActionsContext,
             NewEmployee
            ).then(()=>{
              reCallAPI();
              infoViewActionsContext.showMessage(
                'Ebployee employee successfully!',
              );
            })
          }
          else{
          const NewEmployee = {
            ...data,
          };
          console.log('NewEmployee',NewEmployee);
          postDataApi(`${baseURL}/api/employee/add`, infoViewActionsContext, 
             NewEmployee,
          )
            .then(() => {
              reCallAPI();
              infoViewActionsContext.showMessage(
                'New employee has been created successfully!',
              );
            })
            .catch((error) => {
              infoViewActionsContext.fetchError(error.message);
            });
          }

          onCloseAddEmployee();
          resetForm();
          setSubmitting(false);
        }}
      
      >
        {({isSubmitting, values, setFieldValue}) => (
          <AddEmplyeeForm
            isSubmitting={isSubmitting}
            values={values}
            setFieldValue={setFieldValue}
          
          />
        )}
      </Formik>
    </AppDialog>
  );
};

export default AddNewEmployee;

AddNewEmployee.propTypes = {
  isAddEmployeeOpen: PropTypes.bool.isRequired,
  onCloseAddEmployee: PropTypes.func.isRequired,
  reCallAPI: PropTypes.func,
  employeeSlected: PropTypes.object
};
