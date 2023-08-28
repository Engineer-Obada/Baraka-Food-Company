import React  from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppDialog from '@crema/core/AppDialog';
// import {useAuthUser} from '@crema/utility/AuthHooks';/**/***************** */ */
import {postDataApi } from '@crema/utility/APIHooks';
import {useInfoViewActionsContext} from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import AddPickerForm from './AddPickerForm';
import { baseURL } from '@crema/services/ApiConfig';


const validationSchema = yup.object({
  firstName: yup.string().required(<IntlMessages id='Please enter Name!' />),
  lastName: yup.string().required(<IntlMessages id='Please enter Name!' />),
  email: yup.string().required(<IntlMessages id='Please enter Name!' />),
  password: yup.string().required(<IntlMessages id='Please enter Name!' />),
  phoneNum: yup.string().required(<IntlMessages id='Please enter Name!' />),
  warehouseId: yup.string().required(<IntlMessages id='Please enter Name!' />),
});

const AddNewPicker = ({
    isaddPicker,
  onCloseAddPicker,
}) => {
  // const {user} = useAuthUser();
  const infoViewActionsContext = useInfoViewActionsContext();

  

  return (
    <AppDialog
      dividers
      maxWidth='md'
      open={isaddPicker}
      onClose={() => onCloseAddPicker()}
      title={<IntlMessages id='Add New Picker' />}
    >
      <Formik
        validateOnChange={true}
        initialValues={{
          firstName: '',
          lastName: '',
          email:'',
          password: '',
          phoneNum: '',
          warehouseId:  '1',
        
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          setSubmitting(true);
         
          const NewPicker = {
            ...data,
          };
          console.log('dada',data);
          console.log('NewPicker',NewPicker);
          postDataApi(`${baseURL}/api/picker/Register`, infoViewActionsContext, 
          NewPicker,
          )
            .then(() => {
              infoViewActionsContext.showMessage(
                'New Picker has been created successfully!',
              );
            })
            .catch((error) => {
              infoViewActionsContext.fetchError(error.message);
            });

          onCloseAddPicker();
          resetForm();
          setSubmitting(false);
        }}
      
      >
        {({isSubmitting, values, setFieldValue}) => (
          <AddPickerForm
            isSubmitting={isSubmitting}
            values={values}
            setFieldValue={setFieldValue}
          
          />
        )}
      </Formik>
    </AppDialog>
  );
};

export default AddNewPicker;

AddNewPicker.propTypes = {
  isaddPicker: PropTypes.bool.isRequired,
  onCloseAddPicker: PropTypes.func.isRequired,
  
};
